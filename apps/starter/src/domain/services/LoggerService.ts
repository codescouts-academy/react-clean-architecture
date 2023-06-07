import { Log } from "../model/Log";

export interface LoggerService {
    logs: Log[],
    save: (log: Log) => void;
}