import './list-status.less';

import { h, Component } from 'preact';

export default class Footer extends Component {
  render(props, state){
    return <p class="list-status">
      {
        props.isEmpty
          ? props.emptyText
          : props.isEnd
            ? '没有更多了'
            : '正在加载'
      }
    </p>;
  }
}