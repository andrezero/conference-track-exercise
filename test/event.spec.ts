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

describe('TalkEvent', function t () {
  it('should be a constructor', function t () {
    expect(TalkEvent).to.be.a('function');
  });

  describe('when instantiated', function t () {
    beforeEach(function t () {
      this.instance = new TalkEvent('foo', 33);
    });

    it('should expose the title', function t () {
      expect(this.instance.title).to.equal('foo');
    });

    it('should expose the duration', function t () {
      expect(this.instance.duration).to.equal(33);
    });
  });
});
