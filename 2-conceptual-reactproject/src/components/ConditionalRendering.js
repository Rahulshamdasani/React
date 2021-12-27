import React from 'react'
import { useEffect, useState } from 'react'

const ConditionalRendering = () => {
    const url = "https://api.github.com/users";
    const [loading, isloading] = useState(true);
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        isloading(false);
    }
    useEffect(() => {
        fetchData();
    }, []) 
    return (
        <div>
            <h4>conditionalrendering</h4>
            {loading ? <h3>Loading...</h3> :  
            <div className='container'>
            <h4>Fetching Posts data <a href = {url}>URL</a></h4>
            {data.map((item,index) => (
                <div key={index} className="card m-5">
                    <div className="card-body">
                        <h5 className="card-title">{item.login}</h5>
                        <p className="card-text">{item.subscriptions_url}</p>                
                    </div>
        
                </div>
            ))}
        </div>
        }
        </div>
    )
}

export default ConditionalRendering
