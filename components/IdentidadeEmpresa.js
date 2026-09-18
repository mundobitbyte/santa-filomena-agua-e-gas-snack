import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function IdentidadeEmpresa() {
  return (
    <View style={styles.identidade}>
      <View style={styles.barraSuperior}>
        <Text style={styles.titulo}>
          Santa Filomena Água & Gás
        </Text>
      </View>

      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/mundobitbyte/santa-filomena-agua-e-gas-snack/book-original/assets/santa-filomena.png',
        }}
        style={styles.imagem}
        resizeMode="contain"
      />

      <Text style={styles.subtitulo}>
        Água mineral e gás com entrega
      </Text>

      <Text style={styles.mensagem}>
        Peça com praticidade e acompanhe sua entrega.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  identidade: {
    alignItems: 'center',
  },
  barraSuperior: {
    width: '100%',
    backgroundColor: '#dbeafe',
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: 180,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  mensagem: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },
});
