<template>
  <el-container class="wrapper">
    <el-header>
      <div class='title'>XXXSDK下载中心</div>
      <el-menu default-active="sdk" class="el-menu-demo" mode="horizontal"
       @select="handleSelect" background-color="#fff" router="true"
       text-color="#303133" active-text-color="#0d70ff">
        <el-menu-item index="sdk">sdk下载</el-menu-item>
        <el-menu-item index="changelog">修改日志</el-menu-item>
      </el-menu>
    </el-header>
    <el-container class="contentWrapper">
      <el-aside width="200px">
        <button  id='btn' @click="goBack">回去</button>
        <div>修改日志</div>
        <ul>
          <li v-for='(item,index) in leftList' :key='index'>
            <a :href="'#'+(index+1)">{{ item }}</a>
          </li>
        </ul>
      </el-aside>
      <el-main @scroll.native="handleScroll" ref="content" id='content'>
        <div id="markdown-content" class="markdown-content" >
          <h1 id="web-js-sdk-历史更新日志">Web JS SDK 历史更新日志</h1>
          <div class="update-time">更新时间：2019-10-14 15:24</div>
          <h2 id="2019-09-29-更新日志140" ><a name="1"></a>2019-09-29 更新日志(1.4.0)</h2>
          <ol>
            <li>新增转码功能(VP8、H.264)</li>
            <li>修复主播收到自身流删除问题</li>
            <li>修复火狐浏览器推第三方视频并循环播放，播放多遍拉流质量为0的问题</li>
          </ol>
          <h2 id="2019-08-26-更新日志130"><a name="2"></a>2019-08-26 更新日志(1.3.0)</h2>
          <ol>
            <li>增加对VP8的编码支持，支持安卓微信推拉流与ios微信拉流</li>
            <li>计划弃用isSupportWebrtc、isSupportH264接口，新增统一检测性接口supportDetection</li>
            <li>新增switchDevice接口，支持在推流过程中切换设备，无需重新推流</li>
            <li>房间自定义消息可支持广播发送</li>
            <li>解决最新版火狐拉流失败的问题</li>
            <li>优化ws 断开错误信息</li>
          </ol>
          <h2 id="2019-06-20-更新日志-122"><a name="3"></a>2019-06-20 更新日志 (1.2.2)</h2>
          <ol>
            <li>预览接口增加音频码率、降噪、自动增益、回声消除选项，默认都为开启</li>
            <li>新增音效预加载、音效播放、音效暂停、音效恢复接口</li>
            <li>新增混音、停止混音、设置混音音量接口</li>
            <li>setLocalAudioOutput支持拉流端输出设备更改</li>
            <li>getAudioInfo 新增采样率相关参数，用于获取pcm格式的音频数据</li>
            <li>typescript编译报错修复</li>
            <li>混流测试环境下，不设置outputStreamId导致提示混流失败问题（实际成功）</li>
            <li>兼容最新版chrome74，75 及最新ios 12.3.1</li>
          </ol>
          <h2 id="2019-04-17-更新日志-121"><a name="4"></a>2019-04-17 更新日志 (1.2.1)</h2>
          <ol>
            <li>chrome 72及以上版本使用屏幕共享功能无需额外下载插件</li>
            <li>日志内部优化</li>
            <li>增加测试环境开关，根据需要选择是否开启</li>
            <li>修复typescript使用sdk报错问题</li>
            <li>修复发送可靠消息只有第一次成功问题</li>
            <li>修复大房间主播退出房间再进入房间观众无自动拉流问题</li>
          </ol>
          <h2 id="2019-02-13-更新日志（120"><a name="5"></a>2019-02-13 更新日志（1.2.0)</h2>
          <ol>
            <li>减少单次日志发送量，提高连接稳定性</li>
            <li>新增视频录制，下载，视频截图，筛选流等功能</li>
            <li>屏幕共享关闭后可再调用摄像头</li>
            <li>对部分接口方法增加参数判断</li>
            <li>解决多次压缩导致部分兼容性问题</li>
            <li>解决部分电脑使用新版火狐后拉流失败的问题</li>
          </ol>
          <h2 id="2018-11-01-更新日志-116"><a name="6"></a>2018-11-01 更新日志 (1.1.6)</h2>
          <ol>
            <li>内部优化</li>
          </ol>
          <h2 id="2018-10-18-更新日志-115"><a name="7"></a>2018-10-18 更新日志 (1.1.5)</h2>
          <ol>
            <li>sdk删除多余sdp，减少发送数据量 </li>
            <li>内部打印日志级别优化 </li>
            <li>添加cdn转推功能 </li>
            <li>版本号，获取版本号 </li>
            <li>添加获取流音量接口 </li>
            <li>catch日志信令连接报错</li>
            <li>sdk内部监听关闭页面事件，不再需要手动监听</li>
            <li>添加登录鉴权功能</li>
          </ol>
          <h2 id="2018-09-21-更新日志-114"><a name="8"></a>2018-09-21 更新日志 (1.1.4)</h2>
          <ol>
            <li>优化火狐浏览器预览</li>
            <li>解决不同端联通房间名称问题</li>
            <li>混流接口优化</li>
            <li>推拉流添加鉴权</li>
            <li>推拉流内部优化</li>
            <li>cdn添加https配置字段</li>
          </ol>
          <h2 id="2018-08-22-更新日志（113）"><a name="9"></a>2018-08-22 更新日志（1.1.3）</h2>
          <ol>
            <li>解决一些bug</li>
          </ol>
          <h2 id="2018-08-21-更新日志（112）"><a name="10"></a>2018-08-21 更新日志（1.1.2）</h2>
          <ol>
            <li>拉流优化</li>
          </ol>
          <h2 id="2018-08-17-更新日志（111）"><a name="11"></a>2018-08-17 更新日志（1.1.1）</h2>
          <ol>
            <li>日志信息上传优化</li>
            <li>添加浏览器支持检测接口<strong>isSupportWebrtc</strong>，<strong>isSupportH264</strong></li>
            <li>添加npm下载</li>
            <li>支持typescript语言</li>
          </ol>
          <h2 id="2018-08-07-更新日志（106）"><a name="12"></a>2018-08-07 更新日志（1.0.6）</h2>
          <ol>
            <li>修复部分火狐浏览器bug</li>
            <li>播放纯音频接口调整</li>
          </ol>
          <h2 id="2018-07-16-更新日志（105）"><a name="13"></a>2018-07-16 更新日志（1.0.5）</h2>
          <ol>
            <li>屏幕共享接口 </li>
          </ol>
          <h2 id="2018-06-20-更新日志（104）"><a name="14"></a>2018-06-20 更新日志（1.0.4）</h2>
          <ol>
            <li>startPreview增加exteranlMediaStream 参数</li>
          </ol>
          <h2 id="2018-05-29-更新日志（103）"><a name="15"></a>2018-05-29 更新日志（1.0.3）</h2>
          <ol>
            <li>增加updateMixStream/stopMixStream 接口</li>
          </ol>
          <h2 id="2018-05-07-更新日志（102）"><a name="16"></a>2018-05-07 更新日志（1.0.2）</h2>
          <ol>
            <li>增加 onUpdateOnlineCount 接口</li>
          </ol>
          <h2 id="2018-04-24-更新日志（101）"><a name="17"></a>2018-04-24 更新日志（1.0.1）</h2>
          <ol>
            <li>初版 SDK </li>
          </ol>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      scrollTop: 100,
      leftList: ['2019-09-29 更新日志(1.4.0)', '2019-08-26 更新日志(1.3.0)', '2019-06-20 更新日志 (1.2.2)', '2019-04-17 更新日志 (1.2.1)', '2019-02-13 更新日志（1.2.0)', '2019-02-13 更新日志（1.2.0)',
        '2018-11-01 更新日志 (1.1.6)', '2018-10-18 更新日志 (1.1.5)', '2018-09-21 更新日志 (1.1.4)', '2018-08-22 更新日志（1.1.3）', '2018-08-21 更新日志（1.1.2）', '2018-08-17 更新日志（1.1.1）',
        '2018-08-07 更新日志（1.0.6）', '2018-07-16 更新日志（1.0.5）', '2018-06-20 更新日志（1.0.4）', '2018-05-29 更新日志（1.0.3）', '2018-05-07 更新日志（1.0.2）', '2018-04-24 更新日志（1.0.1）',
      ],
    };
  },
  methods: {
    handleSelect(menu) {
      console.log(menu);
    },
    handleScroll(e) {
      console.log(e.target.scrollTop);
    },
    goBack() {
      const content = document.getElementById('content');

      console.log(content.scrollTo);
    },
  },
};
</script>
<style>
body {
  background-color: #f5f5f5;
  margin: 0;
  height: 100vh;
}
</style>
<style scoped>
.wrapper {
  height: 100%;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
}

.el-header .title {
  flex: 3;
}

.el-menu-demo {
  /* display: flex; */
  flex: 7;
}

.contentWrapper {
  margin: 20px 50px;
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
ul {
  margin: 0;
  padding: 0;
}
ul > li {
  list-style: none;
}


h2{
  margin: 29px 0 20px;
    font-size: 20px;
    line-height: 1.5;
}
ol{
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
</style>
