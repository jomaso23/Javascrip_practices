 

  cats_2=[
    {
      name: "Mimi",
      followers: [320, 120, 70]
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200]
    },
    {
      name: "Gizmo",
      followers: [250, 750]
    }
  ]

function findFamousCats(cats) {

//declaro array en el que se va a guardar el nombre
let array = []
let max = 0
let name 
//{}las llaves se usan cuando la expresion ocupa mas de una linea...RECUERDALO!!!!
cats.forEach(elem =>{
  let seguidores = elem.followers.reduce((acum,curr)=> acum+curr,0)

    if(seguidores > max){
      max = seguidores
      array = [elem.name]
    }else{
    if(max == seguidores){
      array.push(elem.name)
    }
  }
  }
)
return array
}
  


console.log(findFamousCats(cats_2))