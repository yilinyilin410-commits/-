import { Member, ItineraryDay, Flight, Hotel } from '../types';

export const MEMBERS: Member[] = [
  {
    id: 'linlin',
    name: '琳琳',
    role: '总编导 / 人形机位',
    desc: '负责美美拍照和行程提醒（如教堂穿搭）。',
    color: '#FFB7C5',
    avatar: '👩🏻‍🎨'
  },
  {
    id: 'xiaoli',
    name: '小李',
    role: '人肉GPS / 攻略机器',
    desc: '负责交通引导和集合提醒。',
    color: '#BDEAD8',
    avatar: '👨🏻‍💻'
  },
  {
    id: 'chichi',
    name: '吃吃',
    role: '干饭第一名 / 碳水终结者',
    desc: '负责餐厅安利和点菜。',
    color: '#FFD6A5',
    avatar: '👩🏻‍🍳'
  },
  {
    id: 'jiego',
    name: '杰哥',
    role: '体力担当 / 气氛组组长',
    desc: '负责带动气氛和体力活。',
    color: '#E9FBF3',
    avatar: '👨🏻‍🎤'
  }
];

export const FLIGHTS: Flight[] = [
  { type: 'go', route: '上海 -> 北京 -> 罗马', no: 'CA1590 + CA939' },
  { type: 'back', route: '米兰 -> 上海', no: 'CA838' }
];

