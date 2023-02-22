import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Localize, localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import { CSSTransition } from 'react-transition-group';
import { Icon, InputField, Text, ThemedScrollbars } from '@deriv/components';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import BarriersList from './barriers-list.jsx';

const BarrierSelector = ({
    barrier_1,
    current_focus,
    onChange,
    setHoveredBarrier,
    setCurrentFocus,
    turbos_barrier_choices,
    validation_errors,
}) => {
    const [selected_barrier, setSelectedBarrier] = React.useState(barrier_1);
    const [is_barriers_table_expanded, setIsBarriersTableExpanded] = React.useState(false);

    const header_tooltip_text = (
        <React.Fragment>
            <p>
                <span style={{ fontWeight: 'bold' }}>For Long: </span>You will earn profit if the market stays above the
                entry spot and doesn&apos;t cross the barrier.
            </p>
            <br />
            <p>
                <span style={{ fontWeight: 'bold' }}>For Short: </span>You will earn profit if the market stays below
                the entry spot and doesn&apos;t cross the barrier.
            </p>
        </React.Fragment>
    );

    const toggleBarriersTable = () => setIsBarriersTableExpanded(!is_barriers_table_expanded);

    const changeBarrier = e => {
        e.stopPropagation();
        setHoveredBarrier(null);
        setSelectedBarrier(e.target.id);
        onChange({
            target: {
                name: 'barrier_1',
                value: e.target.id,
            },
        });
    };

    const onMouseEnter = e => {
        if (e.target.id && selected_barrier !== e.target.id) {
            setHoveredBarrier(e.target.id);
        }
    };

    const onMouseLeave = () => {
        setHoveredBarrier(null);
    };

    React.useEffect(() => setSelectedBarrier(barrier_1), [barrier_1]);

    return (
        <React.Fragment>
            {is_barriers_table_expanded && (
                <CSSTransition
                    appear
                    in={is_barriers_table_expanded}
                    timeout={250}
                    classNames={{
                        appear: 'trade-container__barriers-table--enter',
                        enter: 'trade-container__barriers-table--enter',
                        enterDone: 'trade-container__barriers-table--enter-done',
                        exit: 'trade-container__barriers-table--exit',
                    }}
                    unmountOnExit
                >
                    <Fieldset className='trade-container__fieldset trade-container__barriers-table'>
                        <div className='trade-container__barriers-table__header'>
                            <Text color='prominent' weight='bold' size='xs'>
                                {localize('Barriers')}
                            </Text>
                            <div className='trade-container__barriers-table__icon-close' onClick={toggleBarriersTable}>
                                <Icon icon='IcCross' />
                            </div>
                        </div>
                        <div className='trade-container__barriers-table__text'>Distance to spot</div>
                        <ThemedScrollbars>
                            <BarriersList
                                base_classname='trade-container__barriers-table__item'
                                active_item_classname='trade-container__barriers-table__item--selected'
                                className='trade-container__barriers-table__list'
                                list={turbos_barrier_choices}
                                selected_item={selected_barrier}
                                onClick={changeBarrier}
                                onMouseLeave={onMouseLeave}
                                onMouseEnter={onMouseEnter}
                                hover_item_classname='trade-container__barriers-table__item--highlight'
                            />
                        </ThemedScrollbars>
                    </Fieldset>
                </CSSTransition>
            )}
            <Fieldset
                className='trade-container__fieldset trade-container__barriers'
                header={localize('Barrier')}
                is_center
                header_tooltip={<Localize i18n_default_text={header_tooltip_text} />}
            >
                <div onClick={toggleBarriersTable} className='trade-container__barriers__wrapper'>
                    <div className='trade-container__barriers-spot'>{localize('Spot')}</div>
                    <InputField
                        id='dt_barrier_1_input'
                        type='number'
                        name='barrier_1'
                        value={barrier_1}
                        className='trade-container__barriers-single'
                        classNameInput={classNames(
                            'trade-container__input',
                            'trade-container__barriers-input',
                            `trade-container__barriers-single-input`
                        )}
                        current_focus={current_focus}
                        onChange={onChange}
                        error_messages={validation_errors.barrier_1 || []}
                        is_float
                        is_signed
                        setCurrentFocus={setCurrentFocus}
                    />
                </div>
            </Fieldset>
        </React.Fragment>
    );
};
BarrierSelector.propTypes = {
    barrier_1: PropTypes.string,
    current_focus: PropTypes.func,
    onChange: PropTypes.func,
    setHoveredBarrier: PropTypes.func,
    setCurrentFocus: PropTypes.func,
    turbos_barrier_choices: PropTypes.arrayOf(PropTypes.string),
    validation_errors: PropTypes.object,
};

export default connect(({ modules, ui }) => ({
    barrier_1: modules.trade.barrier_1,
    current_focus: ui.current_focus,
    onChange: modules.trade.onChange,
    setHoveredBarrier: modules.trade.setHoveredBarrier,
    setCurrentFocus: ui.setCurrentFocus,
    turbos_barrier_choices: modules.trade.turbos_barrier_choices,
    validation_errors: modules.trade.validation_errors,
}))(BarrierSelector);
