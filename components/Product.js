import React, {Component} from 'react';
import ButtonGroup from './ButtonGroup';

class Product extends Component{
  componentDidMount(){

  }
  componentDidUpdate(){
    
  }
  render(){
    var {content,addHandler,subHandler} = this.props;
    return(
      <div className="food-content">
          <div className="food-pic">
            <img src={content.img} alt=""/>
          </div>
          <div className="food-cont">
            <div className="food-name">
              {content.name}
            </div>
            <div className="food-desc">
              {content.desc}
            </div>
            <div className="food-cont-sub1">
              <span>{'月售'+content.contSub.sellCount+'份'}</span>
              <span>{'点赞'+content.contSub.upvote}</span>
            </div>
            <div className="food-add">
              <ButtonGroup count={content.count} addHandler={this.props.addHandler} subHandler={this.props.subHandler}></ButtonGroup>
            </div>
            <div className="food-price">
              <i>¥</i><span>{content.price}</span>
            </div>
          </div>
      </div>
    )
  }
}

export default Product;