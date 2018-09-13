const title = 'JSX from typescript';
const h1 = <h1>{title}</h1>;
class HelloWorldComponent extends React.Component {
    render() {
        return <h2>Hello {this.props.greeting}!</h2>;
    }
}
const frank = 'frank';
const test = <HelloWorldComponent greeting={frank}></HelloWorldComponent>;
var a = <div>
  {["foo", "bar"].map(i => <span>{i}</span>)}
</div>;
