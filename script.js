function isPalindrome(str){
    let palavraFrase = "";
    let palavraFraseInvertida = "";
    const removerEspacos = str.replace(/ /g,'').toLowerCase();
    for( let i = 0; i < removerEspacos.length; i++) {
        palavraFrase += removerEspacos[i]
        palavraFraseInvertida = removerEspacos[i] + palavraFraseInvertida
    }
    return palavraFrase === palavraFraseInvertida
}


function arrayMaxMin(arr){
    let array = []
    let maiorNumero = 0;
    let MenorNumero = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maiorNumero) {
            maiorNumero = arr[i]
        }
        if(i === 0 || arr[i] < MenorNumero) {
            MenorNumero = arr[i]
        }
    }
    return array = [MenorNumero, maiorNumero]
}