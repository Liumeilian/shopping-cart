import React, {Component} from 'react';
import { connect } from 'react-redux';

import ItemTag from "../components/ItemTag";
import {changeActiveType} from '../actions/index';

class ListItemTag extends Component{

  componentDidUpdate(){
     let activeType = document.querySelector('.list-item-tag.active');
     let activeTypeId = activeType.dataset.typeid;
     let typeList = document.querySelectorAll('.product-type');
     var scrollTop = 0;
     for(let index in typeList){
      if(typeList[index].id != activeTypeId){
        scrollTop+= typeList[index].clientHeight;
      }else{
        break;
      }
     }
     document.body.scrollTop = scrollTop;
  }

  render(){
    let {typeList} = this.props;
    return(
        <ul>
          {
            typeList.map((type,key)=>{
              return <ItemTag name={type.name} active={type.active} index={key} key={key} clickHandler={()=>this.props.changeActiveType(type.name)}/>
            })
          }
        </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    typeList:state.type
  }
}

export default connect(mapStateToProps,
  {changeActiveType})(ListItemTag);