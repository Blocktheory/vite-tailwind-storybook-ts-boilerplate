import { FormattedMessage, useIntl } from "react-intl";
// Translate API
const translate = (id = "", value = {}) => (
    <FormattedMessage id={id} values={{ ...value }} />
);

export const translateToString = (id = "") => {
    const intl = useIntl();
    return intl.formatMessage({ id, defaultMessage: "Translation not available!" });
};

export default translate;
