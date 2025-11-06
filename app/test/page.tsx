"use client"
import { supabase } from "../supabase-client";

export default function TestPage() {
    const fetchData = async () => {
        const {data, error} = await supabase.from("projects").select("*");
        console.log({data, error});
    };

    return(
        <>
            <h1>Supabase Test</h1>
            <button onClick={fetchData}>Fetch Projects</button>
        </>
    )
};
