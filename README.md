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
<p>
  <a href="https://scouts.fyi/library/" title="Go to project documentation" target="_blank"><img src="https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge" alt="view - Documentation"/></a>

</p>
<span>
  <img src="https://img.shields.io/badge/maintained-yes-blue" alt="maintained - yes">
  <a title="Go to contributions doc"><img src="https://img.shields.io/badge/contributions-welcome-blue" alt="contributions - welcome"></a>
  <a href="https://library.codescouts.academy/docs/clean-architecture/"><img src="https://img.shields.io/badge/Clean-Architecture-2ea44f" alt="Clean - Architecture"></a>
</span>

## 🚀 Getting started

⬇️ Template downloading

```sh
npx degit codescouts-academy/react-clean-architecture my-app
```

🏂 Install dependencies

```sh
pnpm i
```

🏁 Start

```sh
pnpm run dev
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

If you find any mistake, you think there are things to improve or simply want to contribute, you are welcome.
Just make a fork and send us your PR 🙏.

## LICENSE

Released under [MIT](/LICENSE) by [@codescouts-academy](https://github.com/codescouts-academy).
