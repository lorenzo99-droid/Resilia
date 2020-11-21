let h1 = document.querySelector('#user')
let img = document.querySelector('#perfil')
let repositorios = document.querySelector('#repositorios')
let input = document.querySelector('#login')
let botao = document.querySelector('#pesquisar')
let titulo = document.querySelector('#titulo')

botao.addEventListener('click', function () {
    let page = new XMLHttpRequest();
    page.addEventListener("load", function () {

        if (this.status !== 200) {
            h1.innerHTML = "Usuário não encontrado"
        } else {
            let nome = JSON.parse(this.responseText)
            h1.innerHTML = `Usuário: ${nome.login}`
        }
    })
    page.open("GET", `https://api.github.com/users/${input.value}`, false)
    page.send()
})



botao.addEventListener('click', function () {

    let repos = new XMLHttpRequest();

    repos.addEventListener("load", function () {
        if (this.status != 200) {
            repositorios.innerHTML = "Usuário não encontrado"
        } else {

            let infoRepos = JSON.parse(this.responseText);

            let arrayDeRepositorios = []
            for (let i = 0; i < infoRepos.length; i++) {
                arrayDeRepositorios.push(`<li id="repos"><a href=${infoRepos[i].clone_url}>  ${infoRepos[i].name} </a> </li>`)
            }
            titulo.innerHTML = "Repositórios do usuário:"
            repositorios.innerHTML = arrayDeRepositorios.join("")

        }
    })

    repos.open("GET", `https://api.github.com/users/${input.value}/repos`, false)
    repos.send()

})