
export function capitalize(str){
    if (str === ''){
        return '';
    }
    const [firstSymbol, ...symbols] = str;
    return `${firstSymbol.toUpperCase()}${symbols}`;
}
