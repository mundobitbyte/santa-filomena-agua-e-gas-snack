import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Produto(props) {
  const subtotal = props.preco * props.quantidade;

  return (
    <View style={styles.produto}>
      <Text style={styles.nomeProduto}>{props.nome}</Text>
      <Text style={styles.descricaoProduto}>{props.descricao}</Text>
      <Text style={styles.preco}>
        R$ {props.preco.toFixed(2).replace('.', ',')}
      </Text>

      <Pressable
        style={styles.botaoEscolher}
        onPress={props.onAlternar}
      >
        <Text style={styles.textoBotao}>
          {props.selecionado ? 'Cancelar escolha' : 'Escolher'}
        </Text>
      </Pressable>

      {props.selecionado && (
        <View style={styles.areaQuantidade}>
          <Text style={styles.quantidade}>
            Quantidade: {props.quantidade}
          </Text>

          <Text style={styles.subtotal}>
            Subtotal: R$ {subtotal.toFixed(2).replace('.', ',')}
          </Text>

          <View style={styles.botoesQuantidade}>
            <Pressable
              style={styles.botaoQuantidade}
              onPress={props.onDiminuir}
            >
              <Text style={styles.textoQuantidade}>-</Text>
            </Pressable>

            <Pressable
              style={styles.botaoQuantidade}
              onPress={props.onAumentar}
            >
              <Text style={styles.textoQuantidade}>+</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  produto: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  nomeProduto: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  descricaoProduto: {
    fontSize: 14,
    marginTop: 4,
  },
  preco: {
    color: '#166534',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
  },
  botaoEscolher: {
    backgroundColor: '#1967D2',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 12,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  areaQuantidade: {
    marginTop: 12,
    alignItems: 'center',
  },
  quantidade: {
    color: '#166534',
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtotal: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },
  botoesQuantidade: {
    flexDirection: 'row',
    marginTop: 8,
  },
  botaoQuantidade: {
    width: 44,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  textoQuantidade: {
    color: '#114B9E',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
