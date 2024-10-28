export interface Products {
    idcategory: number;
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  }
  
  export const fetchProducts = async () => {
      try {
        const response = await fetch('http://10.0.2.2:3000/products'); // URL do seu servidor
        console.log('Response status:', response.status); // Log do status da resposta
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data: Products[] = await response.json();
        return data
      } catch (error) {
        console.error(error);
        return []; // Retornar um array vazio em caso de erro
      }
    };