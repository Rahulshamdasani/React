import React from 'react'
import {useState, useEffect} from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log('useEffect')
        if(counter > 0){
            document.title = `You clicked ${counter} times`
        }
    },[counter])
    
    return (
        <div className='container'>
            <h1>{counter}</h1>
            <button className='btn' onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default UseEffect
