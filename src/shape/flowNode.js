import editorStyle from "../util/defaultStyle";

const startDefaultOptions = {
  icon: null,
  iconStyle: {
    width: 18,
    height: 18,
    left: 6,
    top: 6,
  },
  style: {
    ...editorStyle.nodeStyle,
    fill: '#fff',
    stroke: '#000',
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
  style: {
    ...editorStyle.nodeStyle,
    fill: '#fff',
    stroke: '#000',
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


export default function (G6, devices) {
  if (devices && devices.length) {
    devices.map(device => {
      G6.registerNode(device.name, {
        shapeType: 'rect',
        labelPosition: 'bottom',
        getShapeStyle(cfg) {
          debugger
          console.log(cfg)
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
          if (cfg.hasOwnProperty('color')) {
            style.fill = cfg.color
          }
          return style;
        },
        options: G6.Util.deepMix({}, endDefaultOptions, {
          icon: device.imgUrl
        }),
        afterDraw(cfg, group) {
          this.runAnimate(cfg, group)
        },
      }, 'base-node');
    })
  }
}
