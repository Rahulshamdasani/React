export const pages = [
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
		description: 'This is a simple example of using useState to manipulate an array and display the data in a card',
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
	},
	{
		title: 'useRef, which means uncontrolled inputs',
		description: 'In this section we will see how we can use useRef to create a controlled input.',
		moreDetails: '/useRefUseCase'
	},
	{
		title: 'useReducer to manage model and state',
		description: 'We will see how to use useReducer to manage model and state',
		moreDetails: '/useReducer'
	},
	{
		title: 'Prop Drilling example',
		description:
			'Now we will see how props are passed to child components. For this example we will use the data inside component dummy data and display it in the propDrilling page, where we are using singleItem component to display the data and we need to delete the data from the array on click of delete button, so we need to pass the removeItem function as a prop to singleItem component',
		moreDetails: '/propDrilling'
	},
	{
		title: 'useContext hook',
		description:
			'Now we will do the exact same thing as we did in prop drilling but now we will use context api so that we dont need to pass the hook',
		moreDetails: '/useContext'
	},
	{
		title: 'Custom Hooks',
		description:
			'The steps which will be used again and again in the future can be clubbed into a custom hook. Custom hook can be said to be just another function which can be used to create a custom hook. We will see how to use custom hooks in this page.',
		moreDetails: '/customHooks'
	},
	{
		title: 'Prop Types',
		description:
			'Whenever we call an api and get an array of objects in return and suppose we want to map that prop to some component There might be missing data in our listNormally if there is missing data then it will show a blank field since the component did not recieve any prop so it cannot display it. We want to tackle this however more important is when the component is expecting an object and printing the data from inside that object',
		moreDetails: '/propTypes'
	},
	{
		title: 'Dynamic Routing (Advanced React)',
		description:
			'Now we will see how to use dynamic routing in react. We will create a dynamic route and pass the data to the component',
		moreDetails: '/dynamicRoute'
	}
];
