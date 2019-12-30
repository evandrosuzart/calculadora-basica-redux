import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Creators as actions } from "./store/ducks/numberRedulcer";
const Operacpes = ({
  resultado,
  valor_operacao,
  onClickSoma,
  mudarValorOperacao,
  onClickSubtracao,
  onClickDivisao,
  onclickMultiplicacao,
  onClickPow,
  onClickFatorial,
  onClickFibonacci
}) => {
  return (
    <div>
      <span>{`Valor Acumulado: ${resultado}`}</span>
      <br />
      <br />
      <Input
        value={valor_operacao}
        onChange={evt => {
          mudarValorOperacao(parseFloat(evt.target.value));
        }}
        type="number"
      />
      <div className="container">
        <ButtonGroup>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              if (!isNaN(valor_operacao)) {
                onClickSoma(valor_operacao);
              }
            }}
          >
            +
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              if (!isNaN(valor_operacao)) {
                onClickSubtracao(valor_operacao);
              }
            }}
          >
            -
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              if (!isNaN(valor_operacao)) {
                onclickMultiplicacao(valor_operacao);
              }
            }}
          >
            *
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              if (!isNaN(valor_operacao) && valor_operacao !== 0) {
                onClickDivisao(valor_operacao);
              }
            }}
          >
            /
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              if (!isNaN(valor_operacao) && valor_operacao !== 0) {
                onClickPow(valor_operacao);
              }
            }}
          >
            POW
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              if (!isNaN(valor_operacao) && valor_operacao !== 0) {
                onClickFatorial(valor_operacao);
              }
            }}
          >
            FATORIAL
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              if (!isNaN(valor_operacao) && valor_operacao !== 0) {
                onClickFibonacci(valor_operacao);
              }
            }}
          >
            SEQUENCIA DE FIBONACCI
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  onClickSoma: actions.soma,
  onClickSubtracao: actions.subtracao,
  onClickDivisao: actions.divisao,
  onclickMultiplicacao: actions.multiplicacao,
  mudarValorOperacao: actions.mudar_valor_operacao,
  onClickPow: actions.pow,
  onClickFatorial: actions.fatorial,
  onClickFibonacci: actions.fibonacci
};
const mapStateToProps = state => ({
  resultado: state.resultado,
  valor_operacao: state.valor_operacao
});

export default connect(mapStateToProps, mapDispatchToProps)(Operacpes);
