import * as React from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native';
import EnderecoEntrega from '../components/EnderecoEntrega';
import { ContextoPedido } from '../components/Pedido';

export default function TelaEndereco({ navigation }) {
  const pedido = React.useContext(ContextoPedido);

  return (
    <ScrollView contentContainerStyle={styles.conteudo}>
      <View style={styles.cartao}>
        <EnderecoEntrega
          rua={pedido.rua}
          numero={pedido.numero}
          bairro={pedido.bairro}
          complemento={pedido.complemento}
          onChangeRua={pedido.setRua}
          onChangeNumero={pedido.setNumero}
          onChangeBairro={pedido.setBairro}
          onChangeComplemento={pedido.setComplemento}
        />
        <View style={styles.acoes}>
          <Button title="Revisar pedido" onPress={() => navigation.navigate('Revisao')} />
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
