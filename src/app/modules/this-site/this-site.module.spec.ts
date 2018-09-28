import { ThisSiteModule } from './this-site.module';

describe('ThisSiteModule', () => {
  let thisSiteModule: ThisSiteModule;

  beforeEach(() => {
    thisSiteModule = new ThisSiteModule();
  });

  it('should create an instance', () => {
    expect(thisSiteModule).toBeTruthy();
  });
});
