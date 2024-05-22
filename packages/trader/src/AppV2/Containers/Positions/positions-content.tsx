import React from 'react';
import EmptyMessage from 'AppV2/Components/EmptyMessage';
import { TEmptyMessageProps } from 'AppV2/Components/EmptyMessage/empty-message';
import { TPortfolioPosition } from '@deriv/stores/types';
import { ContractCardList } from 'AppV2/Components/ContractCard';
import Filter from 'AppV2/Components/Filter';
import { Loading } from '@deriv/components';
import { observer, useStore } from '@deriv/stores';
import { filterPositions } from '../../Utils/positions-utils';
import { TReportsStore, useReportsStore } from '../../../../../reports/src/Stores/useReportsStores';

type TPositionsContentProps = Omit<TEmptyMessageProps, 'noMatchesFound'> & {
    hasButtonsDemo?: boolean;
    setHasButtonsDemo?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TClosedPosition = {
    contract_info: TReportsStore['profit_table']['data'][number];
};

// TODO: Remove after real data is available
const mockedActivePositions = [
    {
        contract_info: {
            account_id: 112905368,
            barrier: '782.77',
            barrier_count: 1,
            bid_price: 9.38,
            buy_price: 10,
            contract_id: 243033318028,
            contract_type: 'CALL',
            currency: 'USD',
            current_spot: 780.98,
            current_spot_display_value: '780.98',
            current_spot_time: 1716384233,
            date_expiry: 1717199999,
            date_settlement: 1717200000,
            date_start: 1716384194,
            display_name: 'Volatility 100 (1s) Index',
            entry_spot: 782.77,
            entry_spot_display_value: '782.77',
            entry_tick: 782.77,
            entry_tick_display_value: '782.77',
            entry_tick_time: 1716384195,
            expiry_time: 1717199999,
            id: 'd71a91a3-6c8f-91de-187c-51a21c0b94b8',
            is_expired: 0,
            is_forward_starting: 0,
            is_intraday: 0,
            is_path_dependent: 0,
            is_settleable: 0,
            is_sold: 0,
            is_valid_to_cancel: 0,
            is_valid_to_sell: 1,
            longcode:
                'Win payout if Volatility 100 (1s) Index is strictly higher than entry spot at close on 2024-05-31.',
            payout: 20.86,
            profit: -0.62,
            profit_percentage: -6.2,
            purchase_time: 1716384194,
            shortcode: 'CALL_1HZ100V_20.86_1716384194_1717199999F_S0P_0',
            status: 'open',
            transaction_ids: {
                buy: 484734181068,
            },
            underlying: '1HZ100V',
        },
        details: 'Win payout if Volatility 100 (1s) Index is strictly higher than entry spot at close on 2024-05-31.',
        display_name: 'Volatility 100 (1s) Index',
        id: 243033318028,
        indicative: 9.38,
        payout: 20.86,
        purchase: 10,
        reference: 484734181068,
        type: 'CALL',
        barrier: 782.77,
        entry_spot: 782.77,
        profit_loss: -0.62,
        is_valid_to_sell: true,
        status: 'loss',
    },
    {
        contract_info: {
            account_id: 112905368,
            barrier_count: 1,
            bid_price: 8.9,
            buy_price: 9.39,
            cancellation: {
                ask_price: 0.39,
                date_expiry: 1716224183,
            },
            commission: 0.03,
            contract_id: 242807045608,
            contract_type: 'MULTUP',
            currency: 'USD',
            current_spot: 681.71,
            current_spot_display_value: '681.71',
            current_spot_time: 1716220672,
            date_expiry: 4869849599,
            date_settlement: 4869849600,
            date_start: 1716220583,
            display_name: 'Volatility 100 (1s) Index',
            entry_spot: 682.23,
            entry_spot_display_value: '682.23',
            entry_tick: 682.23,
            entry_tick_display_value: '682.23',
            entry_tick_time: 1716220584,
            expiry_time: 4869849599,
            id: '917d1b48-305b-a2f4-5b9c-7fb1f2c6c145',
            is_expired: 0,
            is_forward_starting: 0,
            is_intraday: 0,
            is_path_dependent: 1,
            is_settleable: 0,
            is_sold: 0,
            is_valid_to_cancel: 1,
            is_valid_to_sell: 0,
            limit_order: {
                stop_out: {
                    display_name: 'Stop out',
                    order_amount: -9,
                    order_date: 1716220583,
                    value: '614.26',
                },
            },
            longcode:
                "If you select 'Up', your total profit/loss will be the percentage increase in Volatility 100 (1s) Index, multiplied by 90, minus commissions.",
            multiplier: 10,
            profit: -0.1,
            profit_percentage: -1.11,
            purchase_time: 1716220583,
            shortcode: 'MULTUP_1HZ100V_9.00_10_1716220583_4869849599_60m_0.00_N1',
            status: 'open',
            transaction_ids: {
                buy: 484286215128,
            },
            underlying: '1HZ100V',
            validation_error:
                'The spot price has moved. We have not closed this contract because your profit is negative and deal cancellation is active. Cancel your contract to get your full stake back.',
            validation_error_code: 'General',
        },
        details:
            "If you select 'Up', your total profit/loss will be the percentage increase in Volatility 100 (1s) Index, multiplied by 90, minus commissions.",
        display_name: '',
        id: 242807045608,
        indicative: 8.9,
        purchase: 9.39,
        reference: 484286215128,
        type: 'MULTUP',
        contract_update: {
            stop_out: {
                display_name: 'Stop out',
                order_amount: -9,
                order_date: 1716220583,
                value: '614.26',
            },
        },
        profit_loss: -0.1,
        is_valid_to_sell: false,
        status: 'profit',
        entry_spot: 682.23,
    },
    {
        contract_info: {
            account_id: 112905368,
            barrier_count: 2,
            barrier_spot_distance: '0.296',
            bid_price: 9.84,
            buy_price: 9,
            contract_id: 242807268688,
            contract_type: 'ACCU',
            currency: 'USD',
            current_spot: 682.72,
            current_spot_display_value: '682.72',
            current_spot_high_barrier: '683.016',
            current_spot_low_barrier: '682.424',
            current_spot_time: 1716220720,
            date_expiry: 1747785599,
            date_settlement: 1747785600,
            date_start: 1716220710,
            display_name: 'Volatility 100 (1s) Index',
            entry_spot: 682.58,
            entry_spot_display_value: '682.58',
            entry_tick: 682.58,
            entry_tick_display_value: '682.58',
            entry_tick_time: 1716220711,
            expiry_time: 1747785599,
            growth_rate: 0.01,
            high_barrier: '683.046',
            id: '917d1b48-305b-a2f4-5b9c-7fb1f2c6c145',
            is_expired: 0,
            is_forward_starting: 0,
            is_intraday: 0,
            is_path_dependent: 1,
            is_settleable: 0,
            is_sold: 0,
            is_valid_to_cancel: 0,
            is_valid_to_sell: 1,
            longcode:
                'After the entry spot tick, your stake will grow continuously by 1% for every tick that the spot price remains within the ± 0.04331% from the previous spot price.',
            low_barrier: '682.454',
            profit: 0.84,
            profit_percentage: 9.33,
            purchase_time: 1716220710,
            shortcode: 'ACCU_1HZ100V_9.00_0_0.01_1_0.000433139675_1716220710',
            status: 'open',
            tick_count: 230,
            tick_passed: 9,
            tick_stream: [
                {
                    epoch: 1716220711,
                    tick: 682.58,
                    tick_display_value: '682.58',
                },
                {
                    epoch: 1716220712,
                    tick: 682.71,
                    tick_display_value: '682.71',
                },
                {
                    epoch: 1716220713,
                    tick: 682.5,
                    tick_display_value: '682.50',
                },
                {
                    epoch: 1716220714,
                    tick: 682.57,
                    tick_display_value: '682.57',
                },
                {
                    epoch: 1716220715,
                    tick: 682.57,
                    tick_display_value: '682.57',
                },
                {
                    epoch: 1716220716,
                    tick: 682.75,
                    tick_display_value: '682.75',
                },
                {
                    epoch: 1716220717,
                    tick: 682.87,
                    tick_display_value: '682.87',
                },
                {
                    epoch: 1716220718,
                    tick: 682.74,
                    tick_display_value: '682.74',
                },
                {
                    epoch: 1716220719,
                    tick: 682.75,
                    tick_display_value: '682.75',
                },
                {
                    epoch: 1716220720,
                    tick: 682.72,
                    tick_display_value: '682.72',
                },
            ],
            transaction_ids: {
                buy: 484286658868,
            },
            underlying: '1HZ100V',
        },
        details:
            'After the entry spot tick, your stake will grow continuously by 1% for every tick that the spot price remains within the ± 0.04331% from the previous spot price.',
        display_name: '',
        id: 242807268688,
        indicative: 9.84,
        purchase: 9,
        reference: 484286658868,
        type: 'ACCU',
        profit_loss: 0.84,
        is_valid_to_sell: true,
        current_tick: 9,
        status: 'profit',
        entry_spot: 682.58,
        high_barrier: 683.046,
        low_barrier: 682.454,
    },
] as TPortfolioPosition[];

const PositionsContent = observer(
    ({ hasButtonsDemo, isClosedTab, onRedirectToTrade, setHasButtonsDemo }: TPositionsContentProps) => {
        const [contractTypeFilter, setContractTypeFilter] = React.useState<string[]>([]);
        const [filteredPositions, setFilteredPositions] = React.useState<(TPortfolioPosition | TClosedPosition)[]>([]);
        const [noMatchesFound, setNoMatchesFound] = React.useState(false);

        const { client, portfolio } = useStore();
        const { currency } = client;
        const { onClickCancel, onClickSell } = portfolio;
        const { data, is_empty, is_loading: isLoading, onMount } = useReportsStore().profit_table;
        const closedPositions = React.useMemo(() => data.map(d => ({ contract_info: d })), [data]);
        const positions = React.useMemo(
            () => (isClosedTab ? closedPositions : mockedActivePositions),
            [isClosedTab, closedPositions]
        );
        const shouldShowEmptyMessage = (isClosedTab ? is_empty : !filteredPositions.length) || noMatchesFound;

        React.useEffect(() => {
            isClosedTab && onMount();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        React.useEffect(() => {
            if (contractTypeFilter.length) {
                const result = filterPositions(positions, contractTypeFilter);
                setNoMatchesFound(!result.length);
                setFilteredPositions(result);
            } else setFilteredPositions(positions);
        }, [contractTypeFilter, positions]);

        if (isLoading) return <Loading />;
        return (
            <div className={`positions-page__${isClosedTab ? 'closed' : 'open'}`}>
                <div className='positions-page__container'>
                    {!shouldShowEmptyMessage && (
                        <div className='positions-page__filter__wrapper'>
                            <Filter
                                setContractTypeFilter={setContractTypeFilter}
                                contractTypeFilter={contractTypeFilter}
                            />
                        </div>
                    )}
                </div>
                {shouldShowEmptyMessage ? (
                    <EmptyMessage
                        isClosedTab={isClosedTab}
                        onRedirectToTrade={onRedirectToTrade}
                        noMatchesFound={noMatchesFound}
                    />
                ) : (
                    <ContractCardList
                        currency={currency}
                        hasButtonsDemo={hasButtonsDemo}
                        onClickCancel={isClosedTab ? undefined : onClickCancel}
                        onClickSell={isClosedTab ? undefined : onClickSell}
                        positions={filteredPositions}
                        setHasButtonsDemo={setHasButtonsDemo}
                    />
                )}
            </div>
        );
    }
);

export default PositionsContent;
