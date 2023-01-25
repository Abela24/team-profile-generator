const Manager = require("../lib/Manager");

test("can instantiate Manager Instance", () => {
const e = new Manager();
expect(typeof(e)).toBe("object");
});

//get emplyee's name by testing the get name method
test("can get Mangers name", () => {
    const name = "tobi"
    const e = new Manager(name);
    expect(e.getName()).toBe("tobi");
    });

    test("can get Managers id number", () => {
        const id = "741"
        const e = new Manager("tobi",id);
        expect(e.getId()).toBe("741");
        });


    test("can get Engineer email", () => {
        const email = "tobi44@gmail.com"
        const e = new Manager("tobi", 741,email);
        expect(e.getEmail()).toBe("tobi44@gmail.com");
        });


        test("can get Managers office number", ()=> {
            const officenumber = "0908"
            const e = new Manager("tobi",741,"tobi44@gmail.com",officenumber);
            expect(e.getOfficenumber()).toBe("0908");
        });