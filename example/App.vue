<template>
  <div id="app">
    
    <div class="buttons">
      <el-button size="small" disabled
                 @click="()=>{this.$refs['wfd'].graph.saveXML()}">导出XML
      </el-button>
      <el-button size="small" disabled
                 @click="()=>{this.$refs['wfd'].graph.saveImg()}">导出图片
      </el-button>
      <el-button size="small" disabled
                 @click="()=>{this.modalVisible=true}">查看流程图
      </el-button>
    </div>
    <wfd-vue ref="wfd" :data="demoData" :height="height" :users="candidateUsers" :groups="candidateGroups"
             :categorys="categorys" :lang="lang"/>
    <el-dialog title="查看流程图" :visible.sync="modalVisible" width="60%">
      <wfd-vue ref="wfd" :data="demoData" :height="300" isView/>
    </el-dialog>
  </div>
</template>

<script>
  import WfdVue from '../src/components/Wfd'
  
  export default {
    name: 'app',
    components: {
      WfdVue
    },
    data() {
      return {
        modalVisible: false,
        lang: "zh",
        demoData: {
          nodes: [
            {
              id: '柴油发电机',
              x: 50,
              y: 200,
              label: '',
              clazz: '柴油发电机',
            },
            {
              id: '直发电机',
              x: 600,
              y: 320,
              label: '',
              clazz: '直发电机',
            }
          ],
          edges: [
            {
              source: '柴油发电机',
              target: '直发电机',
              sourceAnchor: 1,
              targetAnchor: 3,
              clazz: 'flow'
            },
          ]
        },
        candidateUsers: [{
          id: '1',
          name: 'clyi'
        },{
          id: '2',
          name: 'Steven'
        },{
          id: '3',
          name: 'Andy'
        }],
        candidateGroups: [{
          id: '1',
          name: '工程师1'
        },{
          id: '2',
          name: '工程师2'
        },{
          id: '3',
          name: '工程师3'
        }],
        categorys: [{
          id: '1',
          name: '发电机厂房'
        },{
          id: '2',
          name: '发电机厂房2'
        },{
          id: '3',
          name: '发电机厂房3'
        }],
      }
    },
    computed: {
      height() {
        return window.innerHeight - 49
      }
    },
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    position: relative;
  }
  
  .buttons {
    position: absolute;
    right: 6px;
    top: 6px;
  }
</style>
