import React,{Component} from 'react';
import BuyBtn from './BuyBtn';
import CartIcon from './CartIcon';
import CartTips from './CartTips';

export default class CartBar extends Component{

  render(){
    let {count,price} = this.props;
    
    return(
      <div className="cart-bar">
        <div className="cart-icon">
          <CartIcon count={count}></CartIcon>
        </div>
        <div className="cart-tips">
            <CartTips price={price}></CartTips>
        </div>
        <div className="cart-button">
          <BuyBtn count={count}></BuyBtn>
        </div>
      </div>
    )
  }
} 
