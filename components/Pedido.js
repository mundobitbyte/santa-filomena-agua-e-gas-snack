import * as React from 'react';

export const ContextoPedido = React.createContext();

const produtos = [
  {
    id: 1,
    nome: 'Água mineral 20 L',
    descricao: 'Galão retornável de água mineral.',
    preco: 20,
  },
  {
    id: 2,
    nome: 'Gás 13 kg',
    descricao: 'Botijão residencial de 13 kg.',
    preco: 100,
  },
];

export default function Pedido(props) {
  const [itensPedido, setItensPedido] = React.useState([]);
  const [nome, setNome] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [complemento, setComplemento] = React.useState('');

  const valor = {
    produtos,
    itensPedido,
    setItensPedido,
    nome,
    setNome,
    telefone,
    setTelefone,
    rua,
    setRua,
    numero,
    setNumero,
    bairro,
    setBairro,
    complemento,
    setComplemento,
  };

  return (
    <ContextoPedido.Provider value={valor}>
      {props.children}
    </ContextoPedido.Provider>
  );
}
