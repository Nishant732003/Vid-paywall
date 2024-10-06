// import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/hono"
import { useQuery } from "@tanstack/react-query";


// type ResponseType =
//     InferResponseType<(typeof client.api.user)["is-premium"]["$get"]>
      
// type RequestType =
//     InferRequestType<(typeof client.api.user)["is-premium"]["$get"]>

export const useCheckpremium = () => {
    // const query = useQuery<ResponseType, Error, RequestType>({
    const query = useQuery({
        queryKey: ["is-premium"],
        queryFn: async () => {
            const resposne = await client.api.user["is-premium"]["$get"]();
            if (!resposne.ok) throw new Error(resposne.statusText);
            const data = await resposne.json();
            return data.isPremium;
        }
    })
    return query;
}