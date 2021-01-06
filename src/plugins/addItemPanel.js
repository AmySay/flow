import {
  deepMix,
  each
} from '@antv/util';
import { createDom } from '@antv/dom-util';

class AddItemPanel{
  constructor(cfgs) {
    this._cfgs = deepMix(this.getDefaultCfg(),cfgs);
  }
  
  getDefaultCfg() {
    return { container: null };
  }
  
  get(key) {
    return this._cfgs[ key ];
  }
  
  set(key,val) {
    this._cfgs[ key ] = val;
  }
  
  /*initPlugin(graph) {
   const parentNode = this.get('container');
   const ghost = createDom('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"'+' style="opacity:0"/>');
   // 确保图片加载完毕
   setTimeout(function() {
   const children = parentNode.querySelectorAll('.itemPanel  img[data-item]')
   each(children,(child,i)=>{
   const addModel = (new Function("return " + child.getAttribute('data-item')))();
   child.addEventListener('dragstart', e => {
   e.dataTransfer.setDragImage(ghost, 0, 0);
   graph.set('addNodeDragging',true);
   graph.set('addModel',addModel);
   });
   child.addEventListener('dragend', e => {
   graph.emit('canvas:mouseup',e);
   graph.set('addNodeDragging',false);
   graph.set('addModel',null);
   });
   })
   },1000)
   }*/
  
  initPlugin(graph) {
    // 确保图片加载完毕
    let timer = setInterval(function() {
      const parentNode = this.get('container');
      const ghost = createDom('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"' +
        ' style="opacity:0"/>');
      const children = parentNode.querySelectorAll('.itemPanel  img[data-item]')
      if (children.length) {
        if (Array.from(children).every(img => img.height > 0)) {
          setTimeout(function() {
            each(children,(child,i) => {
              const addModel = (new Function("return " + child.getAttribute('data-item')))();
              child.addEventListener('dragstart',e => {
                console.log(addModel,'点击！')
                e.dataTransfer.setDragImage(ghost,0,0);
                graph.set('addNodeDragging',true);
                graph.set('addModel',addModel);
                console.log(graph,'graph')
              });
              child.addEventListener('dragend',e => {
                graph.emit('canvas:mouseup',e);
                graph.set('addNodeDragging',false);
                graph.set('addModel',null);
              });
            })
          }.bind(this),500)
          clearInterval(timer)
        }
      }
    }.bind(this),1000)
  }
  
  destroy() {
    this.get('canvas').destroy();
    const container = this.get('container');
    container.parentNode.removeChild(container);
  }
}

export default AddItemPanel;
