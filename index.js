const express  = require('express');
const app = express();

const port = 3080;

let alumnos = [
   { id:1,Nombre:'axel'},
   { id:2,Nombre:'juan'},
   { id:3,Nombre:'pedro'}
]


// // //Metodo GET que muestra toda los elemntosd el arreglo
// app.get("/alumnos",(req,res) => {//Metodo solicitar informacion de los alumnos
//     res.send(alumnos);//pedimos traer lista de alumnos
// });


//Metodo GET para traer contenido por id
app.get("/alumnos/:id", (req,res) => {
    const {id} = req.params; 
     alumnos = alumnos.find((alumnos) => alumnos.id ===Number(id));
    if(alumnos){
    //Retornamos el alumno que coincide con el id pasado en la url
    res.send(alumnos); 
    }else{
        res.status(404).send("No se encuentra el alumno");
    }
});

//Metodo para agregar elemento
app.post("/alumnos ", (req,res)=>{
    const {body} = req;
    //Enviamos contenido
    alumnos.push(body);
    res.send("Se ah agregado un alumno");
});

//Metodo para editar contenido
app.patch("/alumnos", (req,res) => {
    const {body} = req
    const {id} = req
    const {nombre} = req

    let alumnos = alumnos.find((alumnos) => alumnos.id == id)
    alumnos.Nombre = Nombre
    res.send({message: "se quito juego"})
});

//Metodo para borrar contenido
app.delete("/alumnos/:id",(req,res) => {
    const {id} = req.params;
    //Funcion que compara el id con cada uno de la lista y lo elimina si es distinto a ese id
    alumnos= alumnos.filter((alumnos) => alumnos.id != id );
    res.send({message:"Alumno eliminado"})
});

app.listen(port , ()=>{console.log(`Server is running on ${port}`)});
app.get('/', (req,res) => {
    res.send("hola banda")
});
