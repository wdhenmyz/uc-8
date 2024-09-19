import { data } from "../data";

// funçaõ para pegar todos os produtos
export const getAllProducts = () => {
    return data.products;
}

// funçaõ para pegar um produto específico
export const getProductById = (id: number) => {
    return data.products.find(item => item.id === id)
}

// funçaõ para pegar os produtos de uma categoria
export const getProductsByCategory = (idCategory: number) => {
    return data.products.filter(item => item.idCategory === idCategory)
}