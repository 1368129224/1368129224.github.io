---
title: DIY NAS记录
index: false
icon: discover
category:
  - 日常
---
# DIY NAS记录

## 为什么需要NAS

1. 国内流媒体太差劲，很多综艺/动漫需付费观看阉割版/低画质版
2. 基于第一条养PT账号，方便找影视资源(家人看综艺，自己看动漫等)
3. 国内音乐版权割裂，自建音乐服务

## 硬件

旧电脑下岗再就业
```
CPU: i5-4570
内存: 4G DDR3 4G * 2
主板: 华硕B85M-K
电源: 益衡 7025B 250瓦 (新购)
硬盘: 闪迪120G固态
      HC530 14T * 1 (新购)
      2.5 旧盘 1T * 2 (叠瓦)
      2.5 移动硬盘 1T * 1 (垂直)
```
## 操作系统

操作系统：Ubuntu22.04 LTS

选择Ubuntu来作为NAS的OS的原因：

1. 试用过 PVE 和 OMV，由于没有AIO需求，放弃 PVE；OMV 有些功能不太完善，放弃。

2. 至于 黑裙 或 unraid 什么的，这些系统更倾向使用Docker来部署软件服务，由于在组NAS的时候对于Docker使用还不熟悉，所以没有选择这类系统。

    PS: 后来发现Docker还是相当好用的，建议大家在折腾自己的NAS之前都学习学习Docker的使用

3. Linux虽然操作便利性不及各种NAS系统，但能自定义各种配置及安装软件服务，且个人对Ubuntu非常熟悉，工作中也经常使用Linux，使用Linux对我没有难度。

## 服务

1. Samba

    NAS核心肯定是文件共享，打开Samba自然是第一件事，往上教程很多就不多说了。

2. Webdav

    Webdav是一种对HTTP协议的扩展协议，这个协议允许方便地进行文件共享。

    在NAS的应用场景中，用于外网的文件共享。

    个人使用Caddy搭建Webdav，另外也可以使用Nginx或Apache等Web容器进行搭建。

3. qBittorrent

    NAS自然少不了下载功能，个人主要使用BT/PT下载资源，而Linux下常用的客户端就是qBittorrent-nox(-nox是指没有GUI，通过Web页面进行管理)。

    由于不同的PT站点对于客户端有不同的要求，在选择版本的时候建议参考自己常用的PT站点的规则进行选择。

    PS: 并不是版本越新越好，在较新的qBittorrent 4.5.0/4.5.1 中爆出安全漏洞，可以通过web页面进行提权任意下载主机文件。

4. Navidrome

    > https://www.navidrome.org/

    Navirome是一个兼容Subsonic-API的音乐服务，支持Docker部署。

5. DDNS-GO

    > https://github.com/jeessy2/ddns-go

    比较好用的DDNS客户端，支持Docker部署。

6. Scrutiny

    > https://github.com/AnalogJ/scrutiny

    硬盘S.M.A.R.T.信息监控服务，建议使用Docker进行部署。

7. Alist

    > https://github.com/alist-org/alist
    >
    > 一个支持多存储的文件列表程序，使用 Gin 和 Solidjs。

    神器，方便分享文件给朋友，支持Docker部署。

8. Kavita

    > https://github.com/Kareadita/Kavita

    一款漫画(cbr, cbz, zip/rar/rar5, 7zip, raw images)阅读服务，同时支持书籍(epub, pdf)，支持Docker部署。

9. homepage

    > https://github.com/benphelps/homepage

    导航页，UI简洁，配置简单，支持Docker部署。

10. Yunzai-Bot

    原神QQ机器人，现在仓库由于未知原因不可见，已失联。





