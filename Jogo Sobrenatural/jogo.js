var h1 = document.querySelector('h1');

var quero = document.querySelector('#quero');
var texto = document.querySelector('#txt')

var imagens = document.querySelector('#desc');

var voltar = document.querySelector('#voltar')
var avancar = document.querySelector('#avancar')
function sim() {

    quero.addEventListener('click', function () {
        
        texto.innerHTML =
            '<p>Esses são os caçadores. Escolha seu personagem</p><img class= "dean" src="./img/dean.jpg"> || <img class= "sam" src="./img/sam.jpg"> || <img class= "bob" src="./img/bob.jpeg">';

            var dean = document.querySelector('.dean');

            var sam = document.querySelector('img.sam');
    
            var bob = document.querySelector('img.bob');
            

        dean.addEventListener('mouseover', function () {

            texto.innerHTML = '<img class= "dean" src="./img/dean.jpg">';

            desc.innerHTML =
            '<p>Nome: Dean Winchester</p> <br><p>Idade:</p> || <p>Altura:</p> || <p>Inteligência: 3,5/</p><br> <p>Manuseio de armas: 5+</p> || <p>Força: 4,5</p> || <p>Velocidade: 5+</p> || <p>Poderes: Marca de Cain</p>';
            
            voltar.innerHTML= '<button id="voltar">Voltar</button>'
            avancar.innerHTML= '<button id="avancar">Avançar</button>'
        })

        sam.addEventListener('mouseover', function () {

            texto.innerHTML = '<img class= "sam" src="./img/sam.jpg">';

            desc.innerHTML =
            '<p>Nome: Sam Winchester</p> || <p>Idade:</p> || <p>Altura:</p> || <p>Inteligência: 5</p><br> <p>Manuseio de armas: 5</p> || <p>Força: 5</p> || <p>Velocidade: 4,5</p><br> <p>Poderes: Controlar e matar <br>demônios</p>';
       
            voltar.innerHTML= '<button id="voltar">Voltar</button>'
            avancar.innerHTML= '<button id="avancar">Avançar</button>'
        })


        bob.addEventListener('mouseover', function () {
 
            texto.innerHTML = '<img class= "bob" src="./img/bob.jpeg">';

            desc.innerHTML =
            '<p>Nome: Bob Singer</p>  || <p>Idade:</p> || <p>Altura:</p> || <p>Inteligência: 5+</p><br> <p>Manuseio de armas: 4</p> || <p>Força: 3,5</p> || <p>Velocidade: 3</p>';
        
            voltar.innerHTML= '<button id="voltar">Voltar</button>'
            avancar.innerHTML= '<button id="avancar">Avançar</button>'
        })


        voltar.addEventListener('click', function()
        {
            texto.innerHTML =
            '<p>Esses são os caçadores. Escolha seu personagem</p><img class= "dean" src="./img/dean.jpg"> || <img class= "sam" src="./img/sam.jpg"> || <img class= "bob" src="./img/bob.jpeg">';
  
            desc.innerHTML = "";
       
            voltar.innerHTML= "";
            avancar.innerHTML= "";
        })

    })

}

sim();
































































// function iniciar()
// {
//     document.getElementById("primeira-questao").style.visibility = "visible";
//     document.getElementById("introducao").style.visibility = "hidden";
// }

// // var pergunta = document.querySelector('#pergunta').textContent = (" ") /*fazer igual com a textbox. Substituir elementos*/

// function perguntar1()
// {
//     pergunta = document.querySelector("#pergunta")
//     pergunta.InnerHTML = 'Qual caçador deseja ser?'
// }

// /*createElemente = Para substituir o HTML

// document.createElement('button');
// newButtontextcontent criar botao*/

// /* (elemento).append.child.body = adicionando dentro do body*/

// /*(elemento).append.child("...")*/














// // window.onload = function()
// // {
// //     var heading = document.createElement("h1");
// //     var heading_text = document.createTextNode("Sobrenatural, um jogo de sobrevivência");
// //     heading.appendChild(heading_text);
// //     document.body.appendChild(heading);
// // }
// // // window.onload = function criar(){
// // //     document.createElement('<button> Clique aqui </button>');
// // // }