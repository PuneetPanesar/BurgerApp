import React  from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../UI/Button/Button';

const ordersummary=(props)=>{
    
const ordered=Object.keys(props.ingredients)
.map(igkey =>{
    
    return (<li key={igkey}><span style={{textTransform:'capitalize'}}>
     {igkey}</span> : {props.ingredients[igkey]}</li>)
           
}
    
    );
return(
<Aux>
    <h3>Your Order</h3>
    <p>ingredients are as following</p>
    <ul>
    {ordered}
    </ul>
    <p><strong>Total Price: Rs.{props.price}</strong></p>
    <p>Continue to checkout?</p>
    <Button  btnType="Danger" clicked={props.cancelled}>CANCEL</Button>
    <Button btnType="Success" clicked={props.continued} >CONTINUE</Button>
    </Aux>


    )



}

export default ordersummary;