<div align="center">
  <h1>
    <img src="https://github.com/NedcloarBR/vscode-random-brazil/blob/master/assets/icon.png" alt="Icon" width="32" height="32" /> 
    Random Brazil
  </h1>

  <p><strong>Random Brazil</strong> é uma extensão para o Visual Studio Code (e outras IDEs compatíveis) que permite <strong>gerar</strong> e <strong>validar</strong> dados de documentos brasileiros, como CPF, CNPJ, CNH, entre outros. Ideal para desenvolvedores que necessitam de dados fictícios para testes ou validação de informações em suas aplicações.</p>

  [![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/nedcloarbr.random-brazil?include_prereleases&style=for-the-badge&label=VSCode)](https://marketplace.visualstudio.com/items?itemName=nedcloarbr.random-brazil)
  [![Open VSX Version](https://img.shields.io/open-vsx/v/nedcloarbr/random-brazil?style=for-the-badge&color=purple)](https://open-vsx.org/extension/nedcloarbr/random-brazil)

  [en-US](https://github.com/NedcloarBR/vscode-random-brazil/blob/master/README.md)
  pt-BR

</div>

---

## 🚀 Funcionalidades

- **✨ Geração de Dados**  
  Crie dados brasileiros válidos, como CPF, CNPJ e CNH, de forma rápida e prática.

- **🔍 Validação de Dados**  
  Verifique se CPFs, CNPJs e outros documentos diretamente no editor são validos.

- **🖥️ Interface Intuitiva**  
  A extensão se integra ao VSCode, oferecendo uma experiência fluida e eficiente no seu fluxo de trabalho.

---

## 🛠️ Instalação

### 1️⃣ Instalar via VSCode
1. Abra o **Visual Studio Code**.
2. Acesse a aba de extensões (`Ctrl/Cmd+Shift+X`).
3. Procure por **`Random Brazil`**.
4. Clique em **Instalar**.

### 2️⃣ Instalar via linha de comando
Execute o comando abaixo no terminal:  
```bash
code --install-extension nedcloarbr.random-brazil
```

---

## 💡 Como Usar

Após instalar, utilize a extensão diretamente pela barra lateral ou por comandos disponíveis na **paleta de comandos** (`Ctrl/Cmd+Shift+P`).

### 📌 Exemplos de Uso

- **Gerar um CPF válido**  
  Execute o comando:  
  `> Random Brazil: Gerar CPF`  
  O CPF será inserido automaticamente na posição do cursor no código.

- **Validar um CPF**  
  Execute o comando:  
  `Random Brazil: Validar CPF`  
  Digite o CPF. Uma notificação será exibida indicando se o CPF é válido ou não.

---

## ⚙️ Configuração

| Configuração   | Descrição                                                                                           | Valores Possíveis        |
|----------------|-----------------------------------------------------------------------------------------------------|--------------------------|
| `enable`       | Ativa ou Desativa a extensão                                                                        | `true`/`false`           |
| `punctuation`  | Ativa, Desativa ou Pergunta se o documento vai ser gerado com pontuação                             | `enable`/`disable`/`ask` |
| `notification` | Ativa ou Desativa as notificações. Se desativado os comandos de checar não funcionarão corretamente | `true`/`false`           |

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para ajudar a melhorar o projeto, siga os passos:

1. Faça um fork do repositório.
2. Crie um branch para sua feature ou correção:  
   `git checkout -b feat/nova-feature`
3. Faça commit das suas mudanças:  
   `git commit -am 'Adicionei minha feature'`
4. Envie para o branch:  
   `git push origin feat/nova-feature`
5. Abra um **Pull Request**.

---

## 🏆 Créditos

- Inspirado na extensão [Random Everything](https://marketplace.visualstudio.com/items?itemName=helixquar.randomeverything).  
- Utiliza o pacote [validation-br](https://www.npmjs.com/package/validation-br) para validação de dados brasileiros.

---

## 📜 Licença

Este projeto está licenciado sob a licença **MIT**. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---
