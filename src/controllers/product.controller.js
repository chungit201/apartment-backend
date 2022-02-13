const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const createProduct = catchAsync(async (req, res) => {
  const products = await productService.createProduct(req.body);
  res.json({
    message:"Create product successfully",
    products
  })
});

const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await productService.queryProducts(filter, options);
  res.send(result);
});

const getProduct = catchAsync(async (req, res) => {

  const product = await productService.productById(req.params.productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  res.json(product)
});

const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProductById(req.params.productId, req.body);
  res.json(product);
});

const deleteProduct = catchAsync(async (req, res) => {
  console.log(req.params.productId);
  const product = await productService.deleteProductById(req.params.productId);
  if(!product){
    throw new ApiError(httpStatus.NOT_FOUND,"product not found")
  }
  res.json({
    message:"delete product successfully",
    product:product
  })
});

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
