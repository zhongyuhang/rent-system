
FROM python:3.8

# 镜像作者
MAINTAINER 18582487349@163.com

# 设置 python 环境变量
ENV PYTHONUNBUFFERED 1

# 创建 recommend 文件夹
RUN mkdir /recommend

# 将 recommend 文件夹为工作目录
WORKDIR /recommend

# 将当前目录加入到工作目录中（. 表示当前目录）
ADD . /recommend

# 利用 pip 安装依赖（- i 表示指定清华源，默认源下载过慢）
RUN pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/

#设置环境变量
ENV SPIDER=/recommend
