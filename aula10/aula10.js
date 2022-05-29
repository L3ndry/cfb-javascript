let nota = 40;
let res;

if (nota >= 60) {
    res = "Aprovado"
    if (nota >= 95) {
        if (nota == 100) {
            res += " com excelência"
        } else {
            res += " com louvor";
        }
    } else {
        res += " com nota normal";
    }
} else if ((nota >= 40) && (nota < 60)) {
    res = "Recuperação";
} else {
    res = "Reprovado"
    if (nota >= 20) {
        res += " por nota baixa";
    } else {
        res += " com louvor";
    }
}

document.write(res);
