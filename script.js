const textArea = document.querySelector(".text-area")
const message = document.querySelector(".messages")




function encrypt(encripted_string){
    let codeMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encripted_string = encripted_string.toLowerCase();

    for(let i = 0; i < codeMatriz.length; i++){
        if(encripted_string.includes(codeMatriz[i][0])){
            encripted_string = encripted_string.replaceAll(codeMatriz[i][0], codeMatriz[i][1])
        }
    }
    return encripted_string

}

function decrypt(decrypted_string){
   let codeMatriz2 = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   decrypted_string = decrypted_string.toLowerCase()

   for(let i = 0; i < codeMatriz2.length; i++){ 
        if (decrypted_string.includes(codeMatriz2[i][1])){
                decrypted_string = decrypted_string.replaceAll(codeMatriz2[i][1],codeMatriz2[i][0])
         }
   }

   return decrypted_string
}

function btnEncrypt(){
    const encripted_text = encrypt(textArea.value)
    message.value = encripted_text
    textArea.value = ""
}

function btnDecrypt(){
    const decrypt_text = decrypt(textArea.value)
    message.value = decrypt_text
    textArea.value = ""
}



function copied(){
    message.select()
    navigator.clipboard.writeText(message.value)
    message.value = " "
    alert("Text copied")
}

