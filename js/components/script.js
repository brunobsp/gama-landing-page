let emails=[]
const inputEmail = document.getElementById("input-email")
const btnEmail = document.getElementById("button-email")



btnEmail.addEventListener("click", function(){        
        emails.push(inputEmail.value)          
        localStorage.setItem("email-cliente", JSON.stringify(emails)) 
        alert("Você se cadastrou com sucesso!")          
})