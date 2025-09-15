const GetCurrency= ()=>{
    fetch('url', ()=>{

    }).then((res)=>res.json)
    .then((res)=>{
        res=res.map((val)=> val.from)
    })
    
}

export default GetCurrency;