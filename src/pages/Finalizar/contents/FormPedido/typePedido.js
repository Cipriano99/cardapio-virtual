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
      %0A    · ${item.nomeLanche} : (${item.quantidade} un) = R$${item.parcial}
    `
    )}%0A%0A

    *Observações:* ${pedido.info.observações}%0A%0A

    *Total:* R$${totalPedido}
    `,

    `
*Tipo do pedido:* Delivery%0A%0A

%20%20%20 *Cliente:* ${pedido.info.nome}%0A%0A

%20%20%20 *Itens do pedido:*
  ${pedido.itens.map(
    (item) => `
  %0A    · ${item.nomeLanche} : (${item.quantidade} un) = R$${item.parcial}
    `
  )}%0A%0A

%20%20%20 *CEP:* ${pedido.info.cep}%0A
%20%20%20 *Cidade:* ${pedido.info.cidade}%0A
%20%20%20 *Bairro:* ${pedido.info.bairro}%0A
%20%20%20 *Rua:* ${pedido.info.rua}%0A
%20%20%20 *Número:* ${pedido.info.número}%0A
%20%20%20 *Complemento:* ${pedido.info.complemento}%0A%0A
    
*Forma de pagamento:* ${pedido.info.pagamento}%0A%0A
    
*Observações:* ${pedido.info.observações}%0A%0A

*Pedido:* R$${totalPedido}%0A%0A
*Taxa de entrega:* R$${5}.00%0A

%0A*Total:* R$${parseFloat(totalPedido) + 5}

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

    %0A*Total:* R$${totalPedido}

    `,
  ];

  return window.open(`https://api.whatsapp.com/send?phone=5589994392403&text=
*Pedido via cardápio virtual*%0A%0A
    
${typesMensagens[idPedido]}
    `);
}
