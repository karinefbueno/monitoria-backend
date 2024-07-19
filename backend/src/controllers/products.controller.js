const { productService } = require('../services');
const statusHTTP = require('../utils/statusHttp');

// const delete = async (req, res) => {
//   const { id } = req.params;
//   const { status, data } = await productService.delete(id);
//   return res.status(statusHTTP(status)).json(data);
// };

const findAll = async (req, res) => {
  const { status, data } = await productService.findAll();
  return res.status(statusHTTP(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.findById(id);
  return res.status(statusHTTP(status)).json(data);
};

const create = async (req, res) => {
  const { name } = req.body;

  const { status, data } = await productService.create({
    name,
  });

  if (status !== 'SUCCESSFUL') {
    return res.status(statusHTTP(status)).json(data);
  }
  return res.status(statusHTTP(status)).json(data);
};

const update= async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { status, data } = await productService.update(id, name);
  return res.status(statusHTTP(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  create,
  update,
};
