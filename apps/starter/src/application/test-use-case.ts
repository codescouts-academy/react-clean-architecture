import { IEventDispatcher } from "@codescouts/events";

import { Log } from "@/domain/model/Log";
import { LoggerService } from "@/domain/services/LoggerService";
import { NewLogRegistered } from "@/domain/events/NewLogRegistered";

export class TestUseCase {
    constructor(private readonly loggerService: LoggerService,
        private readonly dispatcher: IEventDispatcher) {

    }

    public execute(message: string) {
        const log = new Log(message);

        this.loggerService.save(log);

        this.dispatcher.dispatch(new NewLogRegistered(log));
    }
}