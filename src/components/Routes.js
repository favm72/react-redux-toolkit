import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import Menu from './Menu';
import Comment from './Comment'

const Routes = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="mycontainer">
                <div className="pagecontent">
                    <Switch>
                        <Route path='/home' component={ Main } />
                        <Route path='/posts' component={ Menu } />
                        <Route path='/comments' component={ Comment } />                      
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Routes
