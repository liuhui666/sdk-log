<template>

  <div class="sdkWrapper">
    <div class="title">
      SDK下载
    </div>
   <div class="content">
     <div>
        最新版本 {{lastestVersion }}
     </div>
     <div>
        <el-select v-model="value" placeholder="请选择">
      <el-option v-for="(item,index) in options"
      :key="index" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
      <el-button type="primary"  size="medium" class="btn" @click="download">下载</el-button>
     </div>
   </div>
  </div>

</template>
<script>
import { updateData } from '../data';

export default {
  data() {
    return {
      options: updateData.map(item => ({
        label: item.version,
        value: item.url,
      })),
      value: updateData[0].version,
      lastestVersion: updateData[0].version,
    };
  },
  methods: {
    download() {
      window.open(this.value);
    },
  },
};
</script>
<style scoped>
.sdkWrapper{
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: relative;
}
.title{
  margin:24px;
  font-size: 24px
}

.content{
 position: absolute;
 top: calc(50% - 150px);
 left: calc(50% - 150px);
  height: 100px;
}
.content .btn{
  margin-left: 30px
}
</style>
