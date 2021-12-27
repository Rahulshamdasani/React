import React from 'react'

const HomeCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.moreDetails} className="btn btn-primary">More Details</a>
        
            </div>

        </div>
    )
}

export default HomeCard
