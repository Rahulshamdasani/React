import React from 'react';
import HomeCard from './HomeCard';
const Home = () => {
	const pages = [
		{
			title: 'Mapping',
			description:
				'This is a simple example of mapping i.e. using a loop to iterate over an array and display the data in a card',
			moreDetails: '/Mapping'
		},
		{
			title: 'Title Change',
			description:
				'This is a simple example of using useState to change the title of the card when the button is clicked, and also using useEffect ',
			moreDetails: '/usestate'
		},
		{
			title: 'Array Change',
			description:
				'This is a simple example of using useState to manipulate an array and display the data in a card',
			moreDetails: '/usestate2'
		},
		{
			title: 'Counter',
			description:
				'This is a simple example of using useState to keep counter and display the data, <code>useEffect</code> is used to update the counter, one complex operation was update the counter after a delay',
			moreDetails: '/counter'
		},
		{
			title: 'useEffect',
			description:
				'This is a example of using useEffect to update the title of the HTML Page when the counter is changed',
			moreDetails: '/useeffect'
		},
		{
			title: 'fetchData',
			description: 'We will use JSON placeholder api to fetch posts and display them in a card',
			moreDetails: '/fetchdata'
		},
		{
			title: 'conditional Rending',
			description:
				'In conditional rendering we will again practice fetching data from github users api and will return data if it is fetched else we will return loading',
			moreDetails: '/conditionalrendering'
		},
		{
			title: 'PhoneBook Forms and controlled inputs',
			description:
				'In this section we will create a phonebook where user can create the form, and the input data is displayed in a card',
			moreDetails: '/phonebook'
		},
		{
			title: 'Large forms and setting single function to handle multiple events',
			description:
				'In this section we will see how to handle multiple events in a form and how to set a single function to handle multiple events',
			moreDetails: '/largeform'
		}
	];
	return (
		<div className="container" style={{ width: '70vw' }}>
			<div className="">
				{pages.map((page, index) => {
					return (
						<div className="mt-5">
							<HomeCard
								title={page.title}
								description={page.description}
								moreDetails={page.moreDetails}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
