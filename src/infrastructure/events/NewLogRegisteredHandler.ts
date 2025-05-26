import { Handler } from "@codescouts/events";

import { NewLogRegistered } from "@/domain/events/NewLogRegistered";

export class NewLogRegisteredHandler extends Handler<NewLogRegistered> {
  public constructor() {
    super(NewLogRegistered);
  }

  protected handle(event: NewLogRegistered): void {
    const message = `New log registered ${event.log.format()}`;

    setTimeout(() => {
      alert(message);
    }, 1000);
  }
}
