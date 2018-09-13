
export type HostMessage = RunMessage | StartMessage | EmptyAdapterMessage | QuackMessage;
export type WorkerMessage = ResultMessage | EmptyWorkerMessage;

export interface ResultMessage {
  kind: 'result';
  result: string;
}

export interface RunMessage {
  kind: 'run';
  runOptions: { timeout: number };
}

export interface StartMessage {
  kind: 'start';
  taskName: string;
}

export interface EmptyAdapterMessage {
  kind: 'init' | 'dispose';
}

export interface QuackMessage {
    kind: 'quack'
}

export interface EmptyWorkerMessage {
  kind: 'initDone' | 'disposeDone';
}
