/**
 * Config API Route (Simplified)
 * Only returns non-auth configuration now.
 * Auth has moved to /api/auth.
 */

import { NextResponse } from 'next/server';

export const runtime = 'edge';

// 所有影视源的订阅地址（格式：源名称$接口地址，多源用||分隔）
const SUBSCRIPTION_SOURCES = `
360影视$https://360zyzz.com/api.php/provide/vod||
暴风影视$http://by.bfzyapi.com/api.php/provide/vod||
猫眼影视$https://api.maoyanapi.top/api.php/provide/vod||
360资源$https://360zyapi.com||
非凡影视$https://cj.ffzyapi.com||
黑木耳影视$https://heimuer.xyz||
极速资源$https://jisuapi.com||
卧龙资源$https://wolongzy.net
`.trim();

export async function GET() {
    // 返回包含所有源的完整配置，确保TVBox/KVideo直接识别
    return NextResponse.json({
        subscriptionSources: SUBSCRIPTION_SOURCES,
        sites: [
            // 原有源
            {
                "key": "360ys",
                "name": "360影视",
                "type": "3",
                "api": "https://360zyzz.com/api.php/provide/vod",
                "playUrl": "https://360zyzz.com/api.php/provide/vod",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            },
            {
                "key": "baofengys",
                "name": "暴风影视",
                "type": "3",
                "api": "http://by.bfzyapi.com/api.php/provide/vod",
                "playUrl": "http://by.bfzyapi.com/api.php/provide/vod",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            },
            // 新增6个源
            {
                "key": "maoyanys",
                "name": "猫眼影视",
                "type": "3",
                "api": "https://api.maoyanapi.top/api.php/provide/vod",
                "playUrl": "https://api.maoyanapi.top/api.php/provide/vod",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            },
            {
                "key": "360zy",
                "name": "360资源",
                "type": "3",
                "api": "https://360zyapi.com",
                "playUrl": "https://360zyapi.com",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            },
            {
                "key": "ffys",
                "name": "非凡影视",
                "type": "3",
                "api": "https://cj.ffzyapi.com",
                "playUrl": "https://cj.ffzyapi.com",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            },
            {
                "key": "heimuerys",
                "name": "黑木耳影视",
                "type": "3",
                "api": "https://heimuer.xyz",
                "playUrl": "https://heimuer.xyz",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            },
            {
                "key": "jisuzy",
                "name": "极速资源",
                "type": "3",
                "api": "https://jisuapi.com",
                "playUrl": "https://jisuapi.com",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            },
            {
                "key": "wolongzy",
                "name": "卧龙资源",
                "type": "3",
                "api": "https://wolongzy.net",
                "playUrl": "https://wolongzy.net",
                "jar": "true",
                "ext": {
                    "header": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                }
            }
        ]
    });
}
