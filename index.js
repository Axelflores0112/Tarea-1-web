const express  = require('express');
const app = express();

const port = 3080;

let alumnos = [
   { id:1,Nombre:'axel'},
   { id:2,Nombre:'juan'},
   { id:3,Nombre:'pedro'}
]
app.get("/alumnos",(req,res) => {
    res.send(alumnos);
});
app.post("/alumnos ", (req,res)=>{
    const {body} = req
    alumnos.push(body);
    res.send("Se ah agregado un alumno");
});
app.patch("/alumnos", (req,res) => {
    const {body} = req
    const {id} = req
    const {nombre} = req

    let alumnos = alumnos.find((alumnos) => alumnos.id == id)
    alumnos.Nombre = Nombre
    res.send({message: "se quito juego"})
});
app.delete("/alumnos/:id",(req,res) => {
    const {id} = req.params;
    alumnos= alumnos.filter((alumnos) => alumnos.id != id );
    res.send({message:"Alumno eliminado"})
});
app.listen(port , ()=>{console.log(`Server is running on ${port}`)});
app.get('/', (req,res) => {
    res.send("hola banda")
})