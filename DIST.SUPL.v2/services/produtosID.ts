import { data } from "../data";


// funçaõ para pegar um produto específico
export const getProductById = (id: number) => {
    return data.products1.find(item => item.id === id)
}

// funçaõ para pegar os produtos de uma categoria
export const getProductsByCategory = (idCategory: number) => {
    return data.products1.filter(item => item.idCategory === idCategory)
}