function aceitar()
{
    document.getElementById("aceito").style.visibility = "visible";

}

function iniciar()
{
    document.getElementById("primeira-questao").style.visibility = "visible";
    document.getElementById("introducao").style.visibility = "hidden";
}

var pergunta = document.querySelector('#pergunta').textContent = (" ")
function perguntar1()
{
    pergunta = document.querySelector("#pergunta")
    pergunta.InnerHTML = 'Qual caçador deseja ser?'
}





// window.onload = function()
// {
//     var heading = document.createElement("h1");
//     var heading_text = document.createTextNode("Sobrenatural, um jogo de sobrevivência");
//     heading.appendChild(heading_text);
//     document.body.appendChild(heading);
// }
// // window.onload = function criar(){
// //     document.createElement('<button> Clique aqui </button>');
// // }