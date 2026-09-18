import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function EnderecoEntrega(props) {
  const enderecoCompleto =
    props.rua.trim() !== '' &&
    props.numero.trim() !== '' &&
    props.bairro.trim() !== '';

  return (
    <View style={styles.areaEndereco}>
      <Text style={styles.tituloSecao}>Endereço de entrega</Text>

      <Text style={styles.rotulo}>Rua ou avenida</Text>
      <TextInput
        style={styles.campo}
        placeholder="Ex.: Rua das Flores"
        value={props.rua}
        onChangeText={props.onChangeRua}
      />

      <Text style={styles.rotuloSeguinte}>Número</Text>
      <TextInput
        style={styles.campo}
        placeholder="Ex.: 125"
        value={props.numero}
        onChangeText={props.onChangeNumero}
        keyboardType="numeric"
      />

      <Text style={styles.rotuloSeguinte}>Bairro</Text>
      <TextInput
        style={styles.campo}
        placeholder="Ex.: Centro"
        value={props.bairro}
        onChangeText={props.onChangeBairro}
      />

      <Text style={styles.rotuloSeguinte}>
        Complemento (opcional)
      </Text>
      <TextInput
        style={styles.campo}
        placeholder="Ex.: casa dos fundos"
        value={props.complemento}
        onChangeText={props.onChangeComplemento}
      />

      <Text
        style={
          enderecoCompleto
            ? styles.enderecoPronto
            : styles.enderecoPendente
        }
      >
        {enderecoCompleto
          ? 'Endereço pronto para entrega.'
          : 'Preencha rua, número e bairro.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaEndereco: {
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
  rotuloSeguinte: {
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
  enderecoPendente: {
    color: '#92400e',
    fontWeight: 'bold',
    marginTop: 12,
  },
  enderecoPronto: {
    color: '#166534',
    fontWeight: 'bold',
    marginTop: 12,
  },
});
