const { Products, User } = require("../models");
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const createProduct = async (userBody) => {
  return Products.create(userBody);
};

const queryProducts = async (filter,options) =>{
  const products = await Products.paginate(filter, options);
  return products;
}

const productById = async (productId) =>{
  console.log(productId);
  const product = Products.findOne({_id:productId})
  if(!product){
    throw new ApiError(httpStatus.NOT_FOUND,"Product not found");
  }
  return product;
}

const updateProductById = async (productId, updateBody) => {
  const product = await productById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

const deleteProductById = async (productId) => {
  console.log(productId);
  const product = await productById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};


module.exports = {
  updateProductById,
  deleteProductById,
  productById,
  createProduct,
  queryProducts,
}
