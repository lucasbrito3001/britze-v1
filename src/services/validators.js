import { validate } from 'email-validator';
import { phone } from 'phone';

const checkString = (string) => {
    return string && typeof string === 'string'
}

const checkEmail = (email, validator = validate) => {
    return validator(email);
}

const checkPhone = (number, validator = phone) => {
    return validator(number);
}

export { checkString, checkEmail, checkPhone }