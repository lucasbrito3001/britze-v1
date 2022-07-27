import { validate } from 'email-validator';
import { phone } from 'phone';

const checkString = (string) => {
    return string && typeof string === 'string'
}

const checkEmail = (email, validator = validate) => {
    return validator(email);
}

const checkPhone = (number, validator = phone) => {
    console.log(number)
    console.log('PHONE: ', validator(number, { country: 'BR' }))
    return validator(number);
}

export { checkString, checkEmail, checkPhone }