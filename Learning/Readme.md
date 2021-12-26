## React Everything 

### Facts
<ul>
    <li> JS library
    <li> Developed by facebook
    <li> React is all about components
    <li> Components are Independent and reusable 
    <li> Try to keep as many components as possible
</ul>

**_NOTE:_**  Most of the times people dont upload the nodemodules on github since its a massive file, so you need to do <code>npm install</code> to run those apps, what this does is : It goes inside package-json and install all the dependensies listed in there.

### Best Practices
<ul>
    <li> Always when installing dependensies use <code>--save</code> it makes an entry in the package.json file
</ul>

### Starting a new app
<p> Easiest way is to just do <code>npx create-react-app nameOfApp</code></p>
<p> <code>npm start </code> => this runs the development server</p>
<p> <code>npm start </code> => this runs the development server</p>

<br/>
<br/>

#### Folder Structure
<pre>
| ------ node_modules
| ------ public
|           -- index.html
| ------ src
|           -- App.css
|           -- App.js
|           -- index.css
|           -- index.js
| ------ .gitignore
| ------ package.json
| ------ package-lock .json
</pre>
<br/>
<br/>
<ul>
    <li>node_modules => It stores all the dependencies of our project and all the things we need to run our project</li>
    <li> package.json => It store data about the node_modules, i.e. if node_module gets deleted, we simply need to run <code>npm install</code> and it goes into package.json and downloads all the node modules needed for the project to run
    <li> public => Public folder has index.html although we wont use this a lot, but we might want to do some things like editing the title or some other small things
    <li> src => This is the folder we interact with the most throughout our project
</ul>

<pre>
*. public -> index.html     has div#root

*. src -> App.js            has the main function APP
   src -> index.js          It imports app from app.js and renders it inside root div of index.html
</pre>



#### Cleaup the default setup
**_NOTE:_** You can and you should delete all the files from src including index.js

<ul>
    <li> 


































<a href="https://www.youtube.com/watch?v=4UZrsTqkcW4&t=92s"> Ref </a>

