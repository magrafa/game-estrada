// variavel de movimentação
let xAtor = 250;
let yAtor = 370;
let velocidadea = 3;
let col = false;
let wins = 0;
let loss = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 20,20)
  //a imagem ja carrega e a posicao x y e depois o tamnho dela em funcao do bacground que é a principal
  
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= velocidadea;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += velocidadea;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += velocidadea;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= velocidadea;
  }
}  
//se (a tecla está pressionada(nome da tecla)) isso tem que estar entre chaves para pois se for verdade a function ira proseguir com os comandos  

function verCol (){
  for (let i = 0; i < imagemDoCarros.length; i += 1){
    col = collideRectRect(xCarros[i], yCarros[i], compc, altc, xAtor, yAtor, 10, 14)
    if (col){
      colis();
      
    }
    
  }
  
}

function colis (){
  somc.play();
  yAtor = 365
  loss ++
  if(wins > 0){
    wins--
  }
  
}

function volA(){
  if (xAtor < -20){
    xAtor = 250
    yAtor = 370
  }
   if (xAtor > 520){
    xAtor = 250
    yAtor = 370
  }
}
function volAt(){
  if (yAtor < 20){
    yAtor = 370
    wins ++
    somp.play();
  }
   if (yAtor > 420){
    yAtor = 370
  }
}
function pts(){
  if (yAtor < 20){
    wins ++
  }
  
}

function win(){
  textSize(25)
  fill(color(155, 255, 20))
  text("win = "+ wins, width / 8, 25)
  //width serve para dividir a tela em partes
}
function los(){
  textSize(25)
  fill(color(255, 0 , 0))
  text("loss = "+ loss, width / 1.5, 25)
}