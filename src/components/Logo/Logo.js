import React from 'react';
import LogoImg from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';
const logo=()=>{
    return(
        <div className={classes.Logo}>
        <img src={LogoImg} alt="burger"/>
        </div>
    )
    
}
export default logo; 