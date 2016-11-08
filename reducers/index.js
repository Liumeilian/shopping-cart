import { combineReducers } from 'redux';
import InitialState from './InitialState';
import * as types from '../constants/actionTypes.js';

function findSameProduct(chooseProductList,needFindProduct){
  return chooseProductList.find(product=> {return product.name == needFindProduct.name});
}

function getSumPrice(chooseProduct){
  return chooseProduct.reduce((prev,cur)=>{return prev+=cur.count*cur.price},0)
}

function product(state=InitialState.allProduct,action){

  switch(action.type){
    case types.ADD_PRODUCT:
    {  let newState = [];
      state.map(type => {
        let newType = Object.assign({},type);
        newType.productList = [];
        type.productList.map(product=>{
          var object = Object.assign({},product);
          if(object.name == action.product.name){
            object.count++;
          }
          newType.productList.push(object);
        })
        newState.push(newType);
      })
      return Object.assign([],newState); 
    }
    case types.SUB_PRODUCT:
    {
      let newState = [];
      state.map(type => {
        let newType = Object.assign({},type);
        newType.productList = [];
        type.productList.map(product=>{
          var object = Object.assign({},product);
          if(object.name == action.product.name){
            object.count--;
          }
          newType.productList.push(object);
        })
        newState.push(newType);
      })
      return Object.assign([],newState);
    }
    default:
      return state
  }
}

function cart(state=InitialState.cart,action){
  let newProduct = action.product;
  
  switch(action.type){
    case types.ADD_PRODUCT:
    { 
      let copyList = Object.assign([],state.chooseProduct);
      let findProduct = findSameProduct(copyList,newProduct)
      var needAddProduct = {
        name:newProduct.name,
        price:newProduct.price,
        count:(findProduct&&findProduct.count||0)+1
      }
      let findIndex = copyList.findIndex(product=>{return product.name==newProduct.name});
      findIndex>=0?copyList.splice(findIndex,1,needAddProduct):copyList.push(needAddProduct);
      
      return Object.assign({},state,{
        sumPrice:getSumPrice(copyList),
        chooseProduct:copyList
      })
    }
    case types.SUB_PRODUCT:
    { 
      
      let copyList = Object.assign([],state.chooseProduct);
      let findProduct = findSameProduct(copyList,newProduct)
      if(findProduct.count>1){
        findProduct--;
      }else{
        let findIndex = copyList.findIndex(product=>{return product.name==newProduct.name});
        copyList.splice(findIndex,1)
      }
      return Object.assign({},state,{
        sumPrice:getSumPrice(copyList),
        chooseProduct:copyList
      })
    }
    default:
      return state
  }
}



const rootReducer = combineReducers({
  product,
  cart
})

export default rootReducer;

export function getCartState(state){
  return {
    price:state.cart.sumPrice,
    count:state.cart.chooseProduct.reduce((prev,current)=>{return prev+current.count},0)
  }
}

export function getProductType(state,index){
  var type = state.product[index];
  return {
    name:type.name,
    productList:type.productList
  }
}
