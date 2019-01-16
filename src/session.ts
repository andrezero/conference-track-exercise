import { TalkEvent } from './events';

class Session {
  public talks: TalkEvent[] = [];

  constructor (public startTime: number, public maxDuration: number) {

  }

  public addTalks (talks: TalkEvent[]): TalkEvent[] {
    const ret: TalkEvent[]  = [];
    for (const talk of talks) {
      if (this.talkFits(talk)) {
        this.talks.push(talk);
      } else {
        ret.push(talk);
      }
    }
    return ret;
  }

  private talkFits (talk: TalkEvent): boolean {
    return talk.duration + this.sessionDuration <= this.maxDuration;
  }

  private get sessionDuration (): number {
    return this.talks.reduce((acc: number, talk: TalkEvent) => acc + talk.duration, 0);
  }

}

export { Session };
