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
<pre>
    const defaultState = {
		allNames: [],
		isModalOpen: false,
		modalContent: ''
	};

</pre>
- Then we create a reducer function, it basically handles all the cases that we might encounter
<pre>
    '''const reducerFunction = (state, action) => {
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
	};'''
</pre>
- Then we initialize the reducer with this function and default state
<pre>
'''
const [ state, dispatch ] = useReducer(reducerFunction, defaultState);
'''
</pre>
- Then in handle submit we simply dispatch the function calls
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

## 10. Prop Drilling
