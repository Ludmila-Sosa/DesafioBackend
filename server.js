//Instaciamos el server
import express from 'express';
const app = express();
const PORT = 3000;
// Instancia de la clase ProductManager
import ProductManager from './ClassContainer/ClassContainer';
const manager = new ProductManager('');
//ruta para traer todos los productos
app.get('/products', async (req, res) => {
    const limit = req.query.limit;
    const products = await manager.getProducts(limit);
    res.json(products);
});
//ruta para traer un producto por id
app.get('/products/:pid', async (req, res) => {
    const productId = req.params.pid;
    try {
        const product = await manager.getProductById(productId);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log('Servidor iniciado en el puerto 3000');
});