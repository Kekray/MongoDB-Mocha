// Используется для тестов (true/false)
const assert = require('assert');
const Student = require('../src/student');

describe('Create the first data', () => {
  it('Save the student', (done) => {
    const jason = new Student({name: "Jason"});
    // Сохраняем в БД
    jason.save()
    .then(() => {
      assert(!jason.isNew)
      done()
    })
  });
});
