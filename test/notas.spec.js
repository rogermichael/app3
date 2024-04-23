const request = require('supertest')
const Server = require('../models/server')
const server = new Server()

const token = "12345"
const datosprueba = {materia:"matematicas",nota:"5"}
const datotabla = "notas ing. sistemas"
const datomateria = "matematicas"
const notaid=1
const materid=2

describe('GET /api/users',() => {

    test('respuesta codigo 200', async () =>{

        const response = await request(server.app).get('/api/users').send()
        expect(response.statusCode).toBe(200)
    })
})



describe("post /api/users",()=>{

    test("Crear nota", async()=>{

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datosprueba)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.materia=body.materia
            
        })
    })

})

describe("put /api/users/:id",()=>{

    test("Actualizacion de nota", async()=>{
        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send(datosprueba)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.notaid)
        })
    })

})

describe("Delete /api/users/:id",()=>{

    test("Eliminacion de nota", async()=>{
        return request(server.app)
        .delete('/api/users/${notaid}')
        .set('Authorization','Bearer'+token)
        .expect(410)
    })
})

describe("post /api/users",()=>{

    test("Crear materia", async()=>{

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datomateria)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.datomateria)
            
        })
    })

})


describe("put /api/users/:id",()=>{


    test("Actualizacion de materia", async()=>{
        return request(server.app)
        .put('/api/users/2')
        .set('Authorization','Bearer'+token)
        .send(datosprueba)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.materid)
        })
    })

})

describe("Delete /api/users/:id",()=>{

    test("Eliminacion de materia", async()=>{
        return request(server.app)
        .delete('/api/users/${materid}')
        .set('Authorization','Bearer'+token)
        .expect(410)
    })
})

describe("post /api/users",()=>{

    test("Crear tabla de notas", async()=>{

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send(datotabla)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.datotabla)
            
        })
    })

})

describe("get /api/users",()=>{
    test("Ver tabla de notas creada", async()=>{
        return request(server.app)
        .get('/api/users')
        expect('Content-type',/json/)
        expect(201)
        .then(({body})=>{
            console.log(body.datotabla)
        })
    })
})


describe("put /api/users/:id",()=>{
    const tabid=3

    test("Actualizacion nombre de tabla de notas", async()=>{
        
        return request(server.app)
        .put('/api/users/2')
        .set('Authorization','Bearer'+token)
        .send(datotabla)
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.tabid)
        })
    })

})

describe("Delete /api/users/:id",()=>{

    test("Eliminacion de tabla de notas", async()=>{
        return request(server.app)
        .delete('/api/users/${tabid}')
        .set('Authorization','Bearer'+token)
        .expect(410)
    })
})