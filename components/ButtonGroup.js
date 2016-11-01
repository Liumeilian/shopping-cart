import React,{Component} from 'react';

export default class ButtonGroup extends Component{

  render(){
    let {count} = this.props
    return(
      <div className="product-group">
        {count>0?<button className="product-btn product-sub" onClick={this.props.subHandler}></button>:""}
        {count>0?<span>{count}</span>:""}
        <button className="product-btn product-add" onClick={this.props.addHandler}></button>
      </div>
    )
  }
}