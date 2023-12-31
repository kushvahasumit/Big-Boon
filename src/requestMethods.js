import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTQ3MWU1ZTE3ZDM5MTBhNmVjMTZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzk3MDM0NCwiZXhwIjoxNzA0MjI5NTQ0fQ.73mE_u2xh-i5EF5nh2sSJu35F8bw7n9BDeyhRiPSKIE"


export const publicRequest = axios.create({baseURL:BASE_URL,})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token : TOKEN}
})
