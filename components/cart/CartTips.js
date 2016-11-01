import React,{Component} from 'react';

class TipText extends Component{
  render(){
    let price = this.props.price;
    return(
      <div>
        <div className="price-text">￥{price}</div>
        <div className="price-desc">邮费2元</div>
      </div>
    )
  }
}

export default class  CartTips extends Component{
  render(){
    let price = this.props.price||0;
    return(
     price>0?<TipText price={price}></TipText>: <div className="empty-text">购物车空空如也~</div>
    )
  }
}