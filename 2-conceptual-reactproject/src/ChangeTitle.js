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
        <div className='position-absolute top-50 start-50 translate-middle'>
            <h4 className='title'>{title}</h4>
            <button className='mt-50' onClick={handleClick}>Change Title</button>
        </div>
    )
}

export default ChangeTitle;
