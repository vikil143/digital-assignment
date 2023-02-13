import axios from "axios";
import { config } from "./config";

type Method = "POST" | "PUT" | "GET";

const makeApiRequest = async (method: Method, endPoint: string, jsonData: object) => {

    const instance = axios.create({ baseURL: config.baseUrl, });

    return await instance.request({
        method,
        url: endPoint,
        data: jsonData
    })

};

export default makeApiRequest