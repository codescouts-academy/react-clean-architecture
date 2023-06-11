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
`}
        </code>
      </pre>
    </div>
  );
};
