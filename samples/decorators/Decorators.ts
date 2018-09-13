const logClass = function (TargetClass: FunctionConstructor) {
    return class AnnotatedClass extends TargetClass {
        constructor(...args) {
            console.log(`constructing a ${TargetClass} using ${JSON.stringify(args)}`)
            super(...args);
        }
    }
} as any;

function logMethod(time: string) {
    return function logMethod(target: Object, key: string, value: any) {
        console.log(`Registering logMethod for ${target}${key}`);

        return {
            value: function (...args: any[]) {
                console.log(`Call: ${key} with ${JSON.stringify(args)} at: ${time}`);

                return value.value.apply(this, args);
            }
        };
    }
};

@logClass
class Person {
    constructor(private name: string) {
    }

    @logMethod(new Date().toLocaleTimeString())
    mary(otherPerson: Person) {
        console.log(`${this.name} maries to ${otherPerson.name}`)
    }
}

new Person('harry').mary(new Person('diane'));

