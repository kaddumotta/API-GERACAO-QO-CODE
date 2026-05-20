# QR Code & Password Generator

Gerador de QR Codes personalizados e senhas seguras utilizando Node.js, executado diretamente no terminal. O projeto foi desenvolvido para facilitar a criação rápida de QR Codes para e-commerces, permitindo gerar links de produtos de forma prática e eficiente, sem a necessidade de interface gráfica.

Além da geração de QR Codes, o sistema também conta com um gerador de senhas personalizadas baseado em parâmetros configuráveis.

---

## 🚀 Funcionalidades

- ✅ Geração de QR Codes diretamente no terminal
- ✅ Suporte a QR Code normal ou compacto
- ✅ Gerador de senhas seguras
- ✅ Configuração personalizada de caracteres
- ✅ Execução simples via terminal
- ✅ Ideal para links de produtos em e-commerces

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- JavaScript (ESModules)
- qrcode-terminal
- prompt
- chalk

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/kaddumotta/API-GERACAO-QO-CODE.git
```

Acesse a pasta do projeto:

```bash
cd API-GERACAO-QO-CODE
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como Executar

Execute o projeto com:

```bash
node src/index.js
```

Ao iniciar, o terminal exibirá:

```bash
Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)
```

---

# 📱 Gerador de QR Code

Ao selecionar a opção `1`, será solicitado:

```bash
Digite o link para gerar o QRCODE
```

Depois:

```bash
Escolha entre tipo (1 - Normal ou 2 - Terminal)
```

### Exemplo

```bash
Digite o link para gerar o QRCODE
https://meuecommerce.com/produto

Escolha entre tipo (1 - Normal ou 2 - Terminal)
2
```

O QR Code será gerado diretamente no terminal.

<img width="160" height="202" alt="image" src="https://github.com/user-attachments/assets/7e1ef89b-5aac-4eca-bfbe-a8503f29f5e9" />


---

# 🔐 Gerador de Senhas

Ao selecionar a opção `2`, o sistema gera uma senha aleatória com base nas configurações definidas nas variáveis de ambiente.

## Exemplo de configuração `.env`

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

## Exemplo de senha gerada

```bash
A#8kdP2@Lm1*
```

---

# 📂 Estrutura do Projeto

```bash
📦 API-GERACAO-QO-CODE
 ┣ 📂 node_modules
 ┣ 📂 src
 ┃ ┣ 📂 prompts
 ┃ ┃ ┣ 📜 prompt-main.js
 ┃ ┃ ┗ 📜 prompt-qrcode.js
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 password
 ┃ ┃ ┃ ┣ 📜 create.js
 ┃ ┃ ┃ ┗ 📜 handle.js
 ┃ ┃ ┗ 📂 qr-code
 ┃ ┃ ┃ ┣ 📜 create.js
 ┃ ┃ ┃ ┗ 📜 handle.js
 ┃ ┗ 📜 index.js
 ┣ 📜 .env
 ┣ 📜 .gitignore
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

# ⚙️ Dependências

Instale manualmente caso necessário:

```bash
npm install chalk prompt qrcode-terminal
```

---

# 💡 Possíveis Melhorias Futuras

- Exportar QR Code em imagem PNG
- Interface gráfica web
- Histórico de QR Codes gerados
- Personalização de cores do QR Code
- Integração com APIs de e-commerce
- Copiar senha automaticamente para área de transferência

---

# 🎓 Projeto de Estudo

Este projeto foi desenvolvido como parte dos estudos do curso **Formação Node.js** da DIO (Digital Innovation One), com o objetivo de praticar conceitos de:

- Node.js
- Modularização
- Entrada de dados via terminal
- Manipulação de variáveis de ambiente
- Geração de QR Codes
- Criação de utilitários CLI

O projeto foi expandido e personalizado para fins de aprendizado e prática em desenvolvimento backend com Node.js.
