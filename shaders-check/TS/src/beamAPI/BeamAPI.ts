import { QWebChannel, QWebChannelTransport, QBEAM } from 'qwebchannel';
import shader from '../shader.wasm';

declare global {
  interface Window {
    qt: QWebChannelTransport;
  }
}

type ObserverComponent = {
  inform: (state: BeamAPI) => void;
};

type Params = {
  contract: number[];
  create_tx: boolean;
  args: string;
};

export class BeamAPI {
  private API: null | QBEAM;

  private contract: ArrayBuffer | null;

  private readonly observers: ObserverComponent[];

  constructor() {
    this.API = null;
    this.contract = null;
    this.observers = [];
  }

  addObserver = (component: ObserverComponent): void => {
    this.observers.push(component);
  };

  onApiResult = (json: string): void => {
    this.observers.forEach((element: ObserverComponent) => {
      element.inform(JSON.parse(json));
    });
  };

  loadAPI = async (): Promise<void> => {
    const { qt } = window;
    this.API = (await new Promise(
      (resolve) => new QWebChannel(qt.webChannelTransport, (channel) => {
        resolve(channel.objects.BEAM);
      })
    )) as QBEAM;
    this.contract = (await fetch(shader)
      .then((response) => response.arrayBuffer())) as ArrayBuffer;
    this.API.api.callWalletApiResult.connect(this.onApiResult);
  };

  callApi = (callid: string, method: string, params: Params): void => {
    if (this.contract && this.API) {
      const contract = Array.from(new Uint8Array(this.contract));
      const request = {
        jsonrpc: '2.0',
        id: callid,
        method,
        params: { ...params, contract }
      };
      this.API.api.callWalletApi(JSON.stringify(request));
    }
  };
}