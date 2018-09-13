
const title = 'JSX from typescript';

const h1 = <h1>{title}</h1>;

class Greeting extends React.Component<{ greeting: string }, {}> {
    render() {
        return <h2>Hello {this.props.greeting}!</h2>
    }
}

const frank = 'frank';
const test = <Greeting greeting={frank}></Greeting>

var fooBar = <div>
    {["foo", "bar"].map(i => <span>{i}</span>)}
</div>

class Person {
    name: string;
}

class Customer extends Person {
    customerId: number;
}

const a = new Person();
a.name = 'hans';

const b: Array<Person> = [new Person()];
