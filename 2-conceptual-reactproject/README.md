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