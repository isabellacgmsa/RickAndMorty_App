# Rick and Morty Character App

Um aplicativo simples em React Native que utiliza a API GraphQL do Rick and Morty para exibir informações sobre personagens da série.

## Requisitos

- React Native com TypeScript.
- API GraphQL do Rick and Morty.
- Biblioteca de gerenciamento de estado (Context API, Redux, MobX, etc.).
- `react-navigation` para a navegação entre telas.
- `react-navigation-shared-element` para animações de elementos compartilhados.
- `axios` para fazer consultas à API GraphQL.
- Estilização usando `styled-components`.

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/rick-and-morty-app.git
cd rick-and-morty-app
```

2. Instale as dependências:

```
npm install
# ou
yarn install
```

## Configuração

Certifique-se de ter o ambiente de desenvolvimento configurado para React Native.

## Uso

Para iniciar o aplicativo, use:

```
npm start
# ou
yarn start
```

## Navegação

O aplicativo utiliza o `react-navigation` para a navegação entre telas. A animação entre a lista de personagens e a tela de detalhes é aprimorada com `react-navigation-shared-element`.

## Estado Global

O estado global é gerenciado usando a Context API.

## Consulta à API GraphQL

As consultas à API GraphQL do Rick and Morty são realizadas usando a biblioteca `axios`. Os resultados são exibidos nas telas correspondentes.

## Estilização

A estilização é realizada principalmente com `styled-components`, garantindo uma aparência consistente em todo o aplicativo.
