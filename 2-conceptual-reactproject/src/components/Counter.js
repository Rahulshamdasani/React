import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick2 =() =>{
        setTimeout(()=>{
            setCount((prevCount)=>{
                return prevCount+1
            
            });
        },2000)
    }
    return (
        <div className='container d-flex align-items-center justify-content-center' style={{marginTop:"10%"}} >
            <div style={{height:"1000px"}}>
                <div>
                    <h4 className='text-center'> Counter Example</h4>
                    <p className='text-center'>In this example, the increment is after 2 seconds whereas everything else is instant</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-center'>{count}</h1>
                </div>
                <button className='justify-content-center btn p-2' style={{marginLeft:"150px"}} onClick={()=>setCount(count-1)} >Decrement</button>
                <button className='justify-content-center btn' style={{marginLeft:"5px"}}  onClick={()=>setCount(0)} >Reset</button>
                <button className='justify-content-center mt-50 btn' style={{marginLeft:"5px"}}  onClick={handleClick2}>Increment</button>
            </div>
        </div>
    )
}

export default Counter
