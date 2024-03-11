function socket(io) {
  io.on("connection", (socket) => {
   
    socket.on("mensaje", async (mensaje) => {
      var respuesta;
      const mensajeN = mensaje.toLowerCase();
      switch (mensajeN) {
        case "hola":
          respuesta =
            " <span>Hola, ¿Puedo ayudarte en algo? </span>";
          break;

        case "si":
        case "menu":
          respuesta = `
            <div class="row text-center">
              <span>Bien 😀, me puedes preguntar sobre:</span>
              <span>1. Consultar tu saldo</span>
              <span>2. Estado de cuenta</span>
              <span>3. Número de tarjeta</span>
              <span>4. Historial de transacciones</span>
              <span>5. Realizar transferencia</span>
              <span>6. Volver al menu principal</span>
            </div>`;
          break;

        case "no":
          respuesta =
            "<span>Bonito día, hasta luego🥰</span>";
          //   nombreUsuario = ""; // Limpiar el nombre de usuario al finalizar la conversación
          break;

          case "1":
            respuesta = "<span>Digita tu NIP</span>";
            break;
          
          case "1234":
            respuesta = "<span>Tu saldo es de $20,000 MX</span>";
            break;
          
          case "12345":
            respuesta = "<span>NIP incorrecto, intenta de nuevo</span>";
            break;

        case "2":
          respuesta =
            "<span>Por el momento esta función no está disponible 😪</span>";
          break;
        case "3":
          respuesta =
            "<span>Tu número de tarjeta es: 9087543213467</span>";
          break;
        case "4":
          respuesta = `
            <div class="row text-center">
              <span>Tus últimas transacciones fueron: </span>
              <span>Ropa $1000</span>
              <span>Play 5 $25000</span>
              <span>LaComer $5000</span>
            </div>`;
          break;
        case "5":
          respuesta =
            "<span>Digita el número de cuenta</span>";
          break;
        case "6":
          respuesta = `
            <div class="row text-center">
              <span>Bien 😀, me puedes preguntar sobre:</span>
              <span>1. Consultar tu saldo</span>
              <span>2. Estado de cuenta</span>
              <span>3. Número de tarjeta</span>
              <span>4. Historial de transacciones</span>
              <span>5. Realizar transferencia</span>
              <span>6. Volver al menú principal</span>
            </div>`;
          break;

        case "salir":
          respuesta =
            "<span>Nos vemos pronto</span>";
          break;

        case "adios":
          respuesta =
            "<span>Nos vemos pronto Adiós</span>";
          break;

        default:
          respuesta = `<span>Digita "menu" para las opciones</span>`;
          break;
      }
      io.emit("respuesta", respuesta);
    });
  });
}

module.exports = socket;



