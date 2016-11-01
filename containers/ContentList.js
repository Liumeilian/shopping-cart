import React, {Component} from 'react';
import {Link} from 'react-router';

import { connect } from 'react-redux';

import ProductType from './ProductType';
import ListItemTag from './ListItemTag'

class ContestList extends Component{

  mouseWheelHandler(event){
    event.stopPropagation();
  }
  handler(event){
    console.log(event)
  }

  render(){
    
    let allProduct = this.props.allProduct;
    let typeList = allProduct.map(product=>{return {name:product.name,active:product.active}})
    return(
      <div className="main-content">
        <div className="type-list" onMouseDown={this.handler} onWheel={this.mouseWheelHandler} >
          <ListItemTag ></ListItemTag>
        </div>
        <div className="type-content">
          {
            allProduct.map((product,key)=>{
              return <ProductType index={key} key={key}></ProductType>
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allProduct:state.product
  }
}

export default connect(mapStateToProps)(ContestList);
