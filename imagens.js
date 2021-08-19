//voce criou uma pasta "imagens" com as png
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let somt;
let somc;
let somp;

// preload serve para carregar uma imagem ou arquivo
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")//aqui vc ta dizendo carregar a imagem da pasta "imagens"/ e cita a imagem "estrada.png"
  imagemDoAtor = loadImage("imagens/ator-1.png")
  imagemDoCarro = loadImage("imagens/carro-1.png")
  imagemDoCarro2 = loadImage("imagens/carro-2.png")
  imagemDoCarro3 = loadImage("imagens/carro-3.png")
  somt = loadSound("som/trilha.wav")
  somc = loadSound("som/colidiu.mp3")
  somp = loadSound("som/pontos.wav")
  
  //comando carregar(load) começa em minusculo e o que voce quer carregar em maiusculo
  imagemDoCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3,imagemDoCarro2, imagemDoCarro, imagemDoCarro3]
}

