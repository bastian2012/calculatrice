function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function sous(a, b) {
    return a - b;
}

function div(a, b) {
    if (b===0) {
        throw new Error("impossible de diviser par zero !!!")
    }
    else{
        return a / b;
    }
}

function operation(c){
    if (c===1) {
        return " Addition ";
    } else if(c===2) {
        return" Soustraction ";
    }
    else if (c===3) {
        return " Multiplication "
    }
    else if (c===4) {
        return " Division "
    }
}

do {
    var volonte;

    var choix;
    var rep;
    do {
        choix =Number (prompt("1- addition\n2- soustraction\n3- multiplication\n4- division\n0- Quitter votre choix "))
    } while (isNaN(choix) || (choix > 4 || choix < 1));
    var a, b;
    do {
        
        a=Number (prompt("entrer la premier nombre : "))
        b=Number (prompt("entrer la premier nombre : "))
    } while (isNaN(a)||isNaN(b));
    switch (choix) {
        case 1:
            rep=add(a,b)
            break;
        case 2:
           rep = sous(a,b)
            break;
        case 3:
          rep=  mul(a,b)
            break;
        case 4:
           rep= div(a,b)
            break;
        case 0:
            
            break;
    
        default:
            throw new Error("Une erreur s'est survenu !!!")
            break;
    }
    
    alert("le resultat de l'operation "+operation(choix)+ " entre " +a+ " et "+ b + " est "+rep )

    do {
        volonte= prompt("O/o Pour continuer\nN/n pour sortir: ")
    } while (volonte!=="o"&&volonte!=="O"&&volonte!=="n"&&volonte!=="N");

} while (volonte==="o"||volonte==="O");