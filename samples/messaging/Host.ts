import { HostMessage, StartMessage, RunMessage, EmptyAdapterMessage, WorkerMessage } from './MessageProtocol';
import { fork, ChildProcess } from 'child_process';
import * as log4js from 'log4js';

const log = log4js.getLogger('Host');

class Host {
    private readonly childProcess: ChildProcess;

    constructor() {
        // clone arguments and remove debug port (for running from vsc)
        this.childProcess = fork(`./Worker.js`, [], { execArgv: [] });
        this.listenToChildProcess();
    }

    listenToChildProcess() {
        this.childProcess.on('message', (message: WorkerMessage) => {
            switch (message.kind) {
                case 'initDone':
                    log.info('Received "initDone"');
                    break;
                case 'result':
                    log.info(`Received result "${message.result}"`);
                    break;
                case 'disposeDone':
                    log.info('Received "disposeDone"');
                    break;
                default:
                    this.logReceivedMessageWarning(message);
            }
        });
    }

    private logReceivedMessageWarning(message: never) {
        log.warn('Received unsupported message: {}', JSON.stringify(message));
    }

    send(message: HostMessage) {
        this.childProcess.send(message);
    }
}

const host = new Host();
host.send({ kind: 'init' });
host.send({ kind: 'start', taskName: 'Municipal waste collecting' });
host.send({ kind: 'run', runOptions: { timeout: 3000 } });
host.send({ kind: 'dispose' });

