import * as SQLite from 'expo-sqlite';

// Open or create the database
const db = SQLite.openDatabase('loja');

// Create tables if they do not exist
const createTables = () => {
  db.transaction(tx => {
    // Setting the journal mode for better performance
    tx.executeSql(
      `PRAGMA journal_mode = WAL;`
    );

    // Creating the 'products' table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS products (
        idCategory INTEGER,
        id INTEGER PRIMARY KEY,
        image TEXT,
        title TEXT,
        description TEXT,
        price REAL
      );`,
      [],
      () => console.log('Tabela "products" criada com sucesso!'),
      (txObj, error) => console.error('Erro ao criar tabela "products":', error)
    );

    // Creating the 'categories' table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY,
        title TEXT,
        cover TEXT
      );`,
      [],
      () => console.log('Tabela "categories" criada com sucesso!'),
      (txObj, error) => console.error('Erro ao criar tabela "categories":', error)
    );
  });
};

module.exports = {createTables}
