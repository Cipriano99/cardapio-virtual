export default function TypePedido(idPedido, pedido, totalPedido) {
  const typesMensagens = [
    `
    *Tipo do pedido:*%0A
    Consumir no local%0A%0A

    *Cliente:* ${pedido.info.nome}%0A%0A

    *Identificação da mesa:* ${pedido.info.identificação}%0A%0A

    *Itens do pedido:*
    ${pedido.itens.map(
      (item) => `
      %0A    · ${item.nomeLanche} : (${item.quantidade} un)
    `
    )}%0A%0A

    *Observações:* ${pedido.info.observações}%0A%0A

    *Total:* ${totalPedido}%0A%0A
    `,

    `
    *Tipo do pedido:*%0A
    Delivery%0A%0A

    *Cliente:* ${pedido.info.nome}%0A%0A

    *Itens do pedido:*
    ${pedido.itens.map(
      (item) => `
      %0A    · ${item.nomeLanche} : (${item.quantidade} un) = R$${item.parcial}
    `
    )}%0A%0A

    *CEP:* ${pedido.info.cep}%0A
    *Cidade:* ${pedido.info.cidade}%0A
    *Bairro:* ${pedido.info.bairro}%0A
    *Rua:* ${pedido.info.rua}%0A
    *Número:* ${pedido.info.número}%0A
    *Complemento:* ${pedido.info.complemento}%0A%0A
  
    *Forma de pagamento:* ${pedido.info.pagamento}%0A%0A
  
    *Observações:* ${pedido.info.observações}%0A%0A
    `,

    `
    *Tipo do pedido:*%0A
    Retirada%0A%0A

    *Cliente:* ${pedido.info.nome}%0A%0A

    *Itens do pedido:*
    ${pedido.itens.map(
      (item) => `
      %0A    · ${item.nomeLanche} : (${item.quantidade} un) = R$${item.parcial}
    `
    )}%0A%0A

    *Forma de pagamento:* ${pedido.info.pagamento}%0A%0A
  
    *Observações:* ${pedido.info.observações}%0A%0A
    `,
  ];

  return window.open(
    `https://api.whatsapp.com/send?phone=5589994392403&text=
    *Pedido via cardápio virtual*%0A%0A
    
    ${typesMensagens[idPedido]}
    
  *Total:* R$${totalPedido}%0A%0A    
    `
  );
}
