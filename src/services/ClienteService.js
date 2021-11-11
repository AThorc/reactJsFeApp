import http from "../http-common";

const getAll = () => {
  return http.get("/clientes");
};

const get = id => {
  return http.get(`/clientes/${id}`);
};

const create = data => {
  return http.post("/clientes", data);
};

const update = (id, data) => {
  return http.put(`/clientes/${id}`, data);
};

const remove = id => {
  return http.delete(`/clientes/${id}`);
};

const removeAll = () => {
  return http.delete(`/clientes`);
};

const findByCodiceFiscale = (codiceFiscale) => {
  return http.get(`/clientes?codiceFiscale=${codiceFiscale}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByCodiceFiscale
};
