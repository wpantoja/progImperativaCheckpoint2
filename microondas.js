// 2 ͦ Checkpoint de programação imperativa
// 02-07-2021
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:
/*
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function nome(nome) { return nome.toLowerCase(); } 

function microondas(menu, tempo) {
        switch (menu) {
        case 'pipoca':
            if (tempo >= 10 && tempo < 20) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 20 && tempo < 30) {
                console.log('A comida queimou')
            } else if (tempo >= 30) {
                console.log("Kabumm")
            } else {
                console.log('Tempo insuficiente')
            }

            break;
        case 'macarrao':
            if (tempo >= 8 && tempo < 16) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 16 && tempo < 24) {
                console.log('A comida queimou')
            } else if (tempo >= 24) {
                console.log("Kabumm")
            } else {
                console.log('Tempo insuficiente')
            }

            break;
        case 'carne':
            if (tempo >= 15 && tempo < 30) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 30 && tempo < 45) {
                console.log('A comida queimou')
            } else if (tempo >= 45) {
                console.log("Kabumm")
            } else {
                console.log('Tempo insuficiente')
            }

            break;
        case 'feijao':
            if (tempo >= 12 && tempo < 24) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 24 && tempo < 36) {
                console.log('A comida queimou')
            } else if (tempo >= 36) {
                console.log("Kabumm")
            } else {
                console.log('Tempo insuficiente')
            }

            break;
        case 'brigadeiro':
            if (tempo >= 8 && tempo < 16) {
                console.log("Prato pronto, bom apetite")
            } else if (tempo >= 16 && tempo < 24) {
                console.log('A comida queimou')
            } else if (tempo >= 24) {
                console.log("Kabumm")
            } else {
                console.log('Tempo insuficiente')
            }

            break;
        default:
            console.log("Prato inexistente")

    }
}

// ** Inserir abaixo uma opção do menu e o tempo de preparo
microondas('feijao', 20)
microondas('pipoca', 6)
microondas('carne', 50)
microondas('brigadeiro', 3)
microondas('macarrao', 20)