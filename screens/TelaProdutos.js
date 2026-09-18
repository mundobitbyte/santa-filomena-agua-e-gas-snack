import * as React from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native';
import IdentidadeEmpresa from '../components/IdentidadeEmpresa';
import Produtos from '../components/Produtos';
import { ContextoPedido } from '../components/Pedido';

export default function TelaProdutos({ navigation }) {
  const pedido = React.useContext(ContextoPedido);

  return (
    <ScrollView contentContainerStyle={styles.conteudo}>
      <View style={styles.cartao}>
        <IdentidadeEmpresa />
        <Produtos
          produtos={pedido.produtos}
          itensPedido={pedido.itensPedido}
          onAtualizarItens={pedido.setItensPedido}
        />
        <View style={styles.acoes}>
          <Button title="Continuar" onPress={() => navigation.navigate('Cliente')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteudo: { padding: 16, backgroundColor: '#eef3f7', flexGrow: 1 },
  cartao: { backgroundColor: '#ffffff', borderRadius: 16, padding: 20 },
  acoes: { marginTop: 20 },
});
