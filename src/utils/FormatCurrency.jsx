

export function FormatCurrency(value, currency){

    return value.toLocaleString('pt-br' , {style: 'currency', currency})
}