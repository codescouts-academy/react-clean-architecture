import styles from "./Folders.module.css";

export const Folders = () => {
  return (
    <div className={styles.structure}>
      <pre>
        <code>
          {`
                          Dependencies
    
public/
├── favicon.png --> CodeScouts's logo
│
src/
├── application/ Our use cases
│   ├── add-log-user-case.test --> add-log-use-case tests
│   └── add-log-use-case.ts --> Use cases, our domain entry point
├── domain/ Our Business logic
│   ├── events --> Domain events
│   ├── model --> Doman entities
│   └── services --> Domain services (only abstractions)
│       └── LoggerService.ts (abstraction)
│
├── infrastructure/ Our external services implementations
│   ├── events --> Event handlers
│   └── services -> Implementation of domain services
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
`}
        </code>
      </pre>
    </div>
  );
};
