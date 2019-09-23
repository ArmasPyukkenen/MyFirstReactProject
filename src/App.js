import React from 'react';
import logo from './logo.svg';
import './normalize.css';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import NewsFeed from './components/NewsFeed/NewsFeed';

const App = (props) => {
    return ( 
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <main className="app-wrapper-content">
                    <Route path="/profile"
                           render={ () => <Profile profileState={props.state.profilePage} dispatch={props.dispatch}/>}
                    />
                    <Route path="/dialogs"
                           render={ () => <Dialogs
                               dialogsState={props.state.dialogsPage}
                               dispatch={props.dispatch}
                           />
                           }
                    />
                    <Route path="/news" component={NewsFeed}/>

                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;