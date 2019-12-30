import { createActions, createReducer } from "reduxsauce";

const calculoFatorial = valor => {
  if (valor < 2) {
    return valor;
  } else {
    return valor * calculoFatorial(valor - 1);
  }
};

const sequenciaFibonacci = valor => {
  if (valor >= 0) {
    if (valor === 0 || valor === 1) {
      return 1;
    } else {
      return sequenciaFibonacci(valor - 1) + sequenciaFibonacci(valor - 2);
    }
  } else {
    return NaN;
  }
};

export const { Types, Creators } = createActions({
  type_divisao: ["valor"],
  type_fatorial: ["valor"],
  type_fibonacci: ["valor"],
  type_mudar_valor_operacao: ["valor"],
  type_multiplicacao: ["valor"],
  type_pow: ["valor"],
  type_soma: ["valor"],
  type_subtracao: ["valor"]
});

export const initialState = { resultado: 0, valor_operacao: 0 };

const soma = (state = initialState, action) => ({
  ...state,
  resultado: state.resultado + action.valor,
  valor_operacao: 0
});
const subtracao = (state = initialState, action) => ({
  ...state,
  resultado: state.resultado - action.valor,
  valor_operacao: 0
});
const divisao = (state = initialState, action) => ({
  ...state,
  resultado: state.resultado / action.valor,
  valor_operacao: 0
});
const multiplicacao = (state = initialState, action) => ({
  ...state,
  resultado: state.resultado * action.valor,
  valor_operacao: 0
});
const mudar_valor_operacao = (state = initialState, action) => ({
  ...state,
  valor_operacao: action.valor
});
const pow = (state = initialState, action) => ({
  ...state,
  resultado: Math.pow(state.resultado, action.valor),
  valor_operacao: 0
});
const fatorial = (state = initialState, action) => ({
  ...state,
  resultado: calculoFatorial(action.valor),
  valor_operacao: 0
});
const fibonacci = (state = initialState, action) => ({
  ...state,
  resultado: sequenciaFibonacci(action.valor),
  valor_operacao: 0
});

export const numberReducer = createReducer(initialState, {
  [Types.TYPE_DIVISAO]: divisao,
  [Types.TYPE_FATORIAL]: fatorial,
  [Types.TYPE_FIBONACCI]: fibonacci,
  [Types.TYPE_MUDAR_VALOR_OPERACAO]: mudar_valor_operacao,
  [Types.TYPE_MULTIPLICACAO]: multiplicacao,
  [Types.TYPE_POW]: pow,
  [Types.TYPE_SOMA]: soma,
  [Types.TYPE_SUBTRACAO]: subtracao
});
