import React from "react";
import { connect } from "react-redux";

import {
  soma,
  subtracao,
  divisao,
  multiplicacao,
  mudar_valor_operacao,
  pow
} from "./store/action";

const Operacpes = ({
  resultado,
  valor_operacao,
  onClickSoma,
  mudarValorOperacao,
  onClickSubtracao,
  onClickDivisao,
  onclickMultiplicacao,
  onClickPow
}) => {
  return (
    <div>
      <span>{`Valor Acumulado: ${resultado}`}</span>
      <br />
      <br />
      <input
        defaultValue={valor_operacao}
        onChange={evt => {
          mudarValorOperacao(parseFloat(evt.target.value));
        }}
        type="number"
      />
      <button
        onClick={() => {
          if (!isNaN(valor_operacao)) {
            onClickSoma(valor_operacao);
          }
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (!isNaN(valor_operacao)) {
            onClickSubtracao(valor_operacao);
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          if (!isNaN(valor_operacao)) {
            onclickMultiplicacao(valor_operacao);
          }
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          if (!isNaN(valor_operacao) && valor_operacao !== 0) {
            onClickDivisao(valor_operacao);
          }
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          if (!isNaN(valor_operacao) && valor_operacao !== 0) {
            onClickPow(valor_operacao);
          }
        }}
      >
        POW
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  onClickSoma: soma,
  onClickSubtracao: subtracao,
  onClickDivisao: divisao,
  onclickMultiplicacao: multiplicacao,
  mudarValorOperacao: mudar_valor_operacao,
  onClickPow: pow
};
const mapStateToProps = state => ({
  resultado: state.resultado,
  valor_operacao: state.valor_operacao
});

export default connect(mapStateToProps, mapDispatchToProps)(Operacpes);
