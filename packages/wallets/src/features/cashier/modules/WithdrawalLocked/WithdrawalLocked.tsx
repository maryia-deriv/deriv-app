import React from 'react';
import {
    useAccountLimits,
    useAccountStatus,
    useActiveWalletAccount,
    useAuthentication,
    useCashierValidation,
    useCryptoConfig,
    useCurrencyConfig,
} from '@deriv/api-v2';
import { Localize } from '@deriv-com/translations';
import { Loader } from '@deriv-com/ui';
import { WalletsActionScreen } from '../../../../components';
import getWithdrawalLockedDesc, { getWithdrawalLimitReachedDesc } from './WithdrawalLockedContent';
import './WithdrawalLocked.scss';

const WithdrawalLocked: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { data: activeWallet } = useActiveWalletAccount();
    const { data: authentication } = useAuthentication();
    const { data: cashierValidation } = useCashierValidation();
    const { data: accountLimits } = useAccountLimits();
    const { data: accountStatus } = useAccountStatus();
    const { isLoading: isCurrencyConfigLoading } = useCurrencyConfig();
    const isCryptoProvider = activeWallet?.currency_config?.platform.cashier.includes('crypto');
    const { data: cryptoConfig } = useCryptoConfig({
        enabled: isCryptoProvider,
    });

    const currency = activeWallet?.currency || 'USD';

    const poaNeedsVerification = authentication?.is_poa_needed;
    const poiNeedsVerification = authentication?.is_poa_needed;
    const poaStatus = authentication?.poa_status || 'none';
    const poiStatus = authentication?.poi_status || 'none';

    const askAuthenticate = cashierValidation?.ask_authenticate;
    const askFinancialRiskApproval = cashierValidation?.ask_financial_risk_approval;
    const askFixDetails = cashierValidation?.ask_fix_details;
    const financialAssessmentRequired = cashierValidation?.financial_assessment_required;
    const noWithdrawalOrTradingStatus = cashierValidation?.no_withdrawal_or_trading_status;
    const withdrawalLockedStatus = cashierValidation?.withdrawal_locked_status;

    const isWithdrawalLocked = accountStatus?.is_withdrawal_locked;

    const remainder = accountLimits?.remainder;
    const fractionalDigits = activeWallet?.currency_config?.fractional_digits
        ? Math.pow(10, -activeWallet.currency_config.fractional_digits)
        : 0.01;
    const minimumWithdrawal = isCryptoProvider ? cryptoConfig?.minimum_withdrawal : fractionalDigits;

    const withdrawalLimitReached = !!(
        typeof remainder !== 'undefined' &&
        typeof minimumWithdrawal !== 'undefined' &&
        +remainder < minimumWithdrawal
    );
    const isLoading = isCurrencyConfigLoading || !accountStatus;

    if (isLoading) {
        return <Loader />;
    }

    if (withdrawalLimitReached) {
        return (
            <div className='wallets-withdrawal-locked'>
                <WalletsActionScreen
                    description={getWithdrawalLimitReachedDesc({
                        askFinancialRiskApproval,
                        poaNeedsVerification,
                        poaStatus,
                        poiNeedsVerification,
                        poiStatus,
                    })}
                    title={
                        <Localize
                            i18n_default_text='Withdrawals from your {{currency}} Wallet are temporarily locked.'
                            values={{ currency }}
                        />
                    }
                />
            </div>
        );
    }

    if (isWithdrawalLocked) {
        return (
            <div className='wallets-withdrawal-locked'>
                <WalletsActionScreen
                    description={getWithdrawalLockedDesc({
                        askAuthenticate,
                        askFixDetails,
                        financialAssessmentRequired,
                        noWithdrawalOrTradingStatus,
                        withdrawalLockedStatus,
                    })}
                    title={
                        <Localize
                            i18n_default_text='Withdrawals from your {{currency}} Wallet are temporarily locked.'
                            values={{ currency }}
                        />
                    }
                />
            </div>
        );
    }

    return <>{children}</>;
};

export default WithdrawalLocked;
