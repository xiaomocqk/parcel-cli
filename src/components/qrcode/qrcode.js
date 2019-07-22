import { h, render, Component} from 'preact';
import './qrcode.less';

export default class Qrcode extends Component {
  state = {
    visible: false,
    opacity: 0,
  }
  componentWillReceiveProps(props){
    props.visible && this.fadeIn();
  }

  fadeIn(){
    this.setState({ visible: true });
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 100);
  }

  fadeOut(){
    this.setState({ opacity: 0 });
    setTimeout(()=> {
      this.setState({ visible: false });
      (typeof this.props.emit === 'function') && this.props.emit();
    }, 400);
  }
  
  render(props, state){
    let { qrcode, text } = props;

    if (!state.visible) return null;

    return (
      <div
        class="qrcode"
        style={{
          opacity: state.opacity
        }}
        onClick={() => this.fadeOut()}
        onTouchMove={e => e.preventDefault()}
      >
        <div class="qrcode-content">
          <img src={qrcode} />
          <p>{text}</p>
        </div>
      </div>
    );
  }
}