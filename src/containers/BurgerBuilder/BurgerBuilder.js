import React,{Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Burger/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/Burger/UI/Spinner/Spinner'; 
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE={
   salad: 5,
    cheese: 8,
    meat: 45,
    bacon: 35 
}
 
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
        , 
        totalprice:20,
        purchasable:false,
        purchasing:false,
        loading:false
    }
   
    
    updatePurchase(ingredients){
        
      const sum= Object.keys(ingredients)
      .map(igkey=>{ 
      return( ingredients[igkey])
      })
        .reduce((sum,el)=>{
            return (sum+el)
            
        },0);
        this.setState({purchasable:sum>0});
    }
    
    
    addIngredientHandler=(type)=>{
        
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount+1;
        const oldPrice=this.state.totalprice;
        const newPrice=oldPrice + INGREDIENTS_PRICE[type];
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=newCount;
        this.setState({ingredients:updatedIngredients,totalprice:newPrice});
        this.updatePurchase(updatedIngredients);
    }
    
    removeIngredientHandler=(type)=>{
        
        const oldCount2=this.state.ingredients[type];
        if(oldCount2<=0){
            return;
        }
        const newCount2=oldCount2-1;
        const oldPrice2=this.state.totalprice;
        const newPrice2=oldPrice2 - INGREDIENTS_PRICE[type];
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=newCount2;
        this.setState({ingredients:updatedIngredients,totalprice:newPrice2});
        this.updatePurchase(updatedIngredients);
    }
    
    purchasingHandler=()=>{
        this.setState({purchasing:true});
    }
    
    modalCancelHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=()=>{
        //console.log(this.props);
        this.props.history.push("/checkout");
        /*this.setState({purchasing:true});
        //alert("You Continued");
      */
        
        
        
        const queryParams=[ ];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.ingredients[i]));
            
        }
        queryParams.push('Price='+this.state.totalprice);
        const queryString=queryParams.join('&');
        this.props.history.push({
            pathname:"/checkout",
            search:"?" + queryString
            
        });
       
    }
    
    
    render()
    {
       const disabledinfo={
           ...this.state.ingredients
       } 
       for(let key in disabledinfo){
          disabledinfo[key]= disabledinfo[key]<=0;
       }
       // let confirmed=(this.state.count!==initialcount? console.log('order confirmed'):null);
        
        let ordersummary= (<OrderSummary ingredients={this.state.ingredients}
        cancelled={this.modalCancelHandler}
        continued={this.purchaseContinueHandler}
        price={this.state.totalprice}
        />
        
                          );
        if(this.state.loading)
            {
             ordersummary=<Spinner/>   
            }
             
            
        
    return(
    <Aux>
        <Modal show={this.state.purchasing} modalCancel={this.modalCancelHandler}>
        {ordersummary}
        </Modal>
     <Burger ingredients={this.state.ingredients}/>
     <BuildControls  addIngredient={this.addIngredientHandler} 
        removeIngredient={this.removeIngredientHandler}
        disabled={disabledinfo}
        price={this.state.totalprice}
        purchasable={this.state.purchasable} 
        purchasing={this.purchasingHandler}/>
        
     </Aux>
    )
    
    }
    
}
export default withErrorHandler(BurgerBuilder,axios);