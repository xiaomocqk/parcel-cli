import './empty.less';
import { h, Component } from 'preact';

export default class Empty extends Component {
  render(props, state){
    return props.visible ? <img class="empty" src={require('../../images/empty.png')} /> : '';
  }
}