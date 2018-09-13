import { HostMessage, StartMessage, RunMessage, EmptyAdapterMessage, WorkerMessage } from './MessageProtocol';
import * as log4js from 'log4js';

const log = log4js.getLogger('Worker');


class Worker {

    constructor() {
        this.listenForMessage();
    }

    listenForMessage() {
        process.on('message', (message: HostMessage) => {
            switch (message.kind) {
                case 'start':
                    this.start(message);
                    break;
                case 'run':
                    this.run(message);
                    break;
                case 'init':
                    this.init();
                    break;
                case 'dispose':
                    this.dispose();
                    break;
                default:
                    this.logReceivedMessageWarning(message);
            }
        });
    }

    init() {
        log.info('init');
        this.send({ kind: 'initDone' });
    }

    dispose() {
        log.info('dispose');
        this.send({ kind: 'disposeDone' })
    }

    start(message: StartMessage) {
        log.info(`Started ${message.taskName}`);
    }

    run(message: RunMessage) {
        log.info(`Running with options: ${JSON.stringify(message.runOptions)}`)
        this.send({ kind: 'result', result: 'We are happy with typescript!' });
    }

    send(message: WorkerMessage) {
        process.send(message);
    }

    private logReceivedMessageWarning(message: never) {
        log.warn('Received unsupported message: {}', JSON.stringify(message));
    }
}

new Worker();
