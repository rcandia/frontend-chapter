# Nave Boilerplate

Boilerplate baseado no [Create React App](https://github.com/facebook/create-react-app) com o template de suporte para typescript.

## Code Standard

Além de todos os pontos citadas no [nave guide](https://nave.gitlab.io/guides/nave/code-guide/), como padrão de imports e boas práticas de javascript, existem algumas boas práticas que devem ser usadas, principalmente na criação de componentes e páginas.

1. Evite usar `styleds` desnecessários. Temos componentes de Row, Column e Text para evitar o uso desnecessários de styleds nas páginas. Além disso, estes componentes possuem o [styled-system](https://styled-system.com/getting-started), que permite passar margins, paddings e afins por props;
2. Ao criar um novo componente, sempre cogite a utilização do `styled-system`;
3. **NUNCA** repita o mesmo código duas vezes. Não copie e cole. Crie helpers e components. Reutilize código;
4. Se precisar criar um componente com várias variações, dê uma olha no componente de `Text` e utilize a propriedade `variant` do `styled-system`;
5. Siga o padrão de pastas e padrão de código. Participe da construção do boilerplate, dê feedbacks e contribua com melhorias.

## Estrutura de Pastas

```
├── /.storybook
├── /public
├── /src
|   ├── /components
|   |    ├── /<component_name_folder>
|   |    |    ├── <component_name_file>.tsx
|   |    |    ├── index.ts
|   |    ├── index.ts
|   ├── /context
|   |    ├── <context_file>.tsx
|   |    ├── index.ts
|   ├── /providers
|   |    ├── <provider_name>.ts
|   ├── /services
|   |    ├── <service_name>.ts
|   ├── /screens
|   |    ├── /<screen_name_folder>
|   |    |    ├── <screen_name_file>.tsx
|   |    |    ├── index.ts
|   |    ├── index.ts
|   ├── /theme
|   |    ├── index.ts
|   |    ├── theme.ts
|   ├── /utils
|   |    ├── <util_name_file>.ts

```

## Start

Clonar esse repositório e executar o comando `yarn` para instalar as dependências.

## Rodar projeto

`yarn start`

## Commit

`yarn commit`
