const Manager = require("../lib/manager");

test('creates an Manager object', () => {
    const manager = new Manager('jill', 1, 'jill@email.com', 3000);
});

test("checks if manager has office number", () => {
    const office = 3000
    const manager  = new Manager(office);
	expect(manager.office).toBe(Number);
	expect(manager.getOffice()).toBe(Number);
});

it("Compares 'manager' and the role", () => {
    const manager = new Manager('jill', 1, 'jill@email.com', 3000);

	expect(manager.getRole()).toEqual("Manager");
});


