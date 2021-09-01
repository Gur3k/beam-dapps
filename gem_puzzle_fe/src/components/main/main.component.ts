import { APIResponse, BoardType } from 'beamApiProps';
import { Tags } from '../../constants/html_tags';
import BaseComponent from '../base/base.component';
import { ApiHandler } from '../../utils/api_handler';
import Menu from '../menu/menu.component';
import { Field } from '../field/filed.component';
import { ReqID, ResTXStatus } from '../../constants/api_constants';
import {
  checkSolutionTx,
  invokeData,
  invokeDataSolution,
  txStatus,
  viewBoard,
} from '../../utils/request_creators';
import './main.scss';

export default class Main extends BaseComponent {
  menu: Menu;
  static element: any;
  
  constructor() {
    super(Tags.DIV, ['main']);
    ApiHandler.addObservers(this);
    this.menu = new Menu();
    this.append(this.menu);
  }

  initGameField = (board: BoardType): void => {
    this.menu.element.classList.add('active');
    // const fl = new Field(board).element;
    // this.element.append(fl)
    Field.ready(board);
  };
  cancelGame = (): void => {
    this.menu.element.classList.remove('active');
  };

  inform = (res: APIResponse): void => {
    switch (res.id) {
      case ReqID.CHECK:
        console.log(JSON.parse(res.result.output));
        break;
      case ReqID.START_GAME:
        invokeData(res.result.raw_data);
        break;
      case ReqID.DESTROY:
        invokeData(res.result.raw_data);
        break;
      case ReqID.CANCEL_GAME:
        invokeData(res.result.raw_data);
        this.cancelGame();
        break;
      case ReqID.INVOKE_DATA:
        this.menu.initLoader(res.result.txid);
        txStatus(res.result.txid);
        break;
      case ReqID.TX_STATUS:
        if (res.result.status_string === ResTXStatus.IN_PROGRESS) {
          txStatus(res.result.txId);
        } else {
          viewBoard();
        }
        break;
      case ReqID.VIEW_BOARD:
        try {
          this.menu.initButtonMenu();
          this.initGameField(JSON.parse(res.result.output).board as BoardType);
        } catch (err) {
          console.error(err);
        }
        break;
      case ReqID.CHECK_SOLUTION:
        invokeDataSolution(res.result.raw_data);
        break;
      case ReqID.INVOKE_DATA_SOLUTION:
        this.menu.initLoader(res.result.txid);
        checkSolutionTx(res.result.txid);
        console.log(res.result.txid);
          console.log(res.result.txid);
        break;
      case ReqID.TX_CHECK_SOLUTION:
        if (res.result.status_string === ResTXStatus.IN_PROGRESS) {
          console.log(res.result.txId);
          console.log(res.result.txId);
          
          
          checkSolutionTx(res.result.txId);
        } else {
          console.log('YOU WIN');
        }
        break;
      case ReqID.VIEW_CHECK_RESULT:
        console.log('WIN');
        break;
      default:
        break;
    }
  };
}
