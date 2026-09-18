import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pedido from './components/Pedido';
import TelaProdutos from './screens/TelaProdutos';
import TelaCliente from './screens/TelaCliente';
import TelaEndereco from './screens/TelaEndereco';
import TelaRevisao from './screens/TelaRevisao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Pedido>
        <Stack.Navigator initialRouteName="Produtos">
          <Stack.Screen
            name="Produtos"
            component={TelaProdutos}
            options={{ title: 'Produtos' }}
          />
          <Stack.Screen
            name="Cliente"
            component={TelaCliente}
            options={{ title: 'Dados do cliente' }}
          />
          <Stack.Screen
            name="Endereco"
            component={TelaEndereco}
            options={{ title: 'Endereço de entrega' }}
          />
          <Stack.Screen
            name="Revisao"
            component={TelaRevisao}
            options={{ title: 'Revisão do pedido' }}
          />
        </Stack.Navigator>
      </Pedido>
    </NavigationContainer>
  );
}
