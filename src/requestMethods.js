import axios from "axios";

const BASE_URL = "https://bigboon.onrender.com/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTQ3MWU1ZTE3ZDM5MTBhNmVjMTZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDMwMjEwMSwiZXhwIjoxNzA0NTYxMzAxfQ.r-wwyOqCm720L0R4orOqenlpxbPwhDbnSUUFjvznJfs"


export const publicRequest = axios.create({baseURL:BASE_URL,})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})
