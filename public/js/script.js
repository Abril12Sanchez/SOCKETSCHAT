const socket = io();

var enviarData = document.getElementById("enviarData");
enviarDatos.addEventListener("submit", (e) => {
  e.preventDefault();
  var mensaje = document.getElementById("mensaje").value;
  var datos = document.getElementById("datos");
  socket.emit("mensaje", mensaje);
  socket.on("respuesta", (respuesta) => {
    datos.innerHTML = respuesta;
  });
  document.getElementById("mensaje").value = "";
  //   volvere a ponerse en mensaje
  document.getElementById("mensaje").focus();
});


// const socket = io();

// console.log(socket);

// var enviarDatos = document.getElementById("enviarDatos");
// enviarDatos.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log("Formulario enviado");
//     var mensaje = document.getElementById("mensaje").value;
//     // var usuario = document.getElementById("usuario").value;
//     // var password = document.getElementById("password").value;
//     var datos = document.getElementById("datos");
//     socket.emit("mensaje", mensaje);
//     socket.on("mensaje", (mensaje)=>{
//         // console.log(saludo);
//         datos.innerHTML = saludo;
//     });

// });



