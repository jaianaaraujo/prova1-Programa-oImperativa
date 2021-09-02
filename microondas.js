
function menu (prato, tempoUsuario) { /* Crio o Menu (função) e aqui dentro coloca as opções com Switch  */
let tempoPadrao; /* Crio uma variavel para colocar o padrao do tempo */

const opcao = ['Macarrão',  'Brigadeiro',  'feijão',  'Carne',  'Pipoca' ];

    switch(prato){ /* Criei as opções de pratos */
        case 'Macarrão': /* cada caso é um prato */
            tempoPadrao = 8;
            resposta(tempoPadrao, tempoUsuario);
            break;
        case 'Brigadeiro':
            tempoPadrao = 8;
            resposta(tempoPadrao, tempoUsuario);
            break;
        case 'Carne':
            tempoPadrao = 15;
            resposta(tempoPadrao, tempoUsuario);
            break;
        case 'Feijão':
            tempoPadrao = 12;
            resposta(tempoPadrao, tempoUsuario);
            break;
        case 'Pipoca':
            tempoPadrao = 10;
            resposta(tempoPadrao, tempoUsuario);
            break; 
        
            default:
                return `Prato inexistente, por favor escolha umas dessas opçoes: ${opcao}`

    } 
    /* Uma função para calcular a resposta */
  function resposta(tempoPadrao, tempoUsuario){
    if (tempoUsuario > tempoPadrao * 2)
    return `A comida queimou, ultrapassou o ${tempoPadrao}`
}   if(tempoUsuario < tempoPadrao){
return `tempo insuficiente, tempo ideal é: ${tempoPadrao}`
}  if(tempoUsuario > tempoPadrao * 3){
  return `Kabuuuuuum!!!!`
} else {
    return `Prato pronto, bom apetite!`
}
}



console.log(menu('Brigadeiro', 15)); /* O usuário e o tipo de prato já escolho aqui no console, e será colocado no parametro da função */
