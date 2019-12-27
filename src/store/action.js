export const SOMA = "SOMA";
export const SUBTRACAO = "SUBTRACAO";
export const DIVISAO = "DIVISAO";
export const MULTIPLICACAO = "MULTIPLICACAO";
export const MUDAR_VALOR_OPERACAO = "MUDAR_VALOR_OPERACAO";
export const POW = "POW";

export const pow = valor => ({ type: POW, valor });
export const soma = valor => ({ type: SOMA, valor });
export const subtracao = valor => ({ type: SUBTRACAO, valor });
export const divisao = valor => ({ type: DIVISAO, valor });
export const multiplicacao = valor => ({ type: MULTIPLICACAO, valor });
export const mudar_valor_operacao = valor => ({
  type: MUDAR_VALOR_OPERACAO,
  valor
});
