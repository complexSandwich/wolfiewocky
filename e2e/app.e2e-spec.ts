import { WolfiewockyPage } from './app.po';

describe('wolfiewocky App', () => {
  let page: WolfiewockyPage;

  beforeEach(() => {
    page = new WolfiewockyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
