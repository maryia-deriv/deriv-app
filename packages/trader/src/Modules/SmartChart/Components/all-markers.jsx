/* eslint-disable no-console */
// Things to do before touching this file :P
// 1- Please read https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
// 2- Please read RawMarker.jsx in https://github.com/binary-com/SmartCharts
// 3- Please read contract-store.js & trade.jsx carefully
import React from 'react';
import { getDecimalPlaces } from '@deriv/shared';
import { RawMarker } from 'Modules/SmartChart';
import * as ICONS from './icons';

const is_firefox = navigator.userAgent.search('Firefox') > 0;

const RawMarkerMaker = draw_callback => {
    const Marker = ({ epoch_array, price_array, ...rest }) => (
        <RawMarker
            epoch_array={epoch_array}
            price_array={price_array}
            draw_callback={args => draw_callback({ ...args, ...rest })}
        />
    );
    return Marker;
};

function getColor({ status, profit, is_dark_theme }) {
    const colors = is_dark_theme
        ? {
              open: '#377cfc',
              won: '#00a79e',
              lost: '#cc2e3d',
              sold: '#ffad3a',
              fg: '#ffffff',
              bg: '#0e0e0e',
              dashed_border: '#6E6E6E',
          }
        : {
              open: '#377cfc',
              won: '#4bb4b3',
              lost: '#ec3f3f',
              sold: '#ffad3a',
              fg: '#333333',
              bg: '#ffffff',
              dashed_border: '#999999',
          };
    let color = colors[status || 'open'];
    if (status === 'open' && profit) {
        color = colors[profit > 0 ? 'won' : 'lost'];
    }
    return color;
}

const calc_scale = zoom => {
    return zoom ? Math.max(Math.min(Math.sqrt(zoom / 18), 1.2), 0.8) : 1;
};

const hex_map = [];
const calc_opacity = (from, to) => {
    if (hex_map.length === 0) {
        for (let i = 255; i >= 0; --i) {
            hex_map[i] = (i < 16 ? '0' : '') + i.toString(16);
        }
    }
    const opacity = Math.floor(Math.min(Math.max(to - from - 10, 0) / 6, 1) * 255);
    return hex_map[opacity];
};

/** @param {CanvasRenderingContext2D} ctx */
const draw_path = (ctx, { zoom, top, left, icon }) => {
    ctx.save();
    const scale = calc_scale(zoom);

    ctx.translate(left - (icon.width * scale) / 2, top - (icon.height * scale) / 2);

    ctx.scale(scale, scale);

    icon.paths.forEach(({ points, fill, stroke }) => {
        if (fill) {
            ctx.fillStyle = fill;
        }
        if (stroke) {
            ctx.strokeStyle = stroke;
        }
        ctx.beginPath();
        let prev_x, prev_y;
        for (let idx = 0; idx < points.length; idx++) {
            let x, y, cx1, cx2, cy1, cy2, r;
            if (points[idx] === 'M') {
                x = points[++idx];
                y = points[++idx];
                ctx.moveTo(x, y);
            } else if (points[idx] === 'L') {
                x = points[++idx];
                y = points[++idx];
                ctx.lineTo(x, y);
            } else if (points[idx] === 'V') {
                y = points[++idx];
                ctx.lineTo(prev_x, y);
            } else if (points[idx] === 'H') {
                x = points[++idx];
                ctx.lineTo(x, prev_y);
            } else if (points[idx] === 'Q') {
                cx1 = points[++idx];
                cy1 = points[++idx];
                x = points[++idx];
                y = points[++idx];
                ctx.quadraticCurveTo(cx1, cy1, x, y);
            } else if (points[idx] === 'C') {
                cx1 = points[++idx];
                cy1 = points[++idx];
                cx2 = points[++idx];
                cy2 = points[++idx];
                x = points[++idx];
                y = points[++idx];
                ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
            } else if (points[idx] === 'A') {
                x = points[++idx];
                y = points[++idx];
                r = points[++idx];
                const start_a = points[++idx];
                const end_a = points[++idx];
                ctx.arc(x, y, r, start_a, end_a);
            }
            prev_x = x;
            prev_y = y;
        }
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    });
    ctx.scale(1, 1);
    ctx.restore();
};

