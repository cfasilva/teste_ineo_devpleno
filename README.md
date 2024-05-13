# Teste Prático: Desenvolvedor Backend Pleno - INEO

## Teste Prático

**Instruções:**

- Construa uma API em Node.js utilizando Express para lidar com operações relacionadas a emolumentos em cartórios.
- Utilize o ORM Prisma para interagir com o banco de dados SQL Server.
- Siga as melhores práticas de desenvolvimento, mantendo o código limpo, modular e reutilizável.
- Após concluir o teste, envie o link do repo para ruan.nunes@ineodigital.com.br.

**Tarefas:**

1. Crie uma aplicação Express com rotas para realizar operações CRUD (Create, Read, Update, Delete) em três entidades: "Cartório", "Usuário" e "Emolumento".
2. Utilize o banco de dados SQL Server para armazenar os dados dos cartórios, usuários e emolumentos.
3. Implemente validações de entrada para garantir que os dados dos cartórios, usuários e emolumentos sejam inseridos corretamente no banco de dados.
4. Adicione autenticação básica usando tokens JWT (JSON Web Tokens). As rotas de criação, atualização e exclusão de cartórios, usuários e emolumentos devem exigir autenticação.
5. Implemente uma rota para calcular o valor do emolumento com base no valor da transação e em uma regra específica para determinar a porcentagem do emolumento. Esta regra pode ser baseada em critérios como faixas de valores da transação a regra pode ser a seguinte:

   - Se o valor da transação for até R$ 1000, a porcentagem do emolumento é de 1%.
   - Se o valor da transação for entre R$ 1000 e R$ 5000, a porcentagem do emolumento é de 2%.
   - Se o valor da transação for acima de R$ 5000, a porcentagem do emolumento é de 3%.

   O valor do emolumento deve ser calculado de acordo com a porcentagem determinada pela regra para o valor da transação fornecido.

6. Escreva testes automatizados para as rotas da API, utilizando uma ferramenta de teste como Jest ou Mocha.

**Observações:**

- Você é livre para escolher a estrutura do projeto e a organização do código, considerando o relacionamento entre as entidades "Cartório", "Usuário" e "Emolumento". Certifique-se de estabelecer corretamente os relacionamentos entre essas entidades, como associações de um para muitos ou muitos para muitos, conforme necessário para a funcionalidade da aplicação.
- Forneça instruções claras sobre como configurar e executar o projeto.
- O código será avaliado com base em sua funcionalidade, eficiência, segurança e legibilidade.
- Leve em consideração as melhores práticas de desenvolvimento e as especificações da vaga ao construir a API.

Boa sorte! Have a good day.
