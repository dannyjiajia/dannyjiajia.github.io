---
title: docker通过代理pull镜像
authors: dannyhe
tags:
  - docker
  - clash
---

## 通过代理下载docker镜像

### Clash安装

安装Linux版本的Clash,并配置ui界面,关键配置

~~~yaml
external-controller: 0.0.0.0:9090
secret: "123qwe"
external-ui: "ui"
~~~

- external-controller代表外部访问地址，此处意思为允许所有人从9090端口访问（当然需要开启9090端口）
- secret访问密钥，不设置密钥的话任何人都可以访问，较为危险
- external-ui ui文件的路径，由于此处config.yaml文件和ui文件夹在同一目录下，所以只需文件夹名称即可

ui文件下载
~~~shell
wget https://github.com/haishanh/yacd/releases/download/v0.3.7/yacd.tar.xz
tar xvJf yacd.tar.xz 
~~~
解压后改名为ui文件夹(对应external-ui的值)

最后通过访问external-controller的地址将模式设置为全局

### 设置docker使用代理

创建 dockerd 相关的 systemd 目录，这个目录下的配置将覆盖 dockerd 的默认配置
~~~shell
sudo mkdir -p /etc/systemd/system/docker.service.d
~~~
新建配置文件 /etc/systemd/system/docker.service.d/http-proxy.conf，这个文件中将包含环境变量
~~~ini
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://127.0.0.1:7890"
~~~
重新加载配置文件，重启 dockerd
~~~shell
sudo systemctl daemon-reload
sudo systemctl restart docker
~~~
检查确认环境变量已经正确配置
~~~shell
sudo systemctl show --property=Environment docker
~~~
从 docker info 的结果中查看配置项。
~~~shell
docker info
~~~

最后，执行docker pull下载即可

## 导出镜像工具

~~~shell
#!/bin/bash
# filepath: export-all-images.sh

# 设置输出文件名
OUTPUT_FILE="all-compose-images.tar"

# 从 docker-compose.yml 获取所有镜像名称
IMAGES=$(docker-compose -f docker-compose-gpu.yml config | grep 'image:' | awk '{print $2}' | sort -u)

if [ -z "$IMAGES" ]; then
    echo "错误: 在 docker-compose 配置中没有找到任何镜像"
    exit 1
fi

echo "准备导出以下镜像："
echo "$IMAGES"
echo "-------------------"

# 使用单个 docker save 命令导出所有镜像
echo "正在导出镜像到 $OUTPUT_FILE ..."
docker save -o "$OUTPUT_FILE" $IMAGES

if [ $? -eq 0 ]; then
    echo "导出成功！"
    echo "文件大小: $(du -h $OUTPUT_FILE | cut -f1)"
    echo "保存位置: $(pwd)/$OUTPUT_FILE"
else
    echo "导出过程中发生错误"
    rm -f "$OUTPUT_FILE"
    exit 1
fi
~~~