<template>
  <div class="itemPanel" :style="{'height': height+'px'}">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item :title="device[0].type" :data-id='JSON.stringify(device)'
                        v-for="device in devices">
        <div v-for="model of device" :data-id='JSON.stringify(model)'>
          <img :data-item="`{clazz:'${model.name}',size:'92*96',label:'',model:'${JSON.stringify(model)}'}`" :src="model.imgUrl"/>
          <div>{{model.name}}</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  
  
  export default {
    props: {
      height: {
        type: Number,
        default: 800,
      },
      devices: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        activeNames: [],
      };
    },
  }
</script>

<style lang="scss">
  .itemPanel {
    float: left;
    width: 10%;
    background: #f0f2f5;
    overflow-y: auto;
    border-left: 1px solid #E9E9E9;
    
    img {
      width: 92px;
      height: 96px;
      padding: 4px;
      border: 1px solid rgba(0, 0, 0, 0);
      border-radius: 2px;
      
      &:hover {
        border: 1px solid #ccc;
        cursor: move;
      }
    }
    
    .el-collapse {
      border: 0;
      
      .el-collapse-item {
        > div[role=tab] > div {
          padding-left: 10px;
          border: 1px solid #E9E9E9;
          border-left: 0;
        }
        
        &:first-child {
          > div[role=tab] > div {
            border-top: 0;
          }
        }
        
        &:last-child {
          > div[role=tab] > div {
            border-bottom: 1px solid #E9E9E9;
          }
        }
        
        .el-collapse-item__wrap {
          border-top: 0;
          background: #f0f2f5;
          text-align: center;
        }
      }
    }
    
  }
</style>
