import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contactdata from './Contactdata/Contactdata';
import {Route} from 'react-router-dom';

class CheckOut extends Component{
    state={
        ingredients:null,
        totalPrice:0
        
    }
    
    componentWillMount(){
        const query= new URLSearchParams(this.props.location.search);
        const ingredients={};
        let price=0;
        for(let param of query.entries()){
            if(param[0]==='Price'){
                price= +param[1];
            }
            else{
                ingredients[param[0]]=+param[1];
            }
            
        }
        this.setState({ingredients:ingredients,totalPrice:price});
    }
    

    
    
    
    checkoutcancelHandler=()=>{
        this.props.history.goBack();
    }
    
    checkoutcontinueHandler=()=>{
        this.props.history.push("/checkout/contact-data");
    }
    
    render(){
        return(
        <div>
            <CheckoutSummary ingredients={this.state.ingredients}
                            checkoutcancelled={this.checkoutcancelHandler}
                            checkoutcontinue={this.checkoutcontinueHandler}
            />
            
            <Route path="/checkout/contact-data" render={()=><Contactdata 
            ingredients={this.state.ingredients} 
             totalPrice={this.state.totalPrice}/> } />
            </div>
        )
    }
    
}
export default CheckOut;