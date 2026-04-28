import { Member, ItineraryDay, Flight, Hotel } from '../types';

export const MEMBERS: Member[] = [
  {
    id: 'linlin',
    name: '琳琳',
    role: '总编导 / 美学担当',
    desc: '捕捉每一个光影瞬间，负责所有美照产出，也是大家的穿搭顾问。',
    color: '#FFD5D5',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Aria'
  },
  {
    id: 'xiaoli',
    name: '小李',
    role: '执行导演 / 攻略机器',
    desc: '精准控时，人肉导航，迷路是不可能的，这辈子都不可能迷路。',
    color: '#E3F2FD',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Felix'
  },
  {
    id: 'chichi',
    name: '吃吃',
    role: '美食顾问 / 干饭之王',
    desc: '味蕾雷达，能精准定位方圆五公里内最好吃的 Carbonara。',
    color: '#FFF3E0',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Lily'
  },
  {
    id: 'jiego',
    name: '杰哥',
    role: '后勤保障 / 首席气氛官',
    desc: '搬箱担当，全能守护者，主打一个稳重且幽默。',
    color: '#E0F2F1',
    avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Jack'
  }
];

export const FLIGHTS: Flight[] = [
  { type: 'go', route: '上海直飞/转机 -> 罗马', no: 'CA1590 + CA939' },
  { type: 'back', route: '米兰 -> 温州 -> 上海', no: 'CA838 + CA8568' }
];

