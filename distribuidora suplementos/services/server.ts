import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('loja'); 
// abri ou cria o banco de dados

// criando as tabelas se elas não exitirem
const createTables = () => {
    db.transaction(tx => {

      // criando a primeira tabela 'products'
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS products (
          idCategory INTEGER,
          id INTEGER PRIMARY KEY,
          image TEXT,
          title TEXT,
          description TEXT,
          price TEXT
        );`,
        [],
        () => console.log('Products criada com sucesso ou já existe'),
        (_, error) => console.log('Erro ao criar tabela: ', error)
      );
  

      // criando a segunda tabela 'categories'
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (
          id INTEGER PRIMARY KEY,
          title TEXT,
          cover TEXT
        );`,
        [],
        () => console.log('categories criada com sucesso ou já existe'),
        (_, error) => console.log('Erro ao criar tabela: ', error)
      );
  
    });
  };
  
  export default {createTables};