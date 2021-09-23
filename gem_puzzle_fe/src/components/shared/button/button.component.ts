import { MenuButtonType } from 'ComponentProps';
import { Tags } from '../../../constants/tags';
import BaseComponent from '../../base/base.component';
import './button.scss';
import { toDOMParser } from '../../../utils/string_handlers';
import { buttonFromMenu } from '../../../constants/svg.icons';

export default class Button extends BaseComponent {
  constructor({
    key, title, icon, handler
  }:MenuButtonType) {
    super(Tags.DIV, ['button', `btn_${key}`]);
    const bgSVG = toDOMParser(buttonFromMenu(key));
    bgSVG.classList.add('bgSvg');
    const titleDOM = new BaseComponent(Tags.DIV, ['titleDOM']);
    const titleDOMText = new BaseComponent(Tags.SPAN);
    const args:(BaseComponent | HTMLElement)[] = [titleDOMText];
    if (icon) {
      const iconDOM = toDOMParser(icon);
      args.unshift(iconDOM);
    }
    titleDOMText.innerHTML = title;
    this.element.addEventListener('click', () => {
      handler();
    });
    this.setAttributes({
      type: 'button'
    });
    titleDOM.append(...args);
    this.append(bgSVG, titleDOM);
  }

  public set setDisplay(value : boolean) {
    this.style.display = value ? 'block' : '';
  }
}