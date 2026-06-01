const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

// CONEXIÓN A MYSQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica2'
});

db.connect((err) => {
    if (err) {
        console.log('Error al conectar la base de datos');
        console.log(err);
        return;
    }

    console.log('Base de datos conectada');
});


// RUTA RAÍZ (para evitar Cannot GET /)
app.get('/', (req, res) => {
    res.send('API funcionando 🚀');
});


// 1. POST /categorias
// Registrar una categoría
app.post('/categorias', (req, res) => {

    const { nombre, descripcion } = req.body;

    if (!nombre) {
        return res.status(400).json({
            mensaje: 'El nombre es obligatorio'
        });
    }

    const sql =
        'INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)';

    db.query(sql, [nombre, descripcion], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Categoría registrada correctamente',
            id: result.insertId
        });

    });

});


// 2. GET /categorias
// Mostrar todas las categorías

app.get('/categorias', (req, res) => {

    const sql = 'SELECT * FROM categorias';

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

// 3. GET /categorias/:id
// Mostrar una categoría con sus productos
app.get('/categorias/:id', (req, res) => {

    const id = req.params.id;

    const sqlCategoria =
        'SELECT * FROM categorias WHERE id = ?';

    db.query(sqlCategoria, [id], (err, categoria) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (categoria.length === 0) {
            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });
        }

        const sqlProductos =
            'SELECT * FROM productos WHERE categoria_id = ?';

        db.query(sqlProductos, [id], (err, productos) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                categoria: categoria[0],
                productos: productos
            });

        });

    });

});

// 4. PATCH /categorias/:id
// Actualizar una categoría
app.patch('/categorias/:id', (req, res) => {

    const id = req.params.id;
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({
            mensaje: 'Nombre y descripción son obligatorios'
        });
    }

    const sql = `
        UPDATE categorias
        SET nombre = ?,
            descripcion = ?,
            updatedAt = NOW()
        WHERE id = ?
    `;

    db.query(sql, [nombre, descripcion, id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Categoría actualizada correctamente'
        });

    });

});


// 5. DELETE /categorias/:id
// Eliminar categoría (con cascade)

app.delete('/categorias/:id', (req, res) => {

    const id = req.params.id;

    const sql =
        'DELETE FROM categorias WHERE id = ?';

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Categoría eliminada correctamente'
        });

    });

});


// EXTRA: POST /productos
app.post('/productos', (req, res) => {

    const { nombre, precio, categoria_id } = req.body;

    if (!nombre || !precio || !categoria_id) {
        return res.status(400).json({
            mensaje: 'Faltan datos'
        });
    }

    const sql = `
        INSERT INTO productos(nombre, precio, categoria_id)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [nombre, precio, categoria_id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Producto creado',
            id: result.insertId
        });

    });

});

// INICIAR SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
