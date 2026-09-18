import * as React from 'react';
import {
  View,
  ScrollView,
  Button,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import RevisaoPedido from '../components/RevisaoPedido';
import { ContextoPedido } from '../components/Pedido';
import { enviarPedido } from '../services/pedidoApi';

export default function TelaRevisao({ navigation }) {
  const pedido = React.useContext(ContextoPedido);
  const [enviando, setEnviando] = React.useState(false);
  const [mensagemEnvio, setMensagemEnvio] = React.useState('');

  const pedidoPronto =
    pedido.itensPedido.length > 0 &&
    pedido.nome.trim() !== '' &&
    pedido.telefone.trim() !== '' &&
    pedido.rua.trim() !== '' &&
    pedido.numero.trim() !== '' &&
    pedido.bairro.trim() !== '';

  async function confirmarEnvio() {
    if (!pedidoPronto) {
      setMensagemEnvio(
        'Complete produtos, cliente e endereço antes de enviar.'
      );
      return;
    }

    const dadosParaEnvio = {
      cliente: {
        nome: pedido.nome,
        telefone: pedido.telefone,
      },
      entrega: {
        rua: pedido.rua,
        numero: pedido.numero,
        bairro: pedido.bairro,
        complemento: pedido.complemento,
      },
      itens: pedido.itensPedido,
    };

    try {
      setEnviando(true);
      setMensagemEnvio('');

      const resposta = await enviarPedido(dadosParaEnvio);

      setMensagemEnvio(
        `Envio de demonstração concluído. ` +
        `Protocolo simulado: ${resposta.id}.`
      );
    } catch (erro) {
      setMensagemEnvio(
        'Não foi possível enviar o pedido. Tente novamente.'
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.conteudo}>
      <View style={styles.cartao}>
        <RevisaoPedido
          produtos={pedido.produtos}
          itensPedido={pedido.itensPedido}
          nome={pedido.nome}
          telefone={pedido.telefone}
          rua={pedido.rua}
          numero={pedido.numero}
          bairro={pedido.bairro}
          complemento={pedido.complemento}
        />

        {!pedidoPronto && (
          <Text style={styles.aviso}>
            Complete os dados obrigatórios antes do envio.
          </Text>
        )}

        {enviando && (
          <View style={styles.enviando}>
            <ActivityIndicator />
            <Text style={styles.textoEnviando}>
              Enviando pedido...
            </Text>
          </View>
        )}

        {mensagemEnvio !== '' && (
          <Text style={styles.mensagem}>
            {mensagemEnvio}
          </Text>
        )}

        <View style={styles.acoes}>
          <Button
            title={enviando ? 'Enviando...' : 'Enviar pedido'}
            onPress={confirmarEnvio}
            disabled={enviando}
          />
        </View>

        <View style={styles.acoesSecundarias}>
          <Button
            title="Voltar aos produtos"
            onPress={() => navigation.navigate('Produtos')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    padding: 16,
    backgroundColor: '#eef3f7',
    flexGrow: 1,
  },
  cartao: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
  },
  aviso: {
    color: '#92400e',
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  enviando: {
    alignItems: 'center',
    marginTop: 16,
  },
  textoEnviando: {
    marginTop: 8,
  },
  mensagem: {
    color: '#374151',
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  acoes: {
    marginTop: 20,
  },
  acoesSecundarias: {
    marginTop: 12,
  },
});
