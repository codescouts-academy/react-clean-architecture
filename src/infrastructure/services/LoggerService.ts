import { create } from "@codescouts/store";

import { Log } from "@/domain/model";
import { LoggerService } from "@/domain/services";

export const useLogger = create<LoggerService>((set) => ({
    logs: [],
    save: (log: Log) => set((state) => ({ logs: [...state.logs, log] }))
}))
    .withPersist(Log)
    .build();