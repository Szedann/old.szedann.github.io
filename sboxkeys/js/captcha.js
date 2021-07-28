
let tries = 0

const verify = () => {
    const checkbox = document.getElementById('verify-checkbox')
    const button = document.getElementById('verify-button')
    const progress = document.getElementById('verify-progress')
    const inputs = document.getElementById('verify-inputs')
    if(!checkbox.checked) return
    
    checkbox.disabled = true
    button.disabled = true
    
    const progressContent = document.createElement('img')
    progressContent.src = 'images/loading.svg'
    progress.appendChild(progressContent)
    setTimeout(() => {
        checkbox.disabled = false
        button.disabled = false
        checkbox.checked = false
        progress.innerHTML = ''
        if(tries != 2)return tries++
        inputs.innerHTML = ''
        const img = document.createElement('img')
        img.src = 'images/captcha.png'
        const textInput = document.createElement('input')
        textInput.type = 'text'
        textInput.placeholder = ''
        const div = document.createElement('div')
        div.appendChild(img)
        div.appendChild(textInput)
        inputs.appendChild(div)
        document.getElementById('verify-button').onclick = ()=>{
            if(textInput.value !== 'Miami Andrew') return textInput.value = ''
            window.location.href = 'keygen.html?captcha=AL4K5GF'
        }
        
    }, 5000);
}

document.getElementById('verify-button').onclick = verify