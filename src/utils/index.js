import CryptoJS from "react-native-crypto-js"
import {config} from "../utils/config/appConfig";

export const encrypt=(value)=>{
    return CryptoJS.AES.encrypt(JSON.stringify(value), config.encryptionSecretKey).toString();
}

export const decrypt = (value) =>{
    const decryptedValue =  CryptoJS.AES.decrypt(value, config.encryptionSecretKey).toString(CryptoJS.enc.Utf8);
    const regex = /\[.*\]|\{.*\}/
    if(regex.test(decryptedValue)) return JSON.parse(decryptedValue);

    return decryptedValue;
}
