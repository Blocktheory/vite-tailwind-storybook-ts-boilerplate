// Error Code
/*
0 => No error
1 => Empty field
2 => Minimum length
3 => Maximum length
4 => Pattern not matching
*/

//Validating the form

enum ERROR_CODES {
    NO_ERROR = 0,
    EMPTY_FIELD = 1,
    MIN_LENGTH = 2,
    MAX_LENGTH = 3,
    PATTERN_NOT_MATCH = 4,
}

export interface IDataInput {
    requiredFlag?: boolean;
    fieldval?: string | boolean | undefined;
    minLength?: number;
    maxLength?: number;
    regexPattern?: string | RegExp;
}

export const fieldValidation = (data: IDataInput): unknown => {
    // Check for Required Field case:
    if (data.requiredFlag) {
        if (
            typeof data.fieldval === "string" &&
            data.fieldval &&
            data.fieldval.toString().trim().length
        ) {
            return checkForValidationPath(data);
        } else {
            return ERROR_CODES.EMPTY_FIELD;
        }
    } else {
        if (
            typeof data.fieldval === "string" &&
            data.fieldval &&
            data.fieldval.toString().trim().length
        ) {
            return checkForValidationPath(data);
        } else {
            return ERROR_CODES.NO_ERROR;
        }
    }
};

export const checkForValidationPath = (data: IDataInput): unknown => {
    if (data.minLength && typeof data.fieldval === "string") {
        if (checkMinlength(data.fieldval, data.minLength)) {
            return ERROR_CODES.MIN_LENGTH;
        } else {
            return ERROR_CODES.NO_ERROR;
        }
    }
    if (data.maxLength && typeof data.fieldval === "string") {
        if (checkMaxlength(data.fieldval, data.maxLength)) {
            return ERROR_CODES.MAX_LENGTH;
        }
    }
    if (data.regexPattern && typeof data.fieldval === "string") {
        if (!checkPatternMatches(data.fieldval, data.regexPattern)) {
            return ERROR_CODES.PATTERN_NOT_MATCH;
        }
    }
    return ERROR_CODES.NO_ERROR;
};

export const checkMinlength = (fieldval: string, minLength: number) => {
    return fieldval.trim().length < minLength;
};
export const checkMaxlength = (fieldval: string, maxLength: number) => {
    return fieldval.trim().length > maxLength;
};

const checkPatternMatches = (
    fieldval: string | undefined,
    regexPattern: string | RegExp,
): boolean => {
    if (fieldval) {
        const newRegex = new RegExp(regexPattern);
        return newRegex.test(fieldval);
    } else {
        return false;
    }
};
