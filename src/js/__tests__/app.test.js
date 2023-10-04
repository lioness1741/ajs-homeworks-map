import ErrorRepository from '../app';

test('Valid error code added returns error code value', () => {
  const errorsRepo = new ErrorRepository();

  expect(errorsRepo.translate(20)).toBe('OK');
});

test('Invalid error code added returns string "Unknown error"', () => {
  const errorsRepo = new ErrorRepository();

  expect(errorsRepo.translate(50)).toBe('Unknown error');
});
