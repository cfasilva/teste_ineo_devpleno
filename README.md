# Teste Prático: Desenvolvedor Backend Pleno - INEO

# Instruções:\*\*

- Construa uma API em Node.js utilizando Express para lidar com operações relacionadas a emolumentos em cartórios.
- Utilize o ORM Prisma para interagir com o banco de dados SQL Server.
- Siga as melhores práticas de desenvolvimento, mantendo o código limpo, modular e reutilizável.
- Após concluir o teste, envie o link do repo para ruan.nunes@ineodigital.com.br.
- você 3 dias para concluir o teste.

# Tarefas:

1. Crie uma aplicação Express com rotas para realizar operações CRUD (Create, Read, Update, Delete) em três entidades: "Protesto", "Emolumento" e "Usuário".
2. Utilize o banco de dados SQL Server e defina as seguintes tabelas:
   - **Protesto:** Para armazenar os dados dos protestos, como valor do protesto e informações relevantes.
   - **Emolumento:** Para armazenar os dados dos emolumentos, incluindo o valor do emolumento e qualquer outra informação necessária.
   - **Usuário:** Para armazenar os dados dos usuários da aplicação, como nome, e-mail, senha, etc.
3. Implemente validações de entrada para garantir que os dados dos protestos, emolumentos e usuários sejam inseridos corretamente no banco de dados.
4. Implemente uma rota para calcular o valor do emolumento com base nos dados do protesto e na regra específica para determinar a porcentagem do emolumento, extraído dos registros de protesto. Esta regra pode ser baseada em critérios como faixas de valores do protesto. A regra pode ser a seguinte:
   - Se o valor do protesto for até R$ 1000, a porcentagem do emolumento é de 1%.
   - Se o valor do protesto for entre R$ 1000 e R$ 5000, a porcentagem do emolumento é de 2%.
   - Se o valor do protesto for acima de R$ 5000, a porcentagem do emolumento é de 3%.
     O valor do emolumento deve ser calculado de acordo com a porcentagem determinada pela regra para o valor do protesto fornecido.
5. Escreva testes automatizados para as rotas da API, utilizando uma ferramenta de teste como Jest ou Mocha. Certifique-se de incluir testes para o cálculo do emolumento com base nos dados do protesto.

# Observações:

- Você é livre para escolher a estrutura do projeto e a organização do código, considerando o relacionamento entre as entidades "Cartório", "Usuário" e "Emolumento". Certifique-se de estabelecer corretamente os relacionamentos entre essas entidades, como associações de um para muitos ou muitos para muitos, conforme necessário para a funcionalidade da aplicação.
- Forneça instruções claras sobre como configurar e executar o projeto.
- O código será avaliado com base em sua funcionalidade, eficiência, segurança e legibilidade.
- Leve em consideração as melhores práticas de desenvolvimento e as especificações da vaga ao construir a API.

Boa sorte! Have a good day.
