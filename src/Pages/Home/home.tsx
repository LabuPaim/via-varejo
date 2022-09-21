// import './App.css';

import { Box } from '@mui/material';
import { useState } from 'react';
import '../../Shared/Sass/Pages/home.scss';

const names = ['Compra', 'Venda'];

const transacoes = [
  { transacao: 'Compra', valor: 2532.12, mercadoria: 'Salário' },
  { transacao: 'Venda', valor: 221, mercadoria: 'Mercado' },
  { transacao: 'Venda', valor: 100, mercadoria: 'Combustível' },
  { transacao: 'Venda', valor: 35.51, mercadoria: 'Restaurante' },
];

let total = 0;

transacoes.forEach(trans => {
  trans.transacao === 'Compra'
    ? (total += trans.valor)
    : (total -= trans.valor);
});

function formatReal(int: number) {
  let tmp = int.toFixed(2) + '';
  tmp = tmp.replace('.', ',');
  tmp = tmp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return tmp;
}

function Home() {
  const [isTotal, setIsTotal] = useState(total);
  const [isValor, setIsValor] = useState<Number[]>([]);

  return (
    <Box className="Display">
      <Box className="Home">
        <Box className="BoxInput">
          <label className="label-primary">Tipo de transação</label>
          <select placeholder="teste" className="Input">
            {names.map((name, index) => {
              return (
                <option key={index} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </Box>
        <Box className="BoxInput">
          <label className="label-primary">Nome da Mercadoria</label>
          <input type="text" value="Input" className="Input" id="input" />
        </Box>
        <Box className="BoxInput">
          <label className="label-primary">Valor</label>
          <input
            type="text"
            value="R$ 0,00"
            className="Input"
            id="inputValor"
          />
        </Box>
        <button>Adicionar transação</button>
        <Box className="Down">
          <h2>Extrato de transações</h2>
          <Box className="Result">
            <Box className="DownSubTitle">
              <h3>Mercadoria</h3>
              <h3>Valor</h3>
            </Box>
            {transacoes.map((trans, index) => {
              return (
                <Box className="Transacoes">
                  <Box className="TransacoesInicial">
                    {trans.transacao === 'Compra' ? (
                      <div key={index * 10}>+</div>
                    ) : (
                      <div key={index * 10}>-</div>
                    )}
                    <h6 key={index * 10}>{trans.mercadoria}</h6>
                  </Box>
                  <Box className="TransacoesFinal">
                    R$ {formatReal(trans.valor)}
                  </Box>
                </Box>
              );
            })}
            <Box className="DownSubTitle">
              <h3>Total</h3>
              <h3>R$ {formatReal(isTotal)}</h3>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
