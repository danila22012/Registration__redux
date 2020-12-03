import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { Component } from "react";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Navigation from "../Navigation/Navigation";
import UserList from "../../Containers/UserList/UserList";
import Registration from '../Registration/Registration';
import AboutMe from '../../Containers/AboutMe/AboutMe';
import styles from './styles.scss';

import { Provider } from 'react-redux'
import { store } from '../../store'

export default class App extends Component {

    render() {
        return (
            // провайдер для ридакса
            <Provider store={store}> 
                <Router>
                    {/* //обернул в роут чтобы доставть локацию, а слокации айдишник для отрисовки с анимацией */}
                    <Route render={({ location }) => (
                        
                        <>

                            <Route path="/">
                                <Redirect to="/add-user" />
                            </Route>

                            <Navigation />   {/* Возвращает список ссылок, которые меняют юрл */}

                        {/* анимация роутинга */}
                            <TransitionGroup>
                                <CSSTransition 
                                    timeout={300}
                                    classNames='page'
                                    key={location.key} //подставил тут айдишник который вытащил с локации
                                >
                                    <Switch>
                                        {/* роут отвечает за отрисовку компонента, то есть когда в юрл нужный, рисует компонент */}
                                        <Route path="/add-user">

                                            <Registration />

                                        </Route>
                                        <Route path="/user-list">
                                            <UserList />
                                        </Route>
                                        <Route path="/about-me"><AboutMe /></Route>

                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </>
                    )} />
                </Router>
            </Provider>

        );
    }
}
