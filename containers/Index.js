import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartBar from '../components/cart/CartBar';
import {getCartState} from '../reducers/index';

class Index extends Component{

  render(){
    let {count,price} = this.props; 
    return (
      <div>
        <div className="store-name">张姐烤肉拌饭
        </div>
        <div className="store-product" >
          {this.props.children}
        </div>
        <div className="store-cart">
          <CartBar count={count} price={price}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return getCartState(state)
}
export default connect(mapStateToProps)(Index)
