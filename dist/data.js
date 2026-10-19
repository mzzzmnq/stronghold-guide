// 攻略数据与界面独立维护；修改后更新版本、日期与出处。
const GUIDE = {
  "schema": 1,
  "version": "0.3.1",
  "commit": "c9d804f470b8d7422ae04eb66faf671cef21ad52",
  "checkedAt": "2026-10-19",
  "factions": [
    {
      "id": "yanShip",
      "name": "炎",
      "tagline": "招募叠层 · 六炎召唤炎佑",
      "trigger": "场上3名不同炎干员激活；6名召唤1只炎佑，9名改为2只。",
      "core": [
        "小满",
        "夕",
        "余",
        "仇白"
      ],
      "plan": [
        "推导：前期用惊蛰、星熊的获得时特质积累层数，再以小满随本回合获得的干员数持续增长。",
        "推导：把小满、夕留在场上结算休整期；获得干员越多，已激活炎的叠层收益越高。",
        "推导：中期优先争取6炎；后期让余、仇白承担防守和输出，再视人数资源争取9炎。",
        "可选炎＋奥术路线（当前规则推导）：夕同时服务两种成长；溯光星源补奥术层数，烛煌可承担输出。视频提到的假日威龙陈可通过移植版自选加入，带炎盟约；不应在默认招募预设中盲搜。3月教学的固定升本回合仅作参考。"
      ],
      "pitfalls": [
        "同名普通与精锐通常只计1名；9炎通常需借助调和、额外人数或扩充部署上限等来源。",
        "小满、夕的休整期结束叠层必须在场；并要求相应盟约已激活。",
        "炎佑只收集真正属于炎的干员属性，调和干员若不属于炎就不贡献属性总和。"
      ],
      "sourcePaths": [
        "data/bonds.json#yanShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js",
        "server/sim/content/tokens.js",
        "data/backups.json",
        "server/match/player/diy.js",
        "server/sim/content/kits/ops/op-chen2.js"
      ],
      "availability": {
        "standard": true,
        "otherDifficulties": true
      },
      "symbol": "炎",
      "thresholds": "3炎：炎干员攻击力加成为23%+0.9%×层数。；6炎：炎佑同时攻击3目标，攻击附带20%攻击力灼燃损伤，并施加20%元素脆弱。；9炎：改为2只炎佑，各攻击力×1.5，所受伤害-90%。",
      "summary": "前期用惊蛰、星熊的获得时特质积累层数，再以小满随本回合获得的干员数持续增长。",
      "coreDetails": [
        "小满 · 2阶 · 【休整期结束时】本回合每获得过1名干员，使已激活的【炎】层数+1",
        "夕 · 5阶 · 【休整期结束时】当前休整期每获得过一名干员，使已激活的【炎】【奥术】层数+2",
        "余 · 6阶 · 【进入休整期时】若同一行有3名干员，随机获得1名当前人数最多盟约的干员",
        "仇白 · 6阶 · 【炎】【突袭】每叠加3层，本干员攻击束缚和停顿状态的敌人造成的伤害提升1%"
      ],
      "teaching": [
        {
          "title": "【卫戍协议:盟约Ⅱ】无脑轮椅！【奥术】【炎】阵容推荐 简单好抄",
          "date": "2026-03-17",
          "url": "https://www.bilibili.com/video/BV1RCwmzLENP/",
          "author": "萧然Q",
          "summary": "杜遥夜策略；作者以“火陈、烛煌”为主C，“夕、星源”为叠层核心。通常第3/5/7/9回合升级（六本视局势），优先6炎，再补远见、奇迹、投资人；投资人成型后关注录武官、诗怀雅、焰尾等“获得时”收益。",
          "caution": "3/27更新前教程。“火陈”对应假日威龙陈，在移植版可通过自选加入并带炎盟约；并非默认招募预设。“星源”简称需结合视频画面确认，本站不直接认定具体形态。当前预设溯光星源为灵巧/奥术成长件。升本节奏随血量与来牌调整。",
          "kind": "视频",
          "scope": "炎 / 奥术 / 新手 / 运营"
        },
        {
          "title": "【明日方舟】卫戍协议高分阵容推荐！保姆级教程 大炎体系/叙拉古体系/卡西米尔分队打法解析",
          "date": "2026-03-18",
          "url": "https://www.bilibili.com/video/BV1QxwvzuEQN/",
          "author": "叫我棉被",
          "summary": "综合解析三个核心体系，可作为新手视频入口。",
          "caution": null,
          "kind": "视频",
          "scope": "炎 / 叙拉古 / 卡西米尔 / 综合"
        },
        {
          "title": "【卫戍攻略#4】什么叫叠到999层反而亏输出？终极模拟教学 炎&拉特兰篇",
          "date": "2026-04-17",
          "url": "https://www.bilibili.com/video/BV1nrdqBLERz/",
          "author": "黑蓑影卫攻略组",
          "summary": "较新的终极模拟炎、拉特兰专题，标题明确讨论满999层反而亏输出。",
          "caution": "标题不能单独证明限伤算法；算法请引用仓库研究文档与本地代码。",
          "kind": "视频",
          "scope": "炎 / 拉特兰 / 终极 / 限伤 / 3/27更新后"
        }
      ]
    },
    {
      "id": "sargonShip",
      "name": "萨尔贡",
      "tagline": "技能接力 · 攻速与攻击叠加",
      "trigger": "场上3名不同萨尔贡干员激活；6名解锁攻击力叠加。娜仁图亚策略会替换6人效果。",
      "core": [
        "莎草",
        "菲莱",
        "百炼嘉维尔",
        "缇缇",
        "异客"
      ],
      "plan": [
        "推导：用莎草、菲莱、百炼嘉维尔的开技能特质叠层，缩短技能循环，让多个独立持续的加速效果重叠。",
        "推导：中期达成6萨尔贡，再把快速释放技能的成员作为团队增益触发器。",
        "推导：后期异客可同时消化萨尔贡、迅捷、精准层数；佩佩提供道具补给。"
      ],
      "pitfalls": [
        "普通6萨尔贡的攻击/攻速上限来自25层临时增益：最高+300攻速、+300%攻击力；永久盟约层数主要延长持续时间。",
        "选娜仁图亚后，6人效果改成向周围8格借出至多V阶装备效果60秒，不能再按普通攻击叠加流规划。",
        "缇缇叠层看其范围内沉睡或晕眩事件，每场战斗至多24层。"
      ],
      "sourcePaths": [
        "data/bonds.json#sargonShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js"
      ],
      "availability": {
        "standard": true,
        "otherDifficulties": true
      },
      "symbol": "砂",
      "thresholds": "任一萨尔贡成员开启技能：所有在场萨尔贡成员攻速+12，持续5+0.22×层数秒，各次独立计时，最多25次。；普通6人：每次同时增加12%攻击力，至多+300%。",
      "summary": "用莎草、菲莱、百炼嘉维尔的开技能特质叠层，缩短技能循环，让多个独立持续的加速效果重叠。",
      "coreDetails": [
        "莎草 · 2阶 · 【战斗中】首次开启技能时，使已激活的【萨尔贡】层数+5",
        "菲莱 · 3阶 · 【战斗中】开启技能时，使已激活的【萨尔贡】层数+6",
        "百炼嘉维尔 · 4阶 · 【战斗中】开启技能时，使已激活的【萨尔贡】层数+9",
        "缇缇 · 5阶 · 【战斗中】每当范围内有敌人或干员进入沉睡或晕眩时，使已激活的【萨尔贡】【精准】层数+1（每场战斗至多24层）",
        "异客 · 6阶 · 【萨尔贡】【迅捷】【精准】每叠加3层，本干员攻击力+2%"
      ],
      "teaching": [
        {
          "title": "【卫戍协议】3精准bug修复！精迅萨一图流！萨尔贡体系强度提升！",
          "date": "2026-03-17",
          "url": "https://www.bilibili.com/video/BV1ovwozkEst/",
          "author": "白樱iridescent",
          "summary": "可核实作者将精准、迅捷和萨尔贡作为组合教学，并以3精准判定修复为背景。",
          "caution": "无可读详细简介，网站的具体干员组合需要另用本地数据支持。",
          "kind": "视频",
          "scope": "萨尔贡 / 精准 / 迅捷"
        },
        {
          "title": "删卡流公式萨尔贡7回合成型实战教学",
          "date": "2026-03-23",
          "url": "https://www.bilibili.com/video/BV1UiQDBHE9J/",
          "author": "B大收藏家",
          "summary": "教程针对禁萨尔贡、不禁精准的局；核心利用佩佩策略筛牌压缩卡池。 作者强调缇缇，实战示例无至简、魔王、迷迭香而使用泡泡。",
          "caution": "反直觉的禁萨玩法为进阶特定分支，应单独标条件，不能当普通6萨的通用选牌表。作者的最高强度用语不应沿用成网站客观评级。",
          "kind": "视频",
          "scope": "萨尔贡 / 佩佩 / 进阶 / 禁用盟约"
        },
        {
          "title": "【入门教学单品】卫戍协议轮椅焚决！教你秒上手萨尔贡盟约队",
          "date": "2026-03-26",
          "url": "https://www.bilibili.com/video/BV14oXHBuEzc/",
          "author": "柏喙攻略组",
          "summary": "入门向萨尔贡教程，标签包含佩佩。",
          "caution": "无可读正文，不应由标题推导完整干员表。",
          "kind": "视频",
          "scope": "萨尔贡 / 佩佩 / 入门"
        }
      ]
    },
    {
      "id": "victoriaShip",
      "name": "维多利亚",
      "tagline": "异阶编队 · 装备与重锤成长",
      "trigger": "场上3名不同维多利亚干员激活；6名获得每件装备的攻击力加成。",
      "core": [
        "薄绿",
        "凯瑟琳",
        "号角",
        "维娜·维多利亚",
        "焰影苇草"
      ],
      "plan": [
        "推导：保留不同等阶的维多利亚干员，让薄绿和维娜在休整期结束时按不同等阶数叠层。",
        "推导：把装备优先配给维多利亚主力；每25层发放的特殊维式重锤可补足装备数量。",
        "推导：以凯瑟琳提供装备，号角辅助最高层盟约成长；后期由维娜或焰影苇草输出。"
      ],
      "pitfalls": [
        "3人伤害倍率仅作用于携带至少1件装备的维多利亚干员。",
        "薄绿统计的是不同等阶，不是干员总人数；同阶堆人不增加这项收益。",
        "每件普通装备在6人效果下攻击力+50%，进阶为+80%；每名通常仅2装备栏。",
        "重锤奖励仅在盟约激活时领取；未激活时积累的层数在激活时补发，每档一次。"
      ],
      "sourcePaths": [
        "data/bonds.json#victoriaShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js",
        "server/sim/content/garrisons/meta.js"
      ],
      "availability": {
        "standard": true,
        "otherDifficulties": true
      },
      "symbol": "锤",
      "thresholds": "携带装备的成员伤害×(1.25+0.008×层数)。；每25层获得1件随机特殊维式重锤。；6人：每件普通装备攻击力+50%，进阶装备改为+80%。",
      "summary": "保留不同等阶的维多利亚干员，让薄绿和维娜在休整期结束时按不同等阶数叠层。",
      "coreDetails": [
        "薄绿 · 3阶 · 【休整期结束时】场上每有1名不同阶的【维多利亚】干员，使已激活的【维多利亚】层数+2",
        "凯瑟琳 · 4阶 · 【进入休整期时】若当前为奇数回合，获得1件随机装备",
        "号角 · 5阶 · 【休整期结束时】当前已激活且层数最多的盟约每有1名不同阶干员在场，层数+2",
        "维娜·维多利亚 · 6阶 · 【休整期结束时】场上每有1名不同阶的【维多利亚】/【奇迹】干员使已激活的【维多利亚】层数+3/【奇迹】层数+2",
        "焰影苇草 · 6阶 · 【维多利亚】每叠加3层，本干员攻击速度+1"
      ],
      "teaching": [
        {
          "title": "【卫戍协议】成型最强输出盟约—维多利亚一图流！轻松50％播报！",
          "date": "2026-03-20",
          "url": "https://www.bilibili.com/video/BV1t9AJzfEr2/",
          "author": "白樱iridescent",
          "summary": "有针对维多利亚的下半期一图流教程。",
          "caution": "最强/50%为作者标题宣称，网站不要转述成保证。具体运营需本地数据与官方条目支持。",
          "kind": "视频",
          "scope": "维多利亚 / 一图流"
        }
      ]
    },
    {
      "id": "kjeragShip",
      "name": "谢拉格",
      "tagline": "寒冷冻结 · 控场叠层",
      "trigger": "场上3名不同谢拉格干员激活；6名每25秒触发全场寒风。",
      "core": [
        "初雪",
        "灵知",
        "银灰",
        "凛御银灰",
        "圣聆初雪"
      ],
      "plan": [
        "推导：用灵知、耶拉、谢拉格不融冰制造寒冷，并让初雪、银灰覆盖敌人密集区域，从冻结事件增长层数。",
        "推导：凛御银灰身前放攻击覆盖面大的谢拉格成员，让被赋予的冻结叠层特质触发更多。",
        "推导：先稳住6人寒风，再用圣聆初雪消化高层数；领袖战观察单次伤害，适时降低额外增伤。"
      ],
      "pitfalls": [
        "3人基础伤害倍率为1.25；对寒冷/冻结目标采用1.35+0.01×层数这一倍率，不能再额外乘一次1.25。",
        "寒风间隔25秒；没有其他寒冷来源时，前25秒不会凭空冻结。",
        "领袖单次伤害≥300000会整次作废；高层谢拉格叠加奥术等增伤可能越过限伤。"
      ],
      "sourcePaths": [
        "data/bonds.json#kjeragShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js",
        "server/sim/content/devices.js"
      ],
      "availability": {
        "standard": true,
        "otherDifficulties": true
      },
      "symbol": "雪",
      "thresholds": "普通目标伤害×1.25；寒冷或冻结目标伤害×(1.35+0.01×层数)。；6人寒风每25秒使全场敌人寒冷20+0.1×层数秒。",
      "summary": "用灵知、耶拉、谢拉格不融冰制造寒冷，并让初雪、银灰覆盖敌人密集区域，从冻结事件增长层数。",
      "coreDetails": [
        "初雪 · 3阶 · 【战斗中】每当范围内1名敌人进入冻结时，有50%概率使已激活的【谢拉格】层数+1",
        "灵知 · 4阶 · 【获得时】自身所属盟约层数+5（无需激活盟约）",
        "银灰 · 4阶 · 【战斗中】每当范围内1名敌人进入冻结时，有50%概率使已激活的【谢拉格】层数+1",
        "凛御银灰 · 5阶 · 【战斗开始时】使身前一格【谢拉格】干员获得特质“范围内1名敌人进入冻结时，有60%概率使已激活的【谢拉格】层数+1”",
        "圣聆初雪 · 6阶 · 【谢拉格】【奥术】每叠加3层，本干员攻击力+1%"
      ],
      "teaching": [
        {
          "title": "【明日方舟_卫戍协议】最简单无脑的谢拉格打法 寒冰陀螺 启动！",
          "date": "2026-03-16",
          "url": "https://www.bilibili.com/video/BV1uowLz7EAM/",
          "author": "二十三号半",
          "summary": "下半期谢拉格教程，时长约9分57秒。",
          "caution": "无可读细节，不编造卡位。",
          "kind": "视频",
          "scope": "谢拉格 / 入门"
        },
        {
          "title": "惊天萨谢！这点层数就能爆杀终极隐秘了？",
          "date": "2026-04-09",
          "url": "https://www.bilibili.com/video/BV1LLDJBrEsd/",
          "author": "作者名本次搜索结果未完整返回",
          "summary": "作者提出缪尔赛思、本家主C转谢、银灰或初雪构成谢拉格外挂，利用投资人和买卖雪猎、灵知补层。",
          "caution": "作者在简介明确有部分其他阵营尚未测试；网站只把萨谢/叙谢作为实测分支外链，不泛化所有体系。",
          "kind": "视频",
          "scope": "谢拉格 / 萨尔贡 / 双修 / 进阶"
        }
      ]
    },
    {
      "id": "lateranoShip",
      "name": "拉特兰",
      "tagline": "弹药循环 · 六拉特兰火力成长",
      "trigger": "场上3名不同拉特兰干员激活；6名每次消耗弹药为全体拉特兰加攻击。标准模拟禁用。",
      "core": [
        "莫斯提马",
        "圣约送葬人",
        "蕾缪安",
        "信仰搅拌机",
        "新约能天使"
      ],
      "plan": [
        "推导：使用确实带弹药技能的干员；圣约送葬人兼顾消耗弹药叠层，莫斯提马周围4格布置耗弹主力。",
        "推导：中期优先凑6人，让全队累计消耗50发弹药达到+200%攻击力上限。",
        "推导：蕾缪安同一行保留3名干员以触发其特质；新约能天使和信仰搅拌机负责持续耗弹。"
      ],
      "pitfalls": [
        "3人仅放大开启技能时获得的弹药量；普通能天使、空弦等非弹药技能不会因此获得额外弹药。",
        "多连击不等于消耗多发弹药，叠层以实际弹药减少事件为准。",
        "标准模拟关闭拉特兰盟约。"
      ],
      "sourcePaths": [
        "data/bonds.json#lateranoShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js"
      ],
      "availability": {
        "standard": false,
        "otherDifficulties": true
      },
      "symbol": "铳",
      "thresholds": "开启弹药技能时弹药量=floor(基础弹药×(1.05+0.015×层数))。；6人：每实际消耗1发弹药，全体拉特兰攻击力+4%，每战至多+200%。",
      "summary": "使用确实带弹药技能的干员；圣约送葬人兼顾消耗弹药叠层，莫斯提马周围4格布置耗弹主力。",
      "coreDetails": [
        "莫斯提马 · 4阶 · 【战斗中】自身周围4格的干员每消耗6发弹药，使已激活的【拉特兰】层数+1",
        "圣约送葬人 · 5阶 · 【战斗中】自身每消耗7发子弹，使已激活的【拉特兰】层数+7、【远见】层数+3（每场战斗分别至多触发7次）",
        "蕾缪安 · 6阶 · 【战斗中】自身每消耗10发子弹，若同一行有3名干员，使已激活的【拉特兰】【精准】层数+2",
        "信仰搅拌机 · 4阶 · 【拉特兰】【坚守】每叠加3层，本干员防御力+1%",
        "新约能天使 · 6阶 · 【获得时】使下个休整期额外获得2资金"
      ],
      "teaching": [
        {
          "title": "【卫戍攻略#4】什么叫叠到999层反而亏输出？终极模拟教学 炎&拉特兰篇",
          "date": "2026-04-17",
          "url": "https://www.bilibili.com/video/BV1nrdqBLERz/",
          "author": "黑蓑影卫攻略组",
          "summary": "较新的终极模拟炎、拉特兰专题，标题明确讨论满999层反而亏输出。",
          "caution": "标题不能单独证明限伤算法；算法请引用仓库研究文档与本地代码。",
          "kind": "视频",
          "scope": "炎 / 拉特兰 / 终极 / 限伤 / 3/27更新后"
        }
      ]
    },
    {
      "id": "egirShip",
      "name": "阿戈尔",
      "tagline": "身前吞噬 · 生命与复活链",
      "trigger": "场上3名不同阿戈尔干员激活；5名解锁每场最多3次成员首次击倒复活。标准模拟禁用。",
      "core": [
        "歌蕾蒂娅",
        "乌尔比安",
        "归溟幽灵鲨",
        "浊心斯卡蒂"
      ],
      "plan": [
        "推导：明确每名阿戈尔的朝向，把可承受吞噬伤害或可用于叠层的干员放在其身前一格。",
        "推导：利用歌蕾蒂娅同一行3人的休整期产卡，为阵容和吞噬对象提供资源。",
        "推导：中期凑5阿戈尔获得复活保障，后期乌尔比安、浊心斯卡蒂消化层数；用归溟幽灵鲨的替身切换继续叠层。"
      ],
      "pitfalls": [
        "吞噬造成5000点物理生命流失并获取被标记者的基础攻击力和阻挡数；它可能击倒友军，必须规划站位。",
        "吞噬按更靠左、再更靠上的阿戈尔依次标记，身前阿戈尔可继续串联；不是任意选取祭品。",
        "5人效果总共只有3个复活名额，各成员首次击倒最多占1次；并非所有阿戈尔无限复活。",
        "标准模拟关闭阿戈尔；联防与最终攻势中不要依靠战斗特质继续叠层。"
      ],
      "sourcePaths": [
        "data/bonds.json#egirShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js"
      ],
      "availability": {
        "standard": false,
        "otherDifficulties": true
      },
      "symbol": "潮",
      "thresholds": "阿戈尔最大生命加成为35%+1%×层数。；开场吞噬身前一格，获取基础攻击和阻挡；每名被吞噬者按其等阶为阿戈尔加层，每场每名一次。；5人：3个复活名额，每名成员至多1次；开场吞噬击倒者在吞噬结束后按棋盘顺序使用名额。",
      "summary": "明确每名阿戈尔的朝向，把可承受吞噬伤害或可用于叠层的干员放在其身前一格。",
      "coreDetails": [
        "歌蕾蒂娅 · 4阶 · 【进入休整期时】若同一行有3名干员，获得1个斯卡蒂、幽灵鲨或深巡",
        "乌尔比安 · 5阶 · 【阿戈尔】每叠加2层，本干员攻击力+1%",
        "归溟幽灵鲨 · 5阶 · 【战斗中】自身被击倒或替身与本体进行切换时，使已激活的【阿戈尔】层数+5、【不屈】层数+5",
        "浊心斯卡蒂 · 6阶 · 【阿戈尔】每叠加10层，本干员每秒回复50生命，自然技力回复速度+0.15/秒"
      ],
      "teaching": [
        {
          "title": "无转职无浊蒂也能抢播报？全网最详细阿戈尔攻略！【卫戍协议/阿戈尔吃人复活机制与运营思路】",
          "date": "2026-03-23",
          "url": "https://www.bilibili.com/video/BV146QXB4EUK/",
          "author": "麓笙Lumshine",
          "summary": "可推荐为阿戈尔吞噬与复活机制专题。",
          "caution": "不能由标题推导无转职时的完整阵容；还需按本地吞噬规则校对。",
          "kind": "视频",
          "scope": "阿戈尔 / 吞噬 / 复活 / 机制"
        },
        {
          "title": "【卫戍攻略#3】不屈不是区！如何加强终端输出？终极模拟教学 卡西米尔&阿戈尔篇",
          "date": "2026-04-06",
          "url": "https://www.bilibili.com/video/BV1eBSdBBEig/",
          "author": "黑蓑影卫攻略组",
          "summary": "终极模拟下卡西米尔、阿戈尔及不屈的后续教学。",
          "caution": null,
          "kind": "视频",
          "scope": "卡西米尔 / 阿戈尔 / 终极 / 3/27更新后"
        }
      ]
    },
    {
      "id": "siracusaShip",
      "name": "叙拉古",
      "tagline": "刷新叠层 · 隐匿与真伤触发",
      "trigger": "场上3名不同叙拉古干员激活；6名部署后获得隐匿与特殊真伤机会。",
      "core": [
        "拉普兰德",
        "缄默德克萨斯",
        "铃兰",
        "安洁莉娜",
        "荒芜拉普兰德"
      ],
      "plan": [
        "推导：先激活3叙拉古，把拉普兰德放在整备区也可接收其本回合首次主动刷新叠层。",
        "推导：阿罗玛、安洁莉娜在场时，每回合前3次刷新可达到各自休整期末特质收益上限。",
        "推导：用普罗旺斯、德克萨斯、缄默德克萨斯等免费刷新来源驱动成长；铃兰身前放值得重复触发获得时效果的干员。",
        "推导：后期争取荒芜拉普兰德精锐，将其击倒叠层特质扩散给叙拉古成员。"
      ],
      "pitfalls": [
        "阿罗玛、安洁莉娜的休整期结束特质需在场；只有拉普兰德明确允许在整备区生效。",
        "6人特效写名义3%概率，实现为全体叙拉古共享的伪随机计数；不能把每一下当独立3%抽签。",
        "隐匿不等于完全无敌，处于阻挡时仍可能受到攻击。"
      ],
      "sourcePaths": [
        "data/bonds.json#siracusaShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js",
        "server/sim/content/garrisons/meta.js"
      ],
      "availability": {
        "standard": true,
        "otherDifficulties": true
      },
      "symbol": "狼",
      "thresholds": "每次部署后攻速+25+0.8×层数，持续32+0.4×层数秒。；6人：部署后同持续时间隐匿；隐匿期间及离开后10秒，普通伤害命中有名义3%机会追加5000+50×层数真实伤害与3秒恐惧。",
      "summary": "先激活3叙拉古，把拉普兰德放在整备区也可接收其本回合首次主动刷新叠层。",
      "coreDetails": [
        "拉普兰德 · 2阶 · 【刷新时】若为本回合首次主动刷新，使已激活的【叙拉古】层数+4，此干员在整备区时也有效",
        "缄默德克萨斯 · 4阶 · 【进入休整期时】获得1次免费刷新",
        "铃兰 · 5阶 · 【进入休整期时】触发身前一格的其他干员的“获得时”类效果",
        "安洁莉娜 · 5阶 · 【休整期结束时】本回合每刷新过1次，使已激活的【叙拉古】层数+4（每回合至多12层）",
        "荒芜拉普兰德 · 6阶 · 【战斗中】击倒敌人时，使已激活的【叙拉古】层数+2\n将荒芜拉普兰德合成为精锐即可在战斗中使所有【叙拉古】干员获得该效果"
      ],
      "teaching": [
        {
          "title": "卫戍协议】无敌叙拉古思路分享！",
          "date": "2026-03-15",
          "url": "https://www.bilibili.com/video/BV1YuwKztE9d/",
          "author": "白绮Infinity",
          "summary": "作者建议阿米娅或贾维策略。 提醒叙拉古前中期需要补强力输出；阿罗玛吃地图，可能需要五本外援。 荒芜拉普兰德是六本核心，获得难度会影响成型。",
          "caution": "这是3/27前评价；3/27强化拉普兰德叠层并新增伺夜预设后，叙拉古运营已有后续改进，勿写成当前不可玩的固定结论。",
          "kind": "视频",
          "scope": "叙拉古 / 贾维 / 阿米娅 / 运营"
        },
        {
          "title": "你最稳定的Boss对策：4分钟学会二本流叙拉古",
          "date": "2026-04-01",
          "url": "https://www.bilibili.com/video/BV1Gk9jBTEbx/",
          "author": "ZeroLucid",
          "summary": "作者明确这是更新后二本叙拉古，并认为稳定性、兜底与攻坚已有改善。",
          "caution": "可作为旧版3/15高费核心路线的后续阅读；未获取具体运营字幕，不应杜撰步骤。",
          "kind": "视频",
          "scope": "叙拉古 / 贾维 / 3/27更新后"
        },
        {
          "title": "【明日方舟】卫戍协议高分阵容推荐！保姆级教程 大炎体系/叙拉古体系/卡西米尔分队打法解析",
          "date": "2026-03-18",
          "url": "https://www.bilibili.com/video/BV1QxwvzuEQN/",
          "author": "叫我棉被",
          "summary": "综合解析三个核心体系，可作为新手视频入口。",
          "caution": null,
          "kind": "视频",
          "scope": "炎 / 叙拉古 / 卡西米尔 / 综合"
        }
      ]
    },
    {
      "id": "kazimierzShip",
      "name": "卡西米尔",
      "tagline": "再部署成长 · 阻挡真伤",
      "trigger": "场上3名不同卡西米尔干员激活；6名解锁阻挡脉冲/未阻挡攻击真伤。标准模拟禁用。",
      "core": [
        "砾",
        "瑕光",
        "远牙",
        "玛恩纳",
        "耀骑士临光"
      ],
      "plan": [
        "推导：让砾等快速再部署成员参与前线循环，用部署事件给卡西米尔团队加攻击和层数。",
        "推导：远牙同一行最右放可频繁再部署的干员；耀骑士临光身前也可放该循环位。",
        "推导：用助力减少再部署时间，不屈提供快速返场机会；根据前线实际生存情况调整承伤，不强求每次击倒。",
        "推导：后期让玛恩纳、耀骑士临光输出，配合6人真伤机制处理高防敌人。"
      ],
      "pitfalls": [
        "每次触发看本人的干员部署；卡西米尔攻击上限随层数增长，不是固定无限叠加。",
        "远牙赋予的是同一行最右一名干员；耀骑士临光赋予自己和身前一格，注意朝向与相对位置。",
        "3坚守会分担非坚守干员伤害，可能降低砾的击倒/返场频率，属于循环流需评估的取舍。",
        "标准模拟关闭卡西米尔。"
      ],
      "sourcePaths": [
        "data/bonds.json#kazimierzShip",
        "data/chess.json",
        "data/garrisons.json",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/core.js"
      ],
      "availability": {
        "standard": false,
        "otherDifficulties": true
      },
      "symbol": "骑",
      "thresholds": "本人任意干员部署时，卡西米尔攻击力+20%，每战累计上限为50%+1%×层数。；6人：阻挡时每2秒对周围0.8格敌人造成120%攻击力真实伤害与0.1秒晕眩；未阻挡时普通攻击伤害附带30%攻击力真实伤害。",
      "summary": "让砾等快速再部署成员参与前线循环，用部署事件给卡西米尔团队加攻击和层数。",
      "coreDetails": [
        "砾 · 2阶 · 【部署时】使已激活的【卡西米尔】层数+1\n【被击倒时】使已激活的【不屈】层数+2",
        "瑕光 · 3阶 · 【部署时】使自身已激活的盟约层数+4（每场作战至多12层）",
        "远牙 · 4阶 · 【战斗开始时】使同一行最右边一名干员获得特质“【部署时】使已激活的【卡西米尔】【精准】层数+4（每场作战至多24层）”",
        "玛恩纳 · 5阶 · 【卡西米尔】每叠加5层，本干员部署后100秒内基础攻击力+10、基础生命值+50",
        "耀骑士临光 · 6阶 · 【战斗开始时】使自身和身前一格干员获得特质“【卡西米尔】每叠加3层，本干员再部署时间-1.5%，攻击速度+0.5”"
      ],
      "teaching": [
        {
          "title": "【卫戍协议:盟约Ⅱ】无脑阵容 突袭卡西米尔玩法推荐 简单好抄",
          "date": "2026-03-15",
          "url": "https://www.bilibili.com/video/BV1XLwhz8ESa/",
          "author": "萧然Q",
          "summary": "瑕光为核心；前期先3卡西米尔、2突袭，再考虑远见、奇迹、投资人。作者常用第2/4/7/9回合升级，六本视情况；优先利用焰尾的获得时收益。",
          "caution": "升级回合是作者运营模板，不能写成任何起手都必须执行的规则。",
          "kind": "视频",
          "scope": "卡西米尔 / 突袭 / 新手 / 运营"
        },
        {
          "title": "【卫戍协议:盟约Ⅱ】卡西米尔-专属策略埃芒加德，爽叠突袭无需不屈！ | 明日方舟攻略",
          "date": "2026-03-16",
          "url": "https://www.bilibili.com/video/BV1g3wmzuEqH/",
          "author": "自在道爷",
          "summary": "作者用埃芒加德策略帮助卡西米尔叠层，认为高层数后耀骑士临光能反复再部署，因而此分支可不带不屈。",
          "caution": "这是特定策略分支的作者判断，不代表所有卡西米尔都不需要不屈。",
          "kind": "视频",
          "scope": "卡西米尔 / 突袭 / 埃芒加德"
        },
        {
          "title": "【明日方舟】卫戍协议高分阵容推荐！保姆级教程 大炎体系/叙拉古体系/卡西米尔分队打法解析",
          "date": "2026-03-18",
          "url": "https://www.bilibili.com/video/BV1QxwvzuEQN/",
          "author": "叫我棉被",
          "summary": "综合解析三个核心体系，可作为新手视频入口。",
          "caution": null,
          "kind": "视频",
          "scope": "炎 / 叙拉古 / 卡西米尔 / 综合"
        }
      ]
    }
  ],
  "operators": [
    {
      "name": "小满",
      "faction": "炎",
      "factionId": "yanShip",
      "role": "2阶 / 乡音沉沉。【休整期结束时】本回合每获得过1名干员，使已激活的【炎】层数+1"
    },
    {
      "name": "夕",
      "faction": "炎",
      "factionId": "yanShip",
      "role": "5阶 / 工笔入化。【休整期结束时】当前休整期每获得过一名干员，使已激活的【炎】【奥术】层数+2"
    },
    {
      "name": "余",
      "faction": "炎",
      "factionId": "yanShip",
      "role": "6阶 / 灶里乾坤。【进入休整期时】若同一行有3名干员，随机获得1名当前人数最多盟约的干员"
    },
    {
      "name": "仇白",
      "faction": "炎",
      "factionId": "yanShip",
      "role": "6阶 / 问雪。【炎】【突袭】每叠加3层，本干员攻击束缚和停顿状态的敌人造成的伤害提升1%"
    },
    {
      "name": "莎草",
      "faction": "萨尔贡",
      "factionId": "sargonShip",
      "role": "2阶 / 巧思乍现。【战斗中】首次开启技能时，使已激活的【萨尔贡】层数+5"
    },
    {
      "name": "菲莱",
      "faction": "萨尔贡",
      "factionId": "sargonShip",
      "role": "3阶 / 冥河诅咒。【战斗中】开启技能时，使已激活的【萨尔贡】层数+6"
    },
    {
      "name": "百炼嘉维尔",
      "faction": "萨尔贡",
      "factionId": "sargonShip",
      "role": "4阶 / 丛林之魂。【战斗中】开启技能时，使已激活的【萨尔贡】层数+9"
    },
    {
      "name": "缇缇",
      "faction": "萨尔贡",
      "factionId": "sargonShip",
      "role": "5阶 / 旧日绽放。【战斗中】每当范围内有敌人或干员进入沉睡或晕眩时，使已激活的【萨尔贡】【精准】层数+1（每场战斗至多24层）"
    },
    {
      "name": "异客",
      "faction": "萨尔贡",
      "factionId": "sargonShip",
      "role": "6阶 / 辉煌裂片。【萨尔贡】【迅捷】【精准】每叠加3层，本干员攻击力+2%"
    },
    {
      "name": "薄绿",
      "faction": "维多利亚",
      "factionId": "victoriaShip",
      "role": "3阶 / 聚能涡旋。【休整期结束时】场上每有1名不同阶的【维多利亚】干员，使已激活的【维多利亚】层数+2"
    },
    {
      "name": "凯瑟琳",
      "faction": "维多利亚",
      "factionId": "victoriaShip",
      "role": "4阶 / 战火淬炼。【进入休整期时】若当前为奇数回合，获得1件随机装备"
    },
    {
      "name": "号角",
      "faction": "维多利亚",
      "factionId": "victoriaShip",
      "role": "5阶 / 终极防线。【休整期结束时】当前已激活且层数最多的盟约每有1名不同阶干员在场，层数+2"
    },
    {
      "name": "维娜·维多利亚",
      "faction": "维多利亚",
      "factionId": "victoriaShip",
      "role": "6阶 / 俱以我之名。【休整期结束时】场上每有1名不同阶的【维多利亚】/【奇迹】干员使已激活的【维多利亚】层数+3/【奇迹】层数+2"
    },
    {
      "name": "焰影苇草",
      "faction": "维多利亚",
      "factionId": "victoriaShip",
      "role": "6阶 / 生命火种。【维多利亚】每叠加3层，本干员攻击速度+1"
    },
    {
      "name": "初雪",
      "faction": "谢拉格",
      "factionId": "kjeragShip",
      "role": "3阶 / 自然震慑。【战斗中】每当范围内1名敌人进入冻结时，有50%概率使已激活的【谢拉格】层数+1"
    },
    {
      "name": "灵知",
      "faction": "谢拉格",
      "factionId": "kjeragShip",
      "role": "4阶 / 零度爆发。【获得时】自身所属盟约层数+5（无需激活盟约）"
    },
    {
      "name": "银灰",
      "faction": "谢拉格",
      "factionId": "kjeragShip",
      "role": "4阶 / 真银斩。【战斗中】每当范围内1名敌人进入冻结时，有50%概率使已激活的【谢拉格】层数+1"
    },
    {
      "name": "凛御银灰",
      "faction": "谢拉格",
      "factionId": "kjeragShip",
      "role": "5阶 / 御敌的锋锐。【战斗开始时】使身前一格【谢拉格】干员获得特质“范围内1名敌人进入冻结时，有60%概率使已激活的【谢拉格】层数+1”"
    },
    {
      "name": "圣聆初雪",
      "faction": "谢拉格",
      "factionId": "kjeragShip",
      "role": "6阶 / 群山俯首。【谢拉格】【奥术】每叠加3层，本干员攻击力+1%"
    },
    {
      "name": "莫斯提马",
      "faction": "拉特兰",
      "factionId": "lateranoShip",
      "role": "4阶 / 序时之匙。【战斗中】自身周围4格的干员每消耗6发弹药，使已激活的【拉特兰】层数+1"
    },
    {
      "name": "圣约送葬人",
      "faction": "拉特兰",
      "factionId": "lateranoShip",
      "role": "5阶 / 近身铳斗。【战斗中】自身每消耗7发子弹，使已激活的【拉特兰】层数+7、【远见】层数+3（每场战斗分别至多触发7次）"
    },
    {
      "name": "蕾缪安",
      "faction": "拉特兰",
      "factionId": "lateranoShip",
      "role": "6阶 / 礼炮·强制追思。【战斗中】自身每消耗10发子弹，若同一行有3名干员，使已激活的【拉特兰】【精准】层数+2"
    },
    {
      "name": "信仰搅拌机",
      "faction": "拉特兰",
      "factionId": "lateranoShip",
      "role": "4阶 / 退休前布道。【拉特兰】【坚守】每叠加3层，本干员防御力+1%"
    },
    {
      "name": "新约能天使",
      "faction": "拉特兰",
      "factionId": "lateranoShip",
      "role": "6阶 / 开火成瘾症。【获得时】使下个休整期额外获得2资金"
    },
    {
      "name": "歌蕾蒂娅",
      "faction": "阿戈尔",
      "factionId": "egirShip",
      "role": "4阶 / 缺水的碎漩狂舞。【进入休整期时】若同一行有3名干员，获得1个斯卡蒂、幽灵鲨或深巡"
    },
    {
      "name": "乌尔比安",
      "faction": "阿戈尔",
      "factionId": "egirShip",
      "role": "5阶 / 必须开辟的通路。【阿戈尔】每叠加2层，本干员攻击力+1%"
    },
    {
      "name": "归溟幽灵鲨",
      "faction": "阿戈尔",
      "factionId": "egirShip",
      "role": "5阶 / 生存的渴望。【战斗中】自身被击倒或替身与本体进行切换时，使已激活的【阿戈尔】层数+5、【不屈】层数+5"
    },
    {
      "name": "浊心斯卡蒂",
      "faction": "阿戈尔",
      "factionId": "egirShip",
      "role": "6阶 / \"潮涌，潮枯\"。【阿戈尔】每叠加10层，本干员每秒回复50生命，自然技力回复速度+0.15/秒"
    },
    {
      "name": "拉普兰德",
      "faction": "叙拉古",
      "factionId": "siracusaShip",
      "role": "2阶 / 狼魂。【刷新时】若为本回合首次主动刷新，使已激活的【叙拉古】层数+4，此干员在整备区时也有效"
    },
    {
      "name": "缄默德克萨斯",
      "faction": "叙拉古",
      "factionId": "siracusaShip",
      "role": "4阶 / 剑雨滂沱。【进入休整期时】获得1次免费刷新"
    },
    {
      "name": "铃兰",
      "faction": "叙拉古",
      "factionId": "siracusaShip",
      "role": "5阶 / 狐火渺然。【进入休整期时】触发身前一格的其他干员的“获得时”类效果"
    },
    {
      "name": "安洁莉娜",
      "faction": "叙拉古",
      "factionId": "siracusaShip",
      "role": "5阶 / 秘杖·反重力模式。【休整期结束时】本回合每刷新过1次，使已激活的【叙拉古】层数+4（每回合至多12层）"
    },
    {
      "name": "荒芜拉普兰德",
      "faction": "叙拉古",
      "factionId": "siracusaShip",
      "role": "6阶 / 终幕·浩劫。【战斗中】击倒敌人时，使已激活的【叙拉古】层数+2\n将荒芜拉普兰德合成为精锐即可在战斗中使所有【叙拉古】干员获得该效果"
    },
    {
      "name": "砾",
      "faction": "卡西米尔",
      "factionId": "kazimierzShip",
      "role": "2阶 / 鼠群。【部署时】使已激活的【卡西米尔】层数+1\n【被击倒时】使已激活的【不屈】层数+2"
    },
    {
      "name": "瑕光",
      "faction": "卡西米尔",
      "factionId": "kazimierzShip",
      "role": "3阶 / 先贤化身。【部署时】使自身已激活的盟约层数+4（每场作战至多12层）"
    },
    {
      "name": "远牙",
      "faction": "卡西米尔",
      "factionId": "kazimierzShip",
      "role": "4阶 / 光羽箭。【战斗开始时】使同一行最右边一名干员获得特质“【部署时】使已激活的【卡西米尔】【精准】层数+4（每场作战至多24层）”"
    },
    {
      "name": "玛恩纳",
      "faction": "卡西米尔",
      "factionId": "kazimierzShip",
      "role": "5阶 / 未照耀的荣光。【卡西米尔】每叠加5层，本干员部署后100秒内基础攻击力+10、基础生命值+50"
    },
    {
      "name": "耀骑士临光",
      "faction": "卡西米尔",
      "factionId": "kazimierzShip",
      "role": "6阶 / 耀阳颔首。【战斗开始时】使自身和身前一格干员获得特质“【卡西米尔】每叠加3层，本干员再部署时间-1.5%，攻击速度+0.5”"
    }
  ],
  "rounds": [
    {
      "number": "00",
      "phase": "确认本局信息 / 开局",
      "title": "先看禁用、敌人，再选策略",
      "points": [
        "核心盟约被禁会影响卡池，先确认想走的体系能否完成；标准模式不能照搬包含阿戈尔、拉特兰或卡西米尔的高难度阵容。",
        "同盟与队友尽量分工不同体系，减轻公共卡池的竞争；看到飞行或隐匿敌人预告，提前留出对应输出或对策位置。"
      ]
    },
    {
      "number": "01",
      "phase": "开局 → 启动",
      "title": "先激活成长，再追求豪华终端",
      "points": [
        "围绕来牌凑起核心最低档，留住真正负责叠层的干员；不要把高等阶当作唯一选牌标准。",
        "普通情况下资金不跨回合保留。每轮安排好招募、升级和刷新，不按其他自走棋的“存钱吃利息”习惯操作。",
        "购买或刷新之前想清楚：这一笔能提高当前战力、接近晋升，还是扩大后续成长？血量危险时先补即时战力。"
      ]
    },
    {
      "number": "02",
      "phase": "中期 / 核心成长",
      "title": "升级是在买卡池，也是在延后战力",
      "points": [
        "升级解锁更高等阶，同时吃掉本轮购买资金。先检查关键阶是否真的有需要的核心，再判断本轮能否安全升级。",
        "3月炎奥术视频常用3/5/7/9回合升级，突袭卡西视频常用2/4/7/9；这是两种作者模板，不能互换为所有对局的硬规则。",
        "晋升高阶招募能帮助转型。整备区留意远见、奇迹、投资人的启动数量；临时整备区不参与其计数。"
      ]
    },
    {
      "number": "03",
      "phase": "休整期结束前 / 每轮检查",
      "title": "把“会叠层”变成“这一轮真能叠层”",
      "points": [
        "检查休整期结算件是否仍在正确位置、对应盟约是否激活。不同特质有“获得时”“战斗中”“休整期结束时”等不同触发时机。",
        "阿戈尔检查吞噬朝向和身前目标；谢拉格检查冻结覆盖；拉特兰检查弹药干员与莫斯提马的相对位置。",
        "确认没有闲置资金，装备是否给对终端，召唤物是否摆好；不要只看盟约人数而忘记对空、阻挡和治疗。"
      ]
    },
    {
      "number": "04",
      "phase": "终局 / 最终攻势",
      "title": "从成长阵容切换到输出阵容",
      "points": [
        "一般最终攻势在第14回合；独立标准为第9回合。进领袖战后，战斗叠层不再像普通个人战斗那样继续滚动。",
        "需要以现有层数支撑持续输出与生存。对最终攻势/隐秘核心领袖，单次伤害达到30万会整次作废，过高的单次倍率并不总是收益。",
        "险境及以上胜利后：整队激活层数总和严格大于1200（独立严格大于350），且LP大于1，才进入隐秘核心。"
      ]
    }
  ],
  "mechanics": [
    {
      "title": "人数与层数分开",
      "text": "通常按场上不同干员计数，同名普通和精锐只算1名。层数整局保留，未激活时不产生盟约效果，每盟约上限999。",
      "sourcePaths": [
        "server/match/bondsMeta.js",
        "shared/constants.js",
        "docs/PLAYING.md"
      ]
    },
    {
      "title": "整备区也能激活的盟约",
      "text": "远见、奇迹、投资人按场上与整备区共同去重计数；5格临时整备区不计入。特质是否在整备区触发另看描述，不要与盟约激活计数混淆。",
      "sourcePaths": [
        "server/match/bondsMeta.js",
        "docs/PLAYING.md"
      ]
    },
    {
      "title": "核心进阶阈值例外",
      "text": "核心一般3/6人；炎有3/6/9三档，阿戈尔3/5两档。调和给已有真实成员的每个核心人数+1，可协助到达高档。",
      "sourcePaths": [
        "data/bonds.json",
        "server/match/bondsMeta.js"
      ]
    },
    {
      "title": "标准模拟禁用项",
      "text": "标准关闭拉特兰、阿戈尔、卡西米尔、灵巧、奥术、奇迹、投资人、突袭、独行、绝技。险境及以上启用23盟约，但每局抽选禁用会改变实际干员卡池。",
      "sourcePaths": [
        "data/config.json#modes",
        "data/config.json#bans",
        "server/match/gamedata.js"
      ]
    },
    {
      "title": "资金每回合使用",
      "text": "每回合基础资金=min(3+回合,12)；休整期末剩余资金清零，坎诺特策略例外。刷新1资金，出售任意干员仅返1资金。",
      "sourcePaths": [
        "data/config.json#economy",
        "server/match/player/economy.js"
      ]
    },
    {
      "title": "升级和招募",
      "text": "调度中心1至6级决定最高干员等阶；升级费用每过一回合降1至最低0，升级后按下级基础费重算。招募I–VI阶价格为2/3/3/3/4/4。",
      "sourcePaths": [
        "data/config.json#economy",
        "docs/PLAYING.md"
      ]
    },
    {
      "title": "晋升与装备",
      "text": "通常3张普通同名自动晋升精锐，风丸只需2张。晋升触发免费三选一高阶招募；2件同名装备合为进阶，每名干员通常2件装备。",
      "sourcePaths": [
        "data/config.json#economy",
        "server/match/player/acquire.js",
        "server/match/player/items.js"
      ]
    },
    {
      "title": "合作公共卡池",
      "text": "同盟通常共享干员库存；基础库存是独立模式的2倍。自选干员私人库存同样翻倍但不与队友共享。推导：开局分工不同阵营可减少抢牌。",
      "sourcePaths": [
        "data/config.json#economy",
        "server/match/pool.js",
        "docs/PLAYING.md"
      ]
    },
    {
      "title": "叠层时机",
      "text": "普通个人作战可从战斗特质叠层；联防援助、最终攻势和隐秘核心的战斗阶段不叠层。休整期触发的成长应在开战前安排。",
      "sourcePaths": [
        "data/config.json#unite",
        "data/config.json#finalAssault",
        "server/sim/content/garrisons/battle.js",
        "docs/PLAYING.md"
      ]
    },
    {
      "title": "隐秘核心",
      "text": "险境及以上第14回合领袖胜利后，整队激活盟约层数总和>1200（独立>350）且LP>1，进入第15回合隐秘核心。是严格大于，等于不够。",
      "sourcePaths": [
        "data/config.json#hiddenCore",
        "server/match/finalAssault.js"
      ]
    },
    {
      "title": "领袖单次限伤",
      "text": "最终攻势/隐秘核心领袖：最终单次伤害向上取整后≥300000，整次作废。高层数时关注倍率过高导致的限伤；多次适量伤害更容易避开阈值。",
      "sourcePaths": [
        "server/sim/damage.js:220",
        "shared/constants.js:127",
        "docs/PLAYING.md",
        "server/sim/damage.js"
      ]
    },
    {
      "title": "联防的价值",
      "text": "普通战斗有漏怪者和完美作战者时进入联防，至多2名完美作战者协防；场上干员保留生命、技力与位置。推导：稳定清怪可为全队保LP。",
      "sourcePaths": [
        "data/config.json#unite",
        "server/match/unite.js",
        "docs/PLAYING.md"
      ]
    },
    {
      "title": "层数奖励补发",
      "text": "维多利亚重锤、远见/奇迹资金奖励只在激活时结算；未激活时获得层数跨过的档位，在激活后补发且每档只发一次。",
      "sourcePaths": [
        "server/sim/content/bonds/core.js",
        "server/sim/content/bonds/addon/meta.js",
        "docs/PLAYING.md"
      ]
    },
    {
      "title": "属性加成口径",
      "text": "攻击/生命/防御的+百分比通常属于直接乘算类，与同类加成相加；不要把炎、技能和装备所有百分比逐项相乘。具体独立伤害倍率另算。",
      "sourcePaths": [
        "server/sim/content/bonds/core.js",
        "server/sim/content/support",
        "docs/research/02-bonds.md"
      ]
    }
  ],
  "addons": [
    {
      "id": "preciShip",
      "name": "精准",
      "summary": "2名：精准攻击力+10%+1.2%×层数；3名扩展到所有精准与远程干员，并无视30%防御与法抗。",
      "members": [
        "跃跃",
        "深靛",
        "送葬人",
        "雪猎",
        "寒芒克洛丝",
        "莱恩哈特",
        "远牙",
        "缇缇",
        "蕾缪安",
        "异客",
        "焰影苇草",
        "迷迭香"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#preciShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "swiftShip",
      "name": "迅捷",
      "summary": "2名：迅捷技能结束有20%+0.35%×层数概率回复12技力；40层后所有干员以同概率额外回复15技力。",
      "members": [
        "隐现",
        "野鬃",
        "蒂比",
        "锡人",
        "松果",
        "忍冬",
        "莱恩哈特",
        "凛御银灰",
        "引星棘刺",
        "妮芙",
        "异客",
        "锏"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#swiftShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "skillfulShip",
      "name": "灵巧",
      "summary": "2名：灵巧自身及周围4格攻速+10+层数；40层扩大至8格。",
      "members": [
        "格雷伊",
        "小满",
        "蒂比",
        "断崖",
        "至简",
        "空弦",
        "凯瑟琳",
        "灵知",
        "白面鸮",
        "隐德来希",
        "溯光星源"
      ],
      "disabledInStandard": true,
      "sourcePaths": [
        "data/bonds.json#skillfulShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "arcaneShip",
      "name": "奥术",
      "summary": "2名：奥术造成法伤使目标受到的法伤倍率变为1.20+0.01×层数，持续3秒；3名对生命低于50%的目标将该倍率再乘1.4。",
      "members": [
        "深靛",
        "洛洛",
        "海霓",
        "莫斯提马",
        "阿罗玛",
        "史尔特尔",
        "夕",
        "圣聆初雪",
        "溯光星源"
      ],
      "disabledInStandard": true,
      "sourcePaths": [
        "data/bonds.json#arcaneShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "steadShip",
      "name": "坚守",
      "summary": "2名：全体生命值+25%+1.2%×层数；3名分担非坚守所受40%伤害，坚守挨打反击法伤并施加40%脆弱。",
      "members": [
        "角峰",
        "古米",
        "泡泡",
        "折桠",
        "灰毫",
        "斯卡蒂",
        "蛇屠箱",
        "信仰搅拌机",
        "塞雷娅",
        "余"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#steadShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "deputShip",
      "name": "助力",
      "summary": "2名：全体防御+15%+1.2%×层数、再部署时间-30%，休整期结束所有激活盟约+2层；3名档改为+4层。",
      "members": [
        "刺玫",
        "波登可",
        "调香师",
        "耶拉",
        "白面鸮",
        "卡涅利安",
        "流明",
        "纯烬艾雅法拉"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#deputShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "visiShip",
      "name": "远见",
      "summary": "2名（含整备区）：每10层获得2资金；首次80层远见购买价永久-1，150层改为全干员永久-1。",
      "members": [
        "赫默",
        "诗怀雅",
        "初雪",
        "伊内丝",
        "风笛",
        "圣约送葬人",
        "寒檀",
        "迷迭香"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#visiShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "miraShip",
      "name": "奇迹",
      "summary": "2名（含整备区）：主动刷新可能令下次免费，概率18%+0.3%×层数，最高100%；每100层获得20资金。",
      "members": [
        "风丸",
        "能天使",
        "伺夜",
        "华法琳",
        "引星棘刺",
        "安洁莉娜",
        "录武官",
        "维娜·维多利亚"
      ],
      "disabledInStandard": true,
      "sourcePaths": [
        "data/bonds.json#miraShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "investShip",
      "name": "投资人",
      "summary": "3名（含整备区）：获得时特质触发2次；100层后3次。",
      "members": [
        "锡人",
        "琳琅诗怀雅",
        "凛御银灰",
        "山"
      ],
      "disabledInStandard": true,
      "sourcePaths": [
        "data/bonds.json#investShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "raidShip",
      "name": "突袭",
      "summary": "2名：突袭成员10秒未攻击或技能就绪且范围无敌时，保留技力立即转移再部署至地面敌人周围，期间攻击/生命+25%+1%×层数；50层全体攻速+50。",
      "members": [
        "宴",
        "休谟斯",
        "斯卡蒂",
        "瑕光",
        "伊内丝",
        "缄默德克萨斯",
        "史尔特尔",
        "仇白",
        "耀骑士临光"
      ],
      "disabledInStandard": true,
      "sourcePaths": [
        "data/bonds.json#raidShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "indomShip",
      "name": "不屈",
      "summary": "2名：地面干员击倒时18%+0.4%×层数概率立即再部署；3名档地面干员击倒令全体技力+5。",
      "members": [
        "雷蛇",
        "砾",
        "蛇屠箱",
        "风笛",
        "隐德来希",
        "归溟幽灵鲨",
        "佩佩"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#indomShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "maniShip",
      "name": "调和",
      "summary": "1名：场上已有真实成员的每个核心盟约人数各+1；调和成员享受已激活核心效果。只加1人。",
      "members": [
        "缪尔赛思"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#maniShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "emptyShip",
      "name": "协防干员",
      "summary": "2名：全体物理和法术所受伤害-20%；协防成员伤害×1.2，精锐×1.4。",
      "members": [
        "调香师",
        "松果",
        "魔王",
        "铃兰",
        "迷迭香"
      ],
      "disabledInStandard": false,
      "sourcePaths": [
        "data/bonds.json#emptyShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "soloShip",
      "name": "独行",
      "summary": "恰好1种独行干员：独行攻击/生命+60%，初始技力+15；2种及以上失效。",
      "members": [
        "德克萨斯",
        "折桠",
        "流星",
        "水月",
        "泥岩",
        "塞雷娅"
      ],
      "disabledInStandard": true,
      "sourcePaths": [
        "data/bonds.json#soloShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    },
    {
      "id": "suntShip",
      "name": "绝技",
      "summary": "按在场精锐总数：2名精锐攻击+30%；5名精锐技力消耗-30%；同名精锐也分别计数。",
      "members": [],
      "disabledInStandard": true,
      "sourcePaths": [
        "data/bonds.json#suntShip",
        "server/match/bondsMeta.js",
        "server/sim/content/bonds/addon/battle.js",
        "server/sim/content/bonds/addon/meta.js"
      ]
    }
  ],
  "sources": [
    {
      "title": "【卫戍协议:盟约Ⅱ】无脑轮椅！【奥术】【炎】阵容推荐 简单好抄",
      "date": "2026-03-17",
      "url": "https://www.bilibili.com/video/BV1RCwmzLENP/",
      "author": "萧然Q",
      "summary": "杜遥夜策略；作者以“火陈、烛煌”为主C，“夕、星源”为叠层核心。通常第3/5/7/9回合升级（六本视局势），优先6炎，再补远见、奇迹、投资人；投资人成型后关注录武官、诗怀雅、焰尾等“获得时”收益。",
      "caution": "3/27更新前教程。“火陈”对应假日威龙陈，在移植版可通过自选加入并带炎盟约；并非默认招募预设。“星源”简称需结合视频画面确认，本站不直接认定具体形态。当前预设溯光星源为灵巧/奥术成长件。升本节奏随血量与来牌调整。",
      "kind": "视频",
      "scope": "炎 / 奥术 / 新手 / 运营"
    },
    {
      "title": "【卫戍协议:盟约Ⅱ】无脑阵容 突袭卡西米尔玩法推荐 简单好抄",
      "date": "2026-03-15",
      "url": "https://www.bilibili.com/video/BV1XLwhz8ESa/",
      "author": "萧然Q",
      "summary": "瑕光为核心；前期先3卡西米尔、2突袭，再考虑远见、奇迹、投资人。作者常用第2/4/7/9回合升级，六本视情况；优先利用焰尾的获得时收益。",
      "caution": "升级回合是作者运营模板，不能写成任何起手都必须执行的规则。",
      "kind": "视频",
      "scope": "卡西米尔 / 突袭 / 新手 / 运营"
    },
    {
      "title": "【卫戍协议:盟约Ⅱ】卡西米尔-专属策略埃芒加德，爽叠突袭无需不屈！ | 明日方舟攻略",
      "date": "2026-03-16",
      "url": "https://www.bilibili.com/video/BV1g3wmzuEqH/",
      "author": "自在道爷",
      "summary": "作者用埃芒加德策略帮助卡西米尔叠层，认为高层数后耀骑士临光能反复再部署，因而此分支可不带不屈。",
      "caution": "这是特定策略分支的作者判断，不代表所有卡西米尔都不需要不屈。",
      "kind": "视频",
      "scope": "卡西米尔 / 突袭 / 埃芒加德"
    },
    {
      "title": "【卫戍协议】看懂八个核心盟约叠层方式（一图流）",
      "date": "2026-03-15",
      "url": "https://www.bilibili.com/video/BV1a9wbzdE2S/",
      "author": "白樱iridescent",
      "summary": "八个核心盟约的叠层教学，适合作为通用基础外链。",
      "caution": "未取得字幕，不能据标题补写八套具体操作。",
      "kind": "视频",
      "scope": "全体系 / 叠层 / 入门"
    },
    {
      "title": "【卫戍协议】3精准bug修复！精迅萨一图流！萨尔贡体系强度提升！",
      "date": "2026-03-17",
      "url": "https://www.bilibili.com/video/BV1ovwozkEst/",
      "author": "白樱iridescent",
      "summary": "可核实作者将精准、迅捷和萨尔贡作为组合教学，并以3精准判定修复为背景。",
      "caution": "无可读详细简介，网站的具体干员组合需要另用本地数据支持。",
      "kind": "视频",
      "scope": "萨尔贡 / 精准 / 迅捷"
    },
    {
      "title": "删卡流公式萨尔贡7回合成型实战教学",
      "date": "2026-03-23",
      "url": "https://www.bilibili.com/video/BV1UiQDBHE9J/",
      "author": "B大收藏家",
      "summary": "教程针对禁萨尔贡、不禁精准的局；核心利用佩佩策略筛牌压缩卡池。 作者强调缇缇，实战示例无至简、魔王、迷迭香而使用泡泡。",
      "caution": "反直觉的禁萨玩法为进阶特定分支，应单独标条件，不能当普通6萨的通用选牌表。作者的最高强度用语不应沿用成网站客观评级。",
      "kind": "视频",
      "scope": "萨尔贡 / 佩佩 / 进阶 / 禁用盟约"
    },
    {
      "title": "【入门教学单品】卫戍协议轮椅焚决！教你秒上手萨尔贡盟约队",
      "date": "2026-03-26",
      "url": "https://www.bilibili.com/video/BV14oXHBuEzc/",
      "author": "柏喙攻略组",
      "summary": "入门向萨尔贡教程，标签包含佩佩。",
      "caution": "无可读正文，不应由标题推导完整干员表。",
      "kind": "视频",
      "scope": "萨尔贡 / 佩佩 / 入门"
    },
    {
      "title": "卫戍协议】无敌叙拉古思路分享！",
      "date": "2026-03-15",
      "url": "https://www.bilibili.com/video/BV1YuwKztE9d/",
      "author": "白绮Infinity",
      "summary": "作者建议阿米娅或贾维策略。 提醒叙拉古前中期需要补强力输出；阿罗玛吃地图，可能需要五本外援。 荒芜拉普兰德是六本核心，获得难度会影响成型。",
      "caution": "这是3/27前评价；3/27强化拉普兰德叠层并新增伺夜预设后，叙拉古运营已有后续改进，勿写成当前不可玩的固定结论。",
      "kind": "视频",
      "scope": "叙拉古 / 贾维 / 阿米娅 / 运营"
    },
    {
      "title": "你最稳定的Boss对策：4分钟学会二本流叙拉古",
      "date": "2026-04-01",
      "url": "https://www.bilibili.com/video/BV1Gk9jBTEbx/",
      "author": "ZeroLucid",
      "summary": "作者明确这是更新后二本叙拉古，并认为稳定性、兜底与攻坚已有改善。",
      "caution": "可作为旧版3/15高费核心路线的后续阅读；未获取具体运营字幕，不应杜撰步骤。",
      "kind": "视频",
      "scope": "叙拉古 / 贾维 / 3/27更新后"
    },
    {
      "title": "【卫戍协议】成型最强输出盟约—维多利亚一图流！轻松50％播报！",
      "date": "2026-03-20",
      "url": "https://www.bilibili.com/video/BV1t9AJzfEr2/",
      "author": "白樱iridescent",
      "summary": "有针对维多利亚的下半期一图流教程。",
      "caution": "最强/50%为作者标题宣称，网站不要转述成保证。具体运营需本地数据与官方条目支持。",
      "kind": "视频",
      "scope": "维多利亚 / 一图流"
    },
    {
      "title": "【明日方舟_卫戍协议】最简单无脑的谢拉格打法 寒冰陀螺 启动！",
      "date": "2026-03-16",
      "url": "https://www.bilibili.com/video/BV1uowLz7EAM/",
      "author": "二十三号半",
      "summary": "下半期谢拉格教程，时长约9分57秒。",
      "caution": "无可读细节，不编造卡位。",
      "kind": "视频",
      "scope": "谢拉格 / 入门"
    },
    {
      "title": "无转职无浊蒂也能抢播报？全网最详细阿戈尔攻略！【卫戍协议/阿戈尔吃人复活机制与运营思路】",
      "date": "2026-03-23",
      "url": "https://www.bilibili.com/video/BV146QXB4EUK/",
      "author": "麓笙Lumshine",
      "summary": "可推荐为阿戈尔吞噬与复活机制专题。",
      "caution": "不能由标题推导无转职时的完整阵容；还需按本地吞噬规则校对。",
      "kind": "视频",
      "scope": "阿戈尔 / 吞噬 / 复活 / 机制"
    },
    {
      "title": "【明日方舟】卫戍协议高分阵容推荐！保姆级教程 大炎体系/叙拉古体系/卡西米尔分队打法解析",
      "date": "2026-03-18",
      "url": "https://www.bilibili.com/video/BV1QxwvzuEQN/",
      "author": "叫我棉被",
      "summary": "综合解析三个核心体系，可作为新手视频入口。",
      "caution": null,
      "kind": "视频",
      "scope": "炎 / 叙拉古 / 卡西米尔 / 综合"
    },
    {
      "title": "新盟约不会玩？Ban/Pick位记不住？这个视频可以帮到你【卫戍协议】",
      "date": "2026-03-20",
      "url": "https://www.bilibili.com/video/BV1LZAEzTEfz/",
      "author": "黑蓑影卫攻略组",
      "summary": "作者提供盟约Ban/Pick查询工具 https://arkrog.com/tool/autochess 。",
      "caution": "本次工具网页抓取超时；只核实视频简介中存在该指路，不保证工具目前可用。",
      "kind": "视频",
      "scope": "禁用 / 全体系 / 工具"
    },
    {
      "title": "【卫戍攻略#3】不屈不是区！如何加强终端输出？终极模拟教学 卡西米尔&阿戈尔篇",
      "date": "2026-04-06",
      "url": "https://www.bilibili.com/video/BV1eBSdBBEig/",
      "author": "黑蓑影卫攻略组",
      "summary": "终极模拟下卡西米尔、阿戈尔及不屈的后续教学。",
      "caution": null,
      "kind": "视频",
      "scope": "卡西米尔 / 阿戈尔 / 终极 / 3/27更新后"
    },
    {
      "title": "【卫戍攻略#4】什么叫叠到999层反而亏输出？终极模拟教学 炎&拉特兰篇",
      "date": "2026-04-17",
      "url": "https://www.bilibili.com/video/BV1nrdqBLERz/",
      "author": "黑蓑影卫攻略组",
      "summary": "较新的终极模拟炎、拉特兰专题，标题明确讨论满999层反而亏输出。",
      "caution": "标题不能单独证明限伤算法；算法请引用仓库研究文档与本地代码。",
      "kind": "视频",
      "scope": "炎 / 拉特兰 / 终极 / 限伤 / 3/27更新后"
    },
    {
      "title": "惊天萨谢！这点层数就能爆杀终极隐秘了？",
      "date": "2026-04-09",
      "url": "https://www.bilibili.com/video/BV1LLDJBrEsd/",
      "author": "作者名本次搜索结果未完整返回",
      "summary": "作者提出缪尔赛思、本家主C转谢、银灰或初雪构成谢拉格外挂，利用投资人和买卖雪猎、灵知补层。",
      "caution": "作者在简介明确有部分其他阵营尚未测试；网站只把萨谢/叙谢作为实测分支外链，不泛化所有体系。",
      "kind": "视频",
      "scope": "谢拉格 / 萨尔贡 / 双修 / 进阶"
    },
    {
      "title": "官方下半期更新",
      "date": "2026-03-14",
      "url": "https://ak.hypergryph.com/news/5114",
      "author": "明日方舟运营组",
      "summary": "下半期新增叙拉古、卡西米尔、绝技、奥术、独行；炎新增9人双炎佑，精准、坚守、突袭、协防等重做。2025年11月上半期攻略的阵容思路与阈值不应直接照搬。",
      "caution": "",
      "kind": "官方更新",
      "scope": "版本边界与适用性"
    },
    {
      "title": "官方第二阶段更新",
      "date": "2026-03-27",
      "url": "https://ak.hypergryph.com/news/8584",
      "author": "明日方舟运营组",
      "summary": "新增终极模拟，银灰、伺夜、空弦、卡涅利安、雷蛇预设及四名策略；调整多名叠层干员等阶/特质、远见/奇迹/投资人阈值、异客盟约与录武官。3月15–26日教程应标为下半期早期思路，实机数值以使用版本为准。",
      "caution": "",
      "kind": "官方更新",
      "scope": "版本边界与适用性"
    },
    {
      "title": "Stronghold-Protocol移植版README",
      "date": "2026-10-19查阅",
      "url": "https://github.com/sganggs/Stronghold-Protocol",
      "author": "sganggs",
      "summary": "sganggs/Stronghold-Protocol为非官方同人浏览器复刻，README当前标0.3.1，单人或1–4人合作、112名可招募干员、23盟约。作者明确少数规则仍按推断实现。原版视频只可指导运营，移植版阈值、技能自动释放与修复情况应以仓库对应版本数据及玩法指南为准。",
      "caution": "",
      "kind": "仓库",
      "scope": "版本边界与适用性"
    },
    {
      "title": "玩法指南",
      "date": "2026-10-19查阅",
      "url": "https://github.com/sganggs/Stronghold-Protocol/blob/c9d804f470b8d7422ae04eb66faf671cef21ad52/docs/PLAYING.md",
      "author": "sganggs/Stronghold-Protocol",
      "summary": "资金跨回合清空（坎诺特例外）、三连晋升、装备锁定、共用卡池、禁用与调和等移植版行为。",
      "caution": "需以使用中的代码版本核查",
      "kind": "仓库",
      "scope": "移植版规则"
    },
    {
      "title": "Research index",
      "date": "2026-10-19查阅",
      "url": "https://github.com/sganggs/Stronghold-Protocol/blob/c9d804f470b8d7422ae04eb66faf671cef21ad52/docs/research/00-INDEX.md",
      "author": "sganggs/Stronghold-Protocol",
      "summary": "区分DATA/VERIFIED/ASSUMED；文档Addendum优先；同盟14回合、独立标准9回合；层数999封顶；领袖单次伤害>=300000取消；隐藏核心单人激活层数>350、同盟总和>1200，且生命>1。以上若网站展示，仍应以本地代码版本核查。",
      "caution": "需以使用中的代码版本核查",
      "kind": "仓库",
      "scope": "移植版规则"
    },
    {
      "title": "盟约研究",
      "date": "2026-10-19查阅",
      "url": "https://github.com/sganggs/Stronghold-Protocol/blob/c9d804f470b8d7422ae04eb66faf671cef21ad52/docs/research/02-bonds.md",
      "author": "sganggs/Stronghold-Protocol",
      "summary": "所有23盟约与叠层来源；本次直接抓取失败，但Research index明确列出该文件，可交由本地源码核查。",
      "caution": "需以使用中的代码版本核查",
      "kind": "仓库",
      "scope": "移植版规则"
    },
    {
      "title": "干员研究",
      "date": "2026-10-19查阅",
      "url": "https://github.com/sganggs/Stronghold-Protocol/blob/c9d804f470b8d7422ae04eb66faf671cef21ad52/docs/research/03-operators.md",
      "author": "sganggs/Stronghold-Protocol",
      "summary": "Research index列出的正确文件名（不是05-operators）；干员特质与等阶应由本地数据生成。",
      "caution": "需以使用中的代码版本核查",
      "kind": "仓库",
      "scope": "移植版规则"
    },
    {
      "title": "官方限伤研究",
      "date": "2026-10-19查阅",
      "url": "https://github.com/sganggs/Stronghold-Protocol/blob/c9d804f470b8d7422ae04eb66faf671cef21ad52/docs/research/11-limits-official.md",
      "author": "sganggs/Stronghold-Protocol",
      "summary": "Research index指出上限是单次>=30万对领袖伤害整次取消，而非截为30万；仅限领袖与对应阶段。",
      "caution": "需以使用中的代码版本核查",
      "kind": "仓库",
      "scope": "移植版规则"
    }
  ]
};
