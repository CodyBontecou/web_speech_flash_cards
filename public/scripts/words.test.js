// const { handleIteration } = require('./words');

test('iterator iterates by 1', () => {
    let iteration = 0;
    const words = [{english: 'water', spanish: 'agua'}, {english: 'yes', spanish: 'sí'}];
    function handleIteration(words) {
        if (iteration >= words.length - 1) {
            iteration = 0
        } else {
            iteration += 1;
        }
    }
    handleIteration(words);
    expect(iteration).toBe(1);
});
