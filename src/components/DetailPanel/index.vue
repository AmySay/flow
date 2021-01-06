<template>
  <div class="detailPanel" :style="{'height':height+'px'}">
    
    <div class="panelTitle">柴油发电机</div>
    <div class="panelBody">
      <div>
        <div class="panelRow">
          <div>名称：</div>
          <el-input style="width:200px; font-size:12px"
                    :disabled="readOnly"
                    :value="form.name"
                    @input="(value) => {onChange('id', value)}"/>
        </div>
        
        <div class="panelRow">
          <div>Name：</div>
          <el-input style="width:200px; font-size:12px"
                    :disabled="readOnly"
                    :value="form.name2"
                    @input="(value) => {onChange('id', value)}"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    props: {
      devices:{
        type: Object,
        default: () => ({}),
      },
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
