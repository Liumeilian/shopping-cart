import React,{Component} from 'react';
import { Link,IndexLink } from 'react-router' 

export default class Tabs extends Component{
  
  render(){
    return(
      <div className="m-menu">
        <div className="m-menuItem">
           <IndexLink to={`/`} activeClassName="active"><span>购物</span></IndexLink> 
        </div>
        <div className="m-menuItem">
          <Link to={`/comment`} activeClassName="active"><span>评论</span></Link> 
        </div>
        <div className="m-menuItem">
          <Link to={`/about`} activeClassName="active"><span>卖家</span></Link> 
        </div>         
      </div>
    )
  }
}
