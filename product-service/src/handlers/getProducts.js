import { getAllProducts } from '../services/getAllProducts/getAllProducts';
import { buildHttpResponse } from '../utils/buildHttpResponse';

export const getProducts = async () => {
    const products = await getAllProducts();
    return buildHttpResponse(200, products);
};