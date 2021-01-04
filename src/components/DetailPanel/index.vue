<template>
    <div class="detailPanel" :style="{'height':height+'px'}">
        <svgDetail :model="model" :onChange="onChange" :readOnly="readOnly"/>
    </div>
</template>
<script>
  import svgDetail from "./svgDetail"

  export default {
    inject: ['i18n'],
    components: {

      svgDetail,
    },
    props: {
      height: {
        type: Number,
        default: 800,
      },
      model: {
        type: Object,
        default: () => ({}),
      },
      users: {
        type: Array,
        default: () => ([]),
      },
      groups: {
        type: Array,
        default: () => ([]),
      },
      categorys: {
        type: Array,
        default: () => ([]),
      },
      signalDefs: {
        type: Array,
        default: () => ([]),
      },
      messageDefs: {
        type: Array,
        default: () => ([]),
      },
      onChange: {
        type: Function,
        default: () => {
        }
      },
      readOnly: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>
<style lang="scss">
    .detailPanel {
        height: 100%;
        background: #f0f2f5;
        flex: 0 0 auto;
        float: left;
        width: 20%;
        border-right: 1px solid #E9E9E9;

        .panelTitle {
            text-align: left;
            height: 32px;
            padding-left: 12px;
            color: #000;
            line-height: 28px;
            background: #EBEEF2;
            border-bottom: 1px solid #DCE3E8;
        }

        .panelBody {
            .panelRow {
                text-align: left;
                display: inline-block;
                font-size: 12px;
                width: 100%;
                box-sizing: border-box;
                padding: 5px 12px;
            }
        }
    }
</style>
