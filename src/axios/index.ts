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
// async function fetchData(url: string) {
//     const authToken = await getAuthToken();

//     const headers = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${authToken}`,
//         },
//     };

//     try {
//         const response = await fetch(url, authToken ? headers : {});
//         const data = await response.json();
//         return flattenAttributes(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         throw error; // or return null;
//     }
// }

// async function getStrapiData(path: string, pageQuery: string) {
//     const baseUrl = "http://localhost:1337";

//     const url = new URL(path, baseUrl);
//     url.search = pageQuery;

//     try {
//         const response = await fetch(url.href);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }