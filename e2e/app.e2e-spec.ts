import { AngularfourPage } from './app.po';

describe('angularfour App', () => {
  let page: AngularfourPage;

  beforeEach(() => {
    page = new AngularfourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
