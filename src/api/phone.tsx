import { api } from "./axiosInstance"
import type { PhonesResponse } from "./phonesResponse"

const fetchPhones = (): Promise<PhonesResponse> => {
    return api.get("/objects")
}

export { fetchPhones }
