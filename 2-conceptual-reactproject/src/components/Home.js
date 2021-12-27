import React from 'react'
import HomeCard from './HomeCard'
const Home = () => {
    const pages=[
        {
            title:"Mapping",
            description:"This is a simple example of mapping i.e. using a loop to iterate over an array and display the data in a card",
            moreDetails:"/Mapping"
        },
        {
            title:"Title Change",
            description:"This is a simple example of using useState to change the title of the card when the button is clicked, and also using useEffect ",
            moreDetails:"/usestate"
        },
        {
            title:"Array Change",
            description:"This is a simple example of using useState to manipulate an array and display the data in a card",
            moreDetails:"/usestate2"
        },
        {
            title:"Counter",
            description:"This is a simple example of using useState to keep counter and display the data, <code>useEffect</code> is used to update the counter, one complex operation was update the counter after a delay",
            moreDetails:"/counter"
        }
    ]
    return (
        <div className='container' style={{width:"70vw"}}>
            <div className=''>
                {pages.map((page,index) => {
                    return <div className='mt-5'><HomeCard title={page.title} description={page.description} moreDetails={page.moreDetails} />
                        </div>
                })}
            </div>
        </div>
    )
}
        

export default Home


