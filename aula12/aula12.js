let pos = 4;

switch(pos) {
    case 1: 
        msg = "Primeiro lugar - Medalha de ouro!";
        break;

    case 2: 
        msg = "Segundo lugar - Medalha de prata!";
        break;

    case 3: 
        msg = "Terceiro lugar - Medalha de bronze!";
        break;

    default: msg = "Não foi ao pódio - Não obteve medalha.";
}

document.write(msg);
