const changeColor = require('../../src/js/changeColor');

test('should change background color', () => {
    changeColor('red');
    expect(document.body.style.backgroundColor).toEqual('red');
});
