let xCarros = [510, 640, 650,620, 500, 510]
let yCarros = [40, 96, 150, 210, 266, 320]
let velocidades = [4.5, 5.5, 6, 8, 6, 4]
let compc = 40
let altc = 35

 

// cara, tinha dado mt erro aqui mas foi pq tu n colocou let (>>>>>i<<<< = 0;) e msm assim dava erro, sei nem como tu conseguiu corrigir em casa mas deu bom
function mostraCarro(){
  for (let i = 0; i < imagemDoCarros.length; i ++ ){
    image(imagemDoCarros[i], xCarros[i], yCarros[i], compc, altc)
  }
  
}

function movimentaCarro(){
  for (let i = 0; i < imagemDoCarros.length; i += 1){
        xCarros[i] -= velocidades[i];
  } 
}
// aqui o codigo vai rodar "sempre" é tipo um while start faça tal coisa
  // xCarro = xCarro - 2; detalhe se vc collocar -= vai ser tipo x = x - 1

function voltaC(){
  for(let i = 0; i < imagemDoCarros.length; i += 1){
    if (xCarros[i] < -50){
      xCarros[i] = 550
    }
  }
}
