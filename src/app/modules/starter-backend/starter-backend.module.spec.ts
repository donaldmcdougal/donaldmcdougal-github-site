import { StarterBackendModule } from './starter-backend.module';

describe('StarterBackendModule', () => {
  let starterBackendModule: StarterBackendModule;

  beforeEach(() => {
    starterBackendModule = new StarterBackendModule();
  });

  it('should create an instance', () => {
    expect(starterBackendModule).toBeTruthy();
  });
});
