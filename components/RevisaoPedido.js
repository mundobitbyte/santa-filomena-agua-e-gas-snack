import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RevisaoPedido(props) {
  const itensDetalhados = props.itensPedido.map((item) => {
    const produto = props.produtos.find(
      (produto) => produto.id === item.id
    );

    return {
      ...item,
      nome: produto.nome,
      preco: produto.preco,
      subtotal: produto.preco * item.quantidade,
    };
  });

  const totalPedido = itensDetalhados.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  const endereco = [
    props.rua,
    props.numero,
    props.bairro,
    props.complemento,
  ]
    .filter((parte) => parte.trim() !== '')
    .join(', ');

  return (
    <View style={styles.areaRevisao}>
      <Text style={styles.tituloSecao}>Revise seu pedido</Text>

      <Text style={styles.subtitulo}>Itens</Text>
      {itensDetalhados.length === 0 ? (
        <Text style={styles.aviso}>Nenhum produto selecionado.</Text>
      ) : (
        itensDetalhados.map((item) => (
          <Text key={item.id} style={styles.linha}>
            {item.quantidade} x {item.nome} - R$ {item.subtotal
              .toFixed(2)
              .replace('.', ',')}
          </Text>
        ))
      )}

      <Text style={styles.total}>
        Total: R$ {totalPedido.toFixed(2).replace('.', ',')}
      </Text>

      <Text style={styles.subtitulo}>Cliente</Text>
      <Text style={styles.linha}>
        {props.nome.trim() !== '' ? props.nome : 'Nome não informado'}
      </Text>
      <Text style={styles.linha}>
        {props.telefone.trim() !== ''
          ? props.telefone
          : 'Telefone não informado'}
      </Text>

      <Text style={styles.subtitulo}>Entrega</Text>
      <Text style={styles.linha}>
        {endereco !== '' ? endereco : 'Endereço não informado'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaRevisao: {
    marginTop: 24,
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 16,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  linha: {
    fontSize: 14,
    marginBottom: 4,
  },
  aviso: {
    color: '#92400e',
    fontSize: 14,
  },
  total: {
    color: '#166534',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
