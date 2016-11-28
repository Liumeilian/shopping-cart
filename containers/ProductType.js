import React,{Component} from 'react';
import { connect } from 'react-redux';

import Product from '../Components/Product';
import ProductList from '../Components/ProductList';

import {addProductToCarts,removeProductFromCart} from '../actions/index';
import {getProductType} from "../reducers/index";


class ProductType extends Component{
  
  render(){
    let {name,productList,index} = this.props;
    let productNodeList = [];
    for(let proId in productList){
        let product = productList[proId]
        productNodeList.push(
          <Product 
          content = {product} 
          addHandler={()=>this.props.addProductToCarts(product)} 
          subHandler={()=>this.props.removeProductFromCart(product)}
          key={proId}
          />
        )
    }
    return(
      <ProductList name={name} index={index}>
        { productNodeList }
      </ProductList>
    )
  }
}


function mapStateToProps(state,ownProps) {
  return getProductType(state,ownProps.index)
}

export default connect(mapStateToProps,
  {addProductToCarts,removeProductFromCart})(ProductType);