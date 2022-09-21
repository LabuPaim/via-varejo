// import './App.css';

import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import '../../Shared/Sass/Pages/home.scss';

const names = ['Compra', 'Venda'];

const transacoes = [
  { transacao: 'Compra', valor: 2000, mercadoria: "Salário" },
  { transacao: 'Venda', valor: 200, mercadoria: "Mercado" },
  { transacao: 'Venda', valor: 100, mercadoria: "Combustível" },
  { transacao: 'Venda', valor: 35.5, mercadoria: "Restaurante" }
]

function Home() {
  return (
    <Box className="Display">
      <Box className="Home">
        <Box className="BoxInput">
          <label className="label-primary">Tipo de transação</label>
          <select placeholder="teste" className="Input">
            {names.map(name => {
              return <option value={name}>{name}</option>;
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

          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
