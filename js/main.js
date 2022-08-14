
let getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

let getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

let getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomSymbol = () => {
    let symbols = '!@#$%^&*'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

let randomFunctions = {getRandomLower,getRandomUpper,getRandomNumber,getRandomSymbol}

let generatePassword = () => {
    let length = 16
    let generatedPassword = ''
    for (let i = 0; i <length; i++)
        generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 4)]()
        
        return generatedPassword

}        

let spanResult = document.querySelector('#pass-result')
let generateButton  = document.querySelector('#generate')
let clipboardButton = document.querySelector('#clipboard')

generateButton.addEventListener('click', () => {
    spanResult.innerText= generatePassword()
} )

clipboardButton.addEventListener('click', () =>{
    let password = spanResult.innerText
    if(!password)
        return

    let textarea= document.createElement('textArea')
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied!')

} )