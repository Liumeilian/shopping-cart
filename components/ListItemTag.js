import React, {Component} from 'react';
import { connect } from 'react-redux';

import ItemTag from "../components/ItemTag";
import {changeActiveType} from '../actions/index';

export default class ListItemTag extends Component{

  render(){
    let {typeList} = this.props;
    return(
        <ul>
          {
            typeList.map((type,key)=>{
              return <ItemTag name={type.name} active={key==0?'active':''} index={key} key={key} />
            })
          }
        </ul>
    )
  }
}
