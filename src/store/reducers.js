import {
  SOMA,
  SUBTRACAO,
  DIVISAO,
  MULTIPLICACAO,
  MUDAR_VALOR_OPERACAO,
  POW
} from "./action";

const initialState = { resultado: 0, valor_operacao: 0 };

const numberRedulcer = (state = initialState, action) => {
  switch (action.type) {
    case SOMA:
      return {
        ...state,
        resultado: state.resultado + action.valor,
        valor_operacao: 0
      };
    case SUBTRACAO:
      return {
        ...state,
        resultado: state.resultado - action.valor,
        valor_operacao: 0
      };
    case DIVISAO:
      return {
        ...state,
        resultado: state.resultado / action.valor,
        valor_operacao: 0
      };
    case MULTIPLICACAO:
      return {
        ...state,
        resultado: state.resultado * action.valor,
        valor_operacao: 0
      };
    case MUDAR_VALOR_OPERACAO:
      return { ...state, valor_operacao: action.valor };
    case POW:
      return {
        ...state,
        resultado: Math.pow(state.resultado, action.valor),
        valor_operacao: 0
      };
    default:
      return state;
  }
};

export { initialState, numberRedulcer };
