
function menu(prato, tempoUsuario) { /* CRIANDO O MENU  */
    
    let tempoPadrao; /* CRIANDO A VARIÁVEL PAR ARMAZENAR OS VALORES */

    
    switch (prato) {  /* PARA SELECIONAR AS OPÇÕES, E POR ISSO UTILIZAMOS O PARÂMETRO PRATO */
        
        case 'Pipoca':
        case 'pipoca': /* PARA ACEITAR COM A LETRA MINUSCULA TAMBÉM */
            tempoPadrao = 10; /* ATRIBUO O VALOR DE CADA TIPO */
            verificarTempo(tempoPadrao, tempoUsuario) /* CHAMANDO A FUNÇÃO PARA VERIFICAR OS DADOS */
            break; 

        case 'Macarrão':
        case 'macarrão':
            tempoPadrao = 8;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;

        case 'Carne':
        case 'carne':
            tempoPadrao = 15;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;
        
        case 'Feijão':
        case 'feijão':
            tempoPadrao = 12;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;
        
        case 'Brigadeiro':
        case 'brigadeiro':
            tempoPadrao = 8;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;

        default:
            console.log('Prato Inexistente')
    }
}

// Função para gerar a lógica do output com base no Tempo e nas condições passadas.
function verificarTempo(tempoPadrao, tempoUsuario) {
    
    if (tempoUsuario < tempoPadrao) {
        console.log('Tempo insuficiente')
    } 
    else if (tempoUsuario > 3 * tempoPadrao) {
            console.log('Kabumm')
    } 
    else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('A comida queimou')
    } 
    else {
        console.log('Prato pronto, bom apetite')
    }

}



 menu('Feijão', 6);
 menu('Feijão', 15);
 menu('Feijão', 24);
 menu('Feijão', 36);
 menu('Feijão', 50);
 menu('dado', 56);
