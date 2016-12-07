import React,{Component} from 'react';

export default class ProductList extends Component{
  
  render(){
    let index = this.props.index;
    return(
      <div className="product-type" id={`${index}`}>
        <h3 className="list-name">{this.props.name}</h3>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
