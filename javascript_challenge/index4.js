const lista = ["racecar", "level", "world", "hello"]
const lista2 = ["Platzi", "javascript", "html", "css"]

//PENDIENTE PARA VOLVER MAS COMPACTO!!!!!!!!!!!!!1

export function findLargestPalindrome(words) {
    let palindromoActual = ""
    words.forEach(element => {
        //guardo la palabra actual en otra variable para luego compararla
        let palabra = element

        //convierto la palabra en string con split()
        let palabraArray = palabra.split("")
        //invierto la nueva palabra y la uno
        let palabraInvUni = palabraArray.reverse().join("")

        if (palabraInvUni === element) {
            let longitudActual = palabraInvUni.length
            let longitudPalindromoActual = palindromoActual.length
            if(longitudActual > longitudPalindromoActual ){
                palindromoActual = palabraInvUni
            }else{
                palindromoActual = palindromoActual
            }           
        } else{
            palindromoActual = palindromoActual
        }   
    });
    if(palindromoActual == ""){
        return null

    }else{
        return palindromoActual
    }
    
}

console.log(findLargestPalindrome(lista2))
/*
const palabra = "perro"

const nuevaPalabra = palabra.split("")
console.log(nuevaPalabra)
const invertir = nuevaPalabra.reverse()
console.log(invertir)
const unir = nuevaPalabra.join("")
console.log(unir)*/