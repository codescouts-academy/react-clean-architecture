<p align="center">
  <a href="https://www.codescouts.academy/" target="_blank">
    <img alt="CodeScouts" src="https://www.codescouts.academy/images/logo-all-yellow.png" />
  </a>
</p>

<h1 align="center">
 Clean architecture template for react and vite 🚀
</h1>
<p align="center">
  React Clean Architecture Template 🏗️
  <br />
  <br />
  <a href="https://github.com/codescouts-academy/react-clean-architecture/stargazers">Stars are welcome 😊</a>
  <a href="https://github.com/codescouts-academy/react-clean-architecture/issues">Report an error 🐛</a>
  <a href="https://www.codescouts.academy/courses/arquitectura-frontend/">Contact us 🤔</a>
</p>

## 🚀 Getting started

⬇️ Template downloading

```sh
npx degit codescouts-academy/react-clean-architecture my-app
```

🏂 Install dependencies

```sh
npm i
```

🏁 Start

```sh
npm run dev
```

## 🥋 Dependencies

- 🧪 codescouts/test -> Jest & Vite mocking library easy to use
- 💉 codescouts/di -> agnostic ependency injection container
- ⚡️ codescouts/events -> agnostic library to create and handle domain events
- 🛟 codescouts/store -> reactive store to allow update ui from domain
- 👩‍💻 codescouts/ui -> components for events and di only for react

## 👩‍💻 Project explanation

### 📁 Recommended folder structure

```

public/
├── favicon.png --> CodeScouts's logo
│
src/
├── application/ Our use cases
│   ├── add-log-user-case.test --> add-log-use-case tests
│   └── add-log-use-case.ts --> Here we model the use cases
├── domain/ Our Business logic
│   ├── events --> Here we model the domain events
│   ├── model --> Here we model our business logic
│   └── services --> Here exists the domain services (only abstractions)
│
├── infrastructure/ Our external services implementations
│   └── services
│       └── LoggerService.ts
│
├── ui/ React things
│   ├── components/ --> stateless components
│   └── pages/
│       └── home/
│           ├── Home.tsx --> Page component (View)
│           └── useHomeViewModel.ts --> Home UI business logic (ViewModel)
│
├── App.tsx
├── di.ts --> Dependency injection configuration
└── main.tsx --> Main component loaded, referenced in index.html
```

## 🤔 Contributing

Si encuentras algún error, crees que hay cosas por mejorar o simplemente quieres contribuir, eres bienvenido/a.
Solo realiza un fork y envíanos tu PR 🙏.
