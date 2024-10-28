export interface Category {
  id: number;
  title: string;
  cover: string;
}

export const fetchCategories = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/categories'); // URL do seu servidor
      console.log('Response status:', response.status); // Log do status da resposta
      if (!response.ok) {
        throw new Error('Erro ao buscar categorias');
      }
      const data: Category[] = await response.json();
      return data
    } catch (error) {
      console.error(error);
      return []; // Retornar um array vazio em caso de erro
    }
  };
