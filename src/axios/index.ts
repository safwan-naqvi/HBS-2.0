import qs from "qs";

import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import axios from "axios"
// import { getAuthToken } from "./services/get-token";

const baseUrl = getStrapiURL();

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`
    }
})

export default api
