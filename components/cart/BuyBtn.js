import React,{Component} from 'react';

class EnableBtn extends Component{
  render(){
    return <button className="buy-btn btn-enable">去结算</button>
  }
}

class DisableBtn extends Component{
  render(){
    return <button className="buy-btn btn-disable">{"10元包邮"}</button>
  }
}

export default class BuyBtn extends Component{
  render(){
    var {count}=this.props;
    return(count>0?<EnableBtn></EnableBtn>:<DisableBtn></DisableBtn>)
  }
}  