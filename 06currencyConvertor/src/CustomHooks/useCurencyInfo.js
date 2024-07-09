import { useEffect , useState } from "react";

// designing custom hook for our currency changer project

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
        .then((res) => 
            //converting response into json
            res.json()
        )
        // for accessing data dot is not required everytime , we can also fetch some data 
        // with square brackets
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])

    console.log(data)
    return data
}

export default useCurrencyInfo;