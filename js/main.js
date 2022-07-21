console.log("Esta es la consola de JS");

/*
let nombre = prompt("Por favor ingresa tu nombre");

console.log("Bienvenido " + nombre + " que la fuerza te acompañe con JS");

alert("Bienvenido " + nombre + " que la fuerza te acompañe con JS");

let edad = parseInt(prompt("Por favor ingresa tu edad"));

const edadMinima = 18;

if (edad >= edadMinima)
{
    console.log("Felicidades! Sos mayor de " + edadMinima + " años, bienvenido al club!");

    alert("Felicidades! Sos mayor de " + edadMinima + " años, bienvenido al club!");
}
else
{
    console.log( nombre + ", aun no estas listo para esto, vete de aqui chinwenwencha");

    alert( nombre + ", aun no estas listo para esto, vete de aqui chinwenwencha");
}
*/
let seguir = "S";

while ( seguir == "S" || seguir == "s")
{

    let modelo = parseInt(prompt("Por favor ingresa el modelo de tu auto en formato AAAA"));

    let patagonico = prompt("¿Sos de la patagonia? (S o N)");

    const antiguedadBase = 10;

    let fecha = new Date(); 

    const anioactual = fecha.getFullYear();

    let antiguedadVehiculo = anioactual - modelo;

    if (antiguedadVehiculo < antiguedadBase & patagonico != "S" || patagonico != "s")
    {
        console.log("Estas complicado! Vas a garpar 200 USD de patente! Porque tu auto tiene menos de " + antiguedadBase + " años");

        alert("SISTEMA DE PATENTES " + anioactual + "\nEstas complicado! Vas a garpar 200 USD de patente! Porque tu auto tiene menos de " + antiguedadBase + " años");

    }
    else if (patagonico == "S" || patagonico == "s")
    {
        console.log("Sos de la patagonia! Asi que te vamos a garpar 1000 USD a vos! Aunque tu auto tiene una antiguedad de " + antiguedadVehiculo + " años");

        alert("SISTEMA DE PATENTES " + anioactual + "\nSos de la patagonia! Asi que te vamos a garpar 1000 USD a vos! Aunque tu auto tiene una antiguedad de " + antiguedadVehiculo + " años");
    }
    else
    {
        console.log("Safaste! Vas a garpar 100 USD de patente! Porque tu auto tiene más de " + antiguedadBase + " años");

        alert("Safaste! Vas a garpar 100 USD de patente!  Porque tu auto tiene más de " + antiguedadBase + " años");
    }

    seguir = prompt("¿Vamos de nuevo? (S o N)")
}