const API_MAIL_ROUTE = "https://api.emailjs.com/api/v1.0/email/send"

import axios from 'axios'
import { checkEmail, checkPhone, checkString } from "./validators"

const mailerController = (payload, validator = validateVariables) => {
    const resultValidations = validator({...payload})

    if(!resultValidations.status) return resultValidations

    sendMail()
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
        const validate = validators[key]
        if(validate) return true

        errors.push(key)
        return false
    })

    return { status: resultValidation, errors }
}

const sendMail = async () => {
    let message = "TESTEEEE"
    const payload = {
        service_id: 'service_jigglvu',
        template_id: 'template_z7vvltg',
        user_id: 'XxUDmDN8hgP4LUd_Q',
        template_params: {
            'message': message,
        }
    }

    const res = await axios.post(API_MAIL_ROUTE, payload)
    return res
}

export { mailerController }