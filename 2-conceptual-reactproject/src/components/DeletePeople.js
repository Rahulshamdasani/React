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
                        <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{person}</h5>
                                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                        </div>
                        </div>
                })
            }
        
        </div>
    )
}

export default DeletePeople
