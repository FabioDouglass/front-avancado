# Backend Acervo Filmes

Projeto de MVP da sprint de Desenvolvimento Front End Avançado.
O projeto consiste em implementar uma interface de perfil inspirada no meu projeto da sprint de Back-End Avançado, o Acervo Musical.

## Baixar o projeto

```bash
git clone https://github.com/FabioDouglass/front-avancado
cd front-avancado
```

## Tecnologias Utilizadas

Node.js v22.17.0

## Rodar Projeto

1. **Instalar as dependências:**

```bash
 npm install
```

2. **Inicie a Aplicação:**

   ```bash
   npm run dev
   ```

3. **Acesse a Aplicação:**

Abra [http://localhost:5173/](http://localhost:5173/) no navegador

## URls

Login: [http://localhost:5173/](Login) no navegador
Perfil: [Perfil](http://localhost:5173/) no navegador
Home: [http://localhost:5173/](http://localhost:5173/) no navegador

- **Listar todos os filmes:**

  ```http
  GET /filmes
  ```

- **Listar um filme por titulo**

  ```http
  GET /filme?titulo=$titulo

  ```

- **Editar a nota de um filme:**

  ```http
  PATCH /filme/{titulo}
  Body:
  {
    "nota": int
  }
  ```

  - **Deletar um filme por título:**

  ```http
  DELETE /filme/{titulo}
  ```

- **Cadastrar um filme:**

  ```http
  POST /api/filme
  Body:
  {
  "ano": int,
  "diretor": str,
  "nota": int,
  "titulo": str
  }
  ```

```






```
