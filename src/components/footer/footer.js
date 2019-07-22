import './footer.less';
import { h, Component } from 'preact';

export default class Footer extends Component {
  render(props, state){
    return <footer>
      <img src={require('../../images/footer.png')} />
    </footer>;
  }
}