//Dependencia commonjs
const express = require('express')

//crear el obj aplicacion
const app = express();

//primera prueba de url del servidor
app.get('/prueba', function(request,response){
    response.send("Que lo que? MMHV");
});

//URI of Bootcamps

//trae todos los bootcamps
app.get('/api/v1/devcamps/bootcamps',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg":"mostrar todos los bootcamps"
                })
})

//consulta especifica
app.get('/api/v1/devcamps/bootcamps/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` seleccionando bootcamp con id ${request.params.id} ` 
                })
})

//crear bootcamp
app.post('/api/v1/devcamps/bootcamps',
    (request, response)=>{
        response
                .status(201)
                .json({
                    "success": true, 
                    "msg":"crear bootcamp"
                })
})

//actualizar bootcamp por id
app.put('/api/v1/devcamps/bootcamps/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` actualizando bootcamp con id ${request.params.id} ` 
                })
})

//eliminar bootcamp por id 
app.delete('/api/v1/devcamps/bootcamps/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` eliminando bootcamp con id ${request.params.id} ` 
                })
})

//URI for courses

//read all courses

app.get('/api/v1/devcamps/courses',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg":"mostrar todos los cursos"
                })
})
//search especify

app.get('/api/v1/devcamps/courses/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` seleccionando curso con id ${request.params.id} ` 
                })
})

//create courses

app.post('/api/v1/devcamps/courses',
    (request, response)=>{
        response
                .status(201)
                .json({
                    "success": true, 
                    "msg":"crear curso"
                })
})
//update courses for id

app.put('/api/v1/devcamps/courses/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` actualizando curso con el id ${request.params.id} ` 
                })
})
//delete courses for id

app.delete('/api/v1/devcamps/courses/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` eliminando curso con el id ${request.params.id} ` 
                })
})



//URI for reviews

//read all reviews

app.get('/api/v1/devcamps/reviews',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg":"mostrar todas los reseñas"
                })
})

//search especify

app.get('/api/v1/devcamps/reviews/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` seleccionando reseña con id ${request.params.id} ` 
                })
})

//create reviews

app.post('/api/v1/devcamps/reviews',
    (request, response)=>{
        response
                .status(201)
                .json({
                    "success": true, 
                    "msg":"crear reseña"
                })
})

//update reviews for id

app.put('/api/v1/devcamps/reviews/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` actualizando reseña con el id ${request.params.id} ` 
                })
})
//delete reviews for id

app.delete('/api/v1/devcamps/reviews/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` eliminando reseña con el id ${request.params.id} ` 
                })
})

//URI for users

//read all users

app.get('/api/v1/devcamps/users',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg":"mostrar todos los usuarios"
                })
})

//search especify

app.get('/api/v1/devcamps/users/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` seleccionando usuario con id ${request.params.id} ` 
                })
})

//create users

app.post('/api/v1/devcamps/users',
    (request, response)=>{
        response
                .status(201)
                .json({
                    "success": true, 
                    "msg":"crear usuario"
                })
})

//update users for id

app.put('/api/v1/devcamps/users/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` actualizando usuario con el id ${request.params.id} ` 
                })
})
//delete users for id

app.delete('/api/v1/devcamps/users/:id',
    (request, response)=>{
        response
                .status(200)
                .json({
                    "success": true, 
                    "msg" : ` eliminando usuario con el id ${request.params.id} ` 
                })
})

//establecer un servidor

const puerto = 5000


app.listen(puerto, 
    console.log('ya se prendio el server')
    )
