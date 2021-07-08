const getArticle = async () => {
    const articleDir = '../articles/articles-md/'

    console.log(window.location.search)

    const articleList = await fetch(articleDir+'list.json').then(res=>res.json())

    const urlParams = new URLSearchParams(window.location.search)

    const article = articleList.find(e=> e.title == urlParams.get('title'))

    article.content = await fetch(articleDir+article.fileName).then(res=>res.text())

    console.log(article)

    const headerDiv = document.createElement('div')

    headerDiv.classList.add('header')

    headerDiv.innerHTML = `
    <div>
        <h1>${article.title}</h1>
        ${article.description ? `<div>${article.description}</div>` : ''}
    </div>
    `

    const contentDiv = document.createElement('div')
    
    // @ts-ignore: Unreachable code error
    let converter = new showdown.Converter()

    contentDiv.innerHTML = converter.makeHtml(article.content)

    const main = document.querySelector('main')

    main.innerHTML = ''

    main.appendChild(headerDiv)
    main.appendChild(contentDiv)
    
}

getArticle()