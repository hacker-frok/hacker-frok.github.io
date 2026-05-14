# 常见问题（安装版）

## 软件是免费的吗？

是。软件完全免费。若你通过第三方付费购买，请立即退款并从官方发布页重新下载。

## 到哪里下载才是官方版本？

仅建议使用项目发布页：

- [https://github.com/hacker-frok/qq-farm-bot-ai/releases/latest](https://github.com/hacker-frok/qq-farm-bot-ai/releases/latest)

## 为什么启动后没反应或启动失败？

优先排查：

1. 是否为 Windows 10/11。
2. 是否被安全软件拦截（安装程序、快捷方式或主程序）。
3. 是否缺少 VC++ 运行库，可尝试安装：
   [https://aka.ms/vc14/vc_redist.x64.exe](https://aka.ms/vc14/vc_redist.x64.exe)

## 微信平台为什么会影响我打字？

微信小程序可能抢焦点，这是已知问题。建议：

1. 新建一个系统桌面运行机器人。
2. 或在虚拟机中运行机器人。

## 虚拟机/云电脑运行不稳定怎么办？

1. 调大任务间隔，避免卡顿和弹窗漏检。
2. 不要隐藏小程序窗口（虚拟环境下更容易异常）。
3. 优先使用默认配置，再逐项微调。

## 为什么偶尔会停机或重启？

程序包含稳定性保护机制，例如：

- “下次再来”/“重新连接”检测
- 周期重启策略
- 休息时段暂停

这类行为通常是预期保护，不是单纯故障。

## 如何安全升级版本？

1. 先关闭当前程序。
2. 下载最新安装包并安装。
3. 启动后先观察日志与关键功能（收获、播种、好友链路）是否正常。

## 去哪里反馈问题？

- Telegram 群：[https://t.me/qq_farm_bot_ai](https://t.me/qq_farm_bot_ai)
- GitHub Issues：[https://github.com/hacker-frok/qq-farm-bot-ai/issues](https://github.com/hacker-frok/qq-farm-bot-ai/issues)

## 免责声明

本项目仅用于学习与研究计算机视觉自动化技术。使用本项目可能违反相关平台服务条款并带来账号风险，后果由使用者自行承担。
