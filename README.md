# 🎓 Sistema de Alunos

Este é um projeto full-stack desenvolvido como parte do aprendizado em desenvolvimento web moderno. A aplicação consiste em um sistema simples para gerenciamento e listagem de alunos, integrando uma API REST no back--end com uma interface de usuário responsiva no front-end.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando a arquitetura de monorepo, separando as responsabilidades entre front-end e back-end.

### Front-end (`/frontend`)
* **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
* **[Material UI (MUI)](https://mui.com/)**: Framework de componentes UI React para um design limpo e responsivo.
* **MUI DataGrid**: Utilizado para a tabela de listagem de alunos, oferecendo recursos avançados como paginação e busca.

### Back-end (`/backend`)
* **[Java](https://www.java.com/)**: Linguagem de programação principal.
* **[Spring Boot](https://spring.io/projects/spring-boot)**: Framework para facilitar a criação e configuração da API REST.
* **Maven**: Gerenciador de dependências e build do projeto.

## ✨ Funcionalidades

* **Autenticação de Usuário**: Tela de login integrada com a API.
* **Listagem de Alunos**: Visualização em formato de tabela interativa.
* **Filtro de Busca**: Pesquisa de alunos pelo nome em tempo real.
* **Paginação**: Controle da quantidade de registros exibidos por página.
* **Controle de Sessão**: Barra de navegação superior com opção de logout.

## 📂 Estrutura do Projeto

```text
sistema-alunos/
├── backend/       # Código fonte da API Spring Boot
├── frontend/      # Código fonte da interface React
└── README.md      # Documentação do projeto
```

## 🛠️ Como executar o projeto localmente

Para rodar esta aplicação na sua máquina, você precisará ter o [Node.js](https://nodejs.org/) (para o React) e o [Java/JDK](https://www.oracle.com/java/technologies/downloads/) (para o Spring Boot) instalados.

### 1. Inicializando o Back-end (API)

A API precisa estar rodando para que o front-end consiga buscar e validar os dados.

1. Abra a pasta `backend` na sua IDE de preferência (como o **IntelliJ IDEA**).
2. Aguarde o Maven baixar as dependências do projeto.
3. Execute o arquivo principal da aplicação.
4. O servidor iniciará localmente, geralmente na porta `8080` (`http://localhost:8080`).

> Alternativamente, pelo terminal, você pode navegar até a pasta `backend` e rodar: `./mvnw spring-boot:run`

### 2. Inicializando o Front-end (Web)

Com a API rodando, abra um novo terminal para iniciar a interface do usuário.

1. Navegue até a pasta do front-end:
   ```bash
   cd frontend
   ```
 2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. A aplicação será aberta automaticamente no seu navegador no endereço
   http://localhost:3000.
 
