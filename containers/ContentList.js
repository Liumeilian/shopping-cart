import React, {Component} from 'react';
import {Link} from 'react-router';

import { connect } from 'react-redux';

import ProductType from './ProductType';
import ListItemTag from '../components/ListItemTag'

class ContestList extends Component{

  constructor(props){
    super(props);
    this.productTypeList = [];
    this.typeList = [];
    this.mouseWheelHandler = this.mouseWheelHandler.bind(this);
  }

  componentDidMount(){
    let itemTypeNode = document.querySelectorAll('.list-item-tag');
    let itemTypeList = Array.from(itemTypeNode);
    itemTypeList.map(item =>( 
      item.addEventListener('click',(event => {
          let target = event.currentTarget;
          this.changeActiveType(target);

          let activeType = document.querySelector('.list-item-tag.active');
          let activeTypeId = activeType.dataset.typeid;

          let typeList = this.productTypeList;
          var scrollTop = 0;
          for(let index in typeList){
            if(typeList[index].id != activeTypeId){
              scrollTop+= typeList[index].clientHeight;
            }else{
              break;
            }
          }
          document.body.scrollTop = scrollTop;
        }),false)
      ))

    this.productTypeList = Array.from(document.querySelectorAll('.product-type'));
    this.typeList = Array.from(document.querySelectorAll('.list-item-tag'));
  }

  changeActiveType(activeType){
   
    this.typeList.map(type => type.classList.remove('active'));
    activeType.classList.add('active')
  }

  mouseWheelHandler(event){
    let $target = event.target;

    if($target.classList.contains('type-list')){
      event.preventDefault();
      return;
    }
    let scrollTop = document.body.scrollTop;
    let productTypeList = this.productTypeList;
    for(let i = 0,len = productTypeList.length;i<len;i++){
      if(scrollTop<productTypeList[i].offsetTop){
        let _id = productTypeList[i].id;
        let activeType = document.querySelector(`[data-typeid=${_id}]`)
        if(activeType && !activeType.classList.contains('active')){
          let typeList = document.querySelectorAll('.list-item-tag');
          this.changeActiveType(activeType);
        }
        return;
      }
    }
  }

  render(){
    
    let {allType} = this.props;
    let typeList = [],typeNodeList = [];
    for(let typeId in allType){
      typeList.push({
        typeId:typeId,
        name:allType[typeId].name
      })
      typeNodeList.push(
        <ProductType index={typeId} key={typeId}></ProductType>
      )
    }

    return(
      <div className="main-content" onWheel={this.mouseWheelHandler} onTouchMove={this.mouseWheelHandler}>
        <div className="type-list" >
          <ListItemTag typeList={typeList}></ListItemTag>
        </div>
        <div className="type-content">
          { typeNodeList }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allType:state.product
  }
}

export default connect(mapStateToProps)(ContestList);
