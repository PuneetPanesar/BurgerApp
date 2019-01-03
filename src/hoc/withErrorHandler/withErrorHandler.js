import React,{Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/Burger/UI/Modal/Modal';
const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        
    state={
        error:null
    }
    
    componentDidMount(){
          
       axios.interceptors.request.use(req=>req,error=>{
            this.setState({error:null})
        });
        
       axios.interceptors.response.use(res=>res,error=>{
          this.setState({error:error})
          console.log(error);
           
       }); 
        
    }
    errorHandledConfirmed=()=>{
        this.setState({error:null})
    }    
    
        
    render(){
        
    return(
            
    <Aux>
    <Modal show={this.state.error} modalCancel={this.errorHandledConfirmed}>
    {this.state.error?this.state.error.message:null}
    </Modal>
    <WrappedComponent  {...this.props} />   
    </Aux>
            )
        }
       
    }
    
}
export default withErrorHandler;    
    
