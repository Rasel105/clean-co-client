import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        // axios.get("http://localhost:5000/service").then(res => {
        //     setServices(res.data)
        // })

        (async () => {
            // base url 
            const { data } = await fetcher.get("/service");
            setServices(data)
        })()
    }, [])
    return (
        <div>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
            <h2>Services</h2>
        </div>
    );
};

export default Services;