const {response, request} = require('express')

const viewUsers = (req = request, res = response) => {
    res.json({'msg':'exito'})
}



const crearnotaPos = (req, res = response) => {

    const{materia, nota}=req.body

    res.status(201).json({
        msg: 'post API - crearnotaPos',
        materia,
        nota
    })
}

const actuanotaPut = (req, res=response)=>{
    const {id}=req.params
    res.status(201).json({
        msg:'put API - actuanotaPut',
        id
    })
}



const notaDelete = (req, res=response)=>{
    const {id}=req.params
    res.status(410).json({
        msg:'delete API - notaDelete',
        id
    })
}

const crearmateriaPos = (req, res = response) => {

    const{datmateria}=req.body

    res.status(201).json({
        msg: 'post API - crearmateriaPos',
        datmateria
    })
}

const actuamateriaPut = (req, res=response)=>{
    const {matid}=req.params
    res.status(201).json({
        msg:'put API - actuamateriaPut',
        matid
    })
}

const materiaDelete = (req, res=response)=>{
    const {matid}=req.params
    res.status(410).json({
        msg:'delete API - materiaDelete',
        matid
    })
}

const creartablaPos = (req, res = response) => {

    const{datotabla}=req.body

    res.status(201).json({
        msg: 'post API - creartablaPos',
        datotabla
    })
}

const vertablacreadaGet = (req, res=response)=>{
    const {tabid}=req.params
    res.status(201).json({
        msg:'get API - vertablacreadaGet',
        tabid
    })
}

const actuatablaPut = (req, res=response)=>{
    const {tabid}=req.params
    res.status(201).json({
        msg:'put API - actuatablaPut',
        tabid
    })
}

const tablaDelete = (req, res=response)=>{
    const {tabidid}=req.params
    res.status(410).json({
        msg:'delete API - tablaDelete',
        tabidid
    })
}
module.exports = {viewUsers, crearnotaPos, 
    actuanotaPut,notaDelete,crearmateriaPos,actuamateriaPut,materiaDelete,creartablaPos,vertablacreadaGet,tablaDelete,actuatablaPut}