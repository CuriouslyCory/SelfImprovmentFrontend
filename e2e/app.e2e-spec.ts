import { SelfImprovementPage } from './app.po';

describe('self-improvement App', () => {
  let page: SelfImprovementPage;

  beforeEach(() => {
    page = new SelfImprovementPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
