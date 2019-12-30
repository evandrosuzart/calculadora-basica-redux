import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Creators as actions } from "./store/ducks/numberReducer";
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
  console.log(actions);
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
  onClickSoma: actions.type_soma,
  onClickSubtracao: actions.type_subtracao,
  onClickDivisao: actions.type_divisao,
  onclickMultiplicacao: actions.type_multiplicacao,
  mudarValorOperacao: actions.type_mudar_valor_operacao,
  onClickPow: actions.type_pow,
  onClickFatorial: actions.type_fatorial,
  onClickFibonacci: actions.type_fibonacci
};
const mapStateToProps = state => ({
  resultado: state.resultado,
  valor_operacao: state.valor_operacao
});

export default connect(mapStateToProps, mapDispatchToProps)(Operacpes);
