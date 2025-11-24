import { fetchPhones } from "../api/phone"
import { useQuery } from "react-query"

function usePhones() {
    return useQuery(
        {
            queryKey: ["phones"],
            queryFn: () => fetchPhones()
        }
    )
}

export { usePhones }
