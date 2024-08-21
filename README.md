# Random Brazil

## Descrição

**Random Brazil** é uma extensão do Visual Studio Code que permite gerar e validar dados de documentos brasileiros, como CPF, CNPJ, CNH, entre outros. É uma ferramenta útil para desenvolvedores que precisam de dados fictícios para testes ou validação de dados em suas aplicações.

## Funcionalidades

- **Geração de Dados**: Gere dados brasileiros como CPF, CNPJ, CNH, entre outros, com apenas alguns cliques.
- **Validação de Dados**: Valide a autenticidade de CPFs, CNPJs e outros documentos brasileiros diretamente no editor.
- **Interface Intuitiva**: A extensão oferece uma interface amigável integrada ao VSCode, facilitando o uso e a integração no fluxo de trabalho.

## Instalação

1. **Instalar via VSCode**:
   - Abra o Visual Studio Code.
   - Vá para a aba de extensões (Ctrl+Shift+X).
   - Procure por `"Random Brazil"`.
   - Clique em "Instalar".

2. **Instalar via linha de comando**:
   - Execute o comando: `code --install-extension nedcloarbr.random-brazil`.

## Uso

Após a instalação, acesse a extensão através da barra lateral ou use os comandos disponíveis na paleta de comandos (`Ctrl+Shift+P`).

### Exemplos de Uso

- **Gerar um CPF válido**: Execute o comando `Random Brasil: Random CPF` o CPF será posicionado onde seu ponteiro está no código (suporte para multiplos locais incluido).
- **Validar um CPF**: Execute o comando `Random Brasil: Check CPF` digite o CPF uma notificação ira surgir na tela informando se o mesmo é ou não válido.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Para começar:

1. Faça um fork do repositório.
2. Crie um branch para sua feature ou correção (`git checkout -b feat/nova-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adicionei minha feature'`).
4. Envie para o branch (`git push origin feat/nova-feature`).
5. Abra um Pull Request.

## Créditos

Esta extensão foi inspirada na extensão [Random Everything](https://marketplace.visualstudio.com/items?itemName=helixquar.randomeverything) e utiliza o pacote [validation-br](https://www.npmjs.com/package/validation-br) para realizar as validações de dados brasileiros.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Links
[VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=nedcloarbr.random-brazil) \
[Open-VSX](https://open-vsx.org/extension/nedcloarbr/random-brazil)