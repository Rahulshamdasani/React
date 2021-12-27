import React from 'react'
import ReactDOM from 'react-dom'
import BookList from './components/BookList'
import ChangeTitle from './components/ChangeTitle'
import DeletePeople from './components/DeletePeople'
import Home from './components/Home'
import Layout from './components/Layout'
import UseEffect from './components/UseEffect'
import FetchData from './components/FetchData'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// css
import './index.css'
import Counter from './components/Counter'

function Index(){
    return (
        <div>
            <Layout/>
            <Router>

                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Mapping" element={<BookList/>}/>
                <Route exact path="/usestate" element={<ChangeTitle/>}/>
                <Route exact path="/usestate2" element={<DeletePeople/>}/>
                <Route exact path="/counter" element={<Counter/>}/>
                <Route exact path="/useeffect" element={<UseEffect/>}/>
                <Route exact path="/fetchdata" element={<FetchData/>}/>
                <Route path="*" element={<BookList/>}/>
                </Routes>

            </Router>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))