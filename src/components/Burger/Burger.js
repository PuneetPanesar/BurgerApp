import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
const burger=(props)=>{
    
    let transformedIngredients=Object.keys(props.ingredients).map(
    inkey=>{ return [...Array(props.ingredients[inkey])].map((_,i)=>{
          return <BurgerIngredient key={inkey + i} type={inkey} />                                                  
 });
    
    })
    .reduce((arr,el)=>{ return arr.concat(el)},[]);
    //console.log(transformedIngredients);
    if(transformedIngredients.length===0)
     transformedIngredients=<p>add some ingredients please..</p>
        
    
    
    return(
    <div className={classes.Burger}>
        
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        
        </div>
    
    )
    
}
export default burger;