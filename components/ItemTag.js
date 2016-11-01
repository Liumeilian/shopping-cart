import React, {Component} from 'react';

export default class ItemTag extends Component{

  render(){
    let {active,name,index} = this.props;
    return(
      <li onClick={this.props.clickHandler} data-typeid={`type${index}`} className={active=='active'?'list-item-tag active':'list-item-tag'}>
        <div className="tag-inner">
          <span className="tag-text">{name}
          </span>
        </div>
      </li>
    )
  }
}