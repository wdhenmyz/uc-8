import * as SQLite from 'expo-sqlite';

// abri ou cria o banco de dados
const db = await SQLite.openDatabaseAsync('loja'); 

// criando as tabelas se elas não exitirem
const createTables = async () => {
  try {
    // Use execAsync to run multiple SQL commands in one go
    await db.execAsync(`
      PRAGMA journal_mode = WAL;  -- Setting the journal mode for better performance

      -- criando a primeira tabela 'products'
      CREATE TABLE IF NOT EXISTS products (
        idCategory INTEGER,
        id INTEGER PRIMARY KEY,
        image TEXT,
        title TEXT,
        description TEXT,
        price TEXT
      );

      -- criando a segunda tabela 'categories'
      CREATE TABLE IF NOT EXISTS categories (
          id INTEGER PRIMARY KEY,
          title TEXT,
          cover TEXT
      );
    `);  

    console.log('tabelas ciadas com sucesso!');
  } catch (error) {
    console.error('erro ao criar tabelas:', error);
  }
};

  export default createTables;