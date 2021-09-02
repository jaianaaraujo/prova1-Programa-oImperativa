
function menu(prato, tempoUsuario) {
    
    let tempoPadrao;

    // Criando um switch para obter opções de prato disponíveis
    switch (prato) {
        
        case 'Pipoca':
        case 'pipoca':
            tempoPadrao = 10;
            verificarTempo(tempoPadrao, tempoUsuario)
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



 menu('Feijão', 6)
 menu('Feijão', 15)
 menu('Feijão', 24)
 menu('Feijão', 36)
 menu('Feijão', 50)
 menu('dado', 56) 
