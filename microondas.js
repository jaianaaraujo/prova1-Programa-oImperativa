
function menuMicroondas(prato, tempoUsuario) { /* CRIANDO O MENU  */
    
    let tempoPadrao; /* CRIANDO A VARIÁVEL PAR ARMAZENAR OS VALORES */
  
    
    switch (prato) {  /* PARA SELECIONAR AS OPÇÕES, E POR ISSO UTILIZAMOS O PARÂMETRO PRATO */
        
        case 'Pipoca':
        case 'pipoca': /* PARA ACEITAR COM A LETRA MINUSCULA TAMBÉM */
            tempoPadrao = 10; /* ATRIBUO O VALOR DE CADA TIPO */
            resultado(tempoPadrao, tempoUsuario) /* CHAMANDO A FUNÇÃO PARA VERIFICAR OS DADOS */
            break; 

        case 'Macarrão':
        case 'macarrão':
            tempoPadrao = 8;
            resultado(tempoPadrao, tempoUsuario)
            break;

        case 'Carne':
        case 'carne':
            tempoPadrao = 15;
            resultado(tempoPadrao, tempoUsuario)
            break;
        
        case 'Feijão':
        case 'feijão':
            tempoPadrao = 12;
            resultado(tempoPadrao, tempoUsuario)
            break;
        
        case 'Brigadeiro':
        case 'brigadeiro':
            tempoPadrao = 8;
            resultado(tempoPadrao, tempoUsuario)
            break;

        default:
            console.log('Prato Inexistente. Escolha uma dessas opções: Macarrão, Feijão, Brigadeiro, Carne, Pipoca')
    }
}

// FUNCÃO PARA VERIFICAR O TEMPO
function resultado(tempoPadrao, tempoUsuario) {
    
    if (tempoUsuario < tempoPadrao) {
        console.log('Tempo insuficiente, acrescente mais tempo')
    } 
    else if (tempoUsuario > 3 * tempoPadrao) {
            console.log('Kabummmmmm')
    } 
    else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('Poxa, a comida queimou')
    } 
    else {
        console.log('Prato pronto, bom apetite!!!')
    }

}



 menuMicroondas('Feijão', 6);
 menuMicroondas('Feijão', 15);
 menuMicroondas('Feijão', 24);
 menuMicroondas('Feijão', 36);
 menuMicroondas('Feijão', 50);
 menuMicroondas('dado', 56);
