import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTQ3MWU1ZTE3ZDM5MTBhNmVjMTZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzc0NzQ5MSwiZXhwIjoxNzA0MDA2NjkxfQ.0BCt0U481-S5lOK_bKk3xDhk3ickyxyNrtREMcTa8rY"


export const publicRequest = axios.create({baseURL:BASE_URL,})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token : `Bearer ${TOKEN} `}
})
