<template>
  <el-container class="sdkWrapper">
    <el-aside width="200px" class="anchor-list">
      <div class="anchor-header">更新日志目录</div>
      <ul>
        <li v-for='(version,index) in updateVersion' :key='index'
        :class="['anchor-item',activeAnchorIndex===index &&'item_active']"
       >
          <a @click="jump(version,index)"
          :class="activeAnchorIndex===index &&'active'">{{ version }}</a>
        </li>
      </ul>
    </el-aside>
    <el-main @scroll.native="handleScroll" id='content' class="content">
      <div class="title">
        <h1>Web JS SDK 历史更新日志</h1>
        <div class="update-time">更新时间：{{ updateTime }}</div>
        <!-- <div class="pdf">下载pdf</div> -->
      </div>
      <div v-for='(item,index) in updateData' :key='index' :id='item.version' class="logItem">
        <h2 :id="item.version"><a :name="index+1"></a>{{ item.versionTitle }}
          <a :href="item.url" target="_blank" class="downloadText">下载地址</a>
        </h2>
        <ol v-for='(i,idx) in item.changelog' :key='idx'>
          <li>{{ i }}</li>
        </ol>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { updateData, updateTime } from '../data';

let distance = 0;
let total = 0;
let step = 0;
export default {
  name: 'changelog',
  data() {
    return {
      scrollTop: 100,
      updateVersion: updateData.map(item => item.version),
      updateData,
      updateTime,
      activeAnchorIndex: 0,
    };
  },
  mounted() {

  },
  methods: {
    handleSelect() {

    },
    handleScroll() {
      const sections = document.getElementsByClassName('logItem');

      for (let i = 0; i < sections.length; i += 1) {
        const scrollHeight = document.getElementById('content').scrollTop;
        // console.log(sections[i].offsetTop - 145, scrollHeight);
        if (sections[i].offsetTop - 145 <= scrollHeight) {
          this.activeAnchorIndex = i;
        }
      }
    },
    jump(version, index) {
      this.activeAnchorIndex = index;
      // console.log(document.getElementById(version).offsetParent); // offset相对于el-main来计算
      this.smoothDown(document.getElementById(version).offsetTop - 20);
      // document.getElementById('content').scrollTop = document.
      // getElementById(version).offsetTop - 20;
      // 以下是实现 平滑过渡
      total = document.getElementById(version).offsetTop;
      distance = document.getElementById('content').scrollTop;
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      step = total / 50;

      if (total > distance) {
        this.smoothDown();
      } else {
        const newTotal = distance - total;
        step = newTotal / 50;
        // console.log(this.smoothUp);
        this.smoothUp();
      }
    },
    smoothDown() {
      if (distance < total) {
        distance += step;
        document.getElementById('content').scrollTop = distance;

        setTimeout(this.smoothDown, 10);
      } else {
        document.getElementById('content').scrollTop = total;
      }
    },
    smoothUp() {
      if (distance > total) {
        distance -= step;

        document.getElementById('content').scrollTop = distance;
        setTimeout(this.smoothUp, 10);
      } else {
        document.getElementById('content').scrollTop = total;
      }
    },
  },

};
</script>
<style scoped>
.sdkWrapper {
  height: 100%;
}
.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100%;
  margin-right: 5px;
}

.el-main {
  background-color: #fff;
  color: #333;
}

ul {
  margin: 0;
  padding: 0;
}
ul > li {
  list-style: none;
}

h2 {
  margin: 29px 0 20px;
  font-size: 20px;
  line-height: 1.5;
}
ol {
  margin-bottom: 24px;
  padding-left: 24px;
}
ol > li {
  list-style-type: decimal;
  position: relative;
  margin: 10px 0;
  color: #666;
  font-size: 14px;
  line-height: 24px;
}

.anchor-list {
  border-left: 2px solid #f5f5f5;
}
.anchor-header {
  color: #333;
  font-size: 16px;
  line-height: 26px;
  padding-left: 18px;
  margin-top: 16px;
  margin-bottom: 8px;
}

.anchor-list .item_active{
  border-left: 2px solid #0d70ff;
}
.anchor-item {
  text-align: left;
  line-height: 40px;
  padding-left: 8px;
      border-left: 2px solid #f5f5f5;
}
.anchor-item a {
  cursor: pointer;
  font-size: 14px;
  color: #666;
  text-decoration: none;

}
.anchor-item a:hover {
 color:#0d70ff
}
.anchor-item a .active {
 color:#0d70ff
}
.content{
  position: relative;
}
.content .title {
  position: relative;
}
.content .title h1 {
  display: inline-block;
  margin-top: 23px;
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 400;
}

.content .title .update-time {
  color: #909399;
  font-size: 12px;
  margin-bottom: 28px;
}
.content .title .pdf {
  position: absolute;
  right: 20px;
  top: 30px;
  font-size: 14px;
  color: #999;
}
.content .category-item {
  line-height: 30px;
}
.downloadText{
  text-decoration: none;
  font-size: 14px;
  color: #0d70ff
}
</style>
