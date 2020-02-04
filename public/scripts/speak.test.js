const { handleIteration } = require('./words');

test('iterator iterates by 1', () => {
    let iteration = 0;
    const words = [{english: 'water', spanish: 'agua'}, {english: 'yes', spanish: 'sí'}];
    handleIteration(words);
    expect(iteration).toBe(1);
});

test('beep function makes noise on success', () => {

});

test('the begin button is only clickable if the game has not begun', () => {

});
