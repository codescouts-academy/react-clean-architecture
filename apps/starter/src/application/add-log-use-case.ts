import { IEventDispatcher } from "@codescouts/events";

import { NewLogRegistered } from "@/domain/events/NewLogRegistered";
import { Log } from "@/domain/model/Log";
import { LoggerService } from "@/domain/services/LoggerService";

export class AddLogUserCase {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly dispatcher: IEventDispatcher
  ) {}

  public execute(message: string) {
    const log = new Log(message);

    this.loggerService.save(log);

    this.dispatcher.dispatch(new NewLogRegistered(log));
  }
}
