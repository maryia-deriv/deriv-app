/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { WS } from '@deriv/shared';
// import CountrySelector from 'Components/poi/poi-country-selector';
// import IdvDocumentSubmit from 'Components/poi/idv-document-submit';
import IdvUploadComplete from 'Components/poi/idv-status/idv-submit-complete';
import Unsupported from 'Components/poi/status/unsupported';
import UploadComplete from 'Components/poi/status/upload-complete';
import OnfidoUpload from './onfido-sdk-view.jsx';
import { identity_status_codes, submission_status_code, service_code } from './proof-of-identity-utils';
import { IdvDocSubmitOnSignup } from '../../../Components/poi/poi-form-on-signup/idv-doc-submit-on-signup/idv-doc-submit-on-signup.jsx';

const POISubmissionForMT5 = ({
    allow_poi_resubmission,
    has_attempted_idv,
    has_require_submission,
    height,
    identity_last_attempt,
    idv,
    is_from_external,
    is_idv_disallowed,
    needs_poa,
    onfido,
    onStateChange,
    redirect_button,
    refreshNotifications,
    citizen_data
}) => {
    const [submission_status, setSubmissionStatus] = React.useState(); // selecting, submitting, complete
    const [submission_service, setSubmissionService] = React.useState();

    React.useEffect(() => {
        if (citizen_data) {
            const { submissions_left: idv_submissions_left } = idv;
            const { submissions_left: onfido_submissions_left } = onfido;
            const is_idv_supported = citizen_data.identity.services.idv.is_country_supported;
            const is_onfido_supported = citizen_data.identity.services.onfido.is_country_supported;

            if (is_idv_supported && Number(idv_submissions_left) > 0) {  //&& !is_idv_disallowed
                setSubmissionService(service_code.idv);
            } else if (onfido_submissions_left && is_onfido_supported) {
                setSubmissionService(service_code.onfido);
            } else {
                setSubmissionService(service_code.manual);
            }
            setSubmissionStatus(submission_status_code.submitting);
        }
        console.log(citizen_data);
    }, [citizen_data])


    const handleViewComplete = () => {
        if (onStateChange && typeof onStateChange === 'function') {
            onStateChange(identity_status_codes.pending);
        }
        setSubmissionStatus(submission_status_code.complete);

        WS.authorized.getAccountStatus().then(() => {
            refreshNotifications();
        });
    };
    const handleIdvSubmit = (values) => {
        const { document_number, document_type } = values;
        const submit_data = {
            identity_verification_document_add: 1,
            document_number,
            document_type: document_type.id,
            issuing_country: citizen_data.value,
        };

        WS.send(submit_data).then(response => {
            if (response.error) {
                // 
                console.log(response.error);
                return;
            }
            handleViewComplete();
        })
    }

    switch (submission_status) {

        case submission_status_code.submitting: {
            switch (submission_service) {
                case service_code.idv:
                    return (

                        <IdvDocSubmitOnSignup
                            citizen_data={citizen_data}
                            // value={value}
                            onNext={handleIdvSubmit}
                        />
                    );
                case service_code.onfido: {
                    const country_code = citizen_data.value;
                    const doc_obj = citizen_data.identity.services.onfido.documents_supported;
                    const documents_supported = Object.keys(doc_obj).map(d => doc_obj[d].display_name);

                    return (
                        <OnfidoUpload
                            country_code={country_code}
                            documents_supported={documents_supported}
                            handleViewComplete={handleViewComplete}
                            height={height}
                            is_from_external={is_from_external}
                            refreshNotifications={refreshNotifications}
                        />

                    );
                }
                case service_code.manual:
                    return <Unsupported />;
                default:
                    return null;
            }
        }
        case submission_status_code.complete: {
            switch (submission_service) {
                case service_code.idv:
                    return (
                        <IdvUploadComplete
                            is_from_external={is_from_external}
                            needs_poa={needs_poa}
                            redirect_button={redirect_button}
                        />
                    );
                // This will be replaced in the next Manual Upload Project
                case service_code.manual:
                case service_code.onfido:
                    return (
                        <UploadComplete
                            is_from_external={is_from_external}
                            needs_poa={needs_poa}
                            redirect_button={redirect_button}
                        />
                    );
                default:
                    return null;
            }
        }
        default:
            return null;
    }
};

export default POISubmissionForMT5;
