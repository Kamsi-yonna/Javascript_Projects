const textareaE1 = document.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-Cntr")
const remainderE1 = document.getElementById("Rmn-Cntr")

textareaE1.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
   totalCounterE1.innerText = textareaE1.value.length;
   remainderE1.innerText =
   textareaE1.getAttribute("maxLength") - textareaE1.value.length;
   //    remainderE1.innerText = "50" - textareaE1.value.length
}
