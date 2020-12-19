<template>
    <div class="itemPanel" :style="{'height': height+'px'}">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="电源" name="1">
                <img data-item="{clazz:'start',size:'30*30',label:''}"
                     :src="require('../assets/flow/diesel-enerator.svg')" style="width:42px;height:42px"/>
                <div>柴油发电机</div>
                <img data-item="{clazz:'end',size:'30*30',label:''}"
                     :src="require('../assets/flow/direct-drive-fan.svg')" style="width:42px;height:42px"/>
                <div>直驱风机</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
  export default {
    inject: ['i18n'],
    props: {
      height: {
        type: Number,
        default: 800,
      },
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
