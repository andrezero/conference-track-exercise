abstract class Event {

  constructor (public title: string) {

  }
}

class TalkEvent extends Event {

  constructor (title: string, public duration: number) {
    super(title);
  }
}

class NetworkingEvent extends Event {
  constructor (title: string) {
    super(title);
  }
}

export { Event, TalkEvent, NetworkingEvent };
