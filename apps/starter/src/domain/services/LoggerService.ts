import { Log } from "@/domain/model/Log";

export interface LoggerService {
    logs: Log[],
    save: (log: Log) => void;
}