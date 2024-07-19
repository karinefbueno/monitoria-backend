// const camelize = require('camelize');
const connection = require('./connection');

const deleteProduct = async (productsId) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [productsId]);
};

const findAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products;');
  return products;
};

const findById = async (productsId) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [[product]] = await connection.execute(query, [productsId]);
  return product;
};

const insertProduct = async (name) => {
  const query = 'INSERT INTO products (name) VALUE (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return insertId;
};
const update = async (productId, name) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const [product] = await connection.execute(query, [...Object.values(name), productId]);
  return product;
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  deleteProduct,
  update,
};
