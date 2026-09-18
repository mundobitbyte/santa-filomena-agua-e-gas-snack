const URL_PEDIDOS =
  'https://jsonplaceholder.typicode.com/posts';

export async function enviarPedido(pedido) {
  const resposta = await fetch(URL_PEDIDOS, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(pedido),
  });

  if (!resposta.ok) {
    throw new Error(
      `Falha no envio. Status: ${resposta.status}`
    );
  }

  return resposta.json();
}
