const Engineer = require("../lib/Engineer");

test("can instantiate Engineer Instance", () => {
const e = new Engineer();
expect(typeof(e)).toBe("object");
});

//get emplyee's name by testing the get name method
test("can get Engineer name", () => {
    const name = "Jordan"
    const e = new Engineer(name);
    expect(e.getName()).toBe("Jordan");
    });

    test("can get Engineer id number", () => {
        const id = "023"
        const e = new Engineer("jordan",id);
        expect(e.getId()).toBe("023");
        });


    test("can get Engineer email", () => {
        const email = "jordan23@gmail.com"
        const e = new Engineer("jordan", 1,email);
        expect(e.getEmail()).toBe("jordan23@gmail.com");
        });


        test("can get Engineer github", ()=> {
            const github = "jordan231"
            const e = new Engineer("jordan","023","jordan23@gmail.com",github);
            expect(e.getGithub()).toBe("jordan231");
        });
0