// const { default: test } = require("node:test");
const Employee = require("../lib/Employee");

test("can instantiate Employee Instance", () => {
const e = new Employee();
expect(typeof(e)).toBe("object");
});


//get emplyee's name by testing the get name method
test("can get Employee name", () => {
    const name = "kobe"
    const e = new Employee(name);
    expect(e.getName()).toBe("kobe");
    });

    test("can get Employee id number", () => {
        const id = "24"
        const e = new Employee("kobe",id);
        expect(e.getId()).toBe("24");
        });


    test("can get Employee email", () => {
        const email = "kobe24@gmail.com"
        const e = new Employee("kobe", "24",email);
        expect(e.getEmail()).toBe("kobe24@gmail.com");
        });

        


        //npm run test