const updateTime = '2019-10-14 15:30';

const updateData = [{
  version: '1.2.3',
  versionTitle: '2019-09-29 更新日志(1.4.0)',
  changelog: ['新增转码功能(VP8、H.264)', '修复主播收到自身流删除问题', '修复火狐浏览器推第三方视频并循环播放，播放多遍拉流质量为0的问题'],
  url: 'http://www.baidu.com',
}, {
  version: '1.2.5',
  versionTitle: '2019-08-26 更新日志(1.3.0)',
  changelog: ['增加对VP8的编码支持，支持安卓微信推拉流与ios微信拉流', '计划弃用isSupportWebrtc、isSupportH264接口，新增统一检测性接口supportDetection', '新增switchDevice接口，支持在推流过程中切换设备，无需重新推流', '房间自定义消息可支持广播发送', '解决最新版火狐拉流失败的问题', '优化ws 断开错误信息'],
  url: '',
}, {
  version: '1.2.4',
  versionTitle: '2019-06-20 更新日志 (1.2.2)',
  changelog: ['预览接口增加音频码率、降噪、自动增益、回声消除选项，默认都为开启', '新增音效预加载、音效播放、音效暂停、音效恢复接口', '新增混音、停止混音、设置混音音量接口', 'setLocalAudioOutput支持拉流端输出设备更改', 'typescript编译报错修复', '兼容最新版chrome74，75 及最新ios 12.3.1'],
  url: '',
}, {
  version: '1.2.6',
  versionTitle: '2019-04-17 更新日志 (1.2.1',
  changelog: [],
  url: '',
}, {
  version: '1.2.7',
  versionTitle: '2019-02-13 更新日志（1.2.0)',
  changelog: ['内部优化'],
  url: '',
}, {
  version: '1.2.8',
  versionTitle: '2018-10-18 更新日志 (1.1.5)',
  changelog: ['预览接口增加音频码率、降噪、自动增益、回声消除选项，默认都为开启', '新增音效预加载、音效播放、音效暂停、音效恢复接口', '新增混音、停止混音、设置混音音量接口', 'setLocalAudioOutput支持拉流端输出设备更改', 'typescript编译报错修复', '兼容最新版chrome74，75 及最新ios 12.3.1'],
  url: '',
}, {
  version: '1.2.9',
  versionTitle: '2018-09-21 更新日志 (1.1.4)',
  changelog: ['优化火狐浏览器预览', '推拉流添加鉴权', '混流接口优化', '推拉流内部优化', 'cdn添加https配置字段'],
  url: '',
}, {
  version: '1.3.0',
  versionTitle: '2018-08-22 更新日志（1.1.3）',
  changelog: ['解决一些bug'],
  url: '',
}, {
  version: '1.3.1',
  versionTitle: '2018-08-21 更新日志（1.1.2）',
  changelog: ['拉流优化'],
  url: '',
}, {
  version: '1.3.2',
  versionTitle: '2018-08-17 更新日志（1.1.1）',
  changelog: ['屏幕共享接口', '修复部分火狐浏览器bug', '播放纯音频接口调整'],
  url: '',
}, {
  version: '1.3.3',
  versionTitle: '2018-08-07 更新日志（1.0.6）',
  changelog: ['添加浏览器支持检测接口<strong>isSupportWebrtc</strong>，<strong>isSupportH264</strong>'],
  url: '',
}, {
  version: '1.3.4',
  versionTitle: '2018-07-16 更新日志（1.0.5）',
  changelog: ['优化火狐浏览器预览', '推拉流添加鉴权', '混流接口优化', '推拉流内部优化', 'cdn添加https配置字段'],
  url: '',
}, {
  version: '1.3.5',
  versionTitle: '2018-06-20 更新日志（1.0.4）',
  changelog: ['新增转码功能(VP8、H.264)', '修复主播收到自身流删除问题', '修复火狐浏览器推第三方视频并循环播放，播放多遍拉流质量为0的问题'],
  url: '',
}, {
  version: '1.3.6',
  versionTitle: '2018-05-29 更新日志（1.0.3）',
  changelog: ['增加对VP8的编码支持，支持安卓微信推拉流与ios微信拉流', '计划弃用isSupportWebrtc、isSupportH264接口，新增统一检测性接口supportDetection', '新增switchDevice接口，支持在推流过程中切换设备，无需重新推流', '房间自定义消息可支持广播发送', '解决最新版火狐拉流失败的问题', '优化ws 断开错误信息'],
  url: '',
}, {
  version: '1.3.7',
  versionTitle: '2018-05-07 更新日志（1.0.2）',
  changelog: ['优化火狐浏览器预览', '推拉流添加鉴权', '混流接口优化', '推拉流内部优化', 'cdn添加https配置字段'],
  url: '',
}, {
  version: '1.3.8',
  versionTitle: '2018-04-24 更新日志（1.0.1）',
  changelog: ['新增转码功能(VP8、H.264)', '修复主播收到自身流删除问题', '修复火狐浏览器推第三方视频并循环播放，播放多遍拉流质量为0的问题'],
  url: '',
}];


export {
  updateData,
  updateTime,
};
