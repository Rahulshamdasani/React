# Frequently used concepts

**_Note:_** Storing some frequently used concepts in react just for quick reference

<p> First cleanup the project</p>


## 1. Mapping Booklist
<pre>
Index is showing list of books, where bookslist is declared in <i>BookList</i> component which is using <i>card</i> component.
</pre>

## 2. Event and Event handler
<pre>
Now we will create an onClick event i.e. an alert should come up and show that a click was made, it is deployed inside <i>BookList.js</i>
</pre>
If we want to send data, we cannot write it like this <br/>
<code>onClick={handleClick(title)}</code><br/>
This is not what we want bec this is called as soon as the page loads, i.e. it is executed automatically as soon as the page loads. Instead what we can do is<br/>
<code>onClick={()=>handleClick(title)}</code>
since its an inline function it will be executed only on click, second way to do this is we create a function at the top and call it on click without arguments and handle the arguments from inside that function.

## 3. useState
<p> useState is a react function and it is a named export so we need to use curley braces when trying to import it.</p>

**_Note:_** useState returns an array of 2 values, first value is the actual value of state and 2nd value is the function which is the dispatch function.
<p>In there we create a list and display it, and delete the items one by one</p>
<br/>
<i>Passing a function to useState</i> This is done inside counter, we are basically creating a counter using use state
<br/>

`Suppose you want to increase a counter but with a delay of 2 seconds`, how will you write it

<pre>
One way of writing will be:
const handleClick2 =() =>{
    setTimeout(()=>{
        setCount(count+1)
    },2000)
}
</pre>

Although this fails because if we click the button 10 times without a delay, the setCount is called 10 times, but incremented after 2 secs, so the fetched values is 2 secs old, and hence it will not update the overall value

` To write this sort of things we can do : `
<pre>
const handleClick2 =() =>{
    setTimeout(()=>{
        setCount((prevCount)=>{
            return prevCount+1
        
        });
    },2000)
}
</pre>


## 4. useEffect
<i> It is the work that we do outside the component and update our document based on that work, like fetching data or something like that</i>

 **_Note:_** <i>UseEffect runs after every component render</i>

``` useEffect takes 2 parameters ```
- **callback function** : This is the function which is called every time a useEffect is called
- **Dependency Array** <i>`Optional`</i> : Second array is the array of depency array which is an optional parameter if nothing is passed in second array then it renders at every component render
  - **Default** : Renders every time
  - **[]** : If depency array is blank then it renders only when the first time page is rendered
  - **[value]** : In this case, it renders when value is changed
  - There can be any number of useEffects in a component
- **Cleanup function** : Suppose we add an event listener inside the useEffect, or something like that, then we need to remove the event listener because otherwise it will be triggered on every render and eventually our application will break, so to do that, we can have a cleanup function inside the useEffect which is a return function actually so it can be like
<pre>
useEffect(() => {
    window.addEventListener('resize',() => {
        console.log(window.innerWidth)
    })
    return() => {
        window.removeEventListener('resize',() => {
            console.log(window.innerWidth)
        }
        )
    
    }
})
</pre>


## 5. Fetching data

<i>https://jsonplaceholder.typicode.com/posts</i> We will use this api to fetch data
<ul>
    <li> We use useState with empty depency array
    <li> Since dependency array is empty it will only execute once
    <li> Once it is executed we make a call to a function fetch Data
    <li> Inside fetch data we first fetch the data, convert it to json and use useState to set it inside data
</ul>

## 6. Conditional Rendering

<i> ```https://api.github.com/users``` </i>

- Now we are fetching the data from this url
- We want to display <pre> Loading... </pre> till the time it is fetching
- Once the data is fetched we want to show name and url of the profile
- It will be hard to test it, so we can slowdown the network settings in chrome to test it.

## 7. Controlled Inputs and forms
- Lets create a phonebook so that people can enter the name and phonenumber and see it as a list of objects
- We also need to consider the case when we have 15-20 inputs, at that time, we cannot write useState for all of them and then handleChange for all of them at that point we should do something like we did in LargeForm

## 8. UseRef and uncontrolled inputs
- We will make use of another hook, which is useRed and how it is used to create uncontrolled inputs.
**_Important things:_**: 
- useRef preserves the value between renders
- useRef will not trigger rerender
- It mainly targets dom elements/Nodes
- If we use useRef we can basically eliminate the use of onChange handler and directly make a submit on button click and access the value using ```refVariable.current.value```
- Checkout the <div style="color:gold">**components -> useRefUseCase**</div> file for more info

## 9. UseReducer
- It is same as using redux
- In this we create a default state
<code>
<pre>
    const defaultState = {
		allNames: [],
		isModalOpen: false,
		modalContent: ''
	};
