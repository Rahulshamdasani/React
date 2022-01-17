# Bulding redux application of photowall

## S1: Creating a store and connecting component to store
- Build a react app
- Install redux specific packages
  - npm install redux
  - npm install react-redux
- First task is to declare some data, import it to store and pass the store to props
  - Declare the data inside <code>src/UI/data.js</code>
  - Then create a folder named ```redux```
    - It will have 2 files : 
      - reducer
      - store
  - store uses reducer and index.js uses store

**_NOTE_** : At this point you should be able to see the state of store inside the component

## S2 : Render the photowall from the data inside the state
- Simply take the component and css file from react project
- Remove the delete button (this we will handle in later steps)
- Pass the props and display the props  

## S3: Connecting the store to the component
We can connect store to any/all the components, however it is not recommended to connect the store to small components, because it will be difficult to trace the data flow.
- We can connect the store to the component using react-redux library
- <code>import { connect } from 'react-redux'</code>
- <pre style="color:yellow">
    function mapStateToProps(state) {
        return {
            props: state
        };
    }
    </pre>
- Then the last step is, instead of exporting the component as a default, use <br/><code>export default connect(mapStateToProps)(NAME_OF_COMPONENT)</code>

## S4 : Dispatching actions
- First we will create a file named ```actions.js``` inside the redux folder
- This file will contain all the functions that we will be triggered to performa a certain actions