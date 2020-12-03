import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './styles.scss';

const Navigation = () => {

    return (
        <nav className="Nav">
            <h1 className="Logo">ZXC</h1>
            <ul className="Nav-List">
                <li className="Nav-List__item" >
                    <NavLink to="/add-user">add user</NavLink>
                </li>
                <li className="Nav-List__item">
                    <NavLink to="/user-list">user-list</NavLink>
                </li>
                <li className="Nav-List__item">
                    <NavLink to="/about-me">about me</NavLink>
                </li>

            </ul>




        </nav>

    )

};
export default Navigation;