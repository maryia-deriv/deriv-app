import { TContractInfo } from '@deriv/shared';
import React from 'react';

type TDelayedAccuBarriersMarkerProps = {
    epoch_array: number[];
    contract_info: TContractInfo;
    granularity?: number;
    is_dark_theme?: boolean;
    is_in_contract_details?: boolean;
    is_mobile?: boolean;
    marker_component: React.ComponentType<Omit<TDelayedAccuBarriersMarkerProps, 'previous_spot' | 'marker_component'>>;
    previous_spot: number | null;
    price_array: number[];
    type: string;
};

const DelayedAccuBarriersMarker = React.memo(
    ({ marker_component: MarkerComponent, ...props }: TDelayedAccuBarriersMarkerProps) => {
        const passthrough_props = { ...props } as Omit<TDelayedAccuBarriersMarkerProps, 'previous_spot'> & {
            previous_spot?: number | null;
        };
        delete passthrough_props.previous_spot;
        return <MarkerComponent {...passthrough_props} />;
    }, // barrier range will get updated only when previous_spot changes:
    (prevProps, nextProps) => prevProps.previous_spot === nextProps.previous_spot
);
DelayedAccuBarriersMarker.displayName = 'DelayedAccuBarriersMarker';

export default DelayedAccuBarriersMarker;
