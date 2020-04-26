import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './SmNav.module.css'


class SmNav extends Component {
    render(){
        return(
            <ul className={styles.oul}>
                <li className={styles.oli}>
                    <NavLink to='/skill' activeClassName={styles.active}>
                        技术区
                    </NavLink>
                </li>
                <li className={styles.oli}>
                    <NavLink to='/life' activeClassName={styles.active}>
                        生活区
                    </NavLink>
                </li>
            </ul>
        )
    }
}
export default SmNav
