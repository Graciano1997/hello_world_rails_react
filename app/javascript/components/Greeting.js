import axios from "axios";
import React, { useEffect, useState } from "react";

const getData= async ()=>{
    const result= await axios.get('/api/v1/messages');
    console.log(result.data.message);
};

const Greeting=()=>{
    useEffect(()=>{
        getData();
    },[]);

    return(
        <h1>Gra</h1>
    )
};

export default Greeting;