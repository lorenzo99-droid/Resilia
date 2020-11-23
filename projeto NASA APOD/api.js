let titulo = document.querySelector('#introducao')
let img = document.querySelector('#imgEspaco')
let p = document.querySelector('#descricao')
let autor = document.querySelector('strong')
let data = document.querySelector('em')

let botaoDia = document.querySelector('#buscarFoto')
let dataFoto = new Date();
let escolherDia = dataFoto.getDay()

let page = new XMLHttpRequest();                                                                          //ano,mês e dia
page.open('get', `https://api.nasa.gov/planetary/apod?api_key=RePNBEbZAXStHWbC5hSkENfzpZ0Wk6xUoTCr387K&date=1999-02-23`, false)

page.addEventListener('load', function (event) 
{
    event.preventDefault()
    if (this.status === 200 && this.readyState === 4) {
        let dados = JSON.parse(page.responseText)

        titulo.innerHTML = 'Olá caelumófilo, seja muito bem vindo. <br>Se você está interessado em receber atualizaçoes diárias de fotos impressionantes, você veio ao lugar certo. <br>Essa é a foto tirada pela NASA no dia do meu nascimento, está curioso para saber como estava o céu no dia do seu? <br>Então escolha e se surpreenda'
        img.src = dados.url;
        p.innerHTML = dados.explanation;
        autor.innerHTML = 'By ' + dados.copyright
        data.innerHTML = 'Date ' + dados.date
    }
})

    page.send()

    let escolherData = new XMLHttpRequest()

botaoDia.addEventListener('click', function (event) 
{
    event.preventDefault()
    let valorData = document.querySelector('#inputData').value
    escolherData.open('GET', `https://api.nasa.gov/planetary/apod?api_key=RePNBEbZAXStHWbC5hSkENfzpZ0Wk6xUoTCr387K&date=${valorData}`, false)

    escolherData.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            let dados = JSON.parse(escolherData.responseText)

            titulo.innerHTML = '<center>Espace travel</center>'
            img.src = dados.url;
            p.innerHTML = dados.explanation;
            autor.innerHTML = 'By ' + dados.copyright
            data.innerHTML = 'Date ' + dados.date
            console.log('eu funciono')
        }
    }
    escolherData.send()
})