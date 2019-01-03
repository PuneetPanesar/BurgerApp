import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const buildcontrols=(props)=>{
    
    const controls=[
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
        {label:'Salad',type:'salad'}
        
    ];
    
 return(
 <div className={classes.buildcontrols}>
     <p>Current Price Rs:{props.price}</p>
     {controls.map(ctrl=> 
     {
     return(
       <BuildControl
                    key={ctrl.type}
                    label={ctrl.label}
                     added={()=>props.addIngredient(ctrl.type)}
                    removed={props.removeIngredient.bind(this,ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
       /> 
            )
     })
    }
 <button className={classes.OrderButton} 
 disabled={!props.purchasable}
    onClick={props.purchasing}
     >ORDER NOW</button>    
</div>
 
 )   
}
export default buildcontrols;