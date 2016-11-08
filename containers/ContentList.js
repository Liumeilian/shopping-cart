import React, {Component} from 'react';
import {Link} from 'react-router';

import { connect } from 'react-redux';

import ProductType from './ProductType';
import ListItemTag from '../components/ListItemTag'

class ContestList extends Component{


  changeActiveType(activeType){
    let typeList = document.querySelectorAll('.list-item-tag');
    for(let type of typeList){
      type.classList.remove('active');
    }
    activeType.classList.add('active')
  }

  mouseWheelHandler(event){
    let $target = event.target;

    if($target.classList.contains('type-list')){
      event.preventDefault();
      return;
    }
    var scrollTop = document.body.scrollTop;
    let productTypeList = document.querySelectorAll('.product-type');
    for(let type of productTypeList){
      if(scrollTop<type.offsetTop){
        var _id = type.id;
        var activeType = document.querySelector(`[data-typeid=${_id}]`)
        if(activeType && !activeType.classList.contains('active')){
          let typeList = document.querySelectorAll('.list-item-tag');
          this.changeActiveType(activeType);
        }
        return;
      }
    }
  }

  clickHandler(event){
    let $target = event.target;
    let $parentNode = $target.parentNode;
    if($target.classList.contains('list-item-tag')){
      this.changeActiveType($target);
    }else if($parentNode.classList.contains('list-item-tag')){
      this.changeActiveType($parentNode);
    }else if($parentNode.parentNode.classList.contains('list-item-tag')){
      this.changeActiveType($parentNode.parentNode);
    } 
  }

  render(){
    
    let allProduct = this.props.allProduct;
    let typeList = allProduct.map(product=>{return {name:product.name,active:product.active}})

    return(
      <div className="main-content" onWheel={this.mouseWheelHandler} onTouchMove={this.mouseWheelHandler}>
        <div className="type-list" onClick={this.clickHandler.bind(this)}>
          <ListItemTag typeList={typeList}></ListItemTag>
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
