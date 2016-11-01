import React,{Component} from 'react';
import { connect } from 'react-redux';

import Product from '../Components/Product';
import ProductList from '../Components/ProductList';

import {addProductToCarts,removeProductFromCart} from '../actions/index';
import {getProductType} from "../reducers/index";


class ProductType extends Component{
  
  render(){
    let {name,productList,index} = this.props;
    return(
      <ProductList name={name} index={index}>
        {productList.map((product,key)=>
            <Product 
              content = {product} 
              addHandler={()=>this.props.addProductToCarts(product)} 
              subHandler={()=>this.props.removeProductFromCart(product)}
              key={key} />
        )}
      </ProductList>
    )
  }
}


function mapStateToProps(state,ownProps) {
  return getProductType(state,ownProps.index)
}

export default connect(mapStateToProps,
  {addProductToCarts,removeProductFromCart})(ProductType);