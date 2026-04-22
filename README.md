# 🚀 API de Pokémon

API REST desenvolvida com Node.js que consome a PokéAPI para buscar informações de Pokémon de forma simples e organizada.

---

## 📌 Tecnologias utilizadas

- Node.js
- Express
- Axios

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:

git clone https://github.com/andrefrota10/api-pokemon-node.git

2. Acesse a pasta:

cd SEU-REPO

3. Instale as dependências:

npm install

4. Rode o servidor:

node server.js

---

## 🌐 Servidor

O servidor roda em:

http://localhost:3000

---

## 🔎 Rotas

### 📍 Buscar Pokémon por nome

GET /pokemon?name=pikachu

### 📍 Buscar Pokémon por ID

GET /pokemon?id=25

---

## 📦 Exemplo de resposta

{
  "nome": "pikachu",
  "tipo": "electric",
  "habilidade": "static",
  "altura": 4,
  "peso": 60
}

---

## ❌ Tratamento de erros

### Pokémon não encontrado

{
  "erro": "Pokémon não encontrado"
}

### Requisição inválida

{
  "erro": "Parâmetro 'name' ou 'id' é obrigatório"
}

---

## 📚 Aprendizados

- Consumo de APIs externas
- Uso de Axios para requisições HTTP
- Estruturação de rotas com Express
- Manipulação de dados JSON
- Tratamento de erros em APIs

---

## 👨‍💻 Autor

Desenvolvido por André Frota