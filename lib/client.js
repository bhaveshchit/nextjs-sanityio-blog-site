import { createClient } from "next-sanity";

export const client = createClient({
    projectId:'aqcv48zo',
    dataset:'production',
    useCdn:true,
    //
    apiVersion:'2022-10-22'
})