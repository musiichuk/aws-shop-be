import productList from '../../productList.json';

export const getAllProducts = async () => {
  const products = productList;
  return products;
};