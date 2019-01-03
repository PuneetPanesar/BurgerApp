import React from 'react';
import classes from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../navigationItems/navigationItems';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import BackDrop from '../../Burger/UI/BackDrop/BackDrop';


const sidedrawer=(props)=>{
    let attachedClasses=[classes.Sidedrawer,classes.Close];
    if(props.opendrawer){
        attachedClasses=[classes.Sidedrawer,classes.Open];
    }
    
    return(
        <Aux>
        <BackDrop show={props.opendrawer} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav>
        <NavigationItems/>
        </nav>
        </div>
        </Aux>
    )
}
export default sidedrawer;