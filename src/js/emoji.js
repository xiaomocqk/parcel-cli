import '../styles/emoji.less';
import { h, render, Component} from 'preact';
import { requestEmojiAll } from '../api/api';
import { isWeixin } from '../utils/utils';

import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import ListStatus from '../components/list-status/list-status';
import Empty from '../components/empty/empty';
import Qrcode from '../components/qrcode/qrcode';

class Page extends Component {
  state = {
    list: [],
    qrcodeParams: {
      visible: false,
      qrcode: '',
      text: isWeixin ? '长按二维码添加表情' : '使用微信扫一扫添加'
    },
    listState: {
      isEmpty: false,
      isEnd: false,
    },
  }
  
  async componentDidMount(){
    let data = await requestEmojiAll();
    this.setState({
      list: data,
      listState: {
        isEnd: true,
        isEmpty: !data.length
      },
    });
  }

  showQRCode(item){
    let { qrcodeParams } =  this.state;

    qrcodeParams.visible = true;
    qrcodeParams.qrcode = item.qrcode;
    
    this.setState({ qrcodeParams });
  }

  render(props, state) {
    return (
      <main>
        <header>
          <Banner image={require('../images/emoji.png')} />
          <span class="header-cate">全部表情</span>
        </header>
        <section class="container">
          <ul class="cards">
            {state.list.map(item => (
              <li class="card">
                <div class="card-thumb">
                  <img src={item.url} />
                </div>
                <div class="card-bottom">
                  <p class="name">{item.title}</p>
                  <button
                    class="btn-add"
                    onClick={() => this.showQRCode(item)}
                    onTouchStart={()=>{/* 解决ios :ative失效问题 */}}
                  >
                    添加
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <Empty visible={state.listState.isEmpty} />
          <ListStatus emptyText="还没有表情更新哦~" {...state.listState} />
          <Qrcode {...state.qrcodeParams} />
          <Footer />
        </section>
      </main>
    );
  }
}

render(<Page />, document.getElementById('app'));