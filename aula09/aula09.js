let nota = 90;
let res;

if (nota >= 60) {
    res = "Aprovado";
} else if ((nota >= 40) && (nota < 60)) {
    res = "Recuperação";
} else {
    res = "Reprovado";
}

document.write(res);
