import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../navigationItems/navigationItems';
import Toggledrawer from '../Toggledrawer/Toggledrawer';

const toolbar=(props)=>{
    return(
    <div className={classes.Toolbar}>
   <Toggledrawer toggle={props.toggle}/>
    <Logo/>
    <nav className={classes.Displaynone}>
        <NavigationItems/>
        </nav>
    </div>
        )
}
export default toolbar;