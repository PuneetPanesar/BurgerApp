import React,{Component} from 'react';
import classes from './Contactdata.module.css';
import Button from '../../../components/Burger/UI/Button/Button';
import axios from '../../../axios-orders';
import Input from '../../../components/Burger/UI/Input/Input';


class Contactdata extends Component{
    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:''   
                 },
            mail:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your E-mail'
                },
                value:''
            },
            
            street:{
                 elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:''
            },
            pinCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'PinCode'
                },
                value:''
            },
            Delivery:{
                elementType:'select',
                elementConfig:{
                    options:[{value:'fastest',displayValue:'Fastest'},
                             {value:'cheapest',displayValue:'Cheapest'}
                               ]
                },
                value:'fastest'
             }  
        },
        loading:false
    }
        
    changedHandler=(event,formIndentifier)=>{
        const updatedform={...this.state.orderForm};
        const  updatedformElements={...updatedform[formIndentifier]};
        updatedformElements.value=event.target.value;
        updatedform[formIndentifier]=updatedformElements;
        this.setState({orderForm:updatedform});
    }
    
    
    orderHandler=(event)=>{
        event.preventDefault();
        const orderData={};
        for(let order in this.state.orderForm){
            orderData[order]=this.state.orderForm[order].value;
        }
         const orders={
           ingredients:this.props.ingredients,
           price:this.props.totalPrice,
           customer:orderData     
             
       }
       this.setState({loading:true});
        
   
       axios.post('/orders.json',orders).then(
       response=>{
           this.setState({loading:false});
       }
       )
       .catch(error=> {
           this.setState({loading:false})
       }
             ); 
        
        
    }
    
    render(){
       
    const formElements=[];
        for(let key in this.state.orderForm){
            formElements.push({
               id:key,
                config:this.state.orderForm[key]
            });
        }
        
        
        
        
       return(
           <div className={classes.Contactdata}>
           <h3>Enter Your Data</h3>
          <form onSubmit={this.orderHandler} >
           {formElements.map(formElement=>{
           return <Input  key={formElement.id} 
                        elementType={formElement.config.elementType}
                         elementConfig={formElement.config.elementConfig}
                         value={formElement.config.value}
                        changed={(event)=>this.changedHandler(event,formElement.id)}
           />
           })}
           <Button  btnType="Success">ORDER</Button>
           
           </form>
           </div>
       ) 
    }
}
export default Contactdata;