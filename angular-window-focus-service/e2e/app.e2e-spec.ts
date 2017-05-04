import { AngularWindowFocusServicePage } from './app.po';

describe('angular-window-focus-service App', function() {
  let page: AngularWindowFocusServicePage;

  beforeEach(() => {
    page = new AngularWindowFocusServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
