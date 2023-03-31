

var estudiantes= [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]

export function getStudentAverage(students) {
    // Tu código aquí 👈
    // Definir el objeto
    const clase = {
    estudiantes: []
  };
let totalAverage =0
let longitud =0
    students.forEach(element => {
        totalAverage += element.grades.reduce((acum,curr)=>acum+curr,0)
        let partAverage = (element.grades.reduce((acum,curr)=>acum+curr,0))/(element.grades.length)
        longitud += element.grades.length
         
        clase.estudiantes.push({nombre:element.name,average:partAverage}) 
    });
    //queda pendiente pulir esta parte!!!!!!!
    
    let promedio = totalAverage/(longitud)
    clase.classAverage = Number(promedio.toFixed(2))
  return clase  
  }
  

  console.log(getStudentAverage(estudiantes))