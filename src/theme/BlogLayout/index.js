import React, { useEffect } from 'react';
import BlogLayout from '@theme-original/BlogLayout';
// import { ExecutionEnvironment } from '@docusaurus/utils';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
// import * as live2d from 'live2d-render';

export default function BlogLayoutWrapper(props) {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      window.Live2dRender.initializeLive2D({
        // live2d 所在区域的背景颜色
        BackgroundRGBA: [0.0, 0.0, 0.0, 0.0],

        // live2d 的 model3.json 文件的相对路径
        ResourcesPath: './cat/hijiki.model3.json',

        // live2d 的大小
        CanvasSize: {
            height: 200,
            width: 200
        },
        ShowToolBox: true,
        // 是否使用 indexDB 进行缓存优化，这样下一次载入就不会再发起网络请求了
        LoadFromCache: false

    }).then(() => {
        console.log('finish load');
    });
    }
  }, []);

  return (
    <>
      <BlogLayout {...props} />
    </>
  );
}