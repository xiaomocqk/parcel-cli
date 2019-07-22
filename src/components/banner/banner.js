import './banner.less';
import { h, Component } from 'preact';

export default class Footer extends Component {
  render(props, state){
    return (
      <div class="banner">
        <div class="banner-imgbox">
          <img src={props.image} />
        </div>
      </div>
    );
  }
}