const { NumberFormatter } = require('./mathService.js');

describe('NumberFormatter', () => {
	it('returns a correct answer', () => {
		expect(NumberFormatter('.231')).toBe('231');
	});
});
