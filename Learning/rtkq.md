# Setup

- Make sure you have redux and redux toolkit installed
- For reference you can https://redux-toolkit.js.org/tutorials/rtk-query


## What it offers
- rtkq is a query library for redux toolkit it basically fetches and caches data from the server to support faster development
- It gives createApi() function which will create a redux api
- If you donot have redux store then you can wrap around apiProvider


## Setting up the codebase
- If redux is not installed then do <code>npm add redux react-redux next-redux</code>
- If toolkit is not istalled then do <code>npm install @reduxjs/toolkit</code>

- ## Create a folder called services or anything you want to name it
- ## Creating the api inside the folder services
  - create a file named <code>YOUR_FILE_NAME.js</code>
  - What we do in this file is : 
    - create an api
    - give reducer path same as file name it will be used in the store
    - give base query
    - above three things will be used only once but the remaining endpoints can be multiple

  - Creating an end point
    - There are two main types of end points
      - one is for fetch which is name query
      - Another is for post/patch/delete which is named mutation
    - For fetch end point
      - we may give a parameter name as shown below or we can skip it

    <pre style="color:gold">
    import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react
    // Define a service using a base URL and expected endpoints
    
    
    export const YOUR_FILE_NAME = createApi({
    reducerPath: 'YOUR_FILE_NAME',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    
    endpoints: (builder) => ({
        FETCH_MY_DATA: builder.query({
        query: (name) => `pokemon/${name}`,
        }),
    }),
    })

    export const {
        useFETCH_MY_DATAQuery
    } = YOUR_FILE_NAME
    </pre>


- ## Creating the store
  -  Create a store file named <code>store.js</code>
    -  import the api file in the store file
    -  import the configure store and setupListener from redux toolkit

    <pre style="color:gold">
    import { configureStore } from '@reduxjs/toolkit'
    // Or from '@reduxjs/toolkit/query/react'
    import { setupListeners } from '@reduxjs/toolkit/query/react'
    import { YOUR_FILE_NAME } from './services/pokemon'

    export const store = configureStore({
    reducer: {
        [YOUR_FILE_NAME.reducerPath]: YOUR_FILE_NAME.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(YOUR_FILE_NAME.middleware),
    })

    // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
    // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
    setupListeners(store.dispatch)
    </pre>


- ## Wrapping the app with the store we just created
  - Go to app.js or wherever you have your app
    - import the store that just created
    - import the provider
      - <code> import { Provider as ReduxProvider } from 'react-redux' </code>
    - wrap the app with the ReduxProvider
      - <code> <ReduxProvider store={store} .> ...</ReduxProvider>.. </ ReduxProvider </code>

- ## At this point you should not have any error in website or console.
- ## Using the hook
  - import {useFETCH_MY_DATAQuery} from './services/YOUR_FILE_NAME'
    - <code> const {data, error, isLoading, isFetching, isSuccess} = useFETCH_MY_DATAQuery('pikachu') </code>
  - You get al the above specified properties with the hook created by toolkit. so directly start using it.

  