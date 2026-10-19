import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
const read=p=>JSON.parse(readFileSync(p,'utf8').replace(/^\uFEFF/,''));
mkdirSync('research',{recursive:true});
for(const kind of ['audit','research'])copyFileSync(`../stronghold-${kind}.json`,`research/${kind}.json`);
const audit=read('research/audit.json'),research=read('research/research.json');
const symbols=['炎','砂','锤','雪','铳','潮','狼','骑'];
const clean=s=>s.replace(/<\d+>/g,'').replace(/<([^>]+)>/g,'【$1】');
const sources=research.sources.map(s=>({...s,url:s.url.replace('/blob/master/',`/blob/${audit.commit}/`)}));
sources[0].summary='杜遥夜策略；作者以“火陈、烛煌”为主C，“夕、星源”为叠层核心。通常第3/5/7/9回合升级（六本视局势），优先6炎，再补远见、奇迹、投资人；投资人成型后关注录武官、诗怀雅、焰尾等“获得时”收益。';
sources[0].caution='3/27更新前教程。“火陈”对应假日威龙陈，在移植版可通过自选加入并带炎盟约；并非默认招募预设。“星源”简称需结合视频画面确认，本站不直接认定具体形态。当前预设溯光星源为灵巧/奥术成长件。升本节奏随血量与来牌调整。';
sources[1].summary='瑕光为核心；前期先3卡西米尔、2突袭，再考虑远见、奇迹、投资人。作者常用第2/4/7/9回合升级，六本视情况；优先利用焰尾的获得时收益。';
const factions=audit.factions.map((f,i)=>({...Object.fromEntries(['id','name','tagline','trigger','core','plan','pitfalls','sourcePaths','availability'].map(k=>[k,f[k]])),symbol:symbols[i],thresholds:f.effects.join('；'),summary:f.plan[0].replace('推导：',''),coreDetails:f.keyOperators.map(o=>`${o.name} · ${o.tier}阶 · ${clean(o.traits[0]?.description||'')}`),teaching:sources.filter(s=>s.kind==='视频'&&s.scope.split(' / ').includes(f.name)).slice(0,3)}));
factions[0].plan.push('可选炎＋奥术路线（当前规则推导）：夕同时服务两种成长；溯光星源补奥术层数，烛煌可承担输出。视频提到的假日威龙陈可通过移植版自选加入，带炎盟约；不应在默认招募预设中盲搜。3月教学的固定升本回合仅作参考。');
factions[0].sourcePaths.push('data/backups.json','server/match/player/diy.js','server/sim/content/kits/ops/op-chen2.js');
audit.mechanics.find(m=>m.id==='hit-limit').sourcePaths.push('server/sim/damage.js');
const operators=factions.flatMap(f=>audit.factions.find(x=>x.id===f.id).keyOperators.map(o=>({name:o.name,faction:f.name,factionId:f.id,role:`${o.tier}阶 / ${o.skill}。${clean(o.traits[0]?.description||'')}`})));
const rounds=[
{number:'00',phase:'确认本局信息 / 开局',title:'先看禁用、敌人，再选策略',points:['核心盟约被禁会影响卡池，先确认想走的体系能否完成；标准模式不能照搬包含阿戈尔、拉特兰或卡西米尔的高难度阵容。','同盟与队友尽量分工不同体系，减轻公共卡池的竞争；看到飞行或隐匿敌人预告，提前留出对应输出或对策位置。']},
{number:'01',phase:'开局 → 启动',title:'先激活成长，再追求豪华终端',points:['围绕来牌凑起核心最低档，留住真正负责叠层的干员；不要把高等阶当作唯一选牌标准。','普通情况下资金不跨回合保留。每轮安排好招募、升级和刷新，不按其他自走棋的“存钱吃利息”习惯操作。','购买或刷新之前想清楚：这一笔能提高当前战力、接近晋升，还是扩大后续成长？血量危险时先补即时战力。']},
{number:'02',phase:'中期 / 核心成长',title:'升级是在买卡池，也是在延后战力',points:['升级解锁更高等阶，同时吃掉本轮购买资金。先检查关键阶是否真的有需要的核心，再判断本轮能否安全升级。','3月炎奥术视频常用3/5/7/9回合升级，突袭卡西视频常用2/4/7/9；这是两种作者模板，不能互换为所有对局的硬规则。','晋升高阶招募能帮助转型。整备区留意远见、奇迹、投资人的启动数量；临时整备区不参与其计数。']},
{number:'03',phase:'休整期结束前 / 每轮检查',title:'把“会叠层”变成“这一轮真能叠层”',points:['检查休整期结算件是否仍在正确位置、对应盟约是否激活。不同特质有“获得时”“战斗中”“休整期结束时”等不同触发时机。','阿戈尔检查吞噬朝向和身前目标；谢拉格检查冻结覆盖；拉特兰检查弹药干员与莫斯提马的相对位置。','确认没有闲置资金，装备是否给对终端，召唤物是否摆好；不要只看盟约人数而忘记对空、阻挡和治疗。']},
{number:'04',phase:'终局 / 最终攻势',title:'从成长阵容切换到输出阵容',points:['一般最终攻势在第14回合；独立标准为第9回合。进领袖战后，战斗叠层不再像普通个人战斗那样继续滚动。','需要以现有层数支撑持续输出与生存。对最终攻势/隐秘核心领袖，单次伤害达到30万会整次作废，过高的单次倍率并不总是收益。','险境及以上胜利后：整队激活层数总和严格大于1200（独立严格大于350），且LP大于1，才进入隐秘核心。']}
];
const GUIDE={schema:1,version:audit.version,commit:audit.commit,checkedAt:'2026-10-19',factions,operators,rounds,mechanics:audit.mechanics.map(m=>({title:m.name,text:m.id==='hit-limit'?'最终攻势/隐秘核心领袖：最终单次伤害向上取整后≥300000，整次作废。高层数时关注倍率过高导致的限伤；多次适量伤害更容易避开阈值。':m.text,sourcePaths:m.sourcePaths})),addons:audit.addons.map(a=>({id:a.id,name:a.name,summary:a.summary,members:a.members.map(m=>m.name),disabledInStandard:a.disabledInStandard,sourcePaths:a.sourcePaths})),sources};
writeFileSync('dist/data.js','// 攻略数据与界面独立维护；修改后更新版本、日期与出处。\nconst GUIDE = '+JSON.stringify(GUIDE,null,2)+';\n','utf8');
console.log(JSON.stringify({factions:factions.length,operators:operators.length,sources:sources.length,addons:GUIDE.addons.length,version:GUIDE.version}));
