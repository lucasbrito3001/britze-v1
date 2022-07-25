import axios from 'axios'

const requester = async (method, clientParams, client = axios) => {
    // note: the clientParams need to have this structure -> [api_url: string, payload?: {}]
    // because the axios use the following structure on your parameters axios.post(api_url, payload)
    // this is the reason to use ...params
    const { data } = await client[method](...clientParams)
    return data
}

export { requester }