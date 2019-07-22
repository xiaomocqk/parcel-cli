import '../styles/game.less';
import { h, render, Component} from 'preact';
import { requestGameAll } from '../api/api';

import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import ListStatus from '../components/list-status/list-status';
import Empty from '../components/empty/empty';

class Page extends Component {
  state = {
    list: [],
    listState: {
      isEmpty: false,
      isEnd: false,
    },
  }

  async componentDidMount(){
    let data = await requestGameAll();
    this.setState({
      list: data,
      listState: {
        isEnd: true,
        isEmpty: !data.length
      },
    });
  }

  render(props, state) {
    return (
      <main>
        <header>
          <Banner image={require('../images/games.png')} />
          <span class="header-cate">全部游戏</span>
        </header>
        <section class="container">
          <div class="cards">
            {state.list.map(item => (
              <a class="card" href={item.link} target="_blank">
                <img src={item.url} />
              </a>
            ))}
          </div>
          <Empty visible={state.listState.isEmpty} />
          <ListStatus emptyText="还没有游戏更新哦~" {...state.listState} />
          <Footer />
        </section>
      </main>
    );
  }
}

render(<Page />, document.getElementById('app'));