import axios from "axios";
import {getValue} from "../../services/storage"
import { decrypt, encrypt } from "..";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
    baseURL: "http://192.168.209.160:5000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

// axiosInstance.interceptors.request.use((config) => {
//     getValue("token")
//     .then((value) => {
//         if (value) {
//             config.headers = {
//                 ...config.headers,
//                 Authorization: `Bearer ${value}`
//             }
//         }
//         if (config.data) {
//             config.data = {data: encrypt({...config.data})}
//         }
//         return config;
//     })
//     .catch(error => console.log(error))
// })

// axiosInstance.interceptors.response.use(
//     (response) => {
//     if (response.config.responseType !== "blob" && response.data) {
//         response.data = JSON.parse(decrypt(response.data));
//     }
//     return response;
//     },
//     (error) => {
//         console.log(error)
//         switch(error?.response.status) {
//           case 401:
//               AsyncStorage.clear()
//               .then()
//               .catch(error => console.log(error))
//               break;
//         } 
//         return Promise.reject(error);
//     }
// )

export default axiosInstance