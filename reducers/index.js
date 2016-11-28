import { combineReducers } from 'redux';
import InitialState from './InitialState';
import * as types from '../constants/actionTypes.js';

function findSameProduct(chooseProductList,needFindProduct){
  return chooseProductList.find(product=> {return product.productId == needFindProduct.productId});
}

function getSumPrice(chooseProduct){
  return chooseProduct.reduce((prev,cur)=>{return prev+=cur.count*cur.price},0)
}

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

function changeChooseProduct(product){
  if(!product){
    return {
      name:product.name,
      price:product.price,
      count:1
    }
  }else{
    return {
      ...product,
      count:product+1
    }
  }
}

function cart(state=InitialState.cart,action){
  let newProduct = action.product;
  
  switch(action.type){
    case types.ADD_PRODUCT:
    { 
      let copyList = Object.assign([],state.chooseProduct);
      let findProduct = findSameProduct(copyList,newProduct)
      var needAddProduct = 
      let findIndex = copyList.findIndex(product=>{return product.name==newProduct.name});
      findIndex>=0?copyList.splice(findIndex,1,needAddProduct):copyList.push(needAddProduct);
      
      return Object.assign({},state,{
        chooseProduct:copyList
      })
      return [
        ...state,
        changeChooseProduct(findSameProduct(state,action.product))
      ]
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
    price:getSumPrice(state.cart.chooseProduct),
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
