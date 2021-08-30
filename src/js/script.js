
function calculo() {
    
    let numero2 = 3;
    let numero3 = 5;
    
    let soma = 2 + 2;
    let soma2 = numero2 + numero3;
    
    const calcSum = (num1, num2) =>{
        let total = num1 + num2;
        console.log(total)
        return total

    }

    return calcSum
}

const cabecalho = document.querySelector('header');


const textarea = document.querySelector('textarea');

const tweetar = document.querySelector('button');

const feed = document.querySelector(".conteudoPrincipal__listaTweets");

function pegarTweet(event) {
    event.preventDefault();

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', pegarTweet);



function criarTweet(tweetTexto){
    
    let data = new Date();
    let hora    = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "leandro",
        foto: "./src/img/ProfilePic.png",
        usuario: "@linkedin.com/in/leandro-falcao/",
        texto:tweetTexto,
        tempo:`${hora}:${minutos}`
    }
    
  
    listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet){
    
    const {nome,foto,usuario,texto,tempo} = tweet
    
    // criando novos dados de tipos twtters

    let li = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet")
    
    let img = document.createElement("img");
    img.src = foto
    img.classList.add("fotoPerfil")

    let div = document.createElement("div");
    div.classList.add("tweet__conteudo")
    let h2 = document.createElement("h2");
    h2.innerText = nome
   
    let span = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`

    let p = document.createElement("p");
    p.innerText = texto
    
    //add dados recem criados
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    // add elementos dendo da li
    li.appendChild(img)
    li.appendChild(div)
    
    feed.appendChild(li)
    textarea.value = ""
}   


