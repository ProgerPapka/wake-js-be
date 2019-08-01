import { isUndefined } from 'lodash';

export const getSafe = (getValue: () => any, defaultValue?: any) => {
    try {
        const value = getValue();
        return !isUndefined(value) ? value : defaultValue;
    } catch (error) {
        console.warn(error);
        return defaultValue;
    }
};
