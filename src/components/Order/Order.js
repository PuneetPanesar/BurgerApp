import React from 'react';
import classes from './Order.module.css';
const order=(props)=>{

    const orderingredients=[ ];
    
    for(let ingredientName in props.ingredients)
    {
        orderingredients.push({
            name:ingredientName,
            amount:props.ingredients[ingredientName]
        })
    }
    
  const showIngredients=orderingredients.map(item=>{
      return <span key={item.name}  
      style={{textTransform:"capitalize",
               margin:'0 4px',
             display:"inline-block",
            boxShadow:"0 2px 3px #ccc",
            padding:"5px"}}>
         {item.name}({item.amount})
          </span>
          
  });
    
    return (
        <div className={classes.Order}>
    <p>Ingredients:{showIngredients}</p>
         <p>Price:<strong>Rs.{props.price}</strong></p>
        </div>
    )
    
}
export default order;