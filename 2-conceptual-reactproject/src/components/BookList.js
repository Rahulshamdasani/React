import React from 'react'
import BooksDisplayCard from './BooksDisplayCard'

export default function BookList (){
    let books = [ {title: 'The Design of EveryDay Things', author: 'Don Norman', pages: 454},
                    {title: 'The Most Human Human', author: 'Brian Christian', pages: 623},
                    {title: 'Ulysses', author: 'James Joyce', pages: 754},
                    {title: 'The Book of Kells', author: 'Henry James', pages: 723},
                    {title: 'A Farewell to Arms', author: 'Ernest Hemingway', pages: 523},
                    {title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', pages: 623},
                    {title: 'Moby Dick', author: 'Herman Melville', pages: 823},
                    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 923},
                ]
    return (
        <div className="grid-container" onClick={()=>{alert("Clicked")}}>
            {books.map((book,index) => <BooksDisplayCard className="grid-item" key={index} book={book}/>)}
        </div>
    )
}


