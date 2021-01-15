'use strict';

/*
  JS class syntax: RangeValidator
  1. Реализовать класс RangeValidator, со следующими свойствами:
    ■  from (number);
    ■  to (number);
  2. Реализовать getter'ы и setter'ы для обоих свойств
  3. Реализовать getter range, который будет возвращать массив с двумя числами диапазона
  4. Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.
*/


class RangeValidator {
  /**
   *
   * @param {number} from 
   * @param {number} to 
   */
  constructor(from = 0, to = 0) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(newFrom) {
    if(typeof newFrom !== 'number'|| isNaN(newFrom)) {
      throw new TypeError('Parameters has unappropriate type.');
    }
    if(newFrom > this.to) {
      throw new RangeError('Unacceptable range! This parameter must be lower than the next one.');
    }
    this._from = newFrom;
  }
  get to() {
    return this._to;
  }
  set to(newTo) {
    if(typeof newTo !== 'number' || isNaN(newTo)) {
      throw new TypeError('Parameters has unappropriate type.');
    }
    if(newTo < this.from) {
      throw new RangeError('Unacceptable range! This parameter must be higher than the previous one.');
    }
    this._to = newTo;
  }
  get range() {
    return [this.from, this.to];
  }
  validate(num) {
    if(num >= this.from && num <= this.to) {
      return num;
    }
    throw new RangeError('The value is out of range.');
  }
}
const rangeValidator = new RangeValidator();