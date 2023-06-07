import { DependencyInjectionContainer } from "@codescouts/di";
import { useEvents } from "@codescouts/ui";

import { NewLogRegisteredHandler } from "@/domain/events";

import { buildDependencies } from "./di";
import { Header } from "./ui/components";
import { Home } from "./ui/pages";

export const App = () => {
    useEvents(() => {
        new NewLogRegisteredHandler();
    });

    return (
        <DependencyInjectionContainer builder={buildDependencies}>
            <div className="app">
                <Header />
                <Home />
            </div>
        </DependencyInjectionContainer>
    );
};