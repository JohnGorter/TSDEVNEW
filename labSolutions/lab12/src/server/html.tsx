import * as typedHtml from 'typed-html';
import { BankConfig } from '../shared/BankConfig';

function head(bankConfig: BankConfig) {
    return <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"></link>
        <title>{bankConfig.name}</title>
    </head>
}

const accountTable = <div class="row">
    <div class="col-md-12">
        <h2>Bank accounts</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>;

const accountForm = <div class="row">
    <div class="col-md-12">
        <form class="form" name="customer">
            <div class="form-group">
                <label for="nameInput">First name</label>
                <input id="nameInput" name="firstName" type="text" class="form-control"></input>
            </div>
            <div class="form-group">
                <label for="nameInput">Last name</label>
                <input id="nameInput" name="lastName" type="text" class="form-control"></input>
            </div>
            <div class="form-group">
                <label for="nameInput">Preposition</label>
                <input id="nameInput" name="preposition" type="text" class="form-control"></input>
            </div>
            <button type="button" class="btn btn-primary"><i class="glyphicon glyphicon-plus">
            </i>
            </button>
        </form>
    </div>
</div>;

function body(bankConfig: BankConfig) {
    return <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>{bankConfig.name}</h1>
                </div>
            </div>
            {accountTable}
            <div class="row">
                <div class="col-md-12">
                    <h2>Add Bank account</h2>
                </div>
            </div>
            {accountForm}
            <template>
                <tr>
                    <td class="account"></td>
                    <td class="name"></td>
                </tr>
            </template>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.12/system-production.js"></script>
            <script src="client-bundle.js"></script>
            <script>
                SystemJS.import('client/client');
            </script>
        </div>
    </body>;
}

export function index(bankConfig: BankConfig) {
    return <html>
        {head(bankConfig)}
        {body(bankConfig)}
    </html>;
}


