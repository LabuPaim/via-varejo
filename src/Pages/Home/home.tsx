// import './App.css';

import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import '../../Shared/Sass/Pages/home.scss';

const names = ['Compra', 'Venda'];

const transacoes = [
  { transacao: 'Compra', valor: '2532.12', mercadoria: 'Salário' },
  { transacao: 'Venda', valor: '221,10', mercadoria: 'Mercado' },
  { transacao: 'Venda', valor: '100', mercadoria: 'Combustível' },
];

function formatCalc(int: string) {
  const temp = int.replace(',', '.');
  const real = Number(parseFloat(temp).toFixed(2));

  return real;
}
function formatReal(int: string) {
  const real = parseInt(int).toFixed(2);
  return real;
}

function Home() {
  const [isList, setIsList] = useState(transacoes);
  const [isTotal, setIsTotal] = useState(0);

  function calcTotal() {
    setIsTotal(0);
    isList.forEach(trans => {
      const velue = formatCalc(trans.valor);
      if (trans.transacao === 'Compra') {
        setIsTotal(old => old + velue);
      } else {
        setIsTotal(old => old - velue);
      }
      console.log(isTotal);
    });
  }
  function handleReset() {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''),
    );
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formList = {
      transacao: event.target[0].value,
      valor: event.target[2].value,
      mercadoria: event.target[1].value,
    };
    const newList = isList;
    newList.push(formList);
    setIsList(newList);
    calcTotal();
    handleReset();
  };

  useEffect(() => {
    calcTotal();
  }, []);

  return (
    <Box className="Display" key="display">
      <Box className="Home" key="home">
        <form id="Home" onSubmit={handleSubmit}>
          <Box className="BoxInput" key="BoxInput">
            <label className="label-primary">Tipo de transação</label>
            <select
              placeholder="teste"
              className="Input"
              name="transacao"
              key="transacao"
            >
              {names.map((name, index) => {
                return (
                  <option key={index + 1} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </Box>
          <Box className="BoxInput" key="BoxInput2">
            <label className="label-primary">Nome da Mercadoria</label>
            <input
              type="text"
              placeholder="Input"
              className="Input"
              id="input"
              name="mercadoria"
              key="mercadoria"
            />
          </Box>
          <Box className="BoxInput" key="BoxInput3">
            <label className="label-primary">Valor</label>
            <input
              type="text"
              placeholder="R$ 0,00"
              className="Input"
              id="inputValor"
              name="valor"
              key="valor"
            />
          </Box>
          <button className="button" type="submit">
            Adicionar transação
          </button>
        </form>
        <Box className="Down" key="Down">
          <h2>Extrato de transações</h2>
          <Box className="Result" key="Result">
            <Box className="DownSubTitle" key="DownSubTitle">
              <h3>Mercadoria</h3>
              <h3>Valor</h3>
            </Box>

            {isList.map((trans, index) => {
              return (
                <Box className="Transacoes" key="Transacoes">
                  <Box className="TransacoesInicial">
                    {trans.transacao === 'Compra' ? (
                      <div key={index + 10}>+</div>
                    ) : (
                      <div key={index + 11}>-</div>
                    )}
                    <h6 key={index + 12}>{trans.mercadoria}</h6>
                  </Box>
                  <Box className="TransacoesFinal">
                    R$ {formatReal(trans.valor)}
                  </Box>
                </Box>
              );
            })}
            <Box className="total" key="Transacoestotal">
              <h3>Total</h3>
              <Box className="lucro" key="lucro">
                <h3>R$ {isTotal}</h3>
                {isTotal === 0 ? (
                  <></>
                ) : isTotal > 0 ? (
                  <h4>[Lucro]</h4>
                ) : (
                  <h4>[Prejuizo]</h4>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
