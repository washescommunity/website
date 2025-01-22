# Novo Washes Website

Este é o repositório para o projeto do Website do WASHES. Este projeto utiliza React, Vite, Tailwind CSS, e várias outras tecnologias para criar uma aplicação web moderna e responsiva.

## **Índice**
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Rodando o Projeto](#rodando-o-projeto)
- [Build para Produção](#build-para-produção)
- [Visualizando o Build](#visualizando-o-build)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## **Pré-requisitos**

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)

## **Instalação**

Siga os passos abaixo para clonar o repositório e instalar as dependências do projeto:

1. **Clone o repositório:**

   Abra o terminal e execute o seguinte comando:

   ```bash
   git clone https://github.com/gesid/novo-washes-website.git
   ```

   Navegue até o diretório do projeto:

   ```bash
   cd novo-washes-website
   ```

2. **Instale as dependências:**

   Com o terminal aberto no diretório do projeto, execute o comando abaixo para instalar todas as dependências necessárias:

   ```bash
   npm install
   ```

## **Rodando o Projeto**

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
```

Isso irá iniciar o Vite, e você poderá acessar a aplicação em seu navegador no seguinte endereço:

```
http://localhost:5173/
```

Se precisar acessar o projeto a partir de outro dispositivo na mesma rede, você pode usar o comando abaixo para expor o servidor:

```bash
npm run dev -- --host
```

## **Build para Produção**

Para gerar os arquivos otimizados para produção, utilize o comando:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist`.

## **Visualizando o Build**

Após gerar o build, você pode visualizar o resultado em um ambiente de produção local com o seguinte comando:

```bash
npm run preview
```

Isso irá iniciar um servidor local que servirá os arquivos gerados, permitindo que você veja como o projeto se comporta em um ambiente de produção.

## **Tecnologias Utilizadas**

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [Vite](https://vitejs.dev/) - Ferramenta de build e servidor de desenvolvimento rápido.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida.
- [ESLint](https://eslint.org/) - Ferramenta de linting para manter a qualidade do código.
- [React Router](https://reactrouter.com/) - Biblioteca para gerenciamento de rotas no React.
- [FontAwesome](https://fontawesome.com/) - Biblioteca de ícones para web.
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones para React.