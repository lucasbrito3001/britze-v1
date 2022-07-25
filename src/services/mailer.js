const API_MAIL_ROUTE = "https://api.emailjs.com/api/v1.0/email/send"

import { requester } from './requester'
import { checkEmail, checkPhone, checkString } from "./validators"

const mailerController = async (
    payload,
    validator = validateVariables,
    mailer = sendMail
) => {
    const resultValidations = validator({ ...payload })

    if (!resultValidations.status) return resultValidations

    return await mailer({ ...payload })
}

const validateVariables = (
    { name, email, phone, market, message },
    validatorString = checkString,
    validatorEmail = checkEmail,
    validatorPhone = checkPhone
) => {
    const validators = {
        'name': validatorString(name),
        'market': validatorString(market),
        'message': validatorString(message),
        'email': validatorEmail(email),
        'phone': validatorPhone(phone)
    }

    const errors = []

    const resultValidation = ['name', 'email', 'phone', 'market', 'message'].every(key => {
        const validate = validators[key] || false

        if (validate) return true

        errors.push(key)
        return false
    })

    return { status: resultValidation, errors }
}

const sendMail = async ({ name, email, phone, market, message }) => {
    const payload = {
        service_id: 'service_jigglv',
        template_id: 'template_z7vvltg',
        user_id: 'XxUDmDN8hgP4LUd_Q',
        template_params: { name, email, phone, market, message }
    }

    try {
        await requester('post', [API_MAIL_ROUTE, payload])
        
        return { code: 200, status: true }
    } catch (error) {
        return { code: 400, status: false }
    }

}

export { mailerController, validateVariables }