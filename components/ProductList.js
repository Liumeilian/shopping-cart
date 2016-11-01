import React,{Component} from 'react';
import { connect } from 'react-redux';

import Product from '../Components/Product';
import {getProductType} from "../reducers/index";


export default class ProductList extends Component{
  
  render(){
    let index = this.props.index;
    return(
      <div className="product-type" id={`type${index}`}>
        <h3 className="list-name">{this.props.name}</h3>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
