import React from 'react'
import { useEffect } from 'react'

const FetchData = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [data, setData] = React.useState([])
    
    const fetchData = async () => {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
    }

    useEffect(() => {
        fetchData();   
    }, [])

    return (
        <div className='container'>
            <h4>Fetching Posts data <a href = {url}>URL</a></h4>
            {data.length > 0 && data.map((item,index) => (
                <div key={index} className="card m-5">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.body}</p>                
                    </div>
        
                </div>
            ))}
        </div>
    )
}

export default FetchData