const draw_partial_shade = ({
    ctx,
    start_left,
    top,
    bottom,
    is_between_shade,
    is_bottom_shade,
    stroke_color,
    fill_color,
    scale,
}) => {
    const end_left = ctx.canvas.offsetWidth - ctx.canvas.parentElement.stx.panels.chart.yaxisTotalWidthRight;
    const end_top = ctx.canvas.offsetHeight - ctx.canvas.parentElement.stx.xaxisHeight;
    const is_top_visible = top < end_top;
    const is_bottom_visible = bottom < end_top;
    const displayed_top = is_top_visible ? top : end_top;
    const displayed_bottom = is_bottom_visible ? bottom : end_top;
    const gradient = ctx.createLinearGradient(start_left, top, start_left, bottom);
    const is_start_left_visible = start_left < end_left;
    if (!is_start_left_visible) return;
    ctx.lineWidth = 1;
    ctx.strokeStyle = stroke_color;

    if (is_top_visible && (is_between_shade || is_bottom_shade)) {
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.arc(start_left, top, 1.5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([2, 3]);
        ctx.moveTo(start_left + 1.5 * scale, top);
        ctx.lineTo(end_left, top);
        ctx.stroke();
    }
    if (is_bottom_visible && (is_between_shade || !is_bottom_shade)) {
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.arc(start_left, bottom, 1.5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([2, 3]);
        ctx.moveTo(start_left + 1.5 * scale, bottom);
        ctx.lineTo(end_left, bottom);
        ctx.stroke();
    }

    if (!is_between_shade) {
        gradient.addColorStop(0.01, is_bottom_shade ? 'rgba(0, 167, 158, 0.16)' : 'rgba(0, 167, 158, 0)');
        gradient.addColorStop(0.98, is_bottom_shade ? 'rgba(0, 167, 158, 0)' : 'rgba(0, 167, 158, 0.16)');
    }

    ctx.fillStyle = fill_color || is_between_shade ? 'rgba(0, 167, 158, 0.08)' : gradient;
    ctx.fillRect(start_left, displayed_top, end_left - start_left, Math.abs(displayed_bottom - displayed_top));
};

const render_label = ({ ctx, text, tick: { zoom, left, top } }) => {
    const scale = calc_scale(zoom);
    const size = Math.floor(scale * 3 + 7);
    ctx.font = `${size}px Roboto`;
    text.split(/\n/).forEach((line, idx) => {
        const w = Math.ceil(ctx.measureText(line).width);
        ctx.fillText(line, left - 5 - w, top + idx * size + 1);
    });
};

const shadowed_text = ({ ctx, color, font, is_dark_theme, max_width, text, text_align, left, top, scale }) => {
    ctx.textAlign = text_align || 'center';
    const size = Math.floor(scale * 12);
    ctx.font = font || `bold ${size}px BinarySymbols, Roboto`;
    if (color) ctx.fillStyle = color;
    if (!is_firefox) {
        ctx.shadowColor = is_dark_theme ? 'rgba(16,19,31,1)' : 'rgba(255,255,255,1)';
        ctx.shadowBlur = 12;
    }
    // fillText once in firefox due to disabling of text shadows, for default cases where its enabled, set to 5 (to add blur intensity)
    for (let i = 0; i < (is_firefox ? 1 : 5); ++i) {
        ctx.fillText(text, left, top, max_width);
    }
};

const TickContract = RawMarkerMaker(
    ({
        ctx: context,
        canvas_height: canvas_fixed_height,
        points: [start, ...ticks],
        prices: [barrier, barrier_2], // TODO: support two barrier contracts
        is_last_contract,
        is_dark_theme,
        is_in_contract_details,
        granularity,
        contract_info: {
            contract_type,
            // exit_tick_time,
            currency,
            current_spot_time,
            status,
            profit,
            profit_percentage,
            is_accumulators_trade_without_contract,
            is_sold,
            is_expired,
            // tick_stream,
            tick_count,
        },
    }) => {
        /** @type {CanvasRenderingContext2D} */
        const ctx = context;

        const color = getColor({
            is_dark_theme,
            status,
            profit: is_sold ? profit : null,
        });

        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        const draw_start_line = is_last_contract && start.visible && !is_sold;
        const is_accumulators_contract = contract_type === 'ACCU';
        const scale = calc_scale(start.zoom);
        const canvas_height = canvas_fixed_height / window.devicePixelRatio;

        [barrier, barrier_2].filter(Boolean).forEach(b => {
            b = Math.min(Math.max(b, 2), canvas_height - 32); // eslint-disable-line
        });

        const entry = ticks[0];
        const exit = ticks[ticks.length - 1];
        const previous_tick = ticks[ticks.length - 2] || exit;
        const opacity = is_sold ? calc_opacity(start.left, exit.left) : '';

        if (is_accumulators_trade_without_contract) {
            // draw 2 barriers with a shade in-between only
            draw_partial_shade({
                ctx,
                start_left: start.left,
                fill_color: getColor({ status: 'open', is_dark_theme }),
                stroke_color: getColor({ status: 'dashed_border', is_dark_theme }),
                top: barrier,
                bottom: barrier_2,
                is_between_shade: true,
                scale,
            });
            ctx.restore();
            return;
        }

        if (is_accumulators_contract) {
            // draw custom barrier shadows with borders and labels for accumulators:
            if (contract_type === 'ACCU') {
                if (status === 'open' || is_in_contract_details) {
                    // draw 2 barriers with a shade between them for an open Accumulate contract
                    draw_partial_shade({
                        ctx,
                        start_left: previous_tick.left,
                        stroke_color: getColor({ status: 'dashed_border', is_dark_theme }),
                        top: barrier,
                        bottom: barrier_2,
                        is_between_shade: true,
                        scale,
                    });
                }
            }

            if (is_in_contract_details) {
                ctx.restore();
                return;
            }

            if (start.visible || entry.visible) {
                const sign = profit > 0 ? '+' : '';
                const profit_text = `${sign}${profit}`;
                ctx.save();
                const end_left =
                    ctx.canvas.offsetWidth - ctx.canvas.parentElement.stx.panels.chart.yaxisTotalWidthRight;
                const getMaxWidth = (is_profit_text, left, profit_text_width) => {
                    if (
                        !is_profit_text &&
                        left + profit_text_width < end_left &&
                        end_left - (left + profit_text_width) > 32
                    ) {
                        return end_left - (left + profit_text_width);
                    } else if (is_profit_text && left < end_left && end_left - left > 52) {
                        return end_left - left;
                    }
                    return 0;
                };
                if (current_spot_time.visible && !is_sold) {
                    // draw 3 text items with different font size and weight:
                    let profit_text_width = 0;
                    [
                        {
                            text: profit_text,
                            font: `bold 20px IBM Plex Sans`,
                            left: current_spot_time.left + 33,
                            top: current_spot_time.top,
                        },
                        {
                            text: `${currency}`,
                            font: '10px IBM Plex Sans',
                            left: current_spot_time.left + 35,
                            top: current_spot_time.top + 1.5,
                        },
                        {
                            text: `${sign}${profit_percentage}%`,
                            font: '12px IBM Plex Sans',
                            left: current_spot_time.left + 32,
                            top: current_spot_time.top + 16,
                        },
                    ].forEach(({ text, font, left, top }) => {
                        shadowed_text({
                            ctx,
                            scale,
                            is_dark_theme,
                            text,
                            font,
                            text_align: 'start',
                            color: getColor({ status: 'open', profit }),
                            left: text === profit_text ? left : left + profit_text_width,
                            top,
                            max_width: getMaxWidth(text === profit_text, left, profit_text_width),
                        });
                        profit_text_width =
                            text === profit_text
                                ? ctx.measureText(profit_text).actualBoundingBoxRight
                                : profit_text_width;
                    });
                    ctx.restore();
                }
            }
        }

        if (draw_start_line) {
            render_label({
                ctx,
                text: 'Start\nTime',
                tick: { zoom: start.zoom, left: start.left - 1 * scale, top: canvas_height - 50 },
            });
            ctx.beginPath();
            if (is_accumulators_contract) {
                ctx.setLineDash([]);
            } else ctx.setLineDash([3, 3]);
            ctx.moveTo(start.left - 1 * scale, 0);
            if (ticks.length && barrier && !is_accumulators_contract) {
                ctx.lineTo(start.left - 1 * scale, barrier - 34 * scale);
                ctx.moveTo(start.left - 1 * scale, barrier + 4 * scale);
            }
            ctx.lineTo(start.left - 1 * scale, canvas_fixed_height);
            ctx.stroke();
        }

        if (!ticks.length || !barrier) {
            ctx.restore();
            return;
        }

        // barrier line
        if (start.visible || entry.visible || exit.visible) {
            const top = is_accumulators_contract ? entry.top : barrier;
            ctx.strokeStyle = color + opacity;
            ctx.beginPath();
            ctx.setLineDash([1, 1]);
            ctx.moveTo(start.left, top);
            ctx.lineTo(entry.left, top);
            ctx.stroke();

            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(entry.left, top);
            ctx.lineTo(exit.left, top);
            ctx.stroke();
            ctx.strokeStyle = color;
        }

        // ticks for last contract
        if (is_last_contract && granularity === 0 && !is_sold) {
            ticks
                .filter((tick, index) => {
                    if (is_accumulators_contract) {
                        // mark only 2 latest ticks for accumulators
                        return index >= ticks.length - 2 && tick.visible;
                    }
                    return tick.visible;
                })
                .forEach(tick => {
                    const clr = tick === exit ? color : getColor({ status: 'fg', is_dark_theme });
                    ctx.fillStyle = clr + opacity;
                    ctx.beginPath();
                    ctx.arc(tick.left - 1 * scale, tick.top, 1.5 * scale, 0, Math.PI * 2);
                    ctx.fill();
                });
            ctx.fillStyle = color;
        }
        // entry & expiry markers
        if (granularity === 0) {
            [entry, is_expired ? exit : null].forEach(tick => {
                if (tick && tick.visible) {
                    ctx.strokeStyle = color + opacity;
                    ctx.setLineDash([2, 2]);
                    ctx.beginPath();
                    ctx.moveTo(tick.left - 1 * scale, tick.top);
                    if (tick === entry && is_accumulators_contract) {
                        // draw line to start marker having the same y-coordinates:
                        ctx.lineTo(start.left - 1 * scale, entry.top);
                    } else if (tick === exit && is_accumulators_contract) {
                        // draw dashed line from end icon to exit tick:
                        ctx.moveTo(exit.left, entry.top);
                        ctx.lineTo(exit.left, exit.top);
                    } else ctx.lineTo(tick.left - 1 * scale, barrier);
                    ctx.stroke();

                    ctx.fillStyle = color + opacity;
                    ctx.beginPath();
                    ctx.arc(tick.left - 1 * scale, tick.top, 3 * scale, 0, Math.PI * 2);
                    ctx.fill();

                    if (tick === entry) {
                        ctx.beginPath();
                        ctx.fillStyle = getColor({ status: 'bg', is_dark_theme }) + opacity;
                        ctx.arc(tick.left - 1 * scale, tick.top, 2 * scale, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            });
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
        }
        // count down
        if (start.visible && !is_sold && !is_accumulators_contract) {
            shadowed_text({
                ctx,
                scale,
                is_dark_theme,
                text: `${ticks.length - 1}/${tick_count}`,
                left: start.left,
                top: barrier - 27 * scale,
            });
        }

        // start-time marker
        if (start.visible) {
            draw_path(ctx, {
                top: is_accumulators_contract ? entry.top - 9 * scale : barrier - 9 * scale,
                left: start.left - 1 * scale,
                zoom: start.zoom,
                icon: ICONS.START.with_color(
                    color + (is_sold ? opacity : ''),
                    getColor({ status: 'bg', is_dark_theme }) + (is_sold ? opacity : '')
                ),
            });
        }
        // status marker
        if (exit.visible && is_sold) {
            draw_path(ctx, {
                top: is_accumulators_contract ? entry.top - 9 * scale : barrier - 9 * scale,
                left: exit.left + 8 * scale,
                zoom: exit.zoom,
                icon: ICONS.END.with_color(color, getColor({ status: 'bg', is_dark_theme })),
            });
        }
        ctx.restore();
    }
);

const currency_symbols = {
    AUD: '\u0041\u0024',
    EUR: '\u20AC',
    GBP: '\u00A3',
    JPY: '\u00A5',
    USD: '\u0024',
    BTC: '\u20bf',
    BCH: '\ue901',
    ETH: '\u0045',
    ETC: '\ue900',
    LTC: '\u0141',
    UST: '\u20ae',
};

const NonTickContract = RawMarkerMaker(
    ({
        ctx: context,
        canvas_height: canvas_fixed_height,
        points: [start, expiry, entry, exit],
        is_last_contract,
        prices: [barrier, entry_tick_top, exit_tick_top], // TODO: support two barrier contracts
        is_dark_theme,
        granularity,
        currency,
        contract_info: {
            // contract_type,
            // exit_tick_time,
            // is_expired,
            is_sold,
            status,
            profit,
        },
    }) => {
        /** @type {CanvasRenderingContext2D} */
        const ctx = context;

        // the y value reported for candles is not accurate
        if (granularity !== 0) {
            if (entry) {
                entry.top = entry_tick_top;
            }
            if (exit) {
                exit.top = exit_tick_top;
            }
        }

        const color = getColor({ status, profit, is_dark_theme });

        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        const draw_start_line = is_last_contract && start.visible && !is_sold;
        const show_profit = is_last_contract && !is_sold && profit && start.visible && barrier;
        const scale = calc_scale(start.zoom);
        const opacity = is_sold ? calc_opacity(start.left, expiry.left) : '';

        const canvas_height = canvas_fixed_height / window.devicePixelRatio;
        if (barrier) {
            barrier = Math.min(Math.max(barrier, 2), canvas_height - 32); // eslint-disable-line
        }

        if (draw_start_line) {
            render_label({
                ctx,
                text: 'Start\nTime',
                tick: {
                    zoom: start.zoom,
                    left: start.left - 1 * scale,
                    top: canvas_height - 50,
                },
            });
            ctx.beginPath();
            ctx.setLineDash([3, 3]);
            ctx.moveTo(start.left - 1 * scale, 0);
            if (barrier) {
                ctx.lineTo(start.left - 1 * scale, barrier - (show_profit ? 38 : 20) * scale);
                ctx.moveTo(start.left - 1 * scale, barrier + 4 * scale);
            }
            ctx.lineTo(start.left - 1 * scale, canvas_fixed_height);
            ctx.stroke();
        }
        // barrier line
        if (barrier && entry && (start.visible || expiry.visible || Math.sign(start.left) !== Math.sign(expiry.left))) {
            ctx.strokeStyle = color + opacity;
            ctx.beginPath();
            ctx.setLineDash([1, 1]);
            ctx.moveTo(start.left, barrier);
            ctx.lineTo(entry.left, barrier);
            ctx.stroke();

            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(entry.left, barrier);
            ctx.lineTo(expiry.left, barrier);
            ctx.stroke();
            ctx.strokeStyle = color;
        }

        // entry & expiry tick markers
        [entry, exit].forEach(tick => {
            if (tick && tick.visible) {
                ctx.strokeStyle = color + opacity;
                ctx.setLineDash([2, 2]);
                ctx.beginPath();
                ctx.moveTo(tick.left - 1 * scale, tick.top);
                ctx.lineTo(tick.left - 1 * scale, barrier);
                ctx.stroke();

                ctx.fillStyle = color + opacity;
                ctx.beginPath();
                ctx.arc(tick.left - 1 * scale, tick.top, 3 * scale, 0, Math.PI * 2);
                ctx.fill();

                if (tick === entry) {
                    ctx.beginPath();
                    ctx.fillStyle = getColor({ status: 'bg', is_dark_theme }) + opacity;
                    ctx.arc(tick.left - 1 * scale, tick.top, 2 * scale, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.fillStyle = color;
                ctx.strokeStyle = color;
            }
        });

        // start-time marker
        if (start && start.visible && barrier) {
            draw_path(ctx, {
                top: barrier - 9 * scale,
                left: start.left - 1 * scale,
                zoom: start.zoom,
                icon: ICONS.START.with_color(color + opacity),
            });
        }
        // show the profit
        if (show_profit) {
            const symbol = currency_symbols[currency] || '';
            const decimal_places = getDecimalPlaces(currency);
            const sign = profit < 0 ? '-' : profit > 0 ? '+' : ' '; // eslint-disable-line
            const text = `${sign}${symbol}${Math.abs(profit).toFixed(decimal_places)}`;
            shadowed_text({
                ctx,
                scale,
                text,
                is_dark_theme,
                left: start.left,
                top: barrier - 28 * scale,
            });
        }
        // status marker
        if (expiry.visible) {
            draw_path(ctx, {
                top: barrier - 9 * scale,
                left: expiry.left + 8 * scale,
                zoom: expiry.zoom,
                icon: ICONS.END.with_color(color, getColor({ status: 'bg', is_dark_theme })),
            });
        }
        ctx.restore();
    }
);

const DigitContract = RawMarkerMaker(
    ({
        ctx: context,
        points: [start, ...ticks],
        prices: [entry_tick_top, exit_tick_top],
        is_last_contract,
        is_dark_theme,
        granularity,
        contract_info: {
            // contract_type,
            status,
            profit,
            is_sold,
            // barrier,
            tick_stream,
            tick_count,
        },
    }) => {
        /** @type {CanvasRenderingContext2D} */
        const ctx = context;

        const color = getColor({
            is_dark_theme,
            status,
            profit: is_sold ? profit : null,
        });

        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        const draw_start_line = is_last_contract && start.visible && !is_sold;
        const scale = calc_scale(start.zoom);

        if (granularity !== 0 && start && entry_tick_top) {
            start.top = entry_tick_top;
        }
        if (draw_start_line) {
            ctx.beginPath();
            ctx.setLineDash([3, 3]);
            ctx.moveTo(start.left - 1 * scale, 0);
            if (ticks.length) {
                ctx.lineTo(start.left - 1 * scale, start.top - 34 * scale);
                ctx.moveTo(start.left - 1 * scale, start.top + 4 * scale);
            }
            ctx.lineTo(start.left - 1 * scale, ctx.canvas.height);
            ctx.stroke();
        }

        if (!ticks.length) {
            ctx.restore();
            return;
        }
        const expiry = ticks[ticks.length - 1];
        const opacity = is_sold ? calc_opacity(start.left, expiry.left) : '';
        if (granularity !== 0 && expiry && exit_tick_top) {
            expiry.top = exit_tick_top;
        }

        // count down
        if (start.visible && start.top && !is_sold) {
            shadowed_text({
                ctx,
                scale,
                is_dark_theme,
                text: `${ticks.length}/${tick_count}`,
                left: start.left - 1 * scale,
                top: start.top - 27 * scale,
            });
        }
        // start-time marker
        if (start.visible && (granularity === 0 || !is_sold)) {
            draw_path(ctx, {
                top: start.top - 9 * scale,
                left: start.left - 1 * scale,
                zoom: start.zoom,
                icon: ICONS.START.with_color(color + opacity, getColor({ status: 'bg', is_dark_theme }) + opacity),
            });
        }
        // remaining ticks
        ticks.forEach((tick, idx) => {
            if (tick !== expiry) {
                return;
            }
            if (!tick.visible) {
                return;
            }
            if (granularity !== 0 && tick !== expiry) {
                return;
            }
            if (granularity !== 0 && tick === expiry && !is_sold) {
                return;
            }
            const clr = tick !== expiry ? getColor({ status: 'fg', is_dark_theme }) : color;
            ctx.beginPath();
            ctx.fillStyle = clr;
            ctx.arc(tick.left, tick.top, 7 * scale, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = is_sold ? color : getColor({ status: 'bg', is_dark_theme });
            ctx.arc(tick.left, tick.top, 6 * scale, 0, Math.PI * 2);
            ctx.fill();

            const last_tick = tick_stream[idx];
            const last_digit = last_tick.tick_display_value.slice(-1);
            ctx.fillStyle = is_sold ? 'white' : clr;
            ctx.textAlign = 'center';
            ctx.shadowBlur = 0;
            ctx.font = `bold ${12 * scale}px BinarySymbols, Roboto`;
            ctx.fillText(last_digit, tick.left, tick.top);
        });
        // status marker
        if (expiry.visible && is_sold) {
            ctx.fillStyle = color;
            draw_path(ctx, {
                top: expiry.top - 16 * scale,
                left: expiry.left + 8 * scale,
                zoom: expiry.zoom,
                icon: ICONS.END.with_color(color, getColor({ status: 'bg', is_dark_theme })),
            });
        }
        ctx.restore();
    }
);

export default {
    TickContract,
    NonTickContract,
    DigitContract,
};
