//costome hooks - function

import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [data , setData] = useState(null)
    //calls the fetch when the page loads
        useEffect(()=>{
            //fetcg returns promise 
            fetch(url).then(res=>{
                //.json() to remove unneccessory data 
                res.json().then(result=>{
                    setData(result.products)
                })
            })
        },[])
        return data
}

export default useFetch;