import classNames from "./classNames";

describe('classNames test', () => {
  test('With single class', () => {
    expect(classNames('class1')).toBe('class1');
  });

  test('With several classes', () => {
    expect(classNames('class1', {}, ['class2', 'class3'])).toBe('class1 class2 class3');
  });

  test('With several classes and conditions', () => {
    const expectedClass = 'class1 trueClass class2'
    expect(classNames('class1', { trueClass: true, falseClass: false }, ['class2'])).toBe(expectedClass);
  });
})