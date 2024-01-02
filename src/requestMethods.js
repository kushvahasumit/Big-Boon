import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTQ3MWU1ZTE3ZDM5MTBhNmVjMTZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDE0MTY3MiwiZXhwIjoxNzA0NDAwODcyfQ.tTALyqZa5Q1V3y07vOtpasFIqvxAUkh2THWnoqGEAl8"


export const publicRequest = axios.create({baseURL:BASE_URL,})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token :  TOKEN}
})
