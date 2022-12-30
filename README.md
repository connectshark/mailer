# MAILER

簡易發送Email API專案

![cover](/readme/cover.png)

## 介紹文章

可搭配[文章](https://medium.com/nosegates/f4e88d908c96)瞭解本專案配置

## 環境變數

```
.env
EMAIL_SERVICE_AUTH_USER=<EMAIL_SERVICE_AUTH_USER>
EMAIL_SERVICE_AUTH_PW=<EMAIL_SERVICE_AUTH_PW>
EMAIL_DEFAULT_FROM=<EMAIL_DEFAULT_FROM>
```
`EMAIL_DEFAULT_FROM`可自行修改為帶入參數

## API

| API   | Method | 功能      |
|:----- |:------ |:--------- |
| `/mail` | POST   | 發送Email |

## 部署
ㄧ鍵部署至render
已設定`free`方案
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)