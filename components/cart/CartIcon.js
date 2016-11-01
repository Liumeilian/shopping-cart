import React,{Component} from 'react';

export default class CartIcon extends Component{
  render(){
    let count = this.props.count;
    return(
      <div className="cart-icon">
        <div className={count>0?"cart-image no-empty":"cart-image empty"}></div>
        {count>0?<div className="product-count">{count}</div>:<div></div>}
      </div>
    )
  }
}