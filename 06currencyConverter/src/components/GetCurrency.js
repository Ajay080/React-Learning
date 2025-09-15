import { useEffect, useState } from "react";
const GetCurrency= (currency)=>{
    const [data, setData] = useState({});
    useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.9.15/v1/currencies/${currency.toLowerCase()}.json`)
            .then((res)=>res.json())
            .then((res)=>{
                setData(res[currency])
            })
    }, [currency])


    return data;
}

export default GetCurrency;

