const sum = (num1, num2) => {
	return num1 + num2;
};

test('It should return 4', () => {
	expect(sum(2, 2)).toEqual(4);
});
