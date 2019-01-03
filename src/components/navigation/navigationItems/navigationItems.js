import React from 'react';
import classes from './navigationItems.module.css';
import NavigationItem from './navigationItem/navigationItem';


const navigationItems=()=>{
  return(
    
      <ul  className={classes.NavigationItems} >
      <NavigationItem link="/" exact>Burger Buider</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      </ul>
      
      )
}
export default navigationItems;