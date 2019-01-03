import React ,{Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../navigation/Toolbar/Toolbar';
import Sidedrawer from '../navigation/Sidedrawer/Sidedrawer';

class Layout extends Component
{
    state={
        showdrawer:false
    }
    showDrawerHandler=()=>{
        this.setState({showdrawer:true});
    }
    closeDrawerHandler=()=>{
    this.setState({showdrawer:false});    
    }
    
    
    render(){
    return(
          
    <Aux>
    <Sidedrawer opendrawer={this.state.showdrawer} closed={this.closeDrawerHandler} />
    <Toolbar toggle={this.showDrawerHandler}/>
    <main className={classes.content}>
    {this.props.children}
    </main>
    </Aux>
          
          )
      }  
}
    
export default Layout;