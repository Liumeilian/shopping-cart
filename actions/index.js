import * as types from '../constants/actionTypes';

export function addProductToCarts(product){
  return {
    type:types.ADD_PRODUCT,
    product:product,
    productType:product.type
  }
}

export function removeProductFromCart(product){
  return{
    type:types.SUB_PRODUCT,
    product:product,
    productType:product.type
  }
}

export function changeActiveType(typeName){
  return{
    type:types.CHANGE_ACTIVE_TYPE,
    name:typeName
  }
}