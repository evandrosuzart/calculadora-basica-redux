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

export const Types = {
  DIVISAO: "numberRedulcer/DIVISAO",
  FATORIAL: "numberRedulcer/FATORIAL",
  FIBONACCI: "numberRedulcer/FIBONACCI",
  MUDAR_VALOR_OPERACAO: "numberRedulcer/MUDAR_VALOR_OPERACAO",
  MULTIPLICACAO: "numberRedulcer/MULTIPLICACAO",
  POW: "numberRedulcer/POW",
  SOMA: "numberRedulcer/SOMA",
  SUBTRACAO: "numberRedulcer/SUBTRACAO"
};

export const initialState = { resultado: 0, valor_operacao: 0 };

export const numberRedulcer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SOMA:
      return {
        ...state,
        resultado: state.resultado + action.valor,
        valor_operacao: 0
      };
    case Types.SUBTRACAO:
      return {
        ...state,
        resultado: state.resultado - action.valor,
        valor_operacao: 0
      };
    case Types.DIVISAO:
      return {
        ...state,
        resultado: state.resultado / action.valor,
        valor_operacao: 0
      };
    case Types.MULTIPLICACAO:
      return {
        ...state,
        resultado: state.resultado * action.valor,
        valor_operacao: 0
      };
    case Types.MUDAR_VALOR_OPERACAO:
      return { ...state, valor_operacao: action.valor };
    case Types.POW:
      return {
        ...state,
        resultado: Math.pow(state.resultado, action.valor),
        valor_operacao: 0
      };
    case Types.FATORIAL:
      return {
        ...state,
        resultado: calculoFatorial(action.valor),
        valor_operacao: 0
      };
    case Types.FIBONACCI:
      return {
        ...state,
        resultado: sequenciaFibonacci(action.valor),
        valor_operacao: 0
      };
    default:
      return state;
  }
};

export const Creators = {
  divisao: valor => ({ type: Types.DIVISAO, valor }),
  fatorial: valor => ({ type: Types.FATORIAL, valor }),
  fibonacci: valor => ({
    type: Types.FIBONACCI,
    valor
  }),
  mudar_valor_operacao: valor => ({
    type: Types.MUDAR_VALOR_OPERACAO,
    valor
  }),
  multiplicacao: valor => ({ type: Types.MULTIPLICACAO, valor }),
  pow: valor => ({ type: Types.POW, valor }),
  soma: valor => ({ type: Types.SOMA, valor }),
  subtracao: valor => ({ type: Types.SUBTRACAO, valor })
};
