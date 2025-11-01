# 🤝 Projeto ONG

> Projeto de Desenvolvimento Front-End para Web - Análise e Desenvolvimento de Sistemas

## 📖 Sobre o Projeto

Site institucional desenvolvido para uma ONG fictícia que promove ações sociais, educação e apoio comunitário. Este projeto foi desenvolvido como trabalho acadêmico aplicando os fundamentos de HTML5, CSS3 e JavaScript.

---

## 🎬 Apresentação do Projeto

Este projeto foi desenvolvido em **4 fases progressivas**, cada uma adicionando novas funcionalidades e aprimoramentos:

### 📌 Fase 1 - Estrutura HTML5 (Prática 01)
**Objetivo:** Criar a base estrutural do site com HTML5 semântico

**O que foi desenvolvido:**
- ✅ 3 páginas HTML completas (index, projetos, cadastro)
- ✅ Estrutura semântica (header, nav, main, section, article, footer, address)
- ✅ Formulário completo de cadastro de voluntários
- ✅ 9 campos com validação nativa HTML5
- ✅ Máscaras de input (CPF: 000.000.000-00, Telefone: (00) 00000-0000, CEP: 00000-000)
- ✅ Navegação consistente entre páginas
- ✅ 4 imagens otimizadas

**Tecnologias:** HTML5

---

### 🎨 Fase 2 - Estilização CSS3 (Prática 02)
**Objetivo:** Transformar a estrutura HTML em interface visual responsiva

**O que foi desenvolvido:**
- ✅ Design System completo com variáveis CSS
  - 8 cores (primary, secondary, accent, success, warning, neutral-light, neutral, neutral-dark)
  - 5 tamanhos de fonte (xs, sm, md, lg, xl)
  - 6 espaçamentos modulares (8px, 16px, 24px, 32px, 48px, 64px)
- ✅ Layout responsivo com CSS Grid e Flexbox
- ✅ Grid de 12 colunas customizado
- ✅ 5 breakpoints responsivos (1200px, 992px, 768px, 576px, 400px)
- ✅ Menu hambúrguer para mobile
- ✅ Componentes estilizados (cards, botões, badges, alerts)
- ✅ Formulário com validação visual
- ✅ Estados de botões (hover, focus, active, disabled)

**Tecnologias:** HTML5 + CSS3

---

### ⚡ Fase 3 - Interatividade JavaScript (Prática 03)
**Objetivo:** Adicionar validações e interatividade ao site

**O que foi desenvolvido:**
- ✅ Sistema de validação de formulário com JavaScript
- ✅ Verificação de consistência de dados:
  - CPF: valida 11 dígitos e números não repetidos
  - Telefone: valida 11 dígitos
  - CEP: valida 8 dígitos
  - Nome: mínimo 3 caracteres
  - Email: validação de formato
- ✅ Alerts personalizados com mensagens de erro
- ✅ Alert de sucesso após envio
- ✅ Menu hambúrguer funcional
- ✅ Código organizado por funcionalidades

**Tecnologias:** HTML5 + CSS3 + JavaScript

---

### ♿ Fase 4 - Acessibilidade e Deploy (Prática 04)
**Objetivo:** Finalizar o projeto com boas práticas profissionais

**O que foi desenvolvido:**
- ✅ README profissional completo
- ✅ Documentação técnica detalhada
- ✅ Versionamento semântico com Git/GitHub
- ✅ Organização em branches por prática
- ✅ Estrutura de projeto otimizada

**Tecnologias:** HTML5 + CSS3 + JavaScript + Git/GitHub

---

## ✨ Funcionalidades

- 📄 **3 páginas HTML** com estrutura semântica
- 🎨 **Design responsivo** com CSS3
- 📱 **Menu hambúrguer** para mobile
- ✅ **Validação de formulário** com JavaScript
- 🔍 **Verificação de CPF, telefone e CEP**
- 💬 **Mensagens de erro** com alerts

---

## 🚀 Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📂 Estrutura do Projeto

```
ong-project/
│
├── index.html              # Página inicial
├── projetos.html           # Página de projetos
├── cadastro.html           # Página com formulário
│
├── css/
│   └── styles.css          # Estilos CSS (responsivo)
│
├── js/
│   └── scripts.js          # Validações JavaScript
│
├── img/
│   ├── logo.png
│   ├── banner.png
│   ├── projeto.png
│   └── sobre.png
│
└── docs/
    └── README.md           # Documentação adicional
```

---

## 📚 Desenvolvimento por Práticas

### 📝 Prática 01 - HTML5 Semântico
- Estrutura HTML5 completa
- Tags semânticas (header, nav, main, section, article, footer)
- Formulário com validação nativa
- Máscaras de input (CPF, telefone, CEP)

### 🎨 Prática 02 - CSS3 Responsivo
- Design system com variáveis CSS
- 8 cores definidas
- 5 tamanhos de fonte
- Espaçamentos modulares
- Layout com CSS Grid e Flexbox
- 5 breakpoints responsivos
- Menu hambúrguer mobile
- Componentes estilizados (cards, botões, alerts)

### ⚡ Prática 03 - JavaScript
- Validação completa de formulário
- Funções de verificação (CPF, telefone, CEP)
- Sistema de alerts para erros
- Menu responsivo com JavaScript

### ♿ Prática 04 - Acessibilidade e Deploy
- Melhorias de acessibilidade
- Otimização para produção
- Documentação completa
- Versionamento semântico

---

## 🎯 Como Usar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/tatianeccandido/ong-project.git
   ```

2. **Navegue até a pasta**
   ```bash
   cd ong-project
   ```

3. **Abra no navegador**
   ```bash
   # Abra o arquivo index.html no seu navegador
   open index.html
   ```

---

## 🌐 Branches do Projeto

- `main` - Branch principal (apenas README)
- `pratica01` - HTML5 semântico
- `pratica02` - CSS3 responsivo
- `pratica03` - JavaScript e validações
- `pratica04` - Acessibilidade e deploy

---

## 📋 Formulário de Cadastro

O formulário possui validação completa com os seguintes campos:

- ✅ Nome completo (mínimo 3 caracteres)
- ✅ Email (validação de formato)
- ✅ CPF (validação de 11 dígitos)
- ✅ Telefone (validação de 11 dígitos)
- ✅ Data de nascimento
- ✅ Endereço completo
- ✅ CEP (validação de 8 dígitos)
- ✅ Cidade
- ✅ Estado

---

## 👩‍💻 Autor

**Tatiane Cristine Candido**

- GitHub: [@tatianeccandido](https://github.com/tatianeccandido)
- Email: taticristinecandido@gmail.com

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina de **Desenvolvimento Front-End para Web** do curso de **Análise e Desenvolvimento de Sistemas**.

---

## 🎓 Instituição

**Análise e Desenvolvimento de Sistemas**  
2024

---

<div align="center">

**Feito com ❤️ para aprender desenvolvimento web**

</div>
