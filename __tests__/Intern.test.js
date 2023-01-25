const Intern= require("../lib/Intern");

test("can instantiate Intern Instance", () => {
const e = new Intern();
expect(typeof(e)).toBe("object");
});

//get emplyee's name by testing the get name method
test("can get intern name", () => {
    const name = "jarvis"
    const e = new Intern(name);
    expect(e.getName()).toBe("jarvis");
    });

    test("can get intern id number", () => {
        const id = "963"
        const e = new Intern("jarvis",id);
        expect(e.getId()).toBe("963");
        });


    test("can get intern email", () => {
        const email = "jarvis99@gmail.com"
        const e = new Intern("jarvis","963",email);
        expect(e.getEmail()).toBe("jarvis99@gmail.com");
        });


        test("can get school name", ()=> {
            const school = "University of Tokyo"
            const e = new Intern("jarvis","963","jarvis99@gmail.com","University of Tokyo");
            expect(e.getSchool()).toBe("University of Tokyo");
        });