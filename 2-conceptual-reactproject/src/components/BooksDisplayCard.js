import React from 'react'

export default function BooksDisplayCard(props){
    const {title, author, pages} = props.book;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Author of this book is {author} and it has {pages} pages.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
