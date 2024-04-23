const {Router} = require('express')

const {viewUsers,crearnotaPos, actuanotaPut, notaDelete,crearmateriaPos,actuamateriaPut,materiaDelete,creartablaPos,vertablacreadaGet,actuatablaPut,tablaDelete} = require('../controllers/notas.controller')

const routernotas = Router()

routernotas.get('', viewUsers)
routernotas.post('', crearnotaPos)
routernotas.put('/:id', actuanotaPut)
routernotas.delete('/:id', notaDelete)
routernotas.post('/materias', crearmateriaPos)
routernotas.put('/materias/:id', actuanotaPut)
routernotas.delete('/materias/:id', materiaDelete)
routernotas.post('/tablas', creartablaPos)
routernotas.get('/tablas/:id', vertablacreadaGet)
routernotas.put('/tablas/:id', actuatablaPut)
routernotas.delete('/tablas/:id', tablaDelete)

module.exports = routernotas