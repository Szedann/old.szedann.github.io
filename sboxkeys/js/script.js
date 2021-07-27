const steamKeygen = () => {
    const generateChar = charTable => {
        charTable = charTable || "ABCDEFGHIJLKMNOPQRTTUVWXYZ0123456789"
        return charTable.charAt(Math.floor(Math.random()*charTable.length))
    }
    return generateChar()+generateChar()+generateChar()+generateChar()+generateChar()+"-"+generateChar()+generateChar()+generateChar()+generateChar()+generateChar()+"-"+generateChar()+generateChar()+generateChar()+generateChar()+generateChar()
}

const copy = () => {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ'
}