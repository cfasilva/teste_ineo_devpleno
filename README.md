# Sistema de Registro de Protestos e Emolumentos

Este é um sistema desenvolvido em Express para realizar operações CRUD (Create, Read, Update, Delete) em três entidades: "Protesto", "Emolumento" e "Usuário". O sistema permite o registro de protestos contra dívidas não pagas, cálculo automático do emolumento com base nos dados do protesto e gerenciamento de usuários.

## Funcionamento

### Entidades:

#### 1. Protesto

A entidade "Protesto" armazena os dados dos protestos registrados no sistema, incluindo o valor da dívida não paga e outras informações relevantes.

#### 2. Emolumento

A entidade "Emolumento" armazena os dados das taxas administrativas cobradas para cobrir os custos do serviço do tabelião, materiais utilizados e outras despesas administrativas. O valor do emolumento é calculado automaticamente com base nos dados do protesto.

#### 3. Usuário

A entidade "Usuário" armazena os dados dos usuários da aplicação, como nome, e-mail e senha.

### Funcionalidades:

- **CRUD**: O sistema permite a criação, leitura, atualização e exclusão de registros de protestos, emolumentos e usuários.
- **Cálculo Automático do Emolumento**: Ao criar um novo emolumento, o valor é calculado automaticamente com base nos dados do protesto, seguindo regras predefinidas.
  - O valor do emolumento é determinado por uma porcentagem do valor do protesto, onde a porcentagem aumenta conforme o valor do protesto aumenta. Por exemplo:
    - Para protestos de até R$ 1000, o valor do emolumento é 5% do valor do protesto.
    - Para protestos entre R$ 1000 e R$ 5000, o valor do emolumento é 7.5% do valor do protesto.
    - Para protestos acima de R$ 5000, o valor do emolumento é 10% do valor do protesto.
      Ao criar um novo emolumento, o valor do emolumento é calculado de acordo com essa regra.

## História Ilustrativa

Imagine que João, um morador de Cidadópolis, emprestou dinheiro para seu amigo Pedro abrir um pequeno negócio. Infelizmente, Pedro não conseguiu pagar de volta o empréstimo a tempo, e João se viu sem escolha a não ser registrar um protesto contra a dívida não paga. João vai ao escritório de registros, onde um funcionário registra os detalhes do protesto em um sistema. Ele paga o emolumento correspondente, calculado automaticamente com base no valor da dívida não paga de acordo com regras predefinidas. Tanto o protesto quanto o emolumento são registrados no sistema, e João se torna um usuário registrado.

## Testes Automatizados

Os testes automatizados foram implementados utilizando a ferramenta Jest. Certifique-se de executar os testes para garantir o correto funcionamento das rotas da API, incluindo o cálculo do emolumento com base nos dados do protesto.

## Desenvolvimento da API

Para desenvolver a API, utilize o Node.js com o framework Express para lidar com as requisições HTTP. Utilize SQL para interagir com o banco de dados, garantindo um controle mais granular sobre as consultas e transações. Essa abordagem também oferece uma maior flexibilidade em relação à estrutura e desempenho da aplicação.

## Controle de Acesso

Implemente um controle de acesso na API para garantir que somente o usuário autenticado possa visualizar seus próprios emolumentos e protestos. Ao realizar consultas no banco de dados, verifique se o usuário logado possui permissão para acessar os dados solicitados.

## Teste Técnico

Você tem 3 dias para concluir este teste. Ao finalizar, envie o link do repositório para ruan.nunes@ineodigital.com.br. Certifique-se de seguir as instruções fornecidas e implementar as funcionalidades solicitadas de acordo com as especificações. Have a good day e Boa sorte!
