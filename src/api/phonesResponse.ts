import type { AxiosResponse } from "axios"
import type { Phone } from "./phone.type"

export type PhonesResponse = AxiosResponse<Phone[]>
