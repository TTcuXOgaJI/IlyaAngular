import { IlyaPismanWebPage } from './app.po';

describe('ilya-pisman-web App', function() {
  let page: IlyaPismanWebPage;

  beforeEach(() => {
    page = new IlyaPismanWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
