import { NetworkingModule } from './networking.module';

describe('NetworkingModule', () => {
  let networkingModule: NetworkingModule;

  beforeEach(() => {
    networkingModule = new NetworkingModule();
  });

  it('should create an instance', () => {
    expect(networkingModule).toBeTruthy();
  });
});
