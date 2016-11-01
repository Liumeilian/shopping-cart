import React, {Component} from 'react';

class ProductDetail extends Component{
  render(){
    var name = this.props.params.name
    return <h1>{name}不好吃</h1>
  }
}

export default ProductDetail;