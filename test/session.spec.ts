import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(sinonChai);

import { TalkEvent } from '../src/events';
import { Session } from '../src/session';

describe('Session', function t () {
  it('should be a constructor', function t () {
    expect(Session).to.be.a('function');
  });

  describe('when instantiated', function t () {
    beforeEach(function t () {
      this.instance = new Session(33, 42);
    });

    it('should expose the startTime', function t () {
      expect(this.instance.startTime).to.equal(33);
    });

    it('should expose the maxDuration', function t () {
      expect(this.instance.maxDuration).to.equal(42);
    });
  });

  describe('given some talks', function t () {
    beforeEach(function t () {
      this.talks = [
        new TalkEvent('foo', 120),
        new TalkEvent('bar', 60),
      ];
      this.instance = new Session(9, 180);
      this.remaining = this.instance.addTalks(this.talks);
    });

    it('should add them to the session', function t () {
      const talksInSession = this.instance.talks;
      expect(talksInSession.length).to.equal(2);
      expect(talksInSession[0]).to.equal(this.talks[0]);
      expect(talksInSession[1]).to.equal(this.talks[1]);
    });

    it('should return an empty list', function t () {
      expect(this.remaining.length).to.equal(0);
    });
  });

  describe('given too many talks', function t () {
    beforeEach(function t () {
      this.talks = [
        new TalkEvent('foo', 120),
        new TalkEvent('bar', 150),
        new TalkEvent('bar', 30),
      ];
      this.instance = new Session(9, 180);
      this.remaining = this.instance.addTalks(this.talks);
    });

    it('should add as many as possible', function t () {
      const talksInSession = this.instance.talks;
      expect(talksInSession.length).to.equal(2);
      expect(talksInSession[0]).to.equal(this.talks[0]);
      expect(talksInSession[1]).to.equal(this.talks[2]);
    });

    it('should return remaining talks', function t () {
      expect(this.remaining.length).to.equal(1);
      expect(this.remaining[0]).to.equal(this.talks[1]);
    });
  });
});
