# 🖼️ Projeto: Galeria de Fotos com Filtro

![Preview da Galeria de Fotos](preview.gif)

Uma galeria de fotos dinâmica e 100% responsiva, construída com JavaScript puro, HTML5 e Bootstrap. Este projeto demonstra a manipulação do DOM para filtrar conteúdo em tempo real com base na seleção do usuário, uma funcionalidade essencial para portfólios e sites de e-commerce.

---

### 🎯 Objetivo

O objetivo principal deste projeto é implementar um **sistema de filtro de categorias** do lado do cliente (client-side) usando JavaScript. O foco é demonstrar a habilidade de ler atributos de dados (`data-attributes`), manipular classes CSS e atualizar a interface do usuário (UI) instantaneamente, sem a necessidade de recarregar a página.

---

### 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Tecnologias Web:** HTML5, CSS3
* **Framework/Biblioteca:** Bootstrap 5 (para o grid responsivo e estilo dos cards)
* **Ambiente:** Navegador Web

---

### 🧱 Estrutura do Código

A lógica de filtragem é o componente central desta aplicação, gerenciada inteiramente pelo `main.js`.

| Arquivo/Elemento | Propósito Principal |
| :--- | :--- |
| `index.html` | Estrutura da galeria, botões de filtro (`data-filter`) e os itens da galeria (`data-category`). |
| `css/style.css` | Estilização personalizada para o `object-fit` das imagens e efeitos de `hover`. |
| `js/main.js` | **Lógica de Filtragem:** Contém o *listener* que gerencia a exibição dos itens. |
| `main.js` » `filterButtons` | `NodeList` de todos os botões de filtro. |
| `main.js` » `imageCards` | `NodeList` de todos os cards de imagem. |
| `Bootstrap Class` » `d-none` | Classe utilitária usada pelo JS para esconder (`display: none`) os itens filtrados. |

---

### 📦 Estrutura dos Dados

* **`data-attributes` (Atributos de Dados)**
    A "comunicação" entre o HTML e o JavaScript é feita através de atributos `data-*`:
    * **`data-filter`:** Atributo nos botões que armazena o valor da categoria a ser filtrada (ex: `"natureza"`).
    * **`data-category`:** Atributo nos cards de imagem que armazena a qual categoria eles pertencem (ex: `"natureza"`).

---

### 🔍 Funcionalidades

* **Filtro por Categoria:** Permite ao usuário clicar em botões para exibir apenas as imagens daquela categoria (`Natureza`, `Arquitetura`, `Pessoas`).
* **Filtro "Todas":** Um botão para reexibir todos os itens da galeria.
* **Interface Responsiva:** A galeria de imagens se reajusta perfeitamente em dispositivos móveis.
* **Feedback Visual:** O botão de filtro selecionado fica visualmente "ativo" (usando a classe `.active`).
* **Efeito de Hover:** Efeito de zoom sutil nas imagens para uma melhor interatividade.

---

### 🧪 Como Executar

Este é um projeto de front-end estático.

1.  Clone o repositório (ou tenha a pasta do projeto em sua máquina).
2.  Abra o arquivo `index.html` no seu navegador de preferência.

---

### 📚 Aprendizado

Este projeto foi uma prática essencial de manipulação do DOM para interatividade:

* **Uso de `data-attributes`:** Aprendi a usar `data-attributes` como uma forma limpa e semântica de armazenar metadados no HTML, que podem ser lidos facilmente pelo JavaScript (`getAttribute()`).
* **Manipulação de Classes:** O núcleo da lógica de filtragem foi o uso de `classList.add('d-none')` e `classList.remove('d-none')`. Isso demonstrou como alterar a visibilidade de múltiplos elementos de forma eficiente.
* **Seleção Múltipla com `querySelectorAll`:** Pratiquei o uso de `querySelectorAll` para selecionar coleções de elementos (botões e cards) e iterar sobre elas com `forEach` para aplicar a lógica.

---

📄 **Licença**
Este projeto está licenciado sob a MIT License.
