import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function DadosCliente(props) {
  return (
    <View style={styles.areaCliente}>
      <Text style={styles.tituloSecao}>Dados do cliente</Text>

      <Text style={styles.rotulo}>Nome</Text>
      <TextInput
        style={styles.campo}
        placeholder="Digite seu nome"
        value={props.nome}
        onChangeText={props.onChangeNome}
        autoCapitalize="words"
      />

      <Text style={styles.rotuloTelefone}>Telefone</Text>
      <TextInput
        style={styles.campo}
        placeholder="(00) 00000-0000"
        value={props.telefone}
        onChangeText={props.onChangeTelefone}
        keyboardType="phone-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  areaCliente: {
    marginTop: 24,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  rotulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  rotuloTelefone: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 6,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
});
