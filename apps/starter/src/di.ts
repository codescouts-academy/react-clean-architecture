import { useEventDispatcher } from "@codescouts/ui";
import { register } from "ts-injecty";

import { AddLogUserCase } from "@/application/add-log-use-case";
import { useLogger } from "@/infrastructure/services/LoggerService";

import { NewLogRegisteredHandler } from "./infrastructure/events";

export const buildDependencies = (builder: typeof register) => {
  return [
    builder(NewLogRegisteredHandler).build(),
    builder(AddLogUserCase)
      .withDependencies(useLogger, useEventDispatcher)
      .build(),
  ];
};
