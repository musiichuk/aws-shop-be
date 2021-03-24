import productList from '../../productList.json';

export const getProductById = async (id = '') => {
  if (!id) return null;
  const foundProduct = productList.find(product => product.id === id);
  if (!foundProduct) return null;

  return foundProduct;
};