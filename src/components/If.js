import { h, Component } from 'preact';

export default class If extends Component {
  render(props, state){
    if (!props.condition) return null;
    let exclude = ['tag', 'condition'];

    return h(props.tag || 'div', without(props, exclude));
  }
}

function without(obj, exclude) {
  let target = {};

  for (const k in obj) {
    if (obj.hasOwnProperty(k) && exclude.indexOf(k) === -1) {
      target[k] = obj[k];
    }
  }

  return target;
}