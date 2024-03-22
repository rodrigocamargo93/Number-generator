const button = document.querySelector("button")
button.addEventListener("click", generateNumber)

function generateNumber(){
    
    const min = Math.ceil(document.querySelector(".input-a").value)
    const max = Math.floor(document.querySelector(".input-b").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min
    
    alert(result)

}
