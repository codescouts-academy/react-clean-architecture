import { IEventDispatcher } from "@codescouts/events";
import { mock } from "@codescouts/test/jest";

import { LoggerService } from "@/domain/services";

import { AddLogUserCase } from "./add-log-use-case";

describe("Test use case should", () => {
  test("call save once time", () => {
    const loggerService = mock<LoggerService>();
    const eventDispatcher = mock<IEventDispatcher>();
    const useCase = new AddLogUserCase(loggerService, eventDispatcher);

    useCase.execute("Message");

    expect(loggerService.save).toHaveBeenCalledTimes(1);
    expect(loggerService.save).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Message",
      })
    );
  });

  test("dispatch the log registered once", () => {
    const loggerService = mock<LoggerService>();
    const eventDispatcher = mock<IEventDispatcher>();
    const useCase = new AddLogUserCase(loggerService, eventDispatcher);

    useCase.execute("Message");

    expect(eventDispatcher.dispatch).toHaveBeenCalledTimes(1);
    expect(eventDispatcher.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        log: expect.objectContaining({
          message: "Message",
        }),
      })
    );
  });
});
