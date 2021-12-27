import React from 'react'

const DeletePeople = () => {
    const data = ['rahul','jetha','naveksha']
    const [people, setPeople] = React.useState(data);
    //setTimeout(() => {setPeople(data)}, 2000);
    const handleDelete = (index) => {
        const newPeople = [...people];
        newPeople.splice(index, 1);
        setPeople(newPeople);
    }
    return (
        <div className='container mt-10'>
            {
                people.map((person, index) => {
                    return <div key={index}>
                                <div>
                                    <h4>{person}</h4>
                                    <button onClick={() => { handleDelete(index) }}>Delete</button>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                })
            }
        
        </div>
    )
}

export default DeletePeople
