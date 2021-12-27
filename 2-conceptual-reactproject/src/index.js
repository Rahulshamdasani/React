import React from 'react'
import ReactDOM from 'react-dom'
import BookList from './components/BookList'
import ChangeTitle from './ChangeTitle'
import DeletePeople from './components/DeletePeople'
import {BrowserRouter as Router, Routes, Route, Link, NavLink, Switch} from 'react-router-dom'
// css
import './index.css'

function Index(){
    return (
        <Router>

                <Routes>
                <Route exact path="/" element={<BookList/>}/>
                <Route exact path="/usestate" element={<ChangeTitle/>}/>
                <Route exact path="/usestate2" element={<DeletePeople/>}/>
                <Route exact path="/recovery-password" element={<BookList/>}/>
                <Route path="*" element={<BookList/>}/>
                </Routes>

    </Router>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))