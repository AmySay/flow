<template>
    <div>
        <div class="panelRow">
            <div>名称：</div>
            <el-input style="width:200px; font-size:12px"
                      :disabled="readOnly"
                      :value="form.name"
                      @input="(value) => {onChange('id', value)}"/>
        </div>
        <div class="panelRow">
            <div>子标签及可选模型：</div>
            <el-cascader
                    v-model="value"
                    :options="options"
            ></el-cascader>
        </div>

        <div class="panelRow">
            <div>Name：</div>
            <el-input style="width:200px; font-size:12px"
                      :disabled="readOnly"
                      :value="form.name2"
                      @input="(value) => {onChange('id', value)}"/>
        </div>

        <div class="panelRow">
            <div>Description：</div>
            <el-input style="width:200px; font-size:12px"
                      :disabled="readOnly"
                      :value="form.description"
                      @input="(value) => {onChange('id', value)}"/>
        </div>

        <div class="panelRow">
            <div>Default：</div>
            <el-input style="width:200px; font-size:12px"
                      :disabled="readOnly"
                      :value="form.default"
                      @input="(value) => {onChange('id', value)}"/>
        </div>

        <div class="panelRow">
            <div>Unit：</div>
            <el-input style="width:200px; font-size:12px"
                      :disabled="readOnly"
                      :value="form.unit"
                      @input="(value) => {onChange('id', value)}"/>
        </div>
    </div>
</template>
<script>
  export default {
    inject: ['i18n'],
    props: {
      model: {
        type: Object,
        default: () => ({}),
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
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    data() {
      return {
        value: [],
        options: [
          {
            value: 'SynGen',
            label: 'SynGen',
            children: [
              {value: 'GENROU', label: 'GENROU',}
            ],
          },
          {
            value: 'Exciter',
            label: 'Exciter',
            children: [
              {value: 'EXDC2', label: 'EXDC2',},
              {value: 'IEEEX1', label: 'IEEEX1',},
              {value: 'ESDC2A', label: 'ESDC2A',},
              {value: 'EXST1', label: 'EXST1',},
              {value: 'ESST3A', label: 'ESST3A',},
              {value: 'SEXS', label: 'SEXS',},
            ],
          }
        ],
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

    }
  }
</script>
