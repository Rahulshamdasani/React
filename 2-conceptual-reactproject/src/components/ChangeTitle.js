import React from 'react'
import { useState } from 'react'
const ChangeTitle = () => {
    const [title, setTitle] = useState('This is changed Title')
    const [backuptitle, backupTitle] = useState("Hello Rahul")

    const handleClick=()=>{
        let newTitle = title;
        setTitle(backuptitle)
        backupTitle(newTitle)
    }
    

    return (
        <div >
            <div className='container d-flex align-items-center justify-content-center'  style={{marginTop:"10%"}}>
                <h4 className='text-center'>{title}</h4>
            </div>
            <div className='container d-flex align-items-center justify-content-center'  >
                <button className='btn-primary btn' onClick={handleClick}>Change Title</button>
            </div>
        </div>
    )
}

export default ChangeTitle;
