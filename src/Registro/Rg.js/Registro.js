import React from 'react'
import {BrowserRouter as Router, Route} from  './react-router-dom';
import Home from '../Home';
import Login from '../Login'
import SignUp from '../SignUp';
import { AuthProvider } from '../Auth';
import PrivateRoute from '../PrivateRoute'

const  Lg = ()=>{
    return(
        <AuthProvider>
             <Router>
            <div>
                <PrivateRoute exact path="/" component={Home}></PrivateRoute>
                <Route exact path="/login" componet={Login}></Route>
                <Route exact path="/singup" component={SignUp}></Route>
            </div>
        </Router>
   
        </AuthProvider>
        )
}
 export default Lg;