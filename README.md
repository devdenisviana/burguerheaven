# 🍔 Burguer Heaven - Site da Hamburgueria Orgânica

Este é um projeto desenvolvido em **Next.js** para um site de uma hamburgueria orgânica. O layout responsivo foi criado utilizando **Tailwind CSS**.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📂 Estrutura do Projeto

```
📦 projeto
├── 📂 components
│   ├── Layout.tsx
├── 📂 pages
│   ├── index.tsx
├── 📂 public
│   ├── images/
│   │   ├── Burgers.png
│   │   ├── fritas.png
│   │   ├── 3burguers.png
│   │   ├── balcao.png
├── 📂 styles
│   ├── globals.css
├── 📝 README.md
├── 📄 package.json
├── 📄 tsconfig.json
```

## 🎨 Layout da Página Inicial

A página inicial (**index.tsx**) contém:

- **Título principal**: "A Hamburgueria Orgânica Favorita de São Paulo".
- **Imagem do hambúrguer**.
- **Seção destacada** com um subtítulo e um botão.
- **Imagens adicionais** de fritas e hambúrgueres.
- **Texto animado** de destaque.
- **Chamada para ação**: "Encomendar online ou venha visitar-nos hoje".
- **Rodapé** com links para páginas relevantes.

## 🏗️ Componentes Principais

### 📌 **Layout.tsx**

O **Layout** é um componente reutilizável que estrutura a página:

- **Navegação com links**: "Sobre", "Menu" e "Encomendar Online".
- **Normalização dos links** para URLs amigáveis.
- **Conteúdo principal** utilizando `children`.

### 📌 **index.tsx**

Página inicial do site que utiliza o **Layout.tsx** para organizar os elementos visuais.

## 🛠️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/devdenisviana/burguerheaven.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd projeto
   ```
3. Instale as dependências:
   ```bash
   pnpm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```
5. Acesse o projeto no navegador em `http://localhost:3000`

## 📸 Imagens Utilizadas

As imagens do projeto devem estar na pasta `public/images/`, incluindo:

- `Burgers.png`
- `fritas.png`
- `3burguers.png`
- `balcao.png`

## 📝 Considerações Finais

Este projeto visa criar uma experiência envolvente para os clientes da hamburgueria, utilizando tecnologias modernas para um design responsivo e interativo. 🚀🍔
