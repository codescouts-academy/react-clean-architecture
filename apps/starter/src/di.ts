import { useEventDispatcher } from "@codescouts/ui";
import { register } from "ts-injecty";

import { AddLogUserCase } from "@/application/add-log-use-case";
import { useLogger } from "@/infrastructure/services/LoggerService";

export const buildDependencies = (builder: typeof register) => {
    return [
        builder(useLogger.name).withDynamic(() => useLogger()).build(),
        builder(useEventDispatcher.name).withDynamic(() => useEventDispatcher()).build(),
        builder(AddLogUserCase).withDependency(useLogger.name).and(useEventDispatcher.name).build(),
    ];
};