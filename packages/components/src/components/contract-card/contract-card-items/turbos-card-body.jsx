import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { isCryptocurrency, getLimitOrderAmount, getTotalProfit, isValidToSell } from '@deriv/shared';
import ContractCardItem from './contract-card-item.jsx';
import ToggleCardDialog from './toggle-card-dialog.jsx';
import Icon from '../../icon';
import MobileWrapper from '../../mobile-wrapper';
import Money from '../../money';
import { ResultStatusIcon } from '../result-overlay/result-overlay.jsx';

const TurbosCardBody = ({
    addToast,
    connectWithContractUpdate,
    contract_info,
    contract_update,
    currency,
    current_focus,
    error_message_alignment,
    getCardLabels,
    getContractById,
    is_sold,
    onMouseLeave,
    removeToast,
    setCurrentFocus,
    status,
    is_mobile,
    progress_slider_mobile_el,
}) => {
    const total_profit = getTotalProfit(contract_info);
    const { buy_price, profit, limit_order, barrier, current_spot_display_value, sell_spot, entry_spot } =
        contract_info;
    const { take_profit } = getLimitOrderAmount(contract_update || limit_order);
    const is_valid_to_sell = isValidToSell(contract_info);
    const { BARRIER_LEVEL, BUY_PRICE, CURRENT_PRICE, STAKE, TAKE_PROFIT, TOTAL_PROFIT_LOSS, PAYOUT, PROFIT_LOSS } =
        getCardLabels();

    return (
        <React.Fragment>
            <div className={is_mobile ? 'dc-contract-card-items-wrapper-mobile' : 'dc-contract-card-items-wrapper'}>
                <ContractCardItem
                    className={is_mobile ? 'dc-contract-card__stake-mobile' : 'dc-contract-card__stake'}
                    header={is_sold ? PROFIT_LOSS : STAKE}
                    is_crypto={isCryptocurrency(currency)}
                    is_loss={is_sold ? +profit < 0 : false}
                    is_won={is_sold ? +profit > 0 : false}
                >
                    <Money amount={buy_price} currency={currency} />
                </ContractCardItem>
                <ContractCardItem
                    header={is_sold ? PAYOUT : CURRENT_PRICE}
                    className={is_mobile && 'dc-contract-card__current-price-mobile'}
                >
                    <Money currency={currency} amount={sell_spot || current_spot_display_value} />
                </ContractCardItem>
                <ContractCardItem
                    header={is_sold ? BUY_PRICE : BARRIER_LEVEL}
                    is_crypto={isCryptocurrency(currency)}
                    className={is_mobile && 'dc-contract-card__buy-price-mobile'}
                >
                    <Money amount={is_sold ? entry_spot : barrier} currency={currency} />
                </ContractCardItem>

                {is_sold ? (
                    <ContractCardItem
                        header={BARRIER_LEVEL}
                        className={is_mobile && 'dc-contract-card__barrier-level-mobile'}
                    >
                        <Money amount={barrier} currency={currency} />
                    </ContractCardItem>
                ) : (
                    <div
                        className={
                            is_mobile
                                ? 'dc-contract-card__limit-order-info-mobile'
                                : 'dc-contract-card__limit-order-info'
                        }
                    >
                        <ContractCardItem header={TAKE_PROFIT} className='dc-contract-card__take-profit'>
                            {take_profit ? <Money amount={take_profit} currency={currency} /> : <strong>-</strong>}
                            {is_valid_to_sell && (
                                <ToggleCardDialog
                                    addToast={addToast}
                                    connectWithContractUpdate={connectWithContractUpdate}
                                    contract_id={contract_info.contract_id}
                                    current_focus={current_focus}
                                    error_message_alignment={error_message_alignment}
                                    getCardLabels={getCardLabels}
                                    getContractById={getContractById}
                                    is_accumulator
                                    onMouseLeave={onMouseLeave}
                                    removeToast={removeToast}
                                    setCurrentFocus={setCurrentFocus}
                                    status={status}
                                />
                            )}
                        </ContractCardItem>
                    </div>
                )}
                <MobileWrapper>
                    <div className='dc-contract-card__status-mobile'>
                        {is_sold ? (
                            <ResultStatusIcon getCardLabels={getCardLabels} is_contract_won={+profit > 0} />
                        ) : (
                            progress_slider_mobile_el
                        )}
                    </div>
                </MobileWrapper>
            </div>

            <ContractCardItem
                className='dc-contract-card-item__total-profit-loss'
                header={TOTAL_PROFIT_LOSS}
                is_crypto={isCryptocurrency(currency)}
                is_loss={+total_profit < 0}
                is_won={+total_profit > 0}
            >
                <Money amount={total_profit} currency={currency} />
                <div
                    className={classNames('dc-contract-card__indicative--movement', {
                        'dc-contract-card__indicative--movement-complete': is_sold,
                    })}
                >
                    {status === 'profit' && <Icon icon='IcProfit' />}
                    {status === 'loss' && <Icon icon='IcLoss' />}
                </div>
            </ContractCardItem>
        </React.Fragment>
    );
};

TurbosCardBody.propTypes = {
    addToast: PropTypes.func,
    connectWithContractUpdate: PropTypes.func,
    contract_info: PropTypes.object,
    contract_update: PropTypes.object,
    currency: PropTypes.string,
    current_focus: PropTypes.string,
    error_message_alignment: PropTypes.string,
    getCardLabels: PropTypes.func,
    getContractById: PropTypes.func,
    is_positions: PropTypes.bool,
    is_sold: PropTypes.bool,
    is_mobile: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    removeToast: PropTypes.func,
    progress_slider_mobile_el: PropTypes.node,
    setCurrentFocus: PropTypes.func,
    status: PropTypes.string,
};

export default React.memo(TurbosCardBody);
