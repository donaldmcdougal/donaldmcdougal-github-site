import { NeuralModule } from './neural.module';

describe('NeuralModule', () => {
  let neuralModule: NeuralModule;

  beforeEach(() => {
    neuralModule = new NeuralModule();
  });

  it('should create an instance', () => {
    expect(neuralModule).toBeTruthy();
  });
});
