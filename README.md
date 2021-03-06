# O que é o blockchain?

O blockchain é uma tecnologia de manutenção de registros e de aplicação de contrato que usa criptografia para tornar extremamente difícil alterar o histórico anterior. Ele permite que os participantes compartilhem fluxos de trabalho por meio do acompanhamento das alterações em um razão compartilhado.

# Banco de dados distribuído

E se cada participante puder ter uma cópia própria do banco de dados? Um banco de dados distribuído usa várias cópias de um banco de dados e as alterações são sincronizadas

A vantagem do banco de dados distribuído é que cada participante tem uma cópia do banco de dados. Na maioria dos casos, é mais fácil controlar o acesso e integrar seus sistemas e processos em sua cópia de um banco de dados. No entanto, a sincronização de alterações em cada banco de dados é necessária. Lidar com falhas e conflitos pode adicionar complexidade e problemas de integridade de dados.

# Razão distribuído

A tecnologia blockchain é conhecida como um Razão distribuído. Assim como um livro contábil, o Razão distribuído é um histórico de transações. Cada transação no razão afeta o estado final.

As redes de blockchain distribuídas entre os participantes são chamadas de rede do consórcio. A rede do consórcio fornece a cada parceiro visibilidade sobre toda transação que ocorre na rede.

# Por que não usar um banco de dados centralizado?

 eles precisam confiar no proprietário do banco de dados para não modificar os dados históricos por qualquer motivo

# O que é um hash

O hash, também conhecido como checksum ou assinatura digital, é uma informação que resulta do cálculo feito por um algorítmo de criptografia em um arquivo fornecido.

O algorítmo lê todos os bits de um arquivo e calcula uma informação única e exclusiva que representa o mesmo arquivo. É como se ele calculasse o DNA do arquivo, onde cada arquivo diferente possui o seu e nunca dois arquivos com conteúdos diferentes possuirão o mesmo DNA.

Isso significa que ao ler o mesmo arquivo novamente, ele irá resultar na mesma assinatura digital. Caso seja calculado uma assinatura digital diferente, significa que o arquivo sofreu alterações.

alcular a assinatura digital dos documentos é o SHA256, que é o mesmo algorítmo presente nos certificados e-CPF e e-CNPJ homologados pelo governo.

# Primeira opção: Proof-of-Work (PoW)

 Algoritimo de consenso são validadores, um termo usado para escolher entre os mineradores ou os stakers como no caso do etherun2.0
 o (pow) escolhe aquele que ira ordenar o bloco e por sua vez ganhar a recompensa do bloco, porem isso e baseado no poder computacional
 onde o primeiro a resolver uma charada e o escolhido adicionando assim novos blocos a blockchain.

 Os nós devem concordar sobre um conjunto específico de regras e conseguirem avançar ao concordar com uma avaliação específica das informações de transação antes desta ser acrescentada ao blockchain.

 Cada nó (comumente chamados de “mineradores”) tenta solucionar problemas criptográficos complexos usando seus próprios recursos computacional — quem descobrir a solução confirma a transação e registra o bloco no blockchain

 # O Problema do Proof-of-Work

 Dado o excesso de utilização de recursos computacionais envolvidos na mineração, PoW é considerado custoso, perdulário e ineficaz.
 O hardware utilizado no processo de mineração é um equipamento próprio, avançado e caro

 Dado que os fabricantes chineses de ASICs possuem incentivos consideráveis para simplesmente minerarem bitcoins sozinhos — e o fazem —, 60 a 70% de todo o poder computacional da taxa de hashes (velocidade de processamento em que um dispositivo de mineração de criptoativos opera) do Bitcoin está na China.


 # Segunda opção: Proof-of-Stake (PoS)

 foi proposto nos primeiros dias do Bitcoin como uma alternativa ao Proof of Work. Em um sistema PoS, não existem os conceitos de mineradores, hardware especializado e não há necessidade de grande consumo de energia. Tudo o que você precisa é de um computador comum.

 Bem, na verdade não é só isso. Ainda é necessário um certo esforço. No PoS, você não fornece um recurso externo (como eletricidade ou hardware), mas sim um interno – criptomoeda. As regras variam de acordo com o protocolo, mas geralmente o usuário precisa manter uma quantidade mínima de fundos para se qualificar para o staking.

 A partir daí, você bloqueia seus fundos em uma carteira (eles não podem ser movidos enquanto você está fazendo staking). Normalmente, existe um consenso entre os validadores sobre quais transações serão inseridas no próximo bloco. De certa forma, você faz uma aposta em qual bloco que será selecionado. O protocolo escolherá um dos blocos candidatos.

 Caso seu bloco seja selecionado, você receberá uma proporção das taxas de transação, dependendo do seu valor de stake. Quanto mais fundos você tiver bloqueados, mais recompensas receberá. Mas se você tentar trapacear propondo transações inválidas, perderá uma parte (ou tudo) do seu valor de stake. Portanto, temos um mecanismo semelhante ao PoW – agir honestamente é mais rentável do que agir de forma desonesta.


Geralmente, não são criadas novas moedas como recompensa para validadores. A moeda nativa da blockchain deve, portanto, ser emitida de outra maneira. Isso pode ser feito através de uma distribuição inicial (ou seja, uma ICO ou IEO) ou fazendo o lançamento do protocolo como PoW, para depois efetuar uma transição para o sistema PoS.

Até o momento, o Proof of Stake puro só foi de fato implantado em criptomoedas menores. Portanto, ainda não está claro se ele pode servir como uma alternativa viável ao PoW. Embora pareça teoricamente correto, na prática é muito diferente.

Depois que o PoS é implementado em uma rede com grandes quantias em valor, o sistema se torna um campo de jogo de teoria dos jogos e incentivos financeiros. Qualquer pessoa com o know-how para “hackear” um sistema PoS, provavelmente não o faria se não pudesse lucrar com isso – portanto, a única maneira de descobrir se é um sistema viável é avaliando uma rede funcionando na prática.

Em breve, veremos o PoS sendo testado em larga escala – o Casper será implementado como parte de uma série de atualizações da rede Ethereum (coletivamente conhecidas como Ethereum 2.0).

# Outros algoritmos de consenso

O Proof of Work e o Proof of Stake são os algoritmos de consenso mais discutidos. Mas existe uma grande variedade de outros, todos com suas próprias vantagens e desvantagens.

# Fontes
  binance:  https://academy.binance.com/pt/articles/what-is-a-blockchain-consensus-algorithm#proof-of-stake-pos

  wiki:  https://pt.wikipedia.org/wiki/Ethereum#:~:text=O%20Ether%20%C3%A9%20uma%20moeda,corretoras%20com%20o%20c%C3%B3digo%20ETH.
