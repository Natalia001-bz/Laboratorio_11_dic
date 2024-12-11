//& Task3
/* A Ed le gustaría encontrar una forma de calcular una edad a partir de una fecha de nacimiento determinada.
Exportar una función que acepte 3 argumentos (un año, un mes y un día) y que devuelva una edad precisa.
Por ejemplo, `ageCalculator(2000, 12, 25)` debería devolver la edad de alguien nacido el día de Navidad de 2000.*/


export function ageCalculator(año,mes,dia) {
    
    
        const fechaNacimiento = new Date(año, mes - 1, dia);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      
        
        if (
          hoy.getMonth() < fechaNacimiento.getMonth() ||
          (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--;
        }
        return edad;
      }
      

