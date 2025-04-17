import { useEffect } from 'react';
import BlogLayout from '@theme-original/BlogLayout';
import * as live2d from 'live2d-render';


export default function BlogLayoutWrapper(props) {
  useEffect(() => {
    live2d.initializeLive2D({
          // live2d 所在区域的背景颜色
          BackgroundRGBA: [0.0, 0.0, 0.0, 0.0],

          // live2d 的 model3.json 文件的相对 根目录 的路径
          ResourcesPath: './cat/hijiki.model3.json',

          // live2d 的大小
          CanvasSize: {
              height: 200,
              width: 200
          },
          
          // 展示工具箱（可以控制 live2d 的展出隐藏，使用特定表情）
          ShowToolBox: true,

          // 是否使用 indexDB 进行缓存优化，这样下一次载入就不会再发起网络请求了
          LoadFromCache: true
      });
  }, []);
  return (
    <>
      <BlogLayout {...props} />
    </>
  );
}
