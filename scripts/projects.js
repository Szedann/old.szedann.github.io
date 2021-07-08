const getProjects = async () => {
    const projectDir = '../projects/';
    const projectList = await fetch(projectDir + 'projects.json').then(res => res.json());
    console.log(projectList);
    for (const projectData of projectList) {
        const projectObject = document.createElement('div');
        let linksHTML = '';
        if (projectData.links) {
            linksHTML = '<ul>';
            for (const link in projectData.links) {
                linksHTML += `<li><a href="${projectData.links[link]}">${link}</a></li>`;
            }
            linksHTML += ' </ul>';
        }
        projectObject.innerHTML = `
        <h2>${projectData.title}</h2>
        ${projectData.description ? `<div>${projectData.description}</div>` : ''}
        ${linksHTML}
        `;
        document.querySelector('main').appendChild(projectObject);
    }
};
getProjects();
//# sourceMappingURL=projects.js.map