const express = require('express');
const cors = require('cors');
const product = require('./data/product');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Route to get all items
app.get('/api/product', (req, res) => {
    res.json(product); // Return the items array as JSON
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  