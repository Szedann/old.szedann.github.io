const discord = ()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <div class="popup-container">
        <div class="backdrop" onclick="discordClose()"></div>
        <div class="popup">
            <nav>
                <h3>Discord</h3> <i onclick="discordClose()" class="fas fa-times close"></i> 
            </nav>
            <p>
                Discord tag: <br>
                Szedann#2228
            </p>
        </div>
    </div>
    `
    const popup = document.querySelector('.popup')
    const backdrop = document.querySelector('.backdrop')
    setTimeout(() => {
        popup.style.marginTop = '0'
        backdrop.style.backgroundColor = 'rgba(0,0,0,0.5)'
    }, 10);
    
}

const discordClose = ()=>{
    const div = document.querySelector('.popup-container')
    const popup = document.querySelector('.popup')
    div.style.opacity = '0'
    popup.style.marginTop = '100vh'
    setTimeout(() => {
        div.remove()
    }, 1000);
    
}