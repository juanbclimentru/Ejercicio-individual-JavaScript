/* ejercicio 1 */
     const nombre = "Juan";
     const apellido = "Pérez";
     const edad = 25;
     const mensaje = `¡Hola ${nombre} ${apellido}, bienvenido/a! Tienes ${edad} años.`;
     document.getElementById("bienvenida").textContent = mensaje;


/* ejercicio 2 */

     document.getElementById("user-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const edad = document.getElementById("edad").value;
        const diasVividos = edad * 365;

        const mensajeDiasVividos = `Has vivido aproximadamente ${diasVividos} días.`;
        const mensaje = `¡Hola ${nombre} ${apellido}, bienvenido/a! Tienes ${edad} años.`;
        document.getElementById("bienvenida2").textContent = mensaje;
        
        
        document.getElementById("bienvenida3").textContent = mensajeDiasVividos;
    });
   
