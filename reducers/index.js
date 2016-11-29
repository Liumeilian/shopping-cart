import { combineReducers } from 'redux';
import InitialState from './InitialState';
import * as types from '../constants/actionTypes.js';



function updateProductType(productType,product,callback){
   let productId=product.productId,
       productList=productType.productList;
  return{
    ...productType,productList:callback(productList,productId)
  }
}

function addProductCount(productList,productId){
  return { 
    ...productList,
    [productId]:{
      ...productList[productId],
      count:productList[productId].count+1
    }
  }
}  

function subProductCount(productList,productId){
    return { 
      ...productList,
      [productId]:{
        ...productList[productId],
        count:productList[productId].count>0?productList[productId].count-1:0
      }
    }
}

function product(state=InitialState.allProduct,action){
  
  switch(action.type){
    case types.ADD_PRODUCT:
    {
      let selectProductType = action.productType;
      return { ...state,
        [selectProductType]:updateProductType(state[selectProductType],action.product,addProductCount)
      };
    }
    case types.SUB_PRODUCT:
    {
      let selectProductType = action.productType;
      return { ...state,
          [selectProductType]:updateProductType(state[selectProductType],action.product,subProductCount)
        };
    }
    default:
      return state
  }
}

function addChooseProduct(product,prodect2){
  if(!product){
    return {
      productId:prodect2.productId,
      name:prodect2.name,
      price:prodect2.price,
      count:1
    }
  }else{
    return {
      ...product,
      count:product.count+1
    }
  }
}

function subChooseProduct(product){
  if(product.count>0){
    return{
      ...product,
      count:product.count-1
    }
  }
  return product;
}

function cart(state=InitialState.cart,action){
  let newProduct = action.product;
  
  switch(action.type){
    case types.ADD_PRODUCT:
      if(state.length==0){
        return [...state,{
                productId:action.product.productId,
                name:action.product.name,
                price:action.product.price,
                count:1
              }]
      }else{
        return state.map(obj => {
          if(obj.productId == action.product.productId){
            return {...obj,count:obj.count+1}
          }else{
            return obj
          }
        })
      }
    case types.SUB_PRODUCT:
      return state.map(obj => {
          if(obj.productId == action.product.productId){
            return {...obj,count:obj.count-1}
          }else{
            return obj
          }
        })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  product,
  cart
})

function getSumPrice(chooseProduct){
  return chooseProduct.reduce((prev,cur)=>{return prev+=cur.count*cur.price},0)
}

export default rootReducer;

export function getCartState(state){
  return {
    price:getSumPrice(state.cart),
    count:state.cart.reduce((prev,current)=>{return prev+current.count},0)
  }
}

export function getProductType(state,index){
  var type = state.product[index];
  return {
    name:type.name,
    productList:type.productList
  }
}
