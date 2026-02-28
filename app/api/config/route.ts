/**
 * Config API Route (适配KVideo拉取影视源内容)
 * 已整合你的域名：kvideo-9ak.pages.dev / akk01.de5.net
 */
import { NextResponse } from 'next/server';

export const runtime = 'edge';

// 核心配置：所有影视源 + 你的域名代理
const videoSources = {
  // 订阅源（兼容TVBox）
  subscriptionSources: `
360影视$https://360zyzz.com/api.php/provide/vod||
暴风影视$http://by.bfzyapi.com/api.php/provide/vod||
猫眼影视$https://api.maoyanapi.top/api.php/provide/vod||
360资源$https://360zyapi.com/api.php/provide/vod||
非凡影视$https://cj.ffzyapi.com/api.php/provide/vod||
黑木耳影视$https://heimuer.xyz/api.php/provide/vod||
极速资源$https://jisuapi.com/api.php/provide/vod||
卧龙资源$https://wolongzy.net/api.php/provide/vod
  `.trim(),
  // 站点配置（核心：用你的域名做代理，确保能拉取影视内容）
  sites: [
    {
      "key": "360ys",
      "name": "360影视",
      "type": "3",
      "api": "https://360zyzz.com/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=", // 你的Cloudflare域名代理
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    },
    {
      "key": "baofengys",
      "name": "暴风影视",
      "type": "3",
      "api": "http://by.bfzyapi.com/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=",
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    },
    {
      "key": "maoyanys",
      "name": "猫眼影视",
      "type": "3",
      "api": "https://api.maoyanapi.top/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=",
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    },
    {
      "key": "360zy",
      "name": "360资源",
      "type": "3",
      "api": "https://360zyapi.com/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=",
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    },
    {
      "key": "ffys",
      "name": "非凡影视",
      "type": "3",
      "api": "https://cj.ffzyapi.com/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=",
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    },
    {
      "key": "heimuerys",
      "name": "黑木耳影视",
      "type": "3",
      "api": "https://heimuer.xyz/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=",
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    },
    {
      "key": "jisuzy",
      "name": "极速资源",
      "type": "3",
      "api": "https://jisuapi.com/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=",
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    },
    {
      "key": "wolongzy",
      "name": "卧龙资源",
      "type": "3",
      "api": "https://wolongzy.net/api.php/provide/vod",
      "playUrl": "https://kvideo-9ak.pages.dev/api/proxy?url=",
      "searchable": true,
      "quickSearch": true,
      "filterable": true,
      "jar": true,
      "ext": {
        "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    }
  ],
  // 首页默认加载配置（打开就能看到内容）
  homeConfig: {
    "showRecommend": true,
    "showCategories": true,
    "defaultSource": "360ys", // 默认加载360影视内容
    "pageSize": 20,
    "backupDomain": "https://akk01.de5.net/api/proxy?url=" // 备用域名
  }
};

// 接口返回配置
export async function GET() {
  try {
    return NextResponse.json(videoSources);
  } catch (error) {
    return NextResponse.json(
      { error: '配置加载失败', message: error.message },
      { status: 500 }
    );
  }
}
