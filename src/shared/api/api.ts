import axios from "axios";

export const $api = axios.create({
    baseURL: "https://production-server-project-profile.vercel.app",
})