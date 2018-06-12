import _ from 'lodash'
import './style.scss'
import Icon from './icon.png'

function component() {
  var element = document.createElement('div');

  let echo = 'JiRenGu.com'
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', echo], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