export const HOTELS: Hotel[] = [
  { name: 'Rome: 圣玛丽亚民宿', address: 'Via Volturno, 40', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Volturno+40+Rome' },
  { name: 'Florence: 文艺复兴公寓', address: 'Via di Mezzo, 46', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+di+Mezzo+46+Florence' },
  { name: 'Milan: Max Brown 潮流酒店', address: 'Via Lentasio, 3', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Max+Brown+Hotel+Missori+Milan' }
];

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    date: '4.29',
    city: 'Roma',
    weather: '☁️ 13-22°C',
    title: '永恒之城的初印象',
    bgImage: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800',
    transport: '机场快线直达 Termini 火车站。',
    food: {
      main: ['Trattoria dell\'Omo: 意式肉酱面世家'],
      snack: ['Suppli Roma: 芝士拉丝赛高']
    },
    details: [
      '✈️ 开启 10 小时长途飞行，记得穿最舒服的运动裤',
      '🛬 傍晚落地，呼吸第一口地中海微咸的空气',
      '🏨 入住 Termini 旁的民宿，放下行李开启探索',
      '🍝 在街角小馆，用第一口 Amatriciana 唤醒味蕾'
    ],
    attractions: [
      {
        name: '罗马 Termini 地区',
        intro: '这里是罗马的心脏地带，交通枢纽，街道充满了历史感与生活气息。',
        play: '漫步老城区，感受日落后的罗马街景，路边有很多可爱的报亭和花店。',
        feature: '典型的欧式火车站建筑，周边隐藏着许多地道的小餐馆。'
      },
      {
        name: '圣母大殿',
        intro: '位于 Termini 附近，是罗马四大巴西利卡之一，拥有壮丽的金色天顶。',
        play: '静静坐在长椅上感受宁静氛围，观察天顶精美的马赛克装饰。',
        feature: '保存完美的古罗马廊柱与中世纪马赛克艺术的完美结合。'
      }
    ],
    memberComment: {
      member: '小李',
      text: '落地后第一件事：买好后面几天的车票，效率就是金钱！'
    }
  },
  {
    day: 2,
    date: '4.30',
    city: 'Roma',
    weather: '☀️ 14-23°C',
    title: '梵蒂冈：在神迹下屏息',
    bgImage: 'https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&w=800',
    transport: '地铁 Linea A 转步行。',
    food: {
      main: ['Cantina e Cucina: 罗马必吃第一名 Carbonara'],
      dessert: ['Giolitti: 奥黛丽赫本同款开心果冰淇淋'],
      drink: ['Tazza d\'Oro: 必点咖啡冰沙 Granita']
    },
    details: [
      '🏛 梵蒂冈博物馆：在西斯廷教堂仰望米开朗基罗',
      '🏰 圣天使堡：在屋顶看台伯河缓缓流过',
      '⛲ 漫步纳沃纳广场：在这里发呆一整个下午',
      '🍦 寻味 Giolitti：在万神殿旁享受夏日清凉'
    ],
    attractions: [
      {
        name: '梵蒂冈博物馆',
        intro: '世界上最伟大的艺术殿堂之一，珍藏着无数文艺复兴时期的瑰宝。',
        play: '一定要看西斯廷教堂的穹顶画，还有那个著名的螺旋楼梯（拍照必去）。',
        feature: '拉斐尔画室与地图廊，金碧辉煌，震撼人心。'
      },
      {
        name: '纳沃纳广场',
        intro: '罗马最美、最热闹的广场，以其精美的巴洛克喷泉而闻名。',
        play: '坐在喷泉边听街头艺人弹琴，享受下午的慢时光。',
        feature: '贝尼尼设计的“四河喷泉”，水声与欢笑交织。'
      }
    ],
    memberComment: {
      member: '琳琳',
      text: '博物馆的螺旋楼梯超级出片，记得提前把相机充足电！'
    }
  },
  {
    day: 3,
    date: '5.1',
    city: 'Roma',
    weather: '☀️ 14-23°C',
    title: '废墟中的帝国回响',
    bgImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800',
    transport: '地铁 Linea B (Colosseo站) -> 8路电车。',
    food: {
      main: ['Grazia & Graziella: 巷子里的跳口小牛肉', 'Tonnarello: 用平底锅端上来的快乐'],
      snack: ['Porchetta: 老城区脆皮烤乳猪三明治']
    },
    details: [
      '🏟 斗兽场：感受两千年前的呼喊与荣耀',
      '⛲ 许愿池：背对喷泉投下一枚硬币，约定再次重逢',
      '🚋 坐上古老的8路电车，去 Trastevere 寻找最热闹的夜晚',
      '🍷 混入当地人的市井生活，举起 Aperol Spritz 碰杯'
    ],
    attractions: [
      {
        name: '古罗马斗兽场',
        intro: '罗马帝国的标志性建筑，见证了古代角斗士的历史。',
        play: '在外围拍全景（尤其是马路对面的高台），或者走进内部看地下的迷宫。',
        feature: '残缺的美感，傍晚时分的金光洒在石材上极其迷人。'
      },
      {
        name: '特雷维喷泉 (许愿池)',
        intro: '全球最美的喷泉，罗马必到打卡点。',
        play: '背对喷泉右侧肩膀向后抛硬币，据说抛一枚能重回罗马。',
        feature: '精雕细琢的波塞冬群雕，白色大理石与清澈泉水的冷调之美。'
      }
    ],
    memberComment: {
      member: '杰哥',
      text: '许愿池人多到爆炸，大家一定要把背包背在前面，安全第一！'
    }
  },
  {
    day: 4,
    date: '5.2',
    city: 'Toscana',
    weather: '⛅ 11-21°C',
    title: '托斯卡纳：艳阳下的田野',
    bgImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop',
    transport: '全程包车游览奥尔恰谷。',
    food: {
      main: ['Pienza: 炖野猪肉意面 Cinghiale', '羊奶酪: 品尝不同熟成时间的惊喜'],
      dessert: ['锡耶纳 Nannini: 满载果仁的千年传统']
    },
    details: [
      '⛪ 离开喧嚣，深入奥尔恰谷寻找“小耳朵教堂”',
      '🌳 在丝柏树大道奔跑，拍一张电影质感的大片',
      '🏘 漫步皮恩扎，闻着满城的羊奶酪香气',
      '🌅 抵达佛罗伦萨，在圣安布罗乔的老公寓安顿'
    ],
    attractions: [
      {
        name: '奥尔恰谷 (Val d\'Orcia)',
        intro: '被列入世遗的山谷，拥有托斯卡纳最经典的田园风景。',
        play: '在丝柏树路段疯狂连拍，或者在起伏的山丘间静静看云影掠过。',
        feature: '孤独的柏树、金黄的草地与湛蓝的天空构成的完美调色盘。'
      },
      {
        name: '皮恩扎',
        intro: '教皇皮乌斯二世精心打造的“理想之城”。',
        play: '穿梭在“爱情路”和“好运路”之间，品尝这里著名的 Pecorino 羊奶酪。',
        feature: '整座小镇几乎保留了纯粹的文艺复兴式样。'
      }
    ],
    memberComment: {
      member: '小李',
      text: '山谷里没有遮挡，紫外线超强，防晒霜记得每两小时补一次！'
    }
  },
  {
    day: 5,
    date: '5.3',
    city: 'Firenze',
    weather: '☀️ 12-22°C',
    title: '翡冷翠：艺术与肉食的狂欢',
    bgImage: 'https://images.unsplash.com/photo-1541088966844-60c5115103c0?q=80&w=800&auto=format&fit=crop',
    transport: '翡冷翠全天步行。',
    food: {
      main: ['Trattoria Zà Zà: 1kg T骨牛排！(人生必吃系列)', '牛肚包: 加上秘制绿酱简直绝了'],
      snack: ['Da Rocco: 圣安布罗乔 market 里的平民英雄', '帕尼尼: 意式三明治的巅峰'],
      dessert: ['Vivoli: 这里有全意大利最好吃的奶油']
    },
    details: [
      '⛪ 圣母百花大教堂：凝视世界上最美的红屋顶',
      '🖼 乌菲兹美术馆：亲自确认波提切利笔下的维纳斯',
      '🌅 守候米开朗基罗广场的日落，看整座城市染成金黄色',
      '🥩 Zà Zà 狂欢夜：1kg 牛排不仅是食物，更是一种态度'
    ],
    attractions: [
      {
        name: '圣母百花大教堂',
        intro: '佛罗伦萨的标志，文艺复兴建筑的巅峰之作。',
        play: '仰望那巨大的红色圆顶，或者在旁边的露天咖啡馆看人来人往。',
        feature: '白、绿、粉红大理石拼接的外墙，华丽到令人失语。'
      },
      {
        name: '米开朗基罗广场',
        intro: '俯瞰佛罗伦萨全景的最佳观景台。',
        play: '在台阶上坐下，听着音乐喝着啤酒，等待日落时分金色的余晖。',
        feature: '翡冷翠的晚霞，是一生中难忘的瞬间。'
      }
    ],
    memberComment: {
      member: '吃吃',
      text: '牛排一定要点熟度 3-5 分（Medium/Medium Rare），口感绝杀！'
    }
  },
  {
    day: 6,
    date: '5.4',
    city: 'Milano',
    weather: '⛅ 12-20°C',
    title: '米兰：在时尚之巅穿行',
    bgImage: 'https://images.unsplash.com/photo-1520605670754-c91e9f730ac5?q=80&w=800&auto=format&fit=crop',
    transport: '由翡冷翠乘高铁赴米兰中央车站。',
    food: {
      main: ['Navigli Aperitivo: 运河边的美酒与免费自助', 'Milanese 烩饭: 藏红花的奢华金色'],
      dessert: ['Gilli: 值得专门坐火车去吃的提拉米苏']
    },
    details: [
      '🛍 在翡冷翠老城区寻找手工皮具，开启购物模式',
      '🚄 高铁穿越亚平宁半岛，窗外是飞逝的意式风情',
      '🏨 入住米兰最潮的 Max Brown 酒店，感受摩登气息',
      '🍹 在纳威利运河边，学着当地人那样端起一杯 Spritz'
    ],
    attractions: [
      {
        name: '纳威利运河 (Navigli)',
        intro: '米兰最具波希米亚气息的运河区，生活节奏轻快。',
        play: '在傍晚加入这里庞大的 Aperitivo（餐前酒）大军，买一杯酒就能吃自选自助。',
        feature: '波光粼粼的运河、古董店与熙熙攘攘的人潮。'
      },
      {
        name: '斯福尔扎城堡',
        intro: '米兰曾经的统治者斯福尔扎家族的府邸，宏大的红色石砖堡垒。',
        play: '在城堡庭院里散步，或者去后方的森皮奥内公园野餐发呆。',
        feature: '厚重的城墙、护城河以及达芬奇参与设计的防御工事。'
      }
    ],
    memberComment: {
      member: '琳琳',
      text: '米兰就是天生的秀场，今天大家都要穿得支棱起来！'
    }
  },
  {
    day: 7,
    date: '5.5',
    city: 'Milano',
    weather: '🌦️ 11-20°C',
    title: '最后的漫步与离别信物',
    bgImage: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=800&auto=format&fit=crop',
    transport: '全天步行，傍晚乘快线前往机场。',
    food: {
      main: ['Trattoria Milanese: 传统米兰大牛排', 'Luini: 被全米兰偏爱的油炸批萨饺'],
      snack: ['Luini Panzerotti: 路过千万不能错过的排队神店']
    },
    details: [
      '⛪ 米兰大教堂：一定要登顶！在尖顶石林中穿行',
      '🏷 埃马努埃莱二世长廊：在这里踩踩牛魔王的蛋蛋（好运！）',
      '🛍 最后一波药妆与精品扫货，把意大利的香气带回家',
      '✈️ 办理退税，在免税店完成最后的冲刺，22:10 准时返程'
    ],
    attractions: [
      {
        name: '米兰大教堂 (Duomo)',
        intro: '世界最大的哥特式教堂之一，拥有惊人的135根尖顶。',
        play: '必须买票登顶，在屋顶的白色大理石森林中穿行，这种体验绝无仅有。',
        feature: '如火焰般升腾的尖顶和数以千计的雕像，鬼斧神工。'
      },
      {
        name: '埃马努埃莱二世长廊',
        intro: '“米兰的客厅”，奢华的玻璃穹顶购物长廊。',
        play: '抬头看圆顶的壁画，或者买一份 Luini 油炸批萨饺边走边吃。',
        feature: '地面上精美的马赛克拼图和世界顶级的奢侈品橱窗。'
      }
    ],
    memberComment: {
      member: '杰哥',
      text: '行李箱塞满了吗？没关系，我还有最后一个空位帮你们扛！'
    }
  }
];
