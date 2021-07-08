const getarticles = async () => {
    const articleDir = '../articles/articles-md/';
    const articleList = await fetch(articleDir + 'list.json').then(res => res.json());
    console.log(articleList);
    for (const articleData of articleList) {
        const articleObject = document.createElement('a');
        articleObject.href = `/article/index.html?title=${encodeURIComponent(articleData.title)}`;
        articleObject.innerHTML = `
        <div>
            <h2>${articleData.title}</h2>
            ${articleData.description ? `<div>${articleData.description}</div>` : ''}
        </div>
        `;
        document.querySelector('main').appendChild(articleObject);
    }
};
getarticles();
//# sourceMappingURL=articles.js.map