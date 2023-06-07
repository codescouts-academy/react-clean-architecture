import { register } from "ts-injecty";
import { useEventDispatcher } from "@codescouts/ui";

import { TestUseCase } from "@/application/test-use-case";
import { useLogger } from "@/infrastructure/services/LoggerService";

export const buildDependencies = (builder: typeof register) => {
    return [
        builder(useLogger.name).withDynamic(() => useLogger()).build(),
        builder(useEventDispatcher.name).withDynamic(() => useEventDispatcher()).build(),
        builder(TestUseCase).withDependency(useLogger.name).and(useEventDispatcher.name).build(),
    ];
}