</pre>
</code>
- Then we create a reducer function, it basically handles all the cases that we might encounter
<code>
<pre>
    const reducerFunction = (state, action) => {
		console.log('state', state);
		console.log('action', action);
		switch (action.type) {
			case 'ADD_NAME':
				return {
					...state,
					allNames: [ ...state.allNames, action.payload ],
					modalContent: `${action.payload} is set`,
					isModalOpen: true
				};

			case 'NO_NAME':
				return {
					...state,
					modalContent: 'Please enter a name',
					isModalOpen: true
				};
				return state;
		}
	};
</pre>
</code>
- Then we initialize the reducer with this function and default state
<code>
<pre>
const [ state, dispatch ] = useReducer(reducerFunction, defaultState);
</pre>
</code>
- Then in handle submit we simply dispatch the function calls
<code>
<pre>
    const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			dispatch({ type: 'ADD_NAME', payload: name });
			setName('');
		} else {
			dispatch({ type: 'NO_NAME', payload: 'Name is required' });
		}
	};
</pre>
</code>

## 10. Prop Drilling
- In this section we will import data from dummydata component
- Now we will display this data as a list item
- We want to create a different component to display these
- Now we want to give a button to remove these cards
- But since the elements are been shown in different component we need to pass this function as props
- It is okay for now since we have only two components but it is difficult when we have a log of components


## 11. UseContext
- We will use useContext to avoid propDrilling.
- Suppose we are using the main export function for displaying list of posts
- List of posts come from PostList component which uses singleItem component to display each item
- Now we want to eliminate the prop drilling
- So we can use useContext hooks as shown below:
<ol>
    <li> Create a context variable
    <li> Wrap the main app inside the ```variableName.Provider```
    <li> We also pass a variable value which can be anything, i.e. a string or object or anything
    <li> We then can import this provider anywhere and directly use 
    const { removeItem } = useContext(ItemContext);
    <li> This works not only for children, but for all the grandchildren and great granchildren and so on.
</ol>

## 12. Custom Hooks
Sometimes we have to write a lot of api calls and the basic code for an api call where we write a fetch query to a url, fetch the response and convert it to JSON is repeated again and again, in such cases, we can write it as a custom hook and use it again and again.
- Suppose we try and fetch data from `https://jsonplaceholder.typicode.com/todos`
- repetative part is : 
<code>
<pre>
const [ items, setItems ] = useState([]);
const [ isLoading, setIsLoading ] = useState(true);
const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setItems(data);
    setIsLoading(false);
};
useEffect(() => {
    fetchData();
}, []);
</pre>
</code>

- So we can write this code in a seperate component which takes URL as a prop
- One thing that should be taken care of is the useEffect should be called on URL change and not on first load
- <code>
<pre>
import { useState, useEffect } from 'react';

export const MyFetchHook = ({ URL }) => {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	const fetchData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		setItems(data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, [URL]);

	return { items, isLoading };
};
</pre>
</code>
In this way we can create a custom component and call it using
<code>const { items, isLoading } = MyFetchHook({ URL });</code>

## 12. Prop Types
- Whenever we call an api and get an array of objects in return and suppose we want to map that prop to some component
- There might be missing data in our list
- Normally if there is missing data then it will show a blank field since the component did not recieve any prop so it cannot display it.
- We want to tackle this however more important is when the component is expecting an object and printing the data from inside that object
<code>
<pre>
export const data = [
	{
		name: 'Molecule Man',
		age: 29,
		secretIdentity: 'Dan Jukes',
		other: {
			powers: 'Million Tonne Punch'
		}
	},
	{
		name: 'Madame Uppercut',
		age: 39,
		secretIdentity: 'Jane Wilson',
		other: {
			powers: 'Million Tonne Punch'
		}
	},
	{
		name: 'Rahul',
		age: 24,
		secretIdentity: 'Rahzzz'
	}
];
</pre></code>

- Suppose our data is as shown above and the prop destructuring is 
<code>{name, age, secretIdentity, other}</code>

- Now if we try to map other.powers it will give error for third data point, because we are trying to access inner property of an object when the object itself is not there
- To tackle this issue we have a default React inbuilt prop types
- So where we are distructuring the props we can write
<code>
<pre>
PropTypesDetails.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	secretIdentity: PropTypes.string.isRequired,
	other: PropTypes.object.isRequired
};
</pre></code>

- To tackle this we have 2 possible solutions
  - Default Props
    <code>
	<pre>
	PropTypesDetails.defaultProps = {
		name: 'John Doe',
		age: 30,
		secretIdentity: 'Unknown',
		other: { powers: 'Unknown' }
	};
	</pre>
	</code>
  - Second way will be to use OR operator 
    <code>
	<pre>
	<div className="item">
		<h4>{name || 'John Doe'}</h4>
		<h4>{age || '30'}</h4>
		<h4>{secretIdentity || 'Unknown'}</h4>
		<h4>{(other && other.powers) || 'unknown'}</h4>
	</div>
	</pre>
	</code>


## 13. React rouer Dom
```npm install react-router-dom ```<br/>
If you want to save it in the dependencies then use ```npm install react-router-dom --save```<br/>


```
<Router>
	<Routes>
		<Route exact path="/" element={<Home />} />
		<Route exact path="/Mapping" element={<BookList />} />
		<Route exact path="/usestate" element={<ChangeTitle />} />
		<Route exact path="/usestate2" element={<DeletePeople />} />
		<Route exact path="/counter" element={<Counter />} />
		<Route exact path="/useeffect" element={<UseEffect />} />
		<Route exact path="/fetchdata" element={<FetchData />} />
		<Route exact path="/conditionalrending" element={<ConditionalRendering />} />
		<Route exact path="/phonebook" element={<PhoneBook />} />
		<Route exact path="/largeform" element={<LargeForm />} />
		<Route exact path="/useRefUseCase" element={<UseRefUseCase />} />
		<Route exact path="/useReducer" element={<UseReducer2 />} />
		<Route exact path="/propDrilling" element={<PropDrilling />} />
		<Route exact path="/useContext" element={<UseContext />} />
		<Route exact path="/customHooks" element={<CustomHooks />} />
		<Route exact path="/propTypes" element={<PropTypes />} />
		<Route path="*" element={<Home />} />
	</Routes>
</Router>
```

# Advanced react

## 14. Passing parameters in URL
STEPS:<BR/>
1. Declare proper Route in index.js or whereever router is called
	<code>
	```
		<Route exact path="dynamicRoute" element={<PassingParameters />} />	
		<Route path="/person/:id" element={<PersonDetails />} />
	```
	</code>
2. According to this dynamicRoute takes us to a component which shows list of items and then we want to click on that link and go to that person's details
3. In the person component do the dynamic routing
	```
		{data.map((person) => {
			return (
				<div className="item" key={person.id}>
					<h4>{person.title}</h4>
					<Link to={`/person/${person.id}`}>
						<button>View Details</button>
					</Link>
				</div>
			);
		})}
	```
4. In the person details component extract id from the URL, id is the name which should be same as the one declared in the Route
	```
	let { id } = useParams();
	```
5. Now inside the component we need to parse it as a Integer because we are passing it as an string

## 15. Caching and optimizations. avoiding rerender a component by using (memo)
**_NOTE_** : Don't go crazy on memoization because it uses a lot of resources and it is not needed most of the times, use it only when you want a list of 10,000 to not render again and again

Consider this case
- Suppose you have a page which has three components
  - First component is a counter which has a count showing and a button to increase and decrease a count
  - Second component is a big list which fetches data from a page and it is biglist because it has 10000 items
  - Third component is the component which shows details of all these 10,000 components

- Suppose we are storing this count inside a useState hook
- Now whenever you increase or decrease a count, this useStates rerenders the page but avoid the state to be lost
- Now although the count increases, the other two components gets rerendered, i.e. all the 10,000 list items and fetched again and all go to the third component and get displayed.
- We dont want to rerender these components unless the data going in those components is changed, this can be achieved by simple steps

TO avoid this rerenders
- Simply wrap the second component definition inside <code>React.memo</code>
- React.memo is the method of react which memoizes the component data and avoids rerender unless the component is changed.
- **Memo is a function which takes the whole component as the input.**

## 16. Advanced caching, avoiding rerender a prop (useCallback hook)
- Suppose we use React.memo on a component
- But we know that a component rerenders when its props are rerendered
- Now consider this situation
  - You have a big list of grocery and you avoided its rerender by using a React.memo function
  - But you are sending it cart value which is declared in the useState hook
  - Now you might want the grocery list to rerender if the cart is updated
  - But you will see that if the counter (which is above the cart) is updated then the state is rerendered, as a result of which cart function is rerendered, because cart is also a state
  - Now since the cart is rerendered the biglist will be rerendered because it takes cart as prop
  - We dont want this
  - So we cant wrap the function which takes the cart in React.useCallback
  - **useCallback is a react function which takes a function as the input.**

## 17. Caching to avoid rerender a function Value (useMemo)
- Suppose we have a list of 10,000 grocery items
- Now we write a function in which we calculate the max price among all the items
- This function might take long to compute
- However we dont want it to render again and again because max will remain the same unless the list of products change
- So we can wrap this function inside useMemo and in the dependency array we can pass the products which makes sure that this function will not get executed unless the products array changes.

<a href="https://www.youtube.com/watch?v=4UZrsTqkcW4&t=100s"> Reference Video </a>