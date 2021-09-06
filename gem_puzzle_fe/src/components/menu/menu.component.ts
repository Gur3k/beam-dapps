import { ApiHandler } from '../../logic/beam_api/api_handler';
import { Tags } from '../../constants/html_tags';
import BaseComponent from '../base/base.component';
import Button from '../button/button.component';
import './menu.scss';
import Loader from '../loader/loader.component';
import TxBoard from '../txboard/txboard.component';
import { MenuBtn } from '../../constants/app_constants';
import { menuProps } from '../../constants/menu_btn';
import { checkActiveGame } from '../../logic/beam_api/request_creators';

export default class Menu extends BaseComponent {
  constructor() {
    super(Tags.DIV, ['menu']);
    ApiHandler.addObservers(this);
    this.initButtonMenu();
  }

  initButtonMenu = (): void => {
    this.removeAll();
    checkActiveGame();
    const buttons = menuProps
      .filter((btn) => {
        if (this.classList.contains('active') && btn.key !== MenuBtn.RETURN) {
          return false;
        }
        if (
          !this.classList.contains('active')
          && btn.key === MenuBtn.RETURN
        ) {
          return false;
        }
        return true;
      })
      .map((btn) => {
        const btnKey = new Button();
        btnKey.element.classList.add(`btn_${btn.key}`);
        btnKey.setAttributes({ value: btn.title });
        btnKey.element.addEventListener('click', () => {
          // this.initLoader();
          btn.handler();
        });
        return btnKey;
      });
    this.append(...buttons);
  };

  initLoader = (txid?: string): void => {
    const args = [new Loader()];
    if (txid) {
      args.unshift(new TxBoard(txid));
    }
    this.removeAll();
    this.append(...args);
  };
}
