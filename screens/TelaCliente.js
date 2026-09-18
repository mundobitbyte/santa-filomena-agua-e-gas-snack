import * as React from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native';
import DadosCliente from '../components/DadosCliente';
import { ContextoPedido } from '../components/Pedido';

export default function TelaCliente({ navigation }) {
  const pedido = React.useContext(ContextoPedido);

  return (
    <ScrollView contentContainerStyle={styles.conteudo}>
      <View style={styles.cartao}>
        <DadosCliente
          nome={pedido.nome}
          telefone={pedido.telefone}
          onChangeNome={pedido.setNome}
          onChangeTelefone={pedido.setTelefone}
        />
        <View style={styles.acoes}>
          <Button title="Continuar" onPress={() => navigation.navigate('Endereco')} />
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