export const HOTELS: Hotel[] = [
  { name: '罗马民宿', address: 'Via Volturno, 40', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Volturno+40+Rome' },
  { name: '佛罗伦萨民宿', address: 'Via di Mezzo, 46', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+di+Mezzo+46+Florence' },
  { name: '米兰酒店', address: 'Max Brown Hotel Missori', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Max+Brown+Hotel+Missori+Milan' }
];

export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    date: '4.29',
    city: '罗马',
    weather: '☁️ 13-22°C',
    title: '跨越亚欧的初见',
    bgImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop',
    transport: '落地搭乘 Leonardo Express 机场快线，32分钟直达 Termini。从此步行5分钟即达住宿。',
    food: {
      main: ['Trattoria dell\'Omo: 罗马肉酱面 (Amatriciana)'],
      snack: ['Suppli (炸米团): 芝士拉丝必备']
    },
    details: [
      '08:55 虹桥出发，经北京转机 18:30 落地罗马。',
      '安顿行李后，直接下楼开启第一餐。'
    ],
    memberComment: {
      member: '小李',
      text: '长途飞行后披一件薄风衣，温差大别感冒啦！'
    }
  },
  {
    day: 2,
    date: '4.30',
    city: '罗马',
    weather: '☀️ 14-23°C',
    title: '神圣之巅与百年经典',
    bgImage: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1000&auto=format&fit=crop',
    transport: '地铁 Linea A 至 Ottaviano 站；下午全靠步行。',
    food: {
      main: ['Cantina e Cucina: 浓郁 Carbonara'],
      dessert: ['Giolitti: 百年开心果 Gelato', 'Maritozzo: 鲜奶油面包'],
      drink: ['Tazza d\'Oro: 咖啡冰沙配奶油']
    },
    details: [
      '梵蒂冈博物馆 (09:00预约) -> 西斯廷教堂 -> 圣彼得大教堂。',
      '圣天使堡 -> 台伯河 -> 纳沃纳广场 -> 万神殿。'
    ],
    memberComment: {
      member: '琳琳',
      text: '进教堂记得遮肩膀膝盖，别穿吊带哦！👗'
    }
  },
  {
    day: 3,
    date: '5.1',
    city: '罗马',
    weather: '☀️ 14-23°C',
    title: '帝国印记与市井狂欢',
    bgImage: 'https://images.unsplash.com/photo-1552432552-06c099da0473?q=80&w=1000&auto=format&fit=crop',
    transport: '地铁 Linea B (Colosseo)；傍晚 8路电车至 Trastevere。',
    food: {
      main: ['Grazia & Graziella: 跳口小牛肉', 'Tonnarello: 平底锅意面'],
      snack: ['Porchetta: 意式烤乳猪三明治']
    },
    details: [
      '古罗马斗兽场 -> 古罗马广场 -> 帕拉蒂尼山。',
      '特雷维喷泉 (许愿池) -> Trastevere 烟火气漫步。'
    ],
    memberComment: {
      member: '杰哥',
      text: '今天是劳动节，人超多，穿那双最舒服的鞋！💪'
    }
  },
  {
    day: 4,
    date: '5.2',
    city: '托斯卡纳',
    weather: '⛅ 11-21°C',
    title: '山谷、丝柏与纯粹野味',
    bgImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
    transport: '全程包车。穿越奥尔恰谷，抵达佛罗伦萨。',
    food: {
      main: ['Trattoria La Buca delle Fate: 炖野猪肉'],
      snack: ['Pecorino (羊奶酪): 皮恩扎特色'],
      dessert: ['Panforte (果脯糕): 坚果力量']
    },
    details: [
      '奥尔恰谷 -> 小耳朵教堂 -> 丝柏路。',
      '理想之城皮恩扎 -> 锡耶纳田野广场。'
    ],
    memberComment: {
      member: '小李',
      text: '山谷风大，下车拍照防风外套一定要穿！🌬️'
    }
  },
  {
    day: 5,
    date: '5.3',
    city: '佛罗伦萨',
    weather: '🌤️ 12-22°C',
    title: '文艺复兴与肉食朝圣',
    bgImage: 'https://images.unsplash.com/photo-1541088966844-60c5115103c0?q=80&w=1000&auto=format&fit=crop',
    transport: '全天步行。',
    food: {
      main: ['Trattoria Zà Zà: 1kg T骨大牛排'],
      snack: ['Da Rocco: 牛肚包 (Lampredotto)', 'I\' Girone De\' Ghiotti: 帕尼尼'],
      dessert: ['Gelateria Vivoli: 老字号冰淇淋']
    },
    details: [
      '圣母百花大教堂 -> 圣安布罗乔市场。',
      '乌菲兹美术馆 (14:00预约) -> 米开朗基罗广场落日。'
    ],
    memberComment: {
      member: '吃吃',
      text: '今晚牛排 1kg 起，我的碳水之魂燃起来了！🥩'
    }
  },
  {
    day: 6,
    date: '5.4',
    city: '米兰',
    weather: '⛅ 12-20°C',
    title: '高能转场与摩登初探',
    bgImage: 'https://images.unsplash.com/photo-1520116468419-955009859da5?q=80&w=1000&auto=format&fit=crop',
    transport: '17:00 高铁 Firenze -> Milano Centrale；地铁 M3 线至 Missori。',
    food: {
      main: ['Navigli Aperitivo: 运河自助餐'],
      dessert: ['Caffè Gilli: 正宗提拉米苏']
    },
    details: [
      '佛罗伦萨补漏伴手礼 -> 高铁转场。',
      'Navigli 运河区微醺夜生活。'
    ],
    memberComment: {
      member: '琳琳',
      text: '进米兰就是进秀场了，风衣穿起来，气质要有！🧥'
    }
  },
  {
    day: 7,
    date: '5.5',
    city: '米兰',
    weather: '🌦️ 11-20°C',
    title: '摩登收官与踏上归途',
    bgImage: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=1000&auto=format&fit=crop',
    transport: '全天步行；18:30 机场快线 Malpensa Express 赴机场。',
    food: {
      main: ['Trattoria Milanese: 藏红花烩饭 & 炸小牛排'],
      snack: ['Panzerotti Luini: 爆浆披萨饺']
    },
    details: [
      '米兰大教堂 (登顶) -> 埃马努埃莱二世长廊。',
      '黄金四角区血拼。22:10 起飞离境。'
    ],
    memberComment: {
      member: '杰哥',
      text: '最后一天血拼悠着点，行李别超重，我来扛！💼'
    }
  }
];
