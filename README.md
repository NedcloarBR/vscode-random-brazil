<div align="center">
  <h1>
    <img src="https://github.com/NedcloarBR/vscode-random-brazil/blob/master/assets/icon.png" alt="Icon" width="32" height="32" /> 
    Random Brazil
  </h1>

  <p><strong>Random Brazil</strong> is an extension for Visual Studio Code (and other compatible IDEs) that allows you to <strong>generate</strong> and <strong>validate</strong> Brazilian document data such as CPF, CNPJ, CNH, among others. It is ideal for developers who need fictional data for testing or validating information in their applications.</p>

  [![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/nedcloarbr.random-brazil?include_prereleases&style=for-the-badge&label=VSCode)](https://marketplace.visualstudio.com/items?itemName=nedcloarbr.random-brazil)
  [![Open VSX Version](https://img.shields.io/open-vsx/v/nedcloarbr/random-brazil?style=for-the-badge&color=purple)](https://open-vsx.org/extension/nedcloarbr/random-brazil)
  
  en-US
  [pt-BR](https://github.com/NedcloarBR/vscode-random-brazil/blob/master/README.pt-BR.md)

</div>

---

## 🚀 Features

- **✨ Data Generation**  
  Quickly and easily generate valid Brazilian data, such as CPF, CNPJ, and CNH.

- **🔍 Data Validation**  
  Check if CPFs, CNPJs and other documents directly in the editor are valid.

- **🖥️ Intuitive Interface**  
  The extension integrates with VSCode, providing a smooth and efficient experience in your workflow.

---

## 🛠️ Installation

### 1️⃣ Install via VSCode
1. Open **Visual Studio Code**.
2. Go to the extensions tab (`Ctrl/Cmd+Shift+X`).
3. Search for **`Random Brazil`**.
4. Click on **Install**.

### 2️⃣ Install via command line
Run the following command in the terminal:  
```bash
code --install-extension nedcloarbr.random-brazil
```

---

## 💡 How to Use

After installation, use the extension directly from the sidebar or via commands available in the **command palette** (`Ctrl/Cmd+Shift+P`).

### 📌 Examples of Use

- **Generate a valid CPF**  
  Run the command:  
  `Random Brazil: Generate CPF`  
  The CPF will be automatically inserted at the cursor's position in the code.

- **Validate a CPF**  
  Run the command:  
  `Random Brazil: Validate CPF`  
  Enter the CPF. A notification will appear indicating whether the CPF is valid or not.

---

## ⚙️ Settings

| Setting        | Description                                                                                    | Possible values          |
|----------------|------------------------------------------------------------------------------------------------|--------------------------|
| `enable`       | Enable or Disable the extension                                                                | `true`/`false`           |
| `punctuation`  | Enable, Disable or Ask whether the document will be generated with punctuation                 | `enable`/`disable`/`ask` |
| `notification` | Enable or Disable the notifications. If Disabled the checking commands will not work correctly | `true`/`false`           |

---

## 🤝 Contribution

Contributions are welcome! To help improve the project, follow these steps:

1. Fork the repository.
2. Create a branch for your feature or fix:  
   `git checkout -b feat/new-feature`
3. Commit your changes:  
   `git commit -am 'Added my feature'`
4. Push to the branch:  
   `git push origin feat/new-feature`
5. Open a **Pull Request**.

---

## 📝 Note for README Updates

To facilitate README updates or language changes, consider structuring your README files into separate versions (e.g., `README.en.md` and `README.pt.md`) and referencing them as needed in the repository.

---

## 🏆 Credits

- Inspired by the extension [Random Everything](https://marketplace.visualstudio.com/items?itemName=helixquar.randomeverything).  
- Uses the [validation-br](https://www.npmjs.com/package/validation-br) package for validating Brazilian data.

---

## 📜 License

This project is licensed under the **MIT** license. For more details, see the [LICENSE](LICENSE) file.

---
