const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
  NO_CONTENT: 204,
};

const statusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = statusHTTP;