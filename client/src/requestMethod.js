import axios from "axios";

const BASE_URL = "http//localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mjk5MTE1MWE1YTlhMDU1MDMzNDNhMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNzI4ODA3MywiZXhwIjoxNzE3NTQ3MjczfQ.EwrINVeHnB6BtVI66zbX5EEF45dx1t5yZ09GkHRl4Z0";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token: `Bearer ${TOKEN}`}
});