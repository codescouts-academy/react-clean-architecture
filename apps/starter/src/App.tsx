import { DependencyInjectionContainer } from "@codescouts/di"
import { useEvents } from "@codescouts/ui";
import { buildDependencies } from "./di"
import { NewLogRegisteredHandler } from "@/domain/events";
import { Home } from "./ui/pages"
import { Header } from "./ui/components";

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
    )
}