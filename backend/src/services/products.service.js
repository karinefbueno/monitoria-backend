const { productsModel } = require('../models');

// const deleteProductById = async (productId) => {
//   const product = await producValidate.productExist(productId);
//   if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
//   await productsModel.deleteProduct(productId);
//   return { status: 'NO_CONTENT' };
// };

const findAll = async () => {
  const products = await productsModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
};

const findById = async (productId) => {
  const product = await productsModel.findById(productId);

  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
};

const create = async ( {name} ) => {
  const productId = await productsModel.insertProduct(name);
  const newProduct = { id: productId, name };
  return { status: 'CREATED', data: newProduct };
};

const update = async (productId, name) => {
  const product = await producValidate.productExist(productId);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  await productsModel.updateProduct(productId, { name });
  const updatedProduct = await productsModel.findById(productId);
  return { status: 'SUCCESSFUL', data: updatedProduct };
};

module.exports = {
  findAll,
  findById,
  create,
  update,
};
