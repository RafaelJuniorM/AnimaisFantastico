// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  let totalTaxa = 0;
  let totalRecebimento = 0;

  transacoes.forEach((item)=>{
    let newValue = Number(item.valor.replace('R$','').trim());
    if(item.descricao.includes('Taxa')){
      totalTaxa += newValue;
      
    }else if (item.descricao.includes('Recebimento')){
      totalRecebimento += newValue;
    }
  })
  console.log(`Total recebimento: ${totalRecebimento} 
  Total Taxa: ${totalTaxa}
  `);

  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  console.log(transportes.split(";",transportes.length-1));

  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  console.log(html.replace(/<span>/g,'<a>').replace(/<\/span>/g,'</a>'));
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase.charAt(frase.length-1));
  // Retorne o total de taxas
  const transacoess = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  
  