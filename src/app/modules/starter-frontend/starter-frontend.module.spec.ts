import { StarterFrontendModule } from './starter-frontend.module';

describe('StarterFrontendModule', () => {
  let starterFrontendModule: StarterFrontendModule;

  beforeEach(() => {
    starterFrontendModule = new StarterFrontendModule();
  });

  it('should create an instance', () => {
    expect(starterFrontendModule).toBeTruthy();
  });
});
