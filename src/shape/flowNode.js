import editorStyle from "../util/defaultStyle";

const taskDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 12,
    height: 12,
    left: 2,
    top: 2,
  },
  style:{
    ...editorStyle.nodeStyle,
    fill: '#E7F7FE',
    stroke:'#1890FF',
    cursor: 'default',
  },
  stateStyles: {
    selected: {
      fill: '#95D6FB',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    }
  }
};

const gatewayDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 20,
    height: 20,
    left: 2,
    top: 2,
  },
  style:{
    ...editorStyle.nodeStyle,
    fill: '#E8FEFA',
    stroke:'#13C2C2',
    cursor: 'default',
  },
  stateStyles: {
    selected: {
      fill: '#8CE8DE',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    }
  }
};

const startDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 18,
    height: 18,
    left: 6,
    top: 6,
  },
  style:{
    ...editorStyle.nodeStyle,
    fill: '#fff',
    stroke:'#000',
    cursor: 'default',
  },
  stateStyles: {
    selected: {
      fill: '#fff',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    }
  }
};

const endDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 18,
    height: 18,
    left: 6,
    top: 6,
  },
  style:{
    ...editorStyle.nodeStyle,
    fill: '#fff',
    stroke:'#000',
    cursor: 'default',
  },
  stateStyles: {
    selected: {
      fill: '#fff',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    }
  }
};

const catchDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 20,
    height: 20,
    left: -10,
    top: -8,
  },
  style:{
    ...editorStyle.nodeStyle,
    fill: '#FEF7E8',
    stroke:'#FA8C16',
    cursor: 'default',
  },
  stateStyles: {
    selected: {
      fill: '#FCD49A',
    },
    hover: {
      cursor: editorStyle.cursor.hoverNode,
    }
  }
};

export default function(G6) {
  G6.registerNode('start-node', {
    shapeType: 'rect',
    labelPosition: 'bottom',
    getShapeStyle(cfg) {
      cfg.size = [30, 30];
      const width = cfg.size[0];
      const height = cfg.size[1];
      const style = {
        x: 0,
        y: 0,
        width,
        height,
        ...this.options.style,
      };
      if(cfg.hasOwnProperty('color')){
        style.fill = cfg.color
      }
      return style;
    },
    options:  G6.Util.deepMix({},endDefaultOptions,{
      icon: require('../assets/flow/diesel-enerator.svg')
    }),
    afterDraw(cfg, group) {
      this.runAnimate(cfg,group)
    },
  }, 'base-node');
  G6.registerNode('end-node', {
    shapeType: 'rect',
    labelPosition: 'bottom',
    getShapeStyle(cfg) {
      cfg.size = [30, 30];
      const width = cfg.size[0];
      const height = cfg.size[1];
      const style = {
        x: 0,
        y: 0,
        width,
        height,
        ...this.options.style,
      };
      if(cfg.hasOwnProperty('color')){
        style.fill = cfg.color
      }
      return style;
    },
    options:  G6.Util.deepMix({},endDefaultOptions,{
      icon: require('../assets/flow/diesel-enerator.svg')
    }),
    afterDraw(cfg, group) {
      this.runAnimate(cfg,group)
    },
  }, 'base-node');
}
