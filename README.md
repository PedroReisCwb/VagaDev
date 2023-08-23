## 1. Qual a saída do algoritmo?
Retorna 1000 números primos, com paginação de 200 items por página separado por coluna

## 2. Você julga que este código é limpo? Aponte quais erros o programador cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug escondido no código.

O Código não segue boas práticas, dificultando bastante o entendimento e manutenção do código. Os principais erros foram:

1. Falta de responsabilidade única no código, ou seja, apenas uma função com várias responsabilidades sendo que poderia ser separado em outras funções ou até mesmo classes;
2. Falta de comprometimento ao declarar nomes de variáveis e métodos, dificultando a compreensão de cada variável no código;
3. Poderia ter utilizado funções já disponíveis na linguagem para facilitar o desenvolvimento do código, Por exemplo o Math.sqrt para retornar a raiz quadrada e alguns metodos de array que ajuda na páginação;
4. Uso indevido de arrays, alocando mais memória que o necessário. em uma aplicação com maior processamento isso poderia ser custoso;
5. Poderia utilizar uma lógica usando menos loop;

## 3. Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira que o código se torne mais limpo, legível e de fácil manutenção.

**Utilizar uma versão compatível com esmodule, foram feitos testes utilizando a versão 14 e 16 do nodejs**

Para retornar os números primos é necessário apenas rodar o comando 
```
# utilizando npm 
cd ./prime-numbers && npm start 

# utilizando node 
node ./prime-numbers/index.js

```

## 4. Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código.
Middleware no Express.js é utilizado para interceptar a execução de uma rota, passando pela Middleware antes de cair no método principal, normalmente em uma Controller. Muito comum ser utilizado para algumas validações simples de headers por exemplo, Autenticação, na injeção de novas propriedades no object de Request ou tratativas de erros.
Por isso que middleware é muito útil para evitar repetição de código pois é possível criar uma abstração na própria middleware ao invés de chamar vários métodos em todas as rotas disponíveis na aplicação.

## 5. Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), Quais as vantagens e desvantagens de cada abordagem?

**Vantagens ORM:**
1. Adapters para vários bancos de dados, inclusive alguns ORM tem adaptadores para outros tipos de banco como NoSQL;
2. Faz a conversão dos dados do banco para uma model, facilitando as alterações e consulta de dados na entidade;
3. Não é necessário um autoconhecimento em banco de dados;
4. Melhora na produtividade;
5. Segurança, vários ORM's fazem tratativas para evitar SQL injection por exemplo;
6. Alguns ORM tem identity map evitando consultas desnecessárias, exemplo MikroORM;

**Desvantagens ORM:**
1. Cada ORM tem sua forma de escrita, por tanto o dev precisa estudar e se adaptar ao ORM;
2. Menos performance nas consultas;
3. Pode causar lentidão no processamento de converter os dados do banco para uma entidade/model;

**Vantagens Knex:**
1. Melhor performance comparado a um ORM;
2. Faz o gerenciamento de pool connections, evitando novas conexões desnecessárias;
3. Também melhora na segurança, evitando SQL Injection;
4. Produtividade;
5. Knex também tem adaptadores para outros bancos de dados;
6. Mais fácil de realizar consultas complexas comparando com ORM;

**Desvantagens Knex:**
1. Não converte os dados do banco para uma entidade ou model, obrigando o dev a implementar algum tipo de mapper/adapter;
2. Não possui identity map;
3. Dificulta na manutenção do código comparado com ORM;

**Resumo:**
Knex é mais baixo nível então ganha vantagens de performance e na realização de consultas mais complexas, já o ORM
Facilita bastante a consulta e na conversão os dados que vem do banco relacional para as entidades da aplicação melhorando bastante a produtividade, segurança e manutenção do código porém pode perder em performance.

### 6. Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.

SQLs disponíveis na pasta ./sql-partidas.
```
ddl.sql #criação de tabelas
seed.sql #inserção de registros de exemplo
select-partidas.sql #consulta com a resposta
```

### 7. Dado o array no arquivo data.json, crie um interface em React.js, CSS e Bootstrap mostre os itens como se fosse um marketplace de roupas.

Projeto disponível na pasta ./react-shop

```
cd ./react-shop
npm install 
npm start

```