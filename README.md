1 - Crie um projeto do zero em React, utilizando o comando npx create-react-app <nomedoprojeto>.

2 - Instale o react-router-dom e crie duas rotas: A Home("/") e a página Registros("/registros").

3 - Na Home, crie 2 botões: um para chamar a requisição, e outro para acessar a página de registros.

4 - No botão de requisição, chame o endpoint "https://rickandmortyapi.com/api/character/". Essa API te dará uma lista dos personagens de Rick And Morty. Mostre a lista desses personagens na página de registros, com os campos ID, Name, Species e Status.

5 - Ao chamar a requisição, desabilite o botão, e toda vez que o usuário for acessar a página de registros novamente, mostre a lista. 

6 - Se o usuário acessar a página de registros antes de chamar a requisição, mostre uma mensagem de erro, algo como "Sem registros".