const Engineer = require("../lib/engineer");
test('creates an Engineer object', () => {
const engineer = new Engineer('jill', 1, 'jill@email.com', 'jilljill');
});

test("checks if engineer has github", () => {
const github = "jilljill"
const engineer = new Engineer(github);
expect(engineer.github).toBe(String);
expect(engineer.getGithub()).toBe(String);
});

it("checks if returns Engineer role", () => {
const engineer = new Engineer('jill', 1, 'jill@email.com', 'jilljill');
expect(engineer.getRole()).toEqual("Engineer");
});
