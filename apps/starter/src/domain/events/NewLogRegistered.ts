import { DomainEvent } from "@codescouts/events";
import { Log } from "../model/Log";

export class NewLogRegistered extends DomainEvent {
  constructor(public readonly log: Log) {
    super();
  }
}
