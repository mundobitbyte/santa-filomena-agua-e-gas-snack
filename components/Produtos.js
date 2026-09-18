import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Produto from './Produto';

export default function Produtos(props) {
  const { produtos, itensPedido, onAtualizarItens } = props;

  function alternarProduto(id) {
    const itemExistente = itensPedido.find(
      (item) => item.id === id
    );

    if (itemExistente) {
      const novaLista = itensPedido.filter(
        (item) => item.id !== id
      );
      onAtualizarItens(novaLista);
    } else {
      onAtualizarItens([
        ...itensPedido,
        { id: id, quantidade: 1 },
      ]);
    }
  }

  function aumentarQuantidade(id) {
    const novaLista = itensPedido.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantidade: item.quantidade + 1,
        };
      }
      return item;
    });
    onAtualizarItens(novaLista);
  }

  function diminuirQuantidade(id) {
    const novaLista = itensPedido.map((item) => {
      if (item.id === id && item.quantidade > 1) {
        return {
          ...item,
          quantidade: item.quantidade - 1,
        };
      }
      return item;
    });
    onAtualizarItens(novaLista);
  }

  const totalPedido = itensPedido.reduce((total, item) => {
    const produto = produtos.find(
      (produto) => produto.id === item.id
    );
    return total + produto.preco * item.quantidade;
  }, 0);

  return (
    <View style={styles.areaProdutos}>
      <Text style={styles.tituloSecao}>Produtos</Text>

      <Text style={styles.resumo}>
        Tipos selecionados: {itensPedido.length}
      </Text>

      <Text style={styles.total}>
        Total do pedido: R$ {totalPedido.toFixed(2).replace('.', ',')}
      </Text>

      {produtos.map((produto) => {
        const itemPedido = itensPedido.find(
          (item) => item.id === produto.id
        );

        return (
          <Produto
            key={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            selecionado={itemPedido !== undefined}
            quantidade={itemPedido ? itemPedido.quantidade : 0}
            onAlternar={() => alternarProduto(produto.id)}
            onAumentar={() => aumentarQuantidade(produto.id)}
            onDiminuir={() => diminuirQuantidade(produto.id)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  areaProdutos: {
    marginTop: 24,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  resumo: {
    color: '#374151',
    fontSize: 14,
    marginBottom: 4,
  },
  total: {
    color: '#166534',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
