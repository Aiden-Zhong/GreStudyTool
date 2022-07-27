const words_array = [
  {
    "English": "divulge",
    "Chinese": "泄露"
  },
  {
    "English": "inadvertent",
    "Chinese": "粗心的, 不留意的"
  },
  {
    "English": "panegyric",
    "Chinese": "赞文, 赞美"
  },
  {
    "English": "draconian",
    "Chinese": "极其严苛的"
  },
  {
    "English": "hodgepodge",
    "Chinese": "混杂, 混合物"
  },
  {
    "English": "incontrovertible",
    "Chinese": "不容质疑的"
  },
  {
    "English": "impartial",
    "Chinese": "公正的, 不偏不倚的"
  },
  {
    "English": "endemic",
    "Chinese": "地方性的, 流行的"
  },
  {
    "English": "minuscule",
    "Chinese": "微小的"
  },
  {
    "English": "lucrative",
    "Chinese": "盈利的, 赚钱的"
  },
  {
    "English": "compensate",
    "Chinese": "弥补"
  },
  {
    "English": "discursive",
    "Chinese": "杂乱无章的"
  },
  {
    "English": "presuppose",
    "Chinese": "假定"
  },
  {
    "English": "intermediary",
    "Chinese": "（作为）中间人(的)"
  },
  {
    "English": "derogate",
    "Chinese": "贬低"
  },
  {
    "English": "overbearing",
    "Chinese": "专横的，压倒性的"
  },
  {
    "English": "zealous",
    "Chinese": "对（某人或偶像）狂热的"
  },
  {
    "English": "extraneous",
    "Chinese": "不重要的, 不相关的"
  },
  {
    "English": "rehash",
    "Chinese": "（没有实质改变地)重提"
  },
  {
    "English": "perfunctory",
    "Chinese": "敷衍的，草率的"
  },
  {
    "English": "compound",
    "Chinese": "混合, 合成"
  },
  {
    "English": "envy",
    "Chinese": "嫉妒"
  },
  {
    "English": "defensive",
    "Chinese": "被动防守的, 防御的"
  },
  {
    "English": "unbounded",
    "Chinese": "不受限制的, 无限的"
  },
  {
    "English": "specious",
    "Chinese": "似是而非的，假的"
  },
  {
    "English": "aimless",
    "Chinese": "漫无目的的"
  },
  {
    "English": "ingenuous",
    "Chinese": "纯朴的, 真诚的"
  },
  {
    "English": "intrinsic",
    "Chinese": "核心的, 内在的"
  },
  {
    "English": "inevitable",
    "Chinese": "不可避免的, 必然的"
  },
  {
    "English": "intransigent",
    "Chinese": "不妥协的, 固执的"
  },
  {
    "English": "detached",
    "Chinese": "不受感情影响的, 公正的"
  },
  {
    "English": "inveterate",
    "Chinese": "根深蒂固的"
  },
  {
    "English": "backhanded",
    "Chinese": "不直接的"
  },
  {
    "English": "affable",
    "Chinese": "和蔼可亲的"
  },
  {
    "English": "whimsy",
    "Chinese": "突发奇想"
  },
  {
    "English": "tenacious",
    "Chinese": "坚定的"
  },
  {
    "English": "sardonic",
    "Chinese": "嘲讽的, 讥笑的"
  },
  {
    "English": "skullduggery",
    "Chinese": "欺骗, 作假"
  },
  {
    "English": "legitimate",
    "Chinese": "合法的"
  },
  {
    "English": "plagiarize",
    "Chinese": "抄袭"
  },
  {
    "English": "disavow",
    "Chinese": "否认"
  },
  {
    "English": "deplete",
    "Chinese": "耗尽"
  },
  {
    "English": "ridicule",
    "Chinese": "嘲笑, 耻笑"
  },
  {
    "English": "undermine",
    "Chinese": "削弱"
  },
  {
    "English": "self-serving",
    "Chinese": "自私的"
  },
  {
    "English": "perishable",
    "Chinese": "易消亡的, 短暂的"
  },
  {
    "English": "capricious",
    "Chinese": "变化多端的"
  },
  {
    "English": "egotism",
    "Chinese": "自大"
  },
  {
    "English": "unqualified",
    "Chinese": "完全的"
  },
  {
    "English": "magisterial",
    "Chinese": "权威的"
  },
  {
    "English": "chauvinistic",
    "Chinese": "极端爱国的"
  },
  {
    "English": "sleek",
    "Chinese": "光滑的"
  },
  {
    "English": "astringent",
    "Chinese": "严厉的, 尖刻的"
  },
  {
    "English": "ambivalent",
    "Chinese": "（情感、态度）矛盾的"
  },
  {
    "English": "ameliorate",
    "Chinese": "改善, 提升"
  },
  {
    "English": "exemplar",
    "Chinese": "典型"
  },
  {
    "English": "grudge",
    "Chinese": "不愿给予或承认"
  },
  {
    "English": "sweeping",
    "Chinese": "广泛的"
  },
  {
    "English": "extirpate",
    "Chinese": "根除"
  },
  {
    "English": "parity",
    "Chinese": "平等"
  },
  {
    "English": "utilitarian",
    "Chinese": "  实用的"
  },
  {
    "English": "elicit",
    "Chinese": "引起"
  },
  {
    "English": "intoxicate",
    "Chinese": "使...陶醉, 沉醉"
  },
  {
    "English": "inchoate",
    "Chinese": "早期的"
  },
  {
    "English": "rebuff",
    "Chinese": "（粗鲁的）回复"
  },
  {
    "English": "construe",
    "Chinese": "理解"
  },
  {
    "English": "fallacy",
    "Chinese": "错误, 谬论"
  },
  {
    "English": "increment",
    "Chinese": "增长, 递增"
  },
  {
    "English": "deteriorate",
    "Chinese": "恶化"
  },
  {
    "English": "grandiose",
    "Chinese": "宏伟壮观的"
  },
  {
    "English": "truncate",
    "Chinese": "缩短"
  },
  {
    "English": "haphazard",
    "Chinese": "无序的, 凌乱的"
  },
  {
    "English": "quizzical",
    "Chinese": "好奇而疑惑的"
  },
  {
    "English": "provincial",
    "Chinese": "眼光狭隘的"
  },
  {
    "English": "insensitive",
    "Chinese": "漠视的, 不在乎的"
  },
  {
    "English": "shackle",
    "Chinese": "阻碍"
  },
  {
    "English": "cumbersome",
    "Chinese": "笨拙的"
  },
  {
    "English": "encomium",
    "Chinese": "赞美"
  },
  {
    "English": "decelerate",
    "Chinese": "减缓"
  },
  {
    "English": "revitalize",
    "Chinese": "使...复活"
  },
  {
    "English": "indisputable",
    "Chinese": "不容置疑的"
  },
  {
    "English": "roost",
    "Chinese": "栖息"
  },
  {
    "English": "corroborate",
    "Chinese": "佐证, 提供证据证明"
  },
  {
    "English": "proclivity",
    "Chinese": "倾向, 偏好"
  },
  {
    "English": "hysteria",
    "Chinese": "歇斯底里，情绪失控"
  },
  {
    "English": "speculate",
    "Chinese": "推测, 猜测"
  },
  {
    "English": "conducive",
    "Chinese": "有益的, 有帮助的"
  },
  {
    "English": "vexation",
    "Chinese": "烦恼"
  },
  {
    "English": "disdain",
    "Chinese": "蔑视, 鄙视"
  },
  {
    "English": "caterwaul",
    "Chinese": "发出难听的声音"
  },
  {
    "English": "efficacious",
    "Chinese": "有效果的"
  },
  {
    "English": "alienate",
    "Chinese": "疏远"
  },
  {
    "English": "analgesic",
    "Chinese": "止痛药"
  },
  {
    "English": "anatomize",
    "Chinese": "解剖"
  },
  {
    "English": "embargo",
    "Chinese": "贸易禁令"
  },
  {
    "English": "contemplate",
    "Chinese": "深入思考"
  },
  {
    "English": "dogmatic",
    "Chinese": "教条的"
  },
  {
    "English": "concrete",
    "Chinese": "真实的"
  },
  {
    "English": "equitable",
    "Chinese": "平等的, 公平的"
  },
  {
    "English": "fervent",
    "Chinese": "情感强烈的, 热烈的"
  },
  {
    "English": "alleviate",
    "Chinese": "减轻"
  },
  {
    "English": "contagious",
    "Chinese": "传染的,有感染力的"
  },
  {
    "English": "pedantic",
    "Chinese": "卖弄知识的，迂腐的"
  },
  {
    "English": "unwieldy",
    "Chinese": "体积庞大而笨重的"
  },
  {
    "English": "vociferous",
    "Chinese": "吵吵嚷嚷的"
  },
  {
    "English": "profess",
    "Chinese": "宣称"
  },
  {
    "English": "obeisance",
    "Chinese": "尊敬, 敬意"
  },
  {
    "English": "diffuse",
    "Chinese": "扩散"
  },
  {
    "English": "fulminate",
    "Chinese": "抨击, 辱骂"
  },
  {
    "English": "voluble",
    "Chinese": "健谈的, 话多的"
  },
  {
    "English": "sterling",
    "Chinese": "高质量的"
  },
  {
    "English": "surmount",
    "Chinese": "克服, 战胜"
  },
  {
    "English": "prying",
    "Chinese": "窥视的"
  },
  {
    "English": "inhibit",
    "Chinese": "抑制, 限制"
  },
  {
    "English": "censure",
    "Chinese": "指责"
  },
  {
    "English": "peripatetic",
    "Chinese": "巡游的"
  },
  {
    "English": "stringent",
    "Chinese": "非常严格的"
  },
  {
    "English": "dwindle",
    "Chinese": "减少, 下降"
  },
  {
    "English": "underrate",
    "Chinese": "低估"
  },
  {
    "English": "incursion",
    "Chinese": "侵入, 侵犯"
  },
  {
    "English": "pastiche",
    "Chinese": "【贬】模仿作品"
  },
  {
    "English": "dishearten",
    "Chinese": "使...士气低落"
  },
  {
    "English": "emulate",
    "Chinese": "模仿，通过模仿而超越"
  },
  {
    "English": "adduce",
    "Chinese": "引用…证明"
  },
  {
    "English": "emblematic",
    "Chinese": "象征的, 代表的"
  },
  {
    "English": "indict",
    "Chinese": "指控"
  },
  {
    "English": "discontinue",
    "Chinese": "终止"
  },
  {
    "English": "wary",
    "Chinese": "谨慎小心的"
  },
  {
    "English": "opprobrium",
    "Chinese": "辱骂"
  },
  {
    "English": "aesthetic",
    "Chinese": "美学的"
  },
  {
    "English": "expedite",
    "Chinese": "加速, 加快"
  },
  {
    "English": "captivate",
    "Chinese": "吸引"
  },
  {
    "English": "irreversible",
    "Chinese": "不可逆的"
  },
  {
    "English": "emotive",
    "Chinese": "引起情绪的"
  },
  {
    "English": "refine",
    "Chinese": "提纯"
  },
  {
    "English": "exhilarate",
    "Chinese": "使...喜悦或兴奋"
  },
  {
    "English": "solitary",
    "Chinese": "单独的"
  },
  {
    "English": "jar",
    "Chinese": "使...不安"
  },
  {
    "English": "unfettered",
    "Chinese": "不受限制的, 自由的"
  },
  {
    "English": "flummery",
    "Chinese": "假恭维"
  },
  {
    "English": "implacable",
    "Chinese": "不能安抚的, 毫不妥协的"
  },
  {
    "English": "arduous",
    "Chinese": "困难的"
  },
  {
    "English": "conciliatory",
    "Chinese": "安抚的, 调和的"
  },
  {
    "English": "optimism",
    "Chinese": "乐观"
  },
  {
    "English": "vindicate",
    "Chinese": "证明...的清白"
  },
  {
    "English": "malady",
    "Chinese": "疾病"
  },
  {
    "English": "warrant",
    "Chinese": "保证"
  },
  {
    "English": "puncture",
    "Chinese": "刺穿"
  },
  {
    "English": "ascribe",
    "Chinese": "归因于"
  },
  {
    "English": "clandestine",
    "Chinese": "秘密的, 隐蔽的"
  },
  {
    "English": "equivocal",
    "Chinese": "模棱两可的, 有歧义的"
  },
  {
    "English": "elucidate",
    "Chinese": "阐释, 阐明"
  },
  {
    "English": "propaganda",
    "Chinese": "政治宣传"
  },
  {
    "English": "putative",
    "Chinese": "公认的, 假定的"
  },
  {
    "English": "conjecture",
    "Chinese": "猜测"
  },
  {
    "English": "coalesce",
    "Chinese": "聚合, 团结"
  },
  {
    "English": "tractable",
    "Chinese": "易管理的, 易控制的"
  },
  {
    "English": "warble",
    "Chinese": "低吟浅唱"
  },
  {
    "English": "knotty",
    "Chinese": "复杂的"
  },
  {
    "English": "dichotomy",
    "Chinese": "矛盾的事物"
  },
  {
    "English": "restive",
    "Chinese": "不服管理的"
  },
  {
    "English": "courteous",
    "Chinese": "有礼貌的"
  },
  {
    "English": "invigorate",
    "Chinese": "使...有活力"
  },
  {
    "English": "truculent",
    "Chinese": "好争斗的"
  },
  {
    "English": "congenial",
    "Chinese": "友善的"
  },
  {
    "English": "insouciance",
    "Chinese": "无忧无虑, 不操心"
  },
  {
    "English": "devastate",
    "Chinese": "严重破坏"
  },
  {
    "English": "keen",
    "Chinese": "对...感兴趣的"
  },
  {
    "English": "ethos",
    "Chinese": "（团体的）气质, 氛围, 信仰等"
  },
  {
    "English": "flagrant",
    "Chinese": "臭名昭著的"
  },
  {
    "English": "solitude",
    "Chinese": "孤独"
  },
  {
    "English": "anachronism",
    "Chinese": "时代错乱"
  },
  {
    "English": "turbid",
    "Chinese": "浑浊的"
  },
  {
    "English": "confine",
    "Chinese": "限制"
  },
  {
    "English": "venerate",
    "Chinese": "尊敬"
  },
  {
    "English": "premeditate",
    "Chinese": "预谋, 提前谋划"
  },
  {
    "English": "insular",
    "Chinese": "孤立的"
  },
  {
    "English": "consolidate",
    "Chinese": "巩固"
  },
  {
    "English": "upheaval",
    "Chinese": "（引起混乱的）巨变"
  },
  {
    "English": "unyielding",
    "Chinese": "不妥协的, 固执的"
  },
  {
    "English": "mendacious",
    "Chinese": "欺骗的, 不诚实的"
  },
  {
    "English": "sonorous",
    "Chinese": "声音洪亮的"
  },
  {
    "English": "fertile",
    "Chinese": "多产的（即可指农作物, 也可以指思想、想法）"
  },
  {
    "English": "decadent",
    "Chinese": "（思想）堕落的, 颓废的"
  },
  {
    "English": "indispensable",
    "Chinese": "不可缺少的"
  },
  {
    "English": "covert",
    "Chinese": "秘密的, 隐蔽的"
  },
  {
    "English": "instinct",
    "Chinese": "本能"
  },
  {
    "English": "discern",
    "Chinese": "识别, 察觉"
  },
  {
    "English": "orientation",
    "Chinese": "取向, 态度"
  },
  {
    "English": "riddle",
    "Chinese": "难题, 谜题"
  },
  {
    "English": "jejune",
    "Chinese": "无聊的"
  },
  {
    "English": "clownish",
    "Chinese": "小丑般的, 滑稽的"
  },
  {
    "English": "indifferent",
    "Chinese": "冷漠的"
  },
  {
    "English": "lethargic",
    "Chinese": "无精打采的"
  },
  {
    "English": "clique",
    "Chinese": "小团体"
  },
  {
    "English": "fungible",
    "Chinese": "可替代的"
  },
  {
    "English": "complimentary",
    "Chinese": "赞美的"
  },
  {
    "English": "empirical",
    "Chinese": "根据观察或经验的"
  },
  {
    "English": "conform",
    "Chinese": "符合, 遵守"
  },
  {
    "English": "solicitous",
    "Chinese": "关心的, 殷切的"
  },
  {
    "English": "insult",
    "Chinese": "侮辱, 辱骂"
  },
  {
    "English": "acrimony",
    "Chinese": "尖刻, 犀利"
  },
  {
    "English": "misconception",
    "Chinese": "误解, 错觉"
  },
  {
    "English": "mundane",
    "Chinese": "平凡的, 无聊的"
  },
  {
    "English": "ambiguous",
    "Chinese": "有歧义的, 模糊不清的"
  },
  {
    "English": "allure",
    "Chinese": "引诱"
  },
  {
    "English": "cagey",
    "Chinese": "小心的；谨慎的"
  },
  {
    "English": "heresy",
    "Chinese": "与主流观点相悖的观点"
  },
  {
    "English": "parsimony",
    "Chinese": "吝啬"
  },
  {
    "English": "cunning",
    "Chinese": "狡猾机智的"
  },
  {
    "English": "highlight",
    "Chinese": "使...突出"
  },
  {
    "English": "judicious",
    "Chinese": "有正确判断力的"
  },
  {
    "English": "disguise",
    "Chinese": "隐藏, 伪装"
  },
  {
    "English": "far-fetched",
    "Chinese": "不切实际的"
  },
  {
    "English": "eclipse",
    "Chinese": "使...不重要"
  },
  {
    "English": "impulsive",
    "Chinese": "冲动的, 不加思索的"
  },
  {
    "English": "exculpate",
    "Chinese": "开脱罪责"
  },
  {
    "English": "overblow",
    "Chinese": "夸大"
  },
  {
    "English": "obfuscate",
    "Chinese": "使…困惑"
  },
  {
    "English": "droll",
    "Chinese": "古怪的, 搞笑的"
  },
  {
    "English": "inconclusive",
    "Chinese": "无结果的, 不确定的"
  },
  {
    "English": "disperse",
    "Chinese": "使...分散"
  },
  {
    "English": "amplify",
    "Chinese": "详细阐述"
  },
  {
    "English": "exaggerate",
    "Chinese": "夸大"
  },
  {
    "English": "unwitting",
    "Chinese": "不知情的"
  },
  {
    "English": "inclusive",
    "Chinese": "包罗万象的，全面的"
  },
  {
    "English": "diatribe",
    "Chinese": "谩骂"
  },
  {
    "English": "promulgate",
    "Chinese": "宣布，宣传"
  },
  {
    "English": "consilience",
    "Chinese": "一致, 符合"
  },
  {
    "English": "ebullient",
    "Chinese": "热情洋溢的"
  },
  {
    "English": "bolster",
    "Chinese": "支持"
  },
  {
    "English": "dispute",
    "Chinese": "争辩, 反对"
  },
  {
    "English": "exposition",
    "Chinese": "阐释, 解释"
  },
  {
    "English": "coddle",
    "Chinese": "溺爱"
  },
  {
    "English": "nuance",
    "Chinese": "小差异"
  },
  {
    "English": "peculiar",
    "Chinese": "不寻常的"
  },
  {
    "English": "egalitarian",
    "Chinese": "平等的"
  },
  {
    "English": "propitiate",
    "Chinese": "安抚"
  },
  {
    "English": "futile",
    "Chinese": "无用的"
  },
  {
    "English": "unassuming",
    "Chinese": "谦虚的, 低调的"
  },
  {
    "English": "amicable",
    "Chinese": "和善的"
  },
  {
    "English": "unfounded",
    "Chinese": "毫无根据的"
  },
  {
    "English": "plastic",
    "Chinese": "能适应的，灵活的"
  },
  {
    "English": "apocalypse",
    "Chinese": "大灾难"
  },
  {
    "English": "authoritative",
    "Chinese": "权威的, 可信的"
  },
  {
    "English": "clamorous",
    "Chinese": "吵吵闹闹的"
  },
  {
    "English": "placate",
    "Chinese": "安抚"
  },
  {
    "English": "far-reaching",
    "Chinese": "影响广泛的"
  },
  {
    "English": "disinterested",
    "Chinese": "客观公正的"
  },
  {
    "English": "embolden",
    "Chinese": "鼓舞, 鼓励"
  },
  {
    "English": "incompatible",
    "Chinese": "无法共存的, 不可兼容的"
  },
  {
    "English": "stale",
    "Chinese": "不新鲜的"
  },
  {
    "English": "lionize",
    "Chinese": "重视, 尊敬"
  },
  {
    "English": "preachy",
    "Chinese": "说教的, 好为人师的"
  },
  {
    "English": "illusory",
    "Chinese": "虚假的"
  },
  {
    "English": "profit-monger",
    "Chinese": "贪婪的人"
  },
  {
    "English": "felicitous",
    "Chinese": "合适的"
  },
  {
    "English": "averse",
    "Chinese": "反感的"
  },
  {
    "English": "trigger",
    "Chinese": "触发"
  },
  {
    "English": "integrity",
    "Chinese": "正直"
  },
  {
    "English": "conservation",
    "Chinese": "保护"
  },
  {
    "English": "spontaneous",
    "Chinese": "自主的, 自发的"
  },
  {
    "English": "pushover",
    "Chinese": "易被打败的人"
  },
  {
    "English": "comprehensive",
    "Chinese": "全面的"
  },
  {
    "English": "insufferable",
    "Chinese": "无法忍受的"
  },
  {
    "English": "sequential",
    "Chinese": "有序的"
  },
  {
    "English": "surreptitious",
    "Chinese": "秘密的, 鬼鬼祟祟的"
  },
  {
    "English": "dispassionate",
    "Chinese": "客观的"
  },
  {
    "English": "transient",
    "Chinese": "短暂的"
  },
  {
    "English": "vacant",
    "Chinese": "空的"
  },
  {
    "English": "canned",
    "Chinese": "千篇一律的"
  },
  {
    "English": "soft-pedal",
    "Chinese": "弱化, 减缓...的影响"
  },
  {
    "English": "feign",
    "Chinese": "假装"
  },
  {
    "English": "daunting",
    "Chinese": "令人畏惧的, 望而生怯的"
  },
  {
    "English": "downright",
    "Chinese": "完全地"
  },
  {
    "English": "autonomous",
    "Chinese": "自治的"
  },
  {
    "English": "indeterminate",
    "Chinese": "不确定的"
  },
  {
    "English": "opulent",
    "Chinese": "昂贵的"
  },
  {
    "English": "pervasive",
    "Chinese": "普遍的"
  },
  {
    "English": "offset",
    "Chinese": "抵消"
  },
  {
    "English": "omnipresent",
    "Chinese": "处处都有的"
  },
  {
    "English": "entangle",
    "Chinese": "纠缠"
  },
  {
    "English": "dilatory",
    "Chinese": "拖延的"
  },
  {
    "English": "generic",
    "Chinese": "一般的，通有的，通用的"
  },
  {
    "English": "sensational",
    "Chinese": "极好的"
  },
  {
    "English": "explicable",
    "Chinese": "可以解释的"
  },
  {
    "English": "pernicious",
    "Chinese": "有害的, 致命的"
  },
  {
    "English": "convoluted",
    "Chinese": "难懂的, 复杂的"
  },
  {
    "English": "bureaucracy",
    "Chinese": "官僚机构"
  },
  {
    "English": "widespread",
    "Chinese": "广泛的"
  },
  {
    "English": "compliant",
    "Chinese": "顺从的, 迎合的"
  },
  {
    "English": "trifling",
    "Chinese": "不重要的"
  },
  {
    "English": "compunction",
    "Chinese": "后悔感, 犯罪感"
  },
  {
    "English": "cynical",
    "Chinese": "认为人性自私的，愤世嫉俗的"
  },
  {
    "English": "pretentious",
    "Chinese": "炫耀的"
  },
  {
    "English": "customary",
    "Chinese": "惯常的"
  },
  {
    "English": "vilify",
    "Chinese": "诽谤, 辱骂"
  },
  {
    "English": "tantamount",
    "Chinese": "（数量，效果）相同的"
  },
  {
    "English": "unflinching",
    "Chinese": "坚定的, 不退缩的"
  },
  {
    "English": "prototype",
    "Chinese": "典型"
  },
  {
    "English": "equanimity",
    "Chinese": "平静, 镇定"
  },
  {
    "English": "espouse",
    "Chinese": "支持"
  },
  {
    "English": "inattention",
    "Chinese": "不留心, 不注意"
  },
  {
    "English": "fractious",
    "Chinese": "愤怒的"
  },
  {
    "English": "disorganize",
    "Chinese": "打乱, 破坏"
  },
  {
    "English": "figurative",
    "Chinese": "（形象化）比喻的"
  },
  {
    "English": "entail",
    "Chinese": "包括, 包含, 使...必然, 牵涉"
  },
  {
    "English": "impeccable",
    "Chinese": "完美无瑕的"
  },
  {
    "English": "stifle",
    "Chinese": "抑制"
  },
  {
    "English": "pragmatic",
    "Chinese": "实际的"
  },
  {
    "English": "didactic",
    "Chinese": "(过分的道德层面的)说教"
  },
  {
    "English": "dazzle",
    "Chinese": "使…目眩, 使...惊叹"
  },
  {
    "English": "stalwart",
    "Chinese": "坚定的, 忠诚的"
  },
  {
    "English": "archaic",
    "Chinese": "过时的"
  },
  {
    "English": "palliate",
    "Chinese": "减缓"
  },
  {
    "English": "accede",
    "Chinese": "同意"
  },
  {
    "English": "consort",
    "Chinese": "陪伴"
  },
  {
    "English": "hostile",
    "Chinese": "不友好的, 敌对的"
  },
  {
    "English": "ubiquitous",
    "Chinese": "到处存在的, 广泛的"
  },
  {
    "English": "authenticate",
    "Chinese": "验证, 证明....是真实的"
  },
  {
    "English": "condescend",
    "Chinese": "带着优越感态度对待人"
  },
  {
    "English": "predilection",
    "Chinese": "倾向, 偏好"
  },
  {
    "English": "diminutive",
    "Chinese": "极小的"
  },
  {
    "English": "illustrious",
    "Chinese": "杰出的"
  },
  {
    "English": "unconscionable",
    "Chinese": "丧心病狂的, 违背良心的"
  },
  {
    "English": "trivial",
    "Chinese": "不重要的"
  },
  {
    "English": "callow",
    "Chinese": "幼稚的, 稚嫩的"
  },
  {
    "English": "sketchy",
    "Chinese": "粗略的"
  },
  {
    "English": "bemuse",
    "Chinese": "使...困惑"
  },
  {
    "English": "exotic",
    "Chinese": "外来的"
  },
  {
    "English": "intuition",
    "Chinese": "直觉"
  },
  {
    "English": "episodic",
    "Chinese": "暂时的"
  },
  {
    "English": "dovish",
    "Chinese": "爱好和平的"
  },
  {
    "English": "realm",
    "Chinese": "领域"
  },
  {
    "English": "presage",
    "Chinese": "预测, 预言"
  },
  {
    "English": "distinctive",
    "Chinese": "独特的，显著区别的"
  },
  {
    "English": "concomitant",
    "Chinese": "相伴随的, 与...同时发生的"
  },
  {
    "English": "abstemious",
    "Chinese": "生活节制的"
  },
  {
    "English": "versatile",
    "Chinese": "多变的"
  },
  {
    "English": "vacillate",
    "Chinese": "犹豫不决"
  },
  {
    "English": "devious",
    "Chinese": "欺骗的"
  },
  {
    "English": "suffice",
    "Chinese": "足够"
  },
  {
    "English": "astute",
    "Chinese": "敏锐的"
  },
  {
    "English": "outrage",
    "Chinese": "使...生气"
  },
  {
    "English": "consensus",
    "Chinese": "意见一致"
  },
  {
    "English": "metaphor",
    "Chinese": "比喻"
  },
  {
    "English": "outstrip",
    "Chinese": "胜出, 超出"
  },
  {
    "English": "querulous",
    "Chinese": "抱怨的"
  },
  {
    "English": "salient",
    "Chinese": "明显的, 显眼的"
  },
  {
    "English": "culmination",
    "Chinese": "最终, 结果"
  },
  {
    "English": "camaraderie",
    "Chinese": "志同道合之情谊"
  },
  {
    "English": "cordial",
    "Chinese": "热情友好的"
  },
  {
    "English": "tribute",
    "Chinese": "赞美, 致敬"
  },
  {
    "English": "observant",
    "Chinese": "观察仔细的,善于观察的"
  },
  {
    "English": "collegiality",
    "Chinese": "共同掌权"
  },
  {
    "English": "pensive",
    "Chinese": "（悲伤的）思考的"
  },
  {
    "English": "penance",
    "Chinese": "忏悔"
  },
  {
    "English": "rile",
    "Chinese": "使...生气"
  },
  {
    "English": "lambaste",
    "Chinese": "严厉批评"
  },
  {
    "English": "undercut",
    "Chinese": "削弱"
  },
  {
    "English": "harrow",
    "Chinese": "折磨, 使...痛苦"
  },
  {
    "English": "paradigm",
    "Chinese": "典范"
  },
  {
    "English": "dissent",
    "Chinese": "持不同意见"
  },
  {
    "English": "initiate",
    "Chinese": "开始, 启动"
  },
  {
    "English": "mutual",
    "Chinese": "相互的, 共同的"
  },
  {
    "English": "robust",
    "Chinese": "强壮的"
  },
  {
    "English": "betoken",
    "Chinese": "预示"
  },
  {
    "English": "conceal",
    "Chinese": "隐藏"
  },
  {
    "English": "outnumber",
    "Chinese": "（数量上）超过"
  },
  {
    "English": "itinerant",
    "Chinese": "巡游的"
  },
  {
    "English": "demonize",
    "Chinese": "妖魔化"
  },
  {
    "English": "sober",
    "Chinese": "严肃认真的"
  },
  {
    "English": "incendiary",
    "Chinese": "纵火的"
  },
  {
    "English": "salutary",
    "Chinese": "有益的, 有益健康的"
  },
  {
    "English": "replete",
    "Chinese": "充满的"
  },
  {
    "English": "snobbish",
    "Chinese": "自命不凡的"
  },
  {
    "English": "seditious",
    "Chinese": "煽动叛乱的"
  },
  {
    "English": "expatriate",
    "Chinese": "驱逐"
  },
  {
    "English": "synopsis",
    "Chinese": "概要"
  },
  {
    "English": "affirmative",
    "Chinese": "积极的"
  },
  {
    "English": "emendation",
    "Chinese": "校订"
  },
  {
    "English": "collective",
    "Chinese": "集体的"
  },
  {
    "English": "synonymous",
    "Chinese": "意思相同的"
  },
  {
    "English": "modicum",
    "Chinese": "少量"
  },
  {
    "English": "retrenchment",
    "Chinese": "削减（尤指经费）"
  },
  {
    "English": "magnify",
    "Chinese": "放大"
  },
  {
    "English": "obligatory",
    "Chinese": "强制的, 必须的"
  },
  {
    "English": "commensurate",
    "Chinese": "相等的, 相似的"
  },
  {
    "English": "long-winded",
    "Chinese": "冗长无聊的"
  },
  {
    "English": "slippery",
    "Chinese": "滑的"
  },
  {
    "English": "hefty",
    "Chinese": "又大又重的"
  },
  {
    "English": "forbidding",
    "Chinese": "令人畏惧的, 可怕的"
  },
  {
    "English": "wide-ranging",
    "Chinese": "广泛的"
  },
  {
    "English": "diligent",
    "Chinese": "努力的, 刻苦的"
  },
  {
    "English": "punctilious",
    "Chinese": "(对行为)谨慎小心的"
  },
  {
    "English": "engaging",
    "Chinese": "吸引人的"
  },
  {
    "English": "evanescent",
    "Chinese": "短暂的"
  },
  {
    "English": "free-for-all",
    "Chinese": "混战, 多人为所欲为的失控场面"
  },
  {
    "English": "rudimentary",
    "Chinese": "基本的"
  },
  {
    "English": "bustling",
    "Chinese": "忙乱的"
  },
  {
    "English": "prioritize",
    "Chinese": "使…优先"
  },
  {
    "English": "envision",
    "Chinese": "想象"
  },
  {
    "English": "circumscribe",
    "Chinese": "限制"
  },
  {
    "English": "reminiscent",
    "Chinese": "引起回忆的"
  },
  {
    "English": "symmetrical",
    "Chinese": "对称的"
  },
  {
    "English": "overthrow",
    "Chinese": "推翻"
  },
  {
    "English": "juvenile",
    "Chinese": "幼稚, 不成熟的"
  },
  {
    "English": "elude",
    "Chinese": "逃跑, 逃避"
  },
  {
    "English": "jettison",
    "Chinese": "拒绝, 放弃"
  },
  {
    "English": "detriment",
    "Chinese": "损坏, 破坏"
  },
  {
    "English": "baroque",
    "Chinese": "奢华的, 复杂的"
  },
  {
    "English": "quixotic",
    "Chinese": "不切实际的"
  },
  {
    "English": "mockery",
    "Chinese": "嘲笑"
  },
  {
    "English": "tactful",
    "Chinese": "为他人着想的, 圆滑的"
  },
  {
    "English": "trendy",
    "Chinese": "时髦的"
  },
  {
    "English": "subsidize",
    "Chinese": "资助, 赞助"
  },
  {
    "English": "numinous",
    "Chinese": "超自然的"
  },
  {
    "English": "anomalous",
    "Chinese": "不寻常的, 异常的"
  },
  {
    "English": "mawkish",
    "Chinese": "恶心做作的"
  },
  {
    "English": "invidious",
    "Chinese": "令人反感的"
  },
  {
    "English": "austere",
    "Chinese": "朴素的, 没有装饰的"
  },
  {
    "English": "impede",
    "Chinese": "阻碍"
  },
  {
    "English": "frank",
    "Chinese": "真诚的"
  },
  {
    "English": "disjunction",
    "Chinese": "分离, 分裂"
  },
  {
    "English": "finicky",
    "Chinese": "挑剔的"
  },
  {
    "English": "hazardous",
    "Chinese": "危险的"
  },
  {
    "English": "chicanery",
    "Chinese": "欺骗, 诡计"
  },
  {
    "English": "verifiable",
    "Chinese": "可验证的"
  },
  {
    "English": "demonstrable",
    "Chinese": "可证明的"
  },
  {
    "English": "pertinacious",
    "Chinese": "坚持的，固执的"
  },
  {
    "English": "scarce",
    "Chinese": "缺乏的"
  },
  {
    "English": "lavish",
    "Chinese": "奢华的"
  },
  {
    "English": "sanguine",
    "Chinese": "乐观的"
  },
  {
    "English": "waver",
    "Chinese": "摇摆不定"
  },
  {
    "English": "engender",
    "Chinese": "产生"
  },
  {
    "English": "elusive",
    "Chinese": "难懂的"
  },
  {
    "English": "ponder",
    "Chinese": "沉思, 仔细思考"
  },
  {
    "English": "proliferate",
    "Chinese": "快速增长"
  },
  {
    "English": "paucity",
    "Chinese": "少量"
  },
  {
    "English": "univocal",
    "Chinese": "（意思）唯一的"
  },
  {
    "English": "dejected",
    "Chinese": "沮丧的"
  },
  {
    "English": "surplus",
    "Chinese": "多余, 过量"
  },
  {
    "English": "impertinent",
    "Chinese": "粗鲁的"
  },
  {
    "English": "one-of-a-kind",
    "Chinese": "独一无二"
  },
  {
    "English": "apropos",
    "Chinese": "合适的"
  },
  {
    "English": "ingratiate",
    "Chinese": "讨好"
  },
  {
    "English": "concoct",
    "Chinese": "编造, 捏造"
  },
  {
    "English": "disgorge",
    "Chinese": "吐"
  },
  {
    "English": "baseless",
    "Chinese": "毫无根据的"
  },
  {
    "English": "momentary",
    "Chinese": "短暂的"
  },
  {
    "English": "debilitate",
    "Chinese": "使…衰弱, 虚弱"
  },
  {
    "English": "acute",
    "Chinese": "严重的，关键的"
  },
  {
    "English": "resent",
    "Chinese": "憎恨, 生气"
  },
  {
    "English": "delightful",
    "Chinese": "（形容事物）令人愉悦的, 令人高兴的"
  },
  {
    "English": "decisive",
    "Chinese": "果决的, 坚定的"
  },
  {
    "English": "testimony",
    "Chinese": "证词, 证据"
  },
  {
    "English": "nominal",
    "Chinese": "名义上的"
  },
  {
    "English": "simultaneous",
    "Chinese": "同时的"
  },
  {
    "English": "monotonous",
    "Chinese": "单调的"
  },
  {
    "English": "divination",
    "Chinese": "预言, 占卜"
  },
  {
    "English": "virtuosity",
    "Chinese": "精湛的技艺"
  },
  {
    "English": "manifest",
    "Chinese": "显然的, 明显的"
  },
  {
    "English": "purview",
    "Chinese": "视野"
  },
  {
    "English": "annex",
    "Chinese": "附加"
  },
  {
    "English": "shriek",
    "Chinese": "叫喊, 尖叫"
  },
  {
    "English": "ephemeral",
    "Chinese": "短暂的"
  },
  {
    "English": "erudite",
    "Chinese": "博学的"
  },
  {
    "English": "plague",
    "Chinese": "困扰"
  },
  {
    "English": "counterintuitive",
    "Chinese": "违反常理的, 与直觉相反的"
  },
  {
    "English": "intriguing",
    "Chinese": "非常有趣的"
  },
  {
    "English": "magnanimous",
    "Chinese": "大度的, 慷慨的"
  },
  {
    "English": "untether",
    "Chinese": "释放, 脱离"
  },
  {
    "English": "formulaic",
    "Chinese": "刻板的, 俗套的"
  },
  {
    "English": "gambit",
    "Chinese": "计谋, 策略"
  },
  {
    "English": "vivacious",
    "Chinese": "活力四射的"
  },
  {
    "English": "stratify",
    "Chinese": "分层级"
  },
  {
    "English": "exceptional",
    "Chinese": "不寻常的"
  },
  {
    "English": "slump",
    "Chinese": "急速下跌"
  },
  {
    "English": "pessimistic",
    "Chinese": "悲观的"
  },
  {
    "English": "dilute",
    "Chinese": "削弱, 减轻"
  },
  {
    "English": "palatable",
    "Chinese": "美味的"
  },
  {
    "English": "stagnate",
    "Chinese": "停滞"
  },
  {
    "English": "esoteric",
    "Chinese": "难懂的"
  },
  {
    "English": "befuddle",
    "Chinese": "使...困惑"
  },
  {
    "English": "deliberate",
    "Chinese": "深思熟虑"
  },
  {
    "English": "antithesis",
    "Chinese": "相反, 对立"
  },
  {
    "English": "valediction",
    "Chinese": "告别"
  },
  {
    "English": "hamstring",
    "Chinese": "损坏"
  },
  {
    "English": "complacent",
    "Chinese": "自我感觉良好的, 自满的"
  },
  {
    "English": "hinder",
    "Chinese": "阻碍"
  },
  {
    "English": "formidable",
    "Chinese": "可怕的"
  },
  {
    "English": "impenetrable",
    "Chinese": "难懂的"
  },
  {
    "English": "obtrude",
    "Chinese": "强迫, 强加于"
  },
  {
    "English": "debunk",
    "Chinese": "拆穿, 揭露… 的错误"
  },
  {
    "English": "umbrage",
    "Chinese": "生气, 不悦"
  },
  {
    "English": "affinity",
    "Chinese": "倾向, 偏好"
  },
  {
    "English": "ramification",
    "Chinese": "结果, 后果"
  },
  {
    "English": "immerse",
    "Chinese": "浸润, 浸泡"
  },
  {
    "English": "demise",
    "Chinese": "死亡, 灭亡"
  },
  {
    "English": "compassionate",
    "Chinese": "同情的"
  },
  {
    "English": "ignorant",
    "Chinese": "无知的"
  },
  {
    "English": "immortal",
    "Chinese": "不朽的, 永存的"
  },
  {
    "English": "assuage",
    "Chinese": "安抚, 缓和"
  },
  {
    "English": "expiation",
    "Chinese": "赎罪"
  },
  {
    "English": "loquacious",
    "Chinese": "话多的"
  },
  {
    "English": "marginal",
    "Chinese": "边缘的, 不重要的"
  },
  {
    "English": "adjuration",
    "Chinese": "恳求"
  },
  {
    "English": "dreary",
    "Chinese": "令人悲伤的"
  },
  {
    "English": "callous",
    "Chinese": "冷漠的"
  },
  {
    "English": "discount",
    "Chinese": "低估, 轻视"
  },
  {
    "English": "ostentatious",
    "Chinese": "炫耀的"
  },
  {
    "English": "thwart",
    "Chinese": "破坏, 阻止"
  },
  {
    "English": "distress",
    "Chinese": "使......紧张, 忧虑, 不适"
  },
  {
    "English": "raillery",
    "Chinese": "打趣"
  },
  {
    "English": "exasperate",
    "Chinese": "使...生气"
  },
  {
    "English": "feckless",
    "Chinese": "虚弱的, 无能的"
  },
  {
    "English": "stigma",
    "Chinese": "污点"
  },
  {
    "English": "attenuate",
    "Chinese": "使减弱"
  },
  {
    "English": "enigmatic",
    "Chinese": "难懂的"
  },
  {
    "English": "condemn",
    "Chinese": "谴责"
  },
  {
    "English": "impugn",
    "Chinese": "（因人不诚实而）批评抨击"
  },
  {
    "English": "elaborate",
    "Chinese": "精心的, 精细的"
  },
  {
    "English": "pejorative",
    "Chinese": "轻蔑的（话语）"
  },
  {
    "English": "blithe",
    "Chinese": "无忧无虑的,轻松的"
  },
  {
    "English": "refute",
    "Chinese": "驳倒, 否认"
  },
  {
    "English": "vacuous",
    "Chinese": "空的,空洞的"
  },
  {
    "English": "enervate",
    "Chinese": "使...衰弱"
  },
  {
    "English": "honorific",
    "Chinese": "尊敬的"
  },
  {
    "English": "disprove",
    "Chinese": "驳斥"
  },
  {
    "English": "extinguish",
    "Chinese": "熄灭"
  },
  {
    "English": "excoriate",
    "Chinese": "强烈斥责"
  },
  {
    "English": "immutable",
    "Chinese": "不变的"
  },
  {
    "English": "hypercritical",
    "Chinese": "吹毛求疵的"
  },
  {
    "English": "momentous",
    "Chinese": "重要的"
  },
  {
    "English": "esteem",
    "Chinese": "尊敬"
  },
  {
    "English": "traumatic",
    "Chinese": "心灵受创伤的"
  },
  {
    "English": "secretive",
    "Chinese": "鬼鬼祟祟的, 秘密的"
  },
  {
    "English": "delegate",
    "Chinese": "代表"
  },
  {
    "English": "abeyance",
    "Chinese": "中止, 暂停"
  },
  {
    "English": "blatant",
    "Chinese": "吵吵闹闹的"
  },
  {
    "English": "flamboyant",
    "Chinese": "引人注意的,酷炫的"
  },
  {
    "English": "lucid",
    "Chinese": "清晰的"
  },
  {
    "English": "opaque",
    "Chinese": "难懂的"
  },
  {
    "English": "alarmism",
    "Chinese": "（毫无根据的）担忧, 危言耸听"
  },
  {
    "English": "divisive",
    "Chinese": "引起争议的, 引起分裂的"
  },
  {
    "English": "torpor",
    "Chinese": "麻木, 迟钝, 懒散"
  },
  {
    "English": "indolent",
    "Chinese": "懒惰的"
  },
  {
    "English": "compulsory",
    "Chinese": "强制的"
  },
  {
    "English": "revelation",
    "Chinese": "揭露"
  },
  {
    "English": "contingency",
    "Chinese": "可能事件"
  },
  {
    "English": "prolific",
    "Chinese": "多产的"
  },
  {
    "English": "alacrity",
    "Chinese": "欣然同意"
  },
  {
    "English": "transcend",
    "Chinese": "超越"
  },
  {
    "English": "resonate",
    "Chinese": "回响"
  },
  {
    "English": "uncharacteristic",
    "Chinese": "不典型的, 不寻常的"
  },
  {
    "English": "impetuous",
    "Chinese": "鲁莽的, 仓促的"
  },
  {
    "English": "disparate",
    "Chinese": "不同的"
  },
  {
    "English": "respite",
    "Chinese": "暂歇, 休息"
  },
  {
    "English": "rankle",
    "Chinese": "使...生气, 愤怒"
  },
  {
    "English": "acquiesce",
    "Chinese": "默许, 默认"
  },
  {
    "English": "remedy",
    "Chinese": "补救, 完善"
  },
  {
    "English": "congruous",
    "Chinese": "一致的, 适合的"
  },
  {
    "English": "gadfly",
    "Chinese": "讨人厌的人"
  },
  {
    "English": "shrink",
    "Chinese": "缩小"
  },
  {
    "English": "overwrought",
    "Chinese": "情绪激动或不高兴的"
  },
  {
    "English": "purposeful",
    "Chinese": "有目的的, 故意的"
  },
  {
    "English": "prognosis",
    "Chinese": "诊断"
  },
  {
    "English": "malleable",
    "Chinese": "易适应的，能适应的"
  },
  {
    "English": "forgo",
    "Chinese": "放弃(优势)"
  },
  {
    "English": "encumber",
    "Chinese": "阻碍"
  },
  {
    "English": "barbarity",
    "Chinese": "野蛮, 残忍"
  },
  {
    "English": "sanctimonious",
    "Chinese": "假装道德高尚的, 假正经的"
  },
  {
    "English": "repugnant",
    "Chinese": "令人厌恶的"
  },
  {
    "English": "pseudonym",
    "Chinese": "假名"
  },
  {
    "English": "explicit",
    "Chinese": "明白的, 清楚的"
  },
  {
    "English": "inexorable",
    "Chinese": "无动于衷的,无情的"
  },
  {
    "English": "dissemble",
    "Chinese": "隐藏伪装（感情、意见）"
  },
  {
    "English": "scintillating",
    "Chinese": "生动有趣的,机智幽默的"
  },
  {
    "English": "luminary",
    "Chinese": "杰出人物"
  },
  {
    "English": "empower",
    "Chinese": "授权"
  },
  {
    "English": "deference",
    "Chinese": "（因地位高或年长而）尊敬"
  },
  {
    "English": "lugubrious",
    "Chinese": "悲伤的"
  },
  {
    "English": "denounce",
    "Chinese": "批评"
  },
  {
    "English": "parochial",
    "Chinese": "地方的"
  },
  {
    "English": "lament",
    "Chinese": "哀叹, 哀悼"
  },
  {
    "English": "primitive",
    "Chinese": "原始的"
  },
  {
    "English": "hamper",
    "Chinese": "阻碍"
  },
  {
    "English": "distill",
    "Chinese": "蒸馏"
  },
  {
    "English": "imitate",
    "Chinese": "模仿"
  },
  {
    "English": "encyclopedic",
    "Chinese": "（如大百科全书般）全面的"
  },
  {
    "English": "euphemism",
    "Chinese": "委婉语"
  },
  {
    "English": "nondescript",
    "Chinese": "平庸的"
  },
  {
    "English": "adverse",
    "Chinese": "不利的, 有害的"
  },
  {
    "English": "enduring",
    "Chinese": "长期的"
  },
  {
    "English": "enliven",
    "Chinese": "使活跃"
  },
  {
    "English": "half-formulated",
    "Chinese": "新出现的"
  },
  {
    "English": "dubious",
    "Chinese": "可疑的, 不确定的"
  },
  {
    "English": "churlish",
    "Chinese": "不礼貌的"
  },
  {
    "English": "outlandish",
    "Chinese": "奇异的"
  },
  {
    "English": "serendipitous",
    "Chinese": "偶然的"
  },
  {
    "English": "mercurial",
    "Chinese": "性格多变的"
  },
  {
    "English": "deceive",
    "Chinese": "欺骗"
  },
  {
    "English": "fortuitous",
    "Chinese": "偶然的"
  },
  {
    "English": "fathom",
    "Chinese": "理解"
  },
  {
    "English": "remuneration",
    "Chinese": "酬金"
  },
  {
    "English": "sparkling",
    "Chinese": "闪闪发光的"
  },
  {
    "English": "luxuriant",
    "Chinese": "繁茂的"
  },
  {
    "English": "credential",
    "Chinese": "证明"
  },
  {
    "English": "recoil",
    "Chinese": "畏缩"
  },
  {
    "English": "scandalous",
    "Chinese": "令人震惊的, 反感的"
  },
  {
    "English": "erode",
    "Chinese": "腐蚀"
  },
  {
    "English": "tenuous",
    "Chinese": "站不住脚的"
  },
  {
    "English": "fluctuate",
    "Chinese": "波动, 起伏, 上上下下"
  },
  {
    "English": "contentious",
    "Chinese": "引起争议的"
  },
  {
    "English": "patchwork",
    "Chinese": "混合物"
  },
  {
    "English": "flabbergast",
    "Chinese": "使...惊讶"
  },
  {
    "English": "temperate",
    "Chinese": "（气温）温和的"
  },
  {
    "English": "benighted",
    "Chinese": "无知的, 愚昧的"
  },
  {
    "English": "undiscriminating",
    "Chinese": "不加区分的"
  },
  {
    "English": "palpable",
    "Chinese": "可感知的"
  },
  {
    "English": "effusive",
    "Chinese": "表达过多感情的"
  },
  {
    "English": "habitable",
    "Chinese": "宜居的"
  },
  {
    "English": "codify",
    "Chinese": "整理"
  },
  {
    "English": "duplicate",
    "Chinese": "复制"
  },
  {
    "English": "sluggish",
    "Chinese": "迟钝的"
  },
  {
    "English": "sway",
    "Chinese": "影响, 控制"
  },
  {
    "English": "ornamental",
    "Chinese": "装饰性的, 美观的"
  },
  {
    "English": "convivial",
    "Chinese": "好交际的, 欢聚的"
  },
  {
    "English": "multifarious",
    "Chinese": "各种各样的"
  },
  {
    "English": "panacea",
    "Chinese": "万能灵药"
  },
  {
    "English": "countenance",
    "Chinese": "赞同"
  },
  {
    "English": "inflammatory",
    "Chinese": "煽动性的"
  },
  {
    "English": "taint",
    "Chinese": "玷污, 破坏"
  },
  {
    "English": "rigorous",
    "Chinese": "严格的"
  },
  {
    "English": "delude",
    "Chinese": "迷惑, 欺骗"
  },
  {
    "English": "ill-advised",
    "Chinese": "不明智的, 不合理的"
  },
  {
    "English": "prosaic",
    "Chinese": "普通寻常的"
  },
  {
    "English": "malfeasance",
    "Chinese": "违法行为"
  },
  {
    "English": "egregious",
    "Chinese": "极坏的"
  },
  {
    "English": "counterfeit",
    "Chinese": "伪造的"
  },
  {
    "English": "volatile",
    "Chinese": "性格多变的"
  },
  {
    "English": "conundrum",
    "Chinese": "难题"
  },
  {
    "English": "contrive",
    "Chinese": "设计"
  },
  {
    "English": "gratify",
    "Chinese": "使...满意"
  },
  {
    "English": "deflate",
    "Chinese": "使...泄气, 使...挫败"
  },
  {
    "English": "anthropogenic",
    "Chinese": "人为的"
  },
  {
    "English": "conflate",
    "Chinese": "合并"
  },
  {
    "English": "animate",
    "Chinese": "活着的, 有生命的"
  },
  {
    "English": "contemporary",
    "Chinese": "当代的, 现代的"
  },
  {
    "English": "underlie",
    "Chinese": "成为...根据, 基础"
  },
  {
    "English": "anecdote",
    "Chinese": "趣闻，轶事"
  },
  {
    "English": "ministration",
    "Chinese": "帮助"
  },
  {
    "English": "banal",
    "Chinese": "无聊的"
  },
  {
    "English": "flippant",
    "Chinese": "轻率无礼的, 不严肃的"
  },
  {
    "English": "invective",
    "Chinese": "辱骂, 侮辱"
  },
  {
    "English": "paltry",
    "Chinese": "少量"
  },
  {
    "English": "miserly",
    "Chinese": "吝啬的"
  },
  {
    "English": "renowned",
    "Chinese": "出名的"
  },
  {
    "English": "exhaustive",
    "Chinese": "全面的"
  },
  {
    "English": "polemical",
    "Chinese": "（爱) 争辩的"
  },
  {
    "English": "facile",
    "Chinese": "轻率的，肤浅的"
  },
  {
    "English": "transparent",
    "Chinese": "透明的"
  },
  {
    "English": "unimpeachable",
    "Chinese": "毋庸置疑的"
  },
  {
    "English": "tortuous",
    "Chinese": "复杂难懂的"
  },
  {
    "English": "perturb",
    "Chinese": "使...不安"
  },
  {
    "English": "flighty",
    "Chinese": "多变的"
  },
  {
    "English": "infectious",
    "Chinese": "传染的"
  },
  {
    "English": "gall",
    "Chinese": "使...生气"
  },
  {
    "English": "compelling",
    "Chinese": "有趣的"
  },
  {
    "English": "overt",
    "Chinese": "明显的"
  },
  {
    "English": "fraudulent",
    "Chinese": "欺诈的"
  },
  {
    "English": "perilous",
    "Chinese": "危险的"
  },
  {
    "English": "cataclysm",
    "Chinese": "n. 灾难"
  },
  {
    "English": "concede",
    "Chinese": "承认"
  },
  {
    "English": "horrific",
    "Chinese": "可怕的"
  },
  {
    "English": "multitudinous",
    "Chinese": "很多的"
  },
  {
    "English": "downplay",
    "Chinese": "轻描淡写"
  },
  {
    "English": "purport",
    "Chinese": "中心思想"
  },
  {
    "English": "mediocre",
    "Chinese": "平庸的, 平凡的"
  },
  {
    "English": "irritate",
    "Chinese": "使...不高兴"
  },
  {
    "English": "stilted",
    "Chinese": "不自然的, 僵硬的"
  },
  {
    "English": "placid",
    "Chinese": "平静的"
  },
  {
    "English": "erratic",
    "Chinese": "飘忽不定的, 没规律的"
  },
  {
    "English": "ingenious",
    "Chinese": "天才的, 聪明的"
  },
  {
    "English": "renaissance",
    "Chinese": "复苏"
  },
  {
    "English": "endorse",
    "Chinese": "公开支持"
  },
  {
    "English": "harbinger",
    "Chinese": "前兆"
  },
  {
    "English": "malign",
    "Chinese": "邪恶的, 恶毒的"
  },
  {
    "English": "imperative",
    "Chinese": "重要的"
  },
  {
    "English": "ethical",
    "Chinese": "道德的"
  },
  {
    "English": "consequential",
    "Chinese": "重要的"
  },
  {
    "English": "perpetuate",
    "Chinese": "持续, 使...继续"
  },
  {
    "English": "anathema",
    "Chinese": "极其讨厌的人或事"
  },
  {
    "English": "illuminate",
    "Chinese": "阐述清楚"
  },
  {
    "English": "enchanting",
    "Chinese": "迷人的"
  },
  {
    "English": "mishandle",
    "Chinese": "虐待"
  },
  {
    "English": "fickle",
    "Chinese": "多变的"
  },
  {
    "English": "countermand",
    "Chinese": "撤销（命令）"
  },
  {
    "English": "mollify",
    "Chinese": "安抚"
  },
  {
    "English": "gloomy",
    "Chinese": "悲伤的"
  },
  {
    "English": "methodical",
    "Chinese": "有条理的"
  },
  {
    "English": "hortatory",
    "Chinese": "劝告的，激励的"
  },
  {
    "English": "innate",
    "Chinese": "天生的"
  },
  {
    "English": "displace",
    "Chinese": "驱逐"
  },
  {
    "English": "apprehend",
    "Chinese": "逮捕"
  },
  {
    "English": "disarray",
    "Chinese": "杂乱, 混乱"
  },
  {
    "English": "tedious",
    "Chinese": "冗长无聊的"
  },
  {
    "English": "irascible",
    "Chinese": "易怒的, 坏脾气的"
  },
  {
    "English": "fastidious",
    "Chinese": "小心谨慎的, 挑剔的"
  },
  {
    "English": "occlude",
    "Chinese": "阻塞"
  },
  {
    "English": "impair",
    "Chinese": "损害"
  },
  {
    "English": "laudatory",
    "Chinese": "赞美的"
  },
  {
    "English": "prevalent",
    "Chinese": "流行的, 普遍的"
  },
  {
    "English": "deprecate",
    "Chinese": "贬损，诋毁"
  },
  {
    "English": "portend",
    "Chinese": "预示, 预兆"
  },
  {
    "English": "self-defeating",
    "Chinese": "违背自己利益的, 弄巧成拙的"
  },
  {
    "English": "proclaim",
    "Chinese": "宣布"
  },
  {
    "English": "meddle",
    "Chinese": "干涉"
  },
  {
    "English": "overshadow",
    "Chinese": "超出, 超过"
  },
  {
    "English": "somnolent",
    "Chinese": "无聊的, 令人昏昏欲睡的"
  },
  {
    "English": "precipitate",
    "Chinese": "加速"
  },
  {
    "English": "onerous",
    "Chinese": "繁重的, 费力的"
  },
  {
    "English": "comity",
    "Chinese": "友好, 和谐"
  },
  {
    "English": "douse",
    "Chinese": "熄灭"
  },
  {
    "English": "asseverate",
    "Chinese": "郑重声明"
  },
  {
    "English": "arbitrary",
    "Chinese": "武断的, 任性的"
  },
  {
    "English": "discretion",
    "Chinese": "自由决定"
  },
  {
    "English": "sacrosanct",
    "Chinese": "神圣而不可侵犯的"
  },
  {
    "English": "quiescent",
    "Chinese": "静止的, 不活跃的"
  },
  {
    "English": "evasive",
    "Chinese": "回避的, 闪烁其词的"
  },
  {
    "English": "defer",
    "Chinese": "推迟"
  },
  {
    "English": "innocuous",
    "Chinese": "无害的"
  },
  {
    "English": "arcane",
    "Chinese": "难懂的，鲜为人知的"
  },
  {
    "English": "permanent",
    "Chinese": "长期稳定的"
  },
  {
    "English": "entice",
    "Chinese": "诱惑"
  },
  {
    "English": "unmistakable",
    "Chinese": "清晰的, 一目了然的"
  },
  {
    "English": "antecedent",
    "Chinese": "先前的"
  },
  {
    "English": "overstate",
    "Chinese": "夸大"
  },
  {
    "English": "relish",
    "Chinese": "喜爱"
  },
  {
    "English": "trepidation",
    "Chinese": "恐惧, 害怕"
  },
  {
    "English": "synergy",
    "Chinese": "协同作用"
  },
  {
    "English": "universal",
    "Chinese": "普世的"
  },
  {
    "English": "dampen",
    "Chinese": "抑制, 削弱"
  },
  {
    "English": "predate",
    "Chinese": "先于"
  },
  {
    "English": "premise",
    "Chinese": "前提"
  },
  {
    "English": "motivate",
    "Chinese": "激励"
  },
  {
    "English": "linkage",
    "Chinese": "连接, 联结"
  },
  {
    "English": "hypocrisy",
    "Chinese": "虚伪, 伪善"
  },
  {
    "English": "redundant",
    "Chinese": "重复的, 冗余的, 赘述的"
  },
  {
    "English": "mitigate",
    "Chinese": "减缓"
  },
  {
    "English": "wane",
    "Chinese": "减少，衰退"
  },
  {
    "English": "accountable",
    "Chinese": "（对某事）负责任的"
  },
  {
    "English": "fecund",
    "Chinese": "多产的"
  },
  {
    "English": "reflective",
    "Chinese": "反思的, 沉思的"
  },
  {
    "English": "precedent",
    "Chinese": "先例"
  },
  {
    "English": "recant",
    "Chinese": "（公开正式的）否认"
  },
  {
    "English": "rambling",
    "Chinese": "跑题的, 冗长的"
  },
  {
    "English": "inure",
    "Chinese": "习惯于（不好的事物）"
  },
  {
    "English": "eccentric",
    "Chinese": "古怪的"
  },
  {
    "English": "mercenary",
    "Chinese": "唯利是图的"
  },
  {
    "English": "negligible",
    "Chinese": "可忽略的，不重要的"
  },
  {
    "English": "puerile",
    "Chinese": "稚嫩的, 幼稚的"
  },
  {
    "English": "plausible",
    "Chinese": "看起来合理的"
  },
  {
    "English": "baffle",
    "Chinese": "使...困惑"
  },
  {
    "English": "simplistic",
    "Chinese": "过于简化的"
  },
  {
    "English": "chivalrous",
    "Chinese": "勇敢的"
  },
  {
    "English": "apathetic",
    "Chinese": "漠不关心的"
  },
  {
    "English": "dedicate",
    "Chinese": "致力于, 奉献于"
  },
  {
    "English": "blemish",
    "Chinese": "玷污, 破坏"
  },
  {
    "English": "inertia",
    "Chinese": "不动, 不活跃"
  },
  {
    "English": "intelligible",
    "Chinese": "可以理解的"
  },
  {
    "English": "primacy",
    "Chinese": "首要, 首位"
  },
  {
    "English": "untenable",
    "Chinese": "（论点）经不起反驳的, 站不住脚的"
  },
  {
    "English": "incivility",
    "Chinese": "不礼貌"
  },
  {
    "English": "laconic",
    "Chinese": "简洁的, 用词少的"
  },
  {
    "English": "confess",
    "Chinese": "坦白, 承认"
  },
  {
    "English": "demoralize",
    "Chinese": "使...泄气"
  },
  {
    "English": "paragon",
    "Chinese": "典范, 模范"
  },
  {
    "English": "outmoded",
    "Chinese": "过时的"
  },
  {
    "English": "fleeting",
    "Chinese": "短暂的"
  },
  {
    "English": "scrutinize",
    "Chinese": "仔细检查"
  },
  {
    "English": "incentive",
    "Chinese": "激励"
  },
  {
    "English": "contradictory",
    "Chinese": "对立的"
  },
  {
    "English": "sectarian",
    "Chinese": "狭隘的"
  },
  {
    "English": "moribund",
    "Chinese": "濒临死亡的"
  },
  {
    "English": "galvanize",
    "Chinese": "刺激"
  },
  {
    "English": "interchangeable",
    "Chinese": "可交换的, 相似的"
  },
  {
    "English": "exiguous",
    "Chinese": "极其缺乏的"
  },
  {
    "English": "truism",
    "Chinese": "真理"
  },
  {
    "English": "valorize",
    "Chinese": "规定价格（引申为赞美）"
  },
  {
    "English": "meticulous",
    "Chinese": "谨慎的"
  },
  {
    "English": "satire",
    "Chinese": "讽刺, 嘲讽"
  },
  {
    "English": "proprietary",
    "Chinese": "私有的"
  },
  {
    "English": "evenhanded",
    "Chinese": "公平的"
  },
  {
    "English": "amorphous",
    "Chinese": "无固定形状的"
  },
  {
    "English": "apolitical",
    "Chinese": "对政治不感兴趣的"
  },
  {
    "English": "obviate",
    "Chinese": "免除"
  },
  {
    "English": "prescience",
    "Chinese": "先知"
  },
  {
    "English": "audacious",
    "Chinese": "大胆的, 无畏的"
  },
  {
    "English": "animadversion",
    "Chinese": "批判, 责骂"
  },
  {
    "English": "adorn",
    "Chinese": "装饰"
  },
  {
    "English": "duplicitous",
    "Chinese": "欺骗的"
  },
  {
    "English": "vehement",
    "Chinese": "情绪激动的"
  },
  {
    "English": "revive",
    "Chinese": "使...复苏"
  },
  {
    "English": "antediluvian",
    "Chinese": "极为过时的"
  },
  {
    "English": "facet",
    "Chinese": "某一方面"
  },
  {
    "English": "ponderous",
    "Chinese": "笨重的"
  },
  {
    "English": "detract",
    "Chinese": "贬低"
  },
  {
    "English": "specific",
    "Chinese": "独特的"
  },
  {
    "English": "aggrandize",
    "Chinese": "夸大, 吹捧"
  },
  {
    "English": "prospect",
    "Chinese": "前景"
  },
  {
    "English": "chagrin",
    "Chinese": "苦恼, 烦恼"
  },
  {
    "English": "seclusion",
    "Chinese": "隔离, 隐居"
  },
  {
    "English": "commence",
    "Chinese": "开始"
  },
  {
    "English": "mordant",
    "Chinese": "尖酸刻薄的"
  },
  {
    "English": "disconcerting",
    "Chinese": "令人不安的"
  },
  {
    "English": "embellish",
    "Chinese": "装饰"
  },
  {
    "English": "pugnacious",
    "Chinese": "好争斗的"
  },
  {
    "English": "exacerbate",
    "Chinese": "使...恶化"
  },
  {
    "English": "furtive",
    "Chinese": "鬼鬼祟祟的"
  },
  {
    "English": "bewilder",
    "Chinese": "使...困惑"
  },
  {
    "English": "unidimensional",
    "Chinese": "肤浅的"
  },
  {
    "English": "jaded",
    "Chinese": "厌倦的，无聊的"
  },
  {
    "English": "visionary",
    "Chinese": "有远见的"
  },
  {
    "English": "archetypal",
    "Chinese": "典型"
  },
  {
    "English": "humility",
    "Chinese": "谦虚"
  },
  {
    "English": "disclose",
    "Chinese": "揭发, 揭露"
  },
  {
    "English": "adversarial",
    "Chinese": "敌对的"
  },
  {
    "English": "beneficiary",
    "Chinese": "受帮助的人"
  },
  {
    "English": "premature",
    "Chinese": "过早的"
  },
  {
    "English": "jeopardize",
    "Chinese": "使...危险"
  },
  {
    "English": "conjure",
    "Chinese": "想象出"
  },
  {
    "English": "persevere",
    "Chinese": "坚持"
  },
  {
    "English": "enormous",
    "Chinese": "大量的"
  },
  {
    "English": "inverse",
    "Chinese": "相反的"
  },
  {
    "English": "indiscriminate",
    "Chinese": "不加区分的, 不加选择的"
  },
  {
    "English": "defy",
    "Chinese": "不遵守,不服从, 抵抗"
  },
  {
    "English": "admonish",
    "Chinese": "警告, 批评"
  },
  {
    "English": "preclude",
    "Chinese": "阻止"
  },
  {
    "English": "forswear",
    "Chinese": "放弃"
  },
  {
    "English": "solidarity",
    "Chinese": "团结"
  },
  {
    "English": "conspicuous",
    "Chinese": "显眼的, 明显的"
  },
  {
    "English": "disinformation",
    "Chinese": "假情报, 假消息"
  },
  {
    "English": "preempt",
    "Chinese": "阻止, 先发制人"
  },
  {
    "English": "recapitulate",
    "Chinese": "总结"
  },
  {
    "English": "paralyze",
    "Chinese": "使...瘫痪"
  },
  {
    "English": "inexpressible",
    "Chinese": "无以言表的"
  },
  {
    "English": "absorbing",
    "Chinese": "吸引人的"
  },
  {
    "English": "plethora",
    "Chinese": "大量"
  },
  {
    "English": "disregard",
    "Chinese": "无视, 忽视"
  },
  {
    "English": "turbulent",
    "Chinese": "混乱的"
  },
  {
    "English": "antagonistic",
    "Chinese": "敌对的"
  },
  {
    "English": "commonplace",
    "Chinese": "平庸, 普通"
  },
  {
    "English": "meager",
    "Chinese": "不足的, 少的"
  },
  {
    "English": "tendentious",
    "Chinese": "偏袒的, 偏向的"
  },
  {
    "English": "prestige",
    "Chinese": "声望, 声誉"
  },
  {
    "English": "burlesque",
    "Chinese": "通过滑稽的模仿而讽刺"
  },
  {
    "English": "attain",
    "Chinese": "达到, 获得"
  },
  {
    "English": "upsurge",
    "Chinese": "增长"
  },
  {
    "English": "grouchy",
    "Chinese": "易怒的, 脾气不好的"
  },
  {
    "English": "pliable",
    "Chinese": "易受影响的"
  },
  {
    "English": "reproach",
    "Chinese": "斥责, 批评"
  },
  {
    "English": "histrionic",
    "Chinese": "戏剧性的, 做作的"
  },
  {
    "English": "abnegate",
    "Chinese": "否认"
  },
  {
    "English": "provoke",
    "Chinese": "激起"
  },
  {
    "English": "avaricious",
    "Chinese": "贪婪的"
  },
  {
    "English": "brag",
    "Chinese": "吹嘘, 炫耀"
  },
  {
    "English": "heed",
    "Chinese": "留心, 注意"
  },
  {
    "English": "sagacious",
    "Chinese": "聪明的, 睿智的"
  },
  {
    "English": "penalty",
    "Chinese": "惩罚"
  },
  {
    "English": "prefigure",
    "Chinese": "预示"
  },
  {
    "English": "glorify",
    "Chinese": "赞美"
  },
  {
    "English": "animus",
    "Chinese": "敌意"
  },
  {
    "English": "justification",
    "Chinese": "理由"
  },
  {
    "English": "pertain",
    "Chinese": "与...相关"
  },
  {
    "English": "aggrieve",
    "Chinese": "使痛苦"
  },
  {
    "English": "dearth",
    "Chinese": "缺乏"
  },
  {
    "English": "calumny",
    "Chinese": "诽谤"
  },
  {
    "English": "rampant",
    "Chinese": "广泛的"
  },
  {
    "English": "vulnerable",
    "Chinese": "易受伤害的"
  },
  {
    "English": "pertinent",
    "Chinese": "相关的"
  },
  {
    "English": "distort",
    "Chinese": "曲解"
  },
  {
    "English": "overextend",
    "Chinese": "过分扩展, 承担过多义务"
  },
  {
    "English": "precocious",
    "Chinese": "早熟的"
  },
  {
    "English": "repudiate",
    "Chinese": "否认, 拒绝"
  },
  {
    "English": "quirky",
    "Chinese": "奇怪的, 古怪的"
  },
  {
    "English": "proponent",
    "Chinese": "支持者"
  },
  {
    "English": "reiterate",
    "Chinese": "重复强调"
  },
  {
    "English": "conscientious",
    "Chinese": "本着良心的"
  },
  {
    "English": "rapacious",
    "Chinese": "贪婪的"
  },
  {
    "English": "disquisition",
    "Chinese": "演讲, 报告"
  },
  {
    "English": "foretell",
    "Chinese": "预言, 预测"
  },
  {
    "English": "understate",
    "Chinese": "少说, 少报"
  },
  {
    "English": "discredit",
    "Chinese": "拒绝承认"
  },
  {
    "English": "underscore",
    "Chinese": "强调"
  },
  {
    "English": "predetermine",
    "Chinese": "预先决定"
  },
  {
    "English": "provisional",
    "Chinese": "临时的"
  },
  {
    "English": "circumspect",
    "Chinese": "谨慎的"
  },
  {
    "English": "majestic",
    "Chinese": "庄严威武的"
  },
  {
    "English": "estrange",
    "Chinese": "使疏远"
  },
  {
    "English": "falsehood",
    "Chinese": "谎言, 谬论"
  },
  {
    "English": "manipulate",
    "Chinese": "操控"
  },
  {
    "English": "pathological",
    "Chinese": "极端的"
  },
  {
    "English": "circuitous",
    "Chinese": "兜圈子的, 不直接的"
  },
  {
    "English": "propitious",
    "Chinese": "吉祥的, 吉利的"
  },
  {
    "English": "insightful",
    "Chinese": "有洞察力的"
  },
  {
    "English": "nullify",
    "Chinese": "使...无效"
  },
  {
    "English": "facilitate",
    "Chinese": "辅助, 帮助"
  },
  {
    "English": "appeal",
    "Chinese": "呼吁, 恳求"
  },
  {
    "English": "appease",
    "Chinese": "安抚, 缓和"
  },
  {
    "English": "deleterious",
    "Chinese": "有害的"
  },
  {
    "English": "ethereal",
    "Chinese": "虚无的"
  },
  {
    "English": "rehabilitate",
    "Chinese": "恢复"
  },
  {
    "English": "cluster",
    "Chinese": "聚集"
  },
  {
    "English": "partisan",
    "Chinese": "强硬支持者（盲目的, 偏见的, 不理性的支持）"
  },
  {
    "English": "bypass",
    "Chinese": "绕过"
  },
  {
    "English": "scrupulous",
    "Chinese": "小心谨慎的"
  },
  {
    "English": "monolithic",
    "Chinese": "庞大而僵硬的"
  },
  {
    "English": "scathing",
    "Chinese": "尖酸刻薄的"
  },
  {
    "English": "block",
    "Chinese": "阻碍, 妨碍"
  },
  {
    "English": "off-putting",
    "Chinese": "令人反感的"
  },
  {
    "English": "profligate",
    "Chinese": "奢侈的, 花钱大手大脚的"
  },
  {
    "English": "unctuous",
    "Chinese": "虚情假意的"
  },
  {
    "English": "nimble",
    "Chinese": "灵敏的, 轻快的"
  },
  {
    "English": "shoddy",
    "Chinese": "劣质的"
  },
  {
    "English": "heterogeneous",
    "Chinese": "组成多样的, 混合的"
  },
  {
    "English": "verisimilitude",
    "Chinese": "逼真"
  },
  {
    "English": "derivative",
    "Chinese": "非原创的"
  },
  {
    "English": "sycophantic",
    "Chinese": "奉承的"
  },
  {
    "English": "circumvent",
    "Chinese": "绕过, 回避"
  },
  {
    "English": "rigid",
    "Chinese": "僵硬的"
  },
  {
    "English": "plaintive",
    "Chinese": "痛苦的"
  },
  {
    "English": "detestation",
    "Chinese": "厌恶, 反感"
  },
  {
    "English": "susceptible",
    "Chinese": "易受影响的"
  },
  {
    "English": "tautology",
    "Chinese": "赘述"
  },
  {
    "English": "leaven",
    "Chinese": "使...生动, 使...更有趣"
  },
  {
    "English": "convulsion",
    "Chinese": "骚乱, 动乱"
  },
  {
    "English": "exorbitant",
    "Chinese": "过度的, 超出合理范围的"
  },
  {
    "English": "corollary",
    "Chinese": "推论, 结果"
  },
  {
    "English": "perforce",
    "Chinese": "必然地"
  },
  {
    "English": "proselytize",
    "Chinese": "劝诱, 使变节"
  },
  {
    "English": "fetishize",
    "Chinese": "把…当成神物而崇拜"
  },
  {
    "English": "omnivorous",
    "Chinese": "杂食的"
  },
  {
    "English": "urbane",
    "Chinese": "礼貌的"
  },
  {
    "English": "idiosyncrasy",
    "Chinese": "独特的气质"
  },
  {
    "English": "forthcoming",
    "Chinese": "直白的"
  },
  {
    "English": "pecuniary",
    "Chinese": "金钱的"
  },
  {
    "English": "pathos",
    "Chinese": "怜悯, 同情"
  },
  {
    "English": "cosmopolitan",
    "Chinese": "见多识广的"
  },
  {
    "English": "panoply",
    "Chinese": "大批, 全副（装备）"
  },
  {
    "English": "arboreal",
    "Chinese": "树的"
  },
  {
    "English": "nostalgia",
    "Chinese": "思乡"
  },
  {
    "English": "peremptory",
    "Chinese": "不容反抗的, 断然的"
  },
  {
    "English": "avian",
    "Chinese": "跟鸟有关的"
  },
  {
    "English": "ramshackle",
    "Chinese": "摇摇欲坠的"
  },
  {
    "English": "quiver",
    "Chinese": "战栗"
  },
  {
    "English": "rancor",
    "Chinese": "憎恨"
  },
  {
    "English": "dewy-eyed",
    "Chinese": "天真的, 朴素的"
  },
  {
    "English": "epitome",
    "Chinese": "典型"
  },
  {
    "English": "fissure",
    "Chinese": "裂缝"
  },
  {
    "English": "parley",
    "Chinese": "谈判"
  },
  {
    "English": "immolate",
    "Chinese": "用火摧毁"
  },
  {
    "English": "lassitude",
    "Chinese": "无精打采"
  },
  {
    "English": "pompous",
    "Chinese": "过于华丽的"
  },
  {
    "English": "overreach",
    "Chinese": "因野心勃勃而失败"
  },
  {
    "English": "demarcate",
    "Chinese": "划分边界"
  },
  {
    "English": "evince",
    "Chinese": "显示"
  },
  {
    "English": "veer",
    "Chinese": "改变方向"
  },
  {
    "English": "resilient",
    "Chinese": "能（从困境中）恢复的"
  },
  {
    "English": "revolt",
    "Chinese": "反叛, 反抗"
  },
  {
    "English": "devolve",
    "Chinese": "衰落"
  },
  {
    "English": "adulation",
    "Chinese": "恭维, 吹捧"
  },
  {
    "English": "demolish",
    "Chinese": "拆毁"
  },
  {
    "English": "timely",
    "Chinese": "合时宜地"
  },
  {
    "English": "snapshot",
    "Chinese": "大致情况, 简介"
  },
  {
    "English": "obsequious",
    "Chinese": "谄媚的"
  },
  {
    "English": "gut",
    "Chinese": "内心深处"
  },
  {
    "English": "hierarchy",
    "Chinese": "等级制度, 有等级划分的组织"
  },
  {
    "English": "terse",
    "Chinese": "简洁的"
  },
  {
    "English": "abate",
    "Chinese": "减弱"
  },
  {
    "English": "fluster",
    "Chinese": "使...不安"
  },
  {
    "English": "flatter",
    "Chinese": "谄媚, 拍马屁"
  },
  {
    "English": "accentuate",
    "Chinese": "强调"
  },
  {
    "English": "augment",
    "Chinese": "放大"
  },
  {
    "English": "certitude",
    "Chinese": "确信无疑"
  },
  {
    "English": "cachet",
    "Chinese": "声望, 威望"
  },
  {
    "English": "contrite",
    "Chinese": "后悔的"
  },
  {
    "English": "unanimous",
    "Chinese": "意见一致的"
  },
  {
    "English": "neologism",
    "Chinese": "新词, 新意思"
  },
  {
    "English": "aristocracy",
    "Chinese": "贵族统治, 精英统治"
  },
  {
    "English": "inimical",
    "Chinese": "有害的, 不友好的"
  },
  {
    "English": "hallow",
    "Chinese": "尊敬, 崇敬"
  },
  {
    "English": "annals",
    "Chinese": "历史记载"
  },
  {
    "English": "execrate",
    "Chinese": "痛斥"
  },
  {
    "English": "unexampled",
    "Chinese": "史无前例的"
  },
  {
    "English": "tug",
    "Chinese": "用力拉"
  },
  {
    "English": "claustrophobic",
    "Chinese": "狭小而引起不适的"
  },
  {
    "English": "atavism",
    "Chinese": "重现"
  },
  {
    "English": "prepossessing",
    "Chinese": "有吸引力的"
  },
  {
    "English": "perfidious",
    "Chinese": "不可信赖的"
  },
  {
    "English": "jubilation",
    "Chinese": "高兴, 喜悦"
  },
  {
    "English": "peregrination",
    "Chinese": "长途旅行,游历"
  },
  {
    "English": "retribution",
    "Chinese": "惩罚"
  },
  {
    "English": "charlatan",
    "Chinese": "骗子"
  },
  {
    "English": "malinger",
    "Chinese": "装病以逃避工作"
  },
  {
    "English": "halcyon",
    "Chinese": "岁月静好的, 安宁的"
  },
  {
    "English": "predominant",
    "Chinese": "最显著的, 主导的"
  },
  {
    "English": "evocative",
    "Chinese": "唤起的"
  },
  {
    "English": "nonchalant",
    "Chinese": "漠不关心的"
  },
  {
    "English": "ennoble",
    "Chinese": "使…崇高"
  },
  {
    "English": "eradicate",
    "Chinese": "根除"
  },
  {
    "English": "prodigal",
    "Chinese": "奢侈浪费的"
  },
  {
    "English": "disengage",
    "Chinese": "使解脱"
  },
  {
    "English": "rebound",
    "Chinese": "从挫败中恢复"
  },
  {
    "English": "adhere",
    "Chinese": "依附于…,坚持"
  },
  {
    "English": "unilateral",
    "Chinese": "单方面的"
  },
  {
    "English": "equable",
    "Chinese": "平静的"
  },
  {
    "English": "instantiate",
    "Chinese": "举例, 例证"
  },
  {
    "English": "diverse",
    "Chinese": "多样的, 不同的"
  },
  {
    "English": "protean",
    "Chinese": "多样的"
  },
  {
    "English": "pillory",
    "Chinese": "批评"
  },
  {
    "English": "exuberant",
    "Chinese": "过量的"
  },
  {
    "English": "plunder",
    "Chinese": "掠夺"
  },
  {
    "English": "ennui",
    "Chinese": "无趣, 无聊"
  },
  {
    "English": "conceive",
    "Chinese": "构想, 创造"
  },
  {
    "English": "devoid",
    "Chinese": "缺乏的"
  },
  {
    "English": "sophisticated",
    "Chinese": "精于世故的, 老练的"
  },
  {
    "English": "conclusive",
    "Chinese": "终结的, 最终的"
  },
  {
    "English": "enlighten",
    "Chinese": "启迪, 开导"
  },
  {
    "English": "methodology",
    "Chinese": "方法论"
  },
  {
    "English": "tectonic",
    "Chinese": "建筑的"
  },
  {
    "English": "monogamy",
    "Chinese": "一夫一妻制"
  },
  {
    "English": "pathogen",
    "Chinese": "病原体"
  },
  {
    "English": "depict",
    "Chinese": "描述"
  },
  {
    "English": "dismissive",
    "Chinese": "轻视的, 无视的"
  },
  {
    "English": "invertebrate",
    "Chinese": "软弱无力的"
  },
  {
    "English": "discrepancy",
    "Chinese": "差异"
  },
  {
    "English": "demographic",
    "Chinese": "与人口统计有关的"
  },
  {
    "English": "forage",
    "Chinese": "寻找（食物）"
  },
  {
    "English": "synchronous",
    "Chinese": "同时的"
  },
  {
    "English": "hagiography",
    "Chinese": "(夸大的）传记"
  },
  {
    "English": "monochromatic",
    "Chinese": "单调的"
  },
  {
    "English": "employ",
    "Chinese": "使用"
  },
  {
    "English": "indigenous",
    "Chinese": "当地的"
  },
  {
    "English": "insurrection",
    "Chinese": "造反"
  },
  {
    "English": "ideology",
    "Chinese": "思想体系, 意识形态"
  },
  {
    "English": "segregate",
    "Chinese": "分离, 隔离"
  },
  {
    "English": "propound",
    "Chinese": "提出…供考虑"
  },
  {
    "English": "adulterate",
    "Chinese": "掺假"
  },
  {
    "English": "expository",
    "Chinese": "解释的, 阐释的"
  },
  {
    "English": "anemia",
    "Chinese": "缺乏活力"
  },
  {
    "English": "excavate",
    "Chinese": "开凿, 挖出"
  },
  {
    "English": "acerbic",
    "Chinese": "（语言）辛辣尖刻的"
  },
  {
    "English": "resurgence",
    "Chinese": "复苏"
  },
  {
    "English": "colloquial",
    "Chinese": "口头的, 非正式的"
  },
  {
    "English": "interjection",
    "Chinese": "插话"
  },
  {
    "English": "hoodwink",
    "Chinese": "欺骗"
  },
  {
    "English": "analogous",
    "Chinese": "相似的"
  },
  {
    "English": "latent",
    "Chinese": "潜藏的, 潜在的"
  },
  {
    "English": "boycott",
    "Chinese": "抵制"
  },
  {
    "English": "sentimental",
    "Chinese": "感情用事的"
  },
  {
    "English": "castigate",
    "Chinese": "严厉批评"
  },
  {
    "English": "preeminent",
    "Chinese": "杰出的, 独一无二的"
  },
  {
    "English": "terminology",
    "Chinese": "术语"
  },
  {
    "English": "domesticate",
    "Chinese": "驯服"
  },
  {
    "English": "pedagogical",
    "Chinese": "教育学的"
  },
  {
    "English": "skew",
    "Chinese": "歪曲, 曲解"
  },
  {
    "English": "static",
    "Chinese": "静态的"
  },
  {
    "English": "discrete",
    "Chinese": "分开的, 分离的"
  },
  {
    "English": "corrode",
    "Chinese": "削弱, 破坏"
  },
  {
    "English": "protagonist",
    "Chinese": "重要人物"
  },
  {
    "English": "forerunner",
    "Chinese": "先驱"
  },
  {
    "English": "clutch",
    "Chinese": "抓住"
  },
  {
    "English": "straggle",
    "Chinese": "迷路"
  },
  {
    "English": "rhetorical",
    "Chinese": "有说服力的"
  },
  {
    "English": "equilibrium",
    "Chinese": "平衡"
  },
  {
    "English": "quintessential",
    "Chinese": "精华的, 典型的"
  },
  {
    "English": "regimen",
    "Chinese": "统治, 政府统治"
  },
  {
    "English": "objective",
    "Chinese": "客观的"
  },
  {
    "English": "postulate",
    "Chinese": "假设, 假定"
  },
  {
    "English": "onset",
    "Chinese": "开始"
  },
  {
    "English": "impinge",
    "Chinese": "猛烈撞击"
  },
  {
    "English": "thrive",
    "Chinese": "兴旺发达"
  },
  {
    "English": "milieu",
    "Chinese": "环境"
  },
  {
    "English": "paradoxical",
    "Chinese": "不寻常的"
  },
  {
    "English": "iterate",
    "Chinese": "重说一遍, 重做一遍"
  },
  {
    "English": "prophetic",
    "Chinese": "预言的"
  },
  {
    "English": "delineate",
    "Chinese": "描绘轮廓"
  },
  {
    "English": "condone",
    "Chinese": "原谅, 认可"
  },
  {
    "English": "acumen",
    "Chinese": "机智, 精明"
  },
  {
    "English": "agonize",
    "Chinese": "感到痛苦，挣扎"
  },
  {
    "English": "revere",
    "Chinese": "尊敬"
  },
  {
    "English": "reckless",
    "Chinese": "粗心的, 鲁莽的"
  },
  {
    "English": "unsparing",
    "Chinese": "无情的, 苛求的"
  },
  {
    "English": "belligerent",
    "Chinese": "好斗的"
  },
  {
    "English": "taciturn",
    "Chinese": "沉默寡言的"
  },
  {
    "English": "penitential",
    "Chinese": "后悔的, 忏悔的"
  },
  {
    "English": "frivolous",
    "Chinese": "无关紧要的"
  },
  {
    "English": "plead",
    "Chinese": "辩护"
  },
  {
    "English": "orthodox",
    "Chinese": "主流的"
  },
  {
    "English": "allege",
    "Chinese": "断言, 宣称"
  },
  {
    "English": "reconcile",
    "Chinese": "调和"
  },
  {
    "English": "improvise",
    "Chinese": "即兴表演"
  },
  {
    "English": "eliminate",
    "Chinese": "移除, 去掉"
  },
  {
    "English": "disquiet",
    "Chinese": "使...不安"
  },
  {
    "English": "predicament",
    "Chinese": "困境"
  },
  {
    "English": "fester",
    "Chinese": "恶化"
  },
  {
    "English": "accord",
    "Chinese": "和谐, 一致"
  },
  {
    "English": "ascertain",
    "Chinese": "查明"
  },
  {
    "English": "counterproductive",
    "Chinese": "起反作用的, 事与愿违的"
  },
  {
    "English": "misnomer",
    "Chinese": "误称"
  },
  {
    "English": "precarious",
    "Chinese": "处境危险的"
  },
  {
    "English": "unrelenting",
    "Chinese": "不屈的"
  },
  {
    "English": "soporific",
    "Chinese": "令人昏昏欲睡的"
  },
  {
    "English": "disseminate",
    "Chinese": "传播, 散布"
  },
  {
    "English": "lure",
    "Chinese": "诱惑"
  },
  {
    "English": "banish",
    "Chinese": "驱逐"
  },
  {
    "English": "degrade",
    "Chinese": "贬低"
  },
  {
    "English": "skittish",
    "Chinese": "多变的"
  },
  {
    "English": "tranquil",
    "Chinese": "安静的"
  },
  {
    "English": "seemly",
    "Chinese": "好看的"
  },
  {
    "English": "unkempt",
    "Chinese": "不整洁的, 邋遢的"
  },
  {
    "English": "decorous",
    "Chinese": "得体的"
  },
  {
    "English": "tawdry",
    "Chinese": "俗气的"
  },
  {
    "English": "décor",
    "Chinese": "（装修的）格调, 风格"
  },
  {
    "English": "lush",
    "Chinese": "茂盛的, 郁郁葱葱的"
  },
  {
    "English": "acidic",
    "Chinese": "酸的, 尖酸刻薄的"
  },
  {
    "English": "coarse",
    "Chinese": "粗糙的"
  },
  {
    "English": "impoverished",
    "Chinese": "贫瘠的, 贫穷的"
  },
  {
    "English": "threshold",
    "Chinese": "阈值, 临界点"
  },
  {
    "English": "disparage",
    "Chinese": "鄙视"
  },
  {
    "English": "invalidate",
    "Chinese": "削弱, 使...无效"
  },
  {
    "English": "hackneyed",
    "Chinese": "陈词滥调的"
  },
  {
    "English": "ruminate",
    "Chinese": "仔细思考"
  },
  {
    "English": "meander",
    "Chinese": "漫无目的地走动"
  },
  {
    "English": "bucolic",
    "Chinese": "乡间生活的"
  },
  {
    "English": "pastoral",
    "Chinese": "乡间生活的"
  },
  {
    "English": "hard-nosed",
    "Chinese": "顽强的"
  },
  {
    "English": "petty",
    "Chinese": "不重要的, 次要的"
  },
  {
    "English": "opportunistic",
    "Chinese": "机会主义的, 投机的"
  },
  {
    "English": "menace",
    "Chinese": "威胁"
  },
  {
    "English": "painstaking",
    "Chinese": "勤奋努力的"
  },
  {
    "English": "humanitarian",
    "Chinese": "人道的, 博爱的"
  },
  {
    "English": "predispose",
    "Chinese": "使....易受感染"
  },
  {
    "English": "eminent",
    "Chinese": "杰出的"
  },
  {
    "English": "declamatory",
    "Chinese": "演说般的, 慷慨激昂的"
  },
  {
    "English": "ascetic",
    "Chinese": "生活朴素的"
  },
  {
    "English": "safeguard",
    "Chinese": "保护"
  },
  {
    "English": "sinister",
    "Chinese": "邪恶的"
  },
  {
    "English": "convincing",
    "Chinese": "有说服力的"
  },
  {
    "English": "peak",
    "Chinese": "顶点, 顶峰"
  },
  {
    "English": "unrivaled",
    "Chinese": "无法匹敌的"
  },
  {
    "English": "pivotal",
    "Chinese": "非常重要的"
  },
  {
    "English": "recondite",
    "Chinese": "难懂的"
  },
  {
    "English": "morbid",
    "Chinese": "不健康的"
  },
  {
    "English": "staple",
    "Chinese": "（食物, 商品等）必要的"
  },
  {
    "English": "herald",
    "Chinese": "前兆"
  },
  {
    "English": "cure-all",
    "Chinese": "万能灵药"
  },
  {
    "English": "ruthless",
    "Chinese": "无情的, 残忍的"
  },
  {
    "English": "scorn",
    "Chinese": "鄙视, 嘲笑"
  },
  {
    "English": "acquisitive",
    "Chinese": "贪婪的"
  },
  {
    "English": "clangorous",
    "Chinese": "叮当响的, 响亮的"
  },
  {
    "English": "rejuvenate",
    "Chinese": "使...重新有活力"
  },
  {
    "English": "obsess",
    "Chinese": "沉迷于…"
  },
  {
    "English": "canonical",
    "Chinese": "（书籍等在某个领域）经典之作的"
  },
  {
    "English": "undo",
    "Chinese": "撤销"
  },
  {
    "English": "obsolete",
    "Chinese": "过时的"
  },
  {
    "English": "quotidian",
    "Chinese": "普通的"
  },
  {
    "English": "pathetic",
    "Chinese": "可怜的"
  },
  {
    "English": "bathetic",
    "Chinese": "陈腐的"
  },
  {
    "English": "veracious",
    "Chinese": "真实的"
  },
  {
    "English": "voracious",
    "Chinese": "贪婪的"
  },
  {
    "English": "exploit",
    "Chinese": "充分利用"
  },
  {
    "English": "retrofit",
    "Chinese": "翻新"
  },
  {
    "English": "witty",
    "Chinese": "机智幽默的"
  },
  {
    "English": "provocative",
    "Chinese": "引起争论的，启发的"
  },
  {
    "English": "impecunious",
    "Chinese": "贫穷的"
  },
  {
    "English": "assiduous",
    "Chinese": "努力的"
  },
  {
    "English": "tacit",
    "Chinese": "不言而喻的, 心照不宣的"
  },
  {
    "English": "transgress",
    "Chinese": "违反, 违背"
  },
  {
    "English": "abstruse",
    "Chinese": "难以理解的"
  },
  {
    "English": "embed",
    "Chinese": "嵌入"
  },
  {
    "English": "render",
    "Chinese": "使...进入某种状态"
  },
  {
    "English": "alter",
    "Chinese": "改变"
  },
  {
    "English": "penchant",
    "Chinese": "倾向"
  },
  {
    "English": "tailor",
    "Chinese": "修改"
  },
  {
    "English": "homogeneous",
    "Chinese": "同种的，相似的"
  },
  {
    "English": "immense",
    "Chinese": "巨大的"
  },
  {
    "English": "kindred",
    "Chinese": "相关的, 相似的"
  },
  {
    "English": "affiliate",
    "Chinese": "附属"
  },
  {
    "English": "run-of-the-mill",
    "Chinese": "平凡的"
  },
  {
    "English": "refuge",
    "Chinese": "避难所"
  },
  {
    "English": "oratorical",
    "Chinese": "口才的"
  },
  {
    "English": "incense",
    "Chinese": "激怒"
  },
  {
    "English": "mortify",
    "Chinese": "使...尴尬"
  },
  {
    "English": "heterodox",
    "Chinese": "异端邪说的, 非主流观点的"
  },
  {
    "English": "doctrinaire",
    "Chinese": "空谈理论的，教条的"
  },
  {
    "English": "sporadic",
    "Chinese": "不规律的，偶发的，随机的"
  },
  {
    "English": "dictate",
    "Chinese": "掌控, 支配"
  },
  {
    "English": "buoyant",
    "Chinese": "愉悦的"
  },
  {
    "English": "premonitory",
    "Chinese": "警告的"
  },
  {
    "English": "abreast",
    "Chinese": "与时俱进的"
  },
  {
    "English": "obstinate",
    "Chinese": "固执的"
  },
  {
    "English": "redeem",
    "Chinese": "赎罪"
  },
  {
    "English": "debacle",
    "Chinese": "大灾难"
  },
  {
    "English": "omit",
    "Chinese": "省略, 忽略"
  },
  {
    "English": "boon",
    "Chinese": "好处, 福利"
  },
  {
    "English": "hidebound",
    "Chinese": "守旧的"
  },
  {
    "English": "sullen",
    "Chinese": "阴郁的，生气的"
  },
  {
    "English": "prudent",
    "Chinese": "谨慎的"
  },
  {
    "English": "juxtapose",
    "Chinese": "并排放置"
  },
  {
    "English": "noxious",
    "Chinese": "有害的"
  },
  {
    "English": "obnoxious",
    "Chinese": "极其令人反感的"
  },
  {
    "English": "laborious",
    "Chinese": "费力的"
  },
  {
    "English": "rhapsody",
    "Chinese": "慷慨激昂的说辞"
  },
  {
    "English": "stanch",
    "Chinese": "阻止"
  },
  {
    "English": "divert",
    "Chinese": "分散, 转移（注意力, 精神）"
  },
  {
    "English": "bungle",
    "Chinese": "搞砸"
  },
  {
    "English": "pendulum",
    "Chinese": "（局势）摇摆不定"
  },
  {
    "English": "fixate",
    "Chinese": "注视, 全神贯注"
  },
  {
    "English": "aghast",
    "Chinese": "吃惊的"
  },
  {
    "English": "obdurate",
    "Chinese": "固执的"
  },
  {
    "English": "foresight",
    "Chinese": "远见"
  },
  {
    "English": "glamorous",
    "Chinese": "有吸引力的"
  },
  {
    "English": "relegate",
    "Chinese": "降低"
  },
  {
    "English": "apostle",
    "Chinese": "狂热的支持者"
  },
  {
    "English": "foreground",
    "Chinese": "强调"
  },
  {
    "English": "pious",
    "Chinese": "信仰虔诚的"
  },
  {
    "English": "self-righteous",
    "Chinese": "自以为是的"
  },
  {
    "English": "brandish",
    "Chinese": "炫耀"
  },
  {
    "English": "erroneous",
    "Chinese": "错误的"
  },
  {
    "English": "feasible",
    "Chinese": "可行的"
  },
  {
    "English": "schism",
    "Chinese": "分裂"
  },
  {
    "English": "notorious",
    "Chinese": "臭名昭著的"
  },
  {
    "English": "providential",
    "Chinese": "幸运的, 凑巧的"
  },
  {
    "English": "tumultuous",
    "Chinese": "混乱的"
  },
  {
    "English": "panache",
    "Chinese": "炫"
  },
  {
    "English": "gawky",
    "Chinese": "笨拙的"
  },
  {
    "English": "virulent",
    "Chinese": "有害的, 有毒的"
  },
  {
    "English": "malignant",
    "Chinese": "有害的"
  },
  {
    "English": "benign",
    "Chinese": "无害的"
  },
  {
    "English": "abridge",
    "Chinese": "缩短"
  },
  {
    "English": "lurid",
    "Chinese": "令人震惊的, 耸人听闻的"
  },
  {
    "English": "copious",
    "Chinese": "大量的"
  },
  {
    "English": "negligent",
    "Chinese": "疏忽大意的"
  },
  {
    "English": "sartorial",
    "Chinese": "与衣服相关的"
  },
  {
    "English": "supersede",
    "Chinese": "淘汰, 取代"
  },
  {
    "English": "thrill",
    "Chinese": "使...兴奋"
  },
  {
    "English": "approbate",
    "Chinese": "支持, 赞成"
  },
  {
    "English": "relinquish",
    "Chinese": "放弃"
  },
  {
    "English": "replenish",
    "Chinese": "补充, 修复"
  },
  {
    "English": "curtail",
    "Chinese": "削减"
  },
  {
    "English": "fabricate",
    "Chinese": "编造, 捏造"
  },
  {
    "English": "manacle",
    "Chinese": "限制"
  },
  {
    "English": "rein",
    "Chinese": "（马的）缰绳"
  },
  {
    "English": "bridle",
    "Chinese": "限制，抑制"
  },
  {
    "English": "grant",
    "Chinese": "承认"
  },
  {
    "English": "digress",
    "Chinese": "偏题, 跑题"
  },
  {
    "English": "entrench",
    "Chinese": "牢固地确立"
  },
  {
    "English": "prowess",
    "Chinese": "（超凡的）技巧, 能力"
  },
  {
    "English": "secular",
    "Chinese": "世俗的"
  },
  {
    "English": "ecstatic",
    "Chinese": "特别高兴的"
  },
  {
    "English": "euphoria",
    "Chinese": "特别高兴"
  },
  {
    "English": "disgruntle",
    "Chinese": "使...不高兴"
  },
  {
    "English": "gracious",
    "Chinese": "有礼貌的"
  },
  {
    "English": "humdrum",
    "Chinese": "无聊的, 千篇一律的"
  },
  {
    "English": "polarize",
    "Chinese": "使...两极化"
  },
  {
    "English": "hand-wringing",
    "Chinese": "焦虑的、绝望的言谈举止"
  },
  {
    "English": "prime",
    "Chinese": "使...准备好"
  },
  {
    "English": "vanquish",
    "Chinese": "打败, 战胜"
  },
  {
    "English": "triumph",
    "Chinese": "胜利, 成就"
  },
  {
    "English": "forge",
    "Chinese": "伪造, 造假"
  },
  {
    "English": "garrulous",
    "Chinese": "话多的"
  },
  {
    "English": "prevaricate",
    "Chinese": "搪塞, 闪烁其词"
  },
  {
    "English": "eclectic",
    "Chinese": "多元的"
  },
  {
    "English": "haughty",
    "Chinese": "高傲的, 傲慢的"
  },
  {
    "English": "dismantle",
    "Chinese": "拆开"
  },
  {
    "English": "propagate",
    "Chinese": "宣扬, 宣传"
  },
  {
    "English": "caricature",
    "Chinese": "讽刺画"
  },
  {
    "English": "abrade",
    "Chinese": "磨损"
  },
  {
    "English": "blight",
    "Chinese": "破坏"
  },
  {
    "English": "pristine",
    "Chinese": "原始的"
  },
  {
    "English": "apposite",
    "Chinese": "合适的, 相关的"
  },
  {
    "English": "germane",
    "Chinese": "相关的"
  },
  {
    "English": "fitful",
    "Chinese": "不规律的, 一阵阵的"
  },
  {
    "English": "imperturbable",
    "Chinese": "镇定的, 冷静的"
  },
  {
    "English": "exigent",
    "Chinese": "紧急的"
  },
  {
    "English": "surrogate",
    "Chinese": "代理"
  },
  {
    "English": "erstwhile",
    "Chinese": "过去地"
  },
  {
    "English": "onetime",
    "Chinese": "过去的, 之前的"
  },
  {
    "English": "florid",
    "Chinese": "过分修饰的, 花哨的"
  },
  {
    "English": "defame",
    "Chinese": "贬损, 玷污"
  },
  {
    "English": "inveigle",
    "Chinese": "诱骗"
  },
  {
    "English": "timorous",
    "Chinese": "胆小的"
  },
  {
    "English": "narcissism",
    "Chinese": "自恋"
  },
  {
    "English": "omniscient",
    "Chinese": "无所不知的"
  },
  {
    "English": "interminable",
    "Chinese": "持续的, 没完没了的"
  },
  {
    "English": "posture",
    "Chinese": "态度, 立场"
  },
  {
    "English": "substantiate",
    "Chinese": "证明"
  },
  {
    "English": "snare",
    "Chinese": "陷阱"
  },
  {
    "English": "forestall",
    "Chinese": "阻止"
  },
  {
    "English": "beholden",
    "Chinese": "亏欠的"
  },
  {
    "English": "indebted",
    "Chinese": "感激的"
  },
  {
    "English": "impute",
    "Chinese": "归罪于, 归咎于"
  },
  {
    "English": "brazen",
    "Chinese": "厚颜无耻的, 臭不要脸的"
  },
  {
    "English": "nettle",
    "Chinese": "使... 生气"
  },
  {
    "English": "contemptuous",
    "Chinese": "鄙视的"
  },
  {
    "English": "objurgation",
    "Chinese": "斥责, 非难"
  },
  {
    "English": "nascent",
    "Chinese": "初始的"
  },
  {
    "English": "token",
    "Chinese": "象征"
  },
  {
    "English": "residual",
    "Chinese": "剩余的, 残留的"
  },
  {
    "English": "deft",
    "Chinese": "灵巧的"
  },
  {
    "English": "eloquent",
    "Chinese": "能说会道的, 能言善辩的"
  },
  {
    "English": "adroit",
    "Chinese": "灵巧的"
  },
  {
    "English": "plentiful",
    "Chinese": "慷慨的"
  },
  {
    "English": "bountiful",
    "Chinese": "丰富的"
  },
  {
    "English": "clearheaded",
    "Chinese": "思路清晰的"
  },
  {
    "English": "interweave",
    "Chinese": "混合"
  },
  {
    "English": "impolitic",
    "Chinese": "不明智的"
  },
  {
    "English": "feeble",
    "Chinese": "衰弱的, 虚弱的"
  },
  {
    "English": "prerogative",
    "Chinese": "特权"
  },
  {
    "English": "vigilant",
    "Chinese": "警惕的"
  },
  {
    "English": "clumsy",
    "Chinese": "笨拙的"
  },
  {
    "English": "fringe",
    "Chinese": "次要的, 边缘的, 不重要的"
  },
  {
    "English": "denigrate",
    "Chinese": "攻击, 贬损"
  },
  {
    "English": "implore",
    "Chinese": "恳求, 哀求"
  },
  {
    "English": "supplicate",
    "Chinese": "恳求"
  },
  {
    "English": "willful",
    "Chinese": "固执任性的"
  },
  {
    "English": "entreaty",
    "Chinese": "恳求"
  },
  {
    "English": "notwithstanding",
    "Chinese": "尽管"
  },
  {
    "English": "insipid",
    "Chinese": "无聊的"
  },
  {
    "English": "modish",
    "Chinese": "时髦的"
  },
  {
    "English": "salubrious",
    "Chinese": "有益健康的"
  },
  {
    "English": "treacherous",
    "Chinese": "不可靠的, 背叛的"
  },
  {
    "English": "objectionable",
    "Chinese": "令人反感的"
  },
  {
    "English": "recrudesce",
    "Chinese": "复发"
  },
  {
    "English": "tangible",
    "Chinese": "可感知的, 实实在在的"
  },
  {
    "English": "nebulous",
    "Chinese": "模糊的, 不清楚的"
  },
  {
    "English": "utter",
    "Chinese": "完全的"
  },
  {
    "English": "aberrant",
    "Chinese": "不正常的"
  },
  {
    "English": "doom",
    "Chinese": "注定（失败）"
  },
  {
    "English": "slender",
    "Chinese": "缺少的, 不足的"
  },
  {
    "English": "garner",
    "Chinese": "收集"
  },
  {
    "English": "recruit",
    "Chinese": "招募"
  },
  {
    "English": "provision",
    "Chinese": "预备, 预先采取的措施"
  },
  {
    "English": "prompt",
    "Chinese": "促进, 激起"
  },
  {
    "English": "assail",
    "Chinese": "批评, 攻击"
  },
  {
    "English": "endow",
    "Chinese": "赋予"
  },
  {
    "English": "intrude",
    "Chinese": "闯入"
  },
  {
    "English": "designate",
    "Chinese": "指定的, 选定的"
  },
  {
    "English": "tackle",
    "Chinese": "着手处理"
  },
  {
    "English": "prosecute",
    "Chinese": "从事"
  },
  {
    "English": "abolish",
    "Chinese": "废除, 废止"
  },
  {
    "English": "bestow",
    "Chinese": "授予, 给予"
  },
  {
    "English": "compile",
    "Chinese": "编辑"
  },
  {
    "English": "requisite",
    "Chinese": "必要的"
  },
  {
    "English": "splendor",
    "Chinese": "光辉, 壮丽"
  },
  {
    "English": "exempt",
    "Chinese": "被免除的"
  },
  {
    "English": "invoke",
    "Chinese": "引述"
  },
  {
    "English": "entrust",
    "Chinese": "委托, 托付"
  },
  {
    "English": "alliance",
    "Chinese": "联盟, 联合"
  },
  {
    "English": "periodical",
    "Chinese": "周期的"
  },
  {
    "English": "spacious",
    "Chinese": "宽敞的"
  },
  {
    "English": "eligible",
    "Chinese": "合格的"
  },
  {
    "English": "strenuous",
    "Chinese": "费力的"
  },
  {
    "English": "adjacent",
    "Chinese": "相邻的"
  },
  {
    "English": "wrench",
    "Chinese": "猛扭"
  },
  {
    "English": "confiscate",
    "Chinese": "没收"
  },
  {
    "English": "ferocious",
    "Chinese": "凶猛的, 残忍的"
  },
  {
    "English": "velocity",
    "Chinese": "速度, 迅速"
  },
  {
    "English": "consign",
    "Chinese": "委托, 转交"
  },
  {
    "English": "grapple",
    "Chinese": "抓住"
  },
  {
    "English": "deviate",
    "Chinese": "脱离, 偏离"
  },
  {
    "English": "prodigious",
    "Chinese": "惊人的"
  },
  {
    "English": "induce",
    "Chinese": "诱导"
  },
  {
    "English": "assimilate",
    "Chinese": "吸收"
  },
  {
    "English": "encroach",
    "Chinese": "侵占"
  },
  {
    "English": "embody",
    "Chinese": "体现"
  },
  {
    "English": "coincide",
    "Chinese": "碰巧"
  },
  {
    "English": "confer",
    "Chinese": "授予, 给予"
  },
  {
    "English": "subdue",
    "Chinese": "征服, 打败"
  },
  {
    "English": "fatal",
    "Chinese": "致命的"
  },
  {
    "English": "dwell",
    "Chinese": "居住"
  },
  {
    "English": "comprise",
    "Chinese": "构成"
  },
  {
    "English": "vicinity",
    "Chinese": "周边环境"
  },
  {
    "English": "tentative",
    "Chinese": "试探性的，临时的"
  },
  {
    "English": "pillage",
    "Chinese": "掠夺"
  },
  {
    "English": "pinnacle",
    "Chinese": "顶点"
  },
  {
    "English": "ailment",
    "Chinese": "疾病"
  },
  {
    "English": "apprentice",
    "Chinese": "新手"
  },
  {
    "English": "preoccupied",
    "Chinese": "专注的"
  },
  {
    "English": "exhale",
    "Chinese": "呼出"
  },
  {
    "English": "rebuke",
    "Chinese": "指责, 非难"
  },
  {
    "English": "cavalier",
    "Chinese": "随便的，轻蔑的"
  },
  {
    "English": "hereditary",
    "Chinese": "遗传的"
  },
  {
    "English": "shallow",
    "Chinese": "肤浅的"
  },
  {
    "English": "deflect",
    "Chinese": "使…偏离, 改变方向"
  },
  {
    "English": "finesse",
    "Chinese": "技巧高超"
  },
  {
    "English": "belated",
    "Chinese": "晚的, 迟的"
  },
  {
    "English": "sheer",
    "Chinese": "完全的"
  },
  {
    "English": "levity",
    "Chinese": "不严肃, 轻浮"
  },
  {
    "English": "insidious",
    "Chinese": "阴险的, 暗中为害的"
  },
  {
    "English": "amass",
    "Chinese": "积聚, 积累"
  },
  {
    "English": "ostensible",
    "Chinese": "表面的, 虚假的"
  },
  {
    "English": "somber",
    "Chinese": "严肃的, 悲伤的"
  },
  {
    "English": "profound",
    "Chinese": "深刻的"
  },
  {
    "English": "contour",
    "Chinese": "轮廓"
  },
  {
    "English": "chaos",
    "Chinese": "混乱"
  },
  {
    "English": "voluminous",
    "Chinese": "巨大的, 大量的"
  },
  {
    "English": "revile",
    "Chinese": "辱骂, 斥责"
  },
  {
    "English": "corporeal",
    "Chinese": "肉体的, 有实体存在的"
  },
  {
    "English": "oscillate",
    "Chinese": "犹豫不决"
  },
  {
    "English": "monarchy",
    "Chinese": "君主政体"
  },
  {
    "English": "inoculate",
    "Chinese": "（给某人）灌输, 注入（想法）"
  },
  {
    "English": "subsist",
    "Chinese": "维持生存, 生存下去"
  },
  {
    "English": "suffrage",
    "Chinese": "选举权"
  },
  {
    "English": "patron",
    "Chinese": "赞助人"
  },
  {
    "English": "exile",
    "Chinese": "流放, 放逐"
  },
  {
    "English": "inhospitable",
    "Chinese": "不友好的"
  },
  {
    "English": "oblique",
    "Chinese": "间接的"
  },
  {
    "English": "bequeath",
    "Chinese": "遗赠"
  },
  {
    "English": "retention",
    "Chinese": "保留"
  },
  {
    "English": "ramify",
    "Chinese": "使分叉"
  },
  {
    "English": "prescribe",
    "Chinese": "规定"
  },
  {
    "English": "deprive",
    "Chinese": "使丧失, 剥夺"
  },
  {
    "English": "necessitate",
    "Chinese": "使成为必要"
  },
  {
    "English": "inhale",
    "Chinese": "吸入"
  },
  {
    "English": "dexterity",
    "Chinese": "灵巧，敏婕"
  },
  {
    "English": "ooze",
    "Chinese": "渗出"
  },
  {
    "English": "patronize",
    "Chinese": "赞助"
  },
  {
    "English": "eject",
    "Chinese": "驱逐, 逐出"
  },
  {
    "English": "overdue",
    "Chinese": "延误的, 拖延的"
  },
  {
    "English": "brusque",
    "Chinese": "唐突的, 无礼的"
  },
  {
    "English": "prose",
    "Chinese": "平凡的, 乏味的(与prosaic相同）"
  },
  {
    "English": "uprising",
    "Chinese": "起义, 叛乱"
  },
  {
    "English": "touchstone",
    "Chinese": "检验标准"
  },
  {
    "English": "purveyor",
    "Chinese": "供应商"
  },
  {
    "English": "parody",
    "Chinese": "拙劣的模仿"
  },
  {
    "English": "decimate",
    "Chinese": "（严重地）破坏"
  },
  {
    "English": "decipher",
    "Chinese": "解释, 破译"
  },
  {
    "English": "amenable",
    "Chinese": "愿意的, 服从的"
  },
  {
    "English": "siphon",
    "Chinese": "抽走（资金, 资源）"
  },
  {
    "English": "annotate",
    "Chinese": "注释"
  },
  {
    "English": "procure",
    "Chinese": "获得"
  },
  {
    "English": "hiatus",
    "Chinese": "间歇"
  },
  {
    "English": "cantankerous",
    "Chinese": "易怒的"
  },
  {
    "English": "escalate",
    "Chinese": "加剧, 恶化"
  },
  {
    "English": "bombard",
    "Chinese": "（如炸弹般）攻击（人或事物）"
  },
  {
    "English": "vernacular",
    "Chinese": "口头语的, 俗语的"
  },
  {
    "English": "prevail",
    "Chinese": "流行"
  },
  {
    "English": "scenario",
    "Chinese": "情形"
  },
  {
    "English": "hitherto",
    "Chinese": "至今"
  },
  {
    "English": "vertiginous",
    "Chinese": "令人眩晕的"
  },
  {
    "English": "bravado",
    "Chinese": "装作勇敢"
  },
  {
    "English": "steadfast",
    "Chinese": "坚定不移的"
  },
  {
    "English": "oblivious",
    "Chinese": "无意识的, 遗忘的"
  },
  {
    "English": "refractory",
    "Chinese": "不服管的，难处理的"
  },
  {
    "English": "resign",
    "Chinese": "接受"
  },
  {
    "English": "abiding",
    "Chinese": "长期的"
  },
  {
    "English": "dull",
    "Chinese": "无聊的"
  },
  {
    "English": "debonair",
    "Chinese": "彬彬有礼的"
  },
  {
    "English": "infuriate",
    "Chinese": "使...愤怒"
  },
  {
    "English": "crestfallen",
    "Chinese": "沮丧的"
  },
  {
    "English": "wistful",
    "Chinese": "渴望的,思念过去的"
  },
  {
    "English": "concur",
    "Chinese": "同意"
  },
  {
    "English": "boast",
    "Chinese": "吹嘘"
  },
  {
    "English": "extrapolate",
    "Chinese": "（依据已知信息）推测"
  },
  {
    "English": "resemble",
    "Chinese": "与...相似"
  },
  {
    "English": "ordain",
    "Chinese": "命令"
  },
  {
    "English": "mirth",
    "Chinese": "欢乐"
  },
  {
    "English": "jovial",
    "Chinese": "高兴"
  },
  {
    "English": "cajole",
    "Chinese": "哄骗"
  },
  {
    "English": "baneful",
    "Chinese": "有害的"
  },
  {
    "English": "identical",
    "Chinese": "完全一样的"
  },
  {
    "English": "proscribe",
    "Chinese": "禁止"
  },
  {
    "English": "arguably",
    "Chinese": "可以这样说地"
  },
  {
    "English": "obstreperous",
    "Chinese": "不服管的,桀骜不驯的"
  },
  {
    "English": "volition",
    "Chinese": "自愿选择, 自行决定"
  },
  {
    "English": "hectic",
    "Chinese": "非常忙碌的"
  },
  {
    "English": "sumptuous",
    "Chinese": "奢侈的, 华丽的"
  },
  {
    "English": "gravitate",
    "Chinese": "被吸引到..., 倾向"
  },
  {
    "English": "particularize",
    "Chinese": "详细阐述"
  },
  {
    "English": "albeit",
    "Chinese": "即使"
  },
  {
    "English": "abet",
    "Chinese": "怂恿, 支持, 教唆（犯罪）"
  },
  {
    "English": "anodyne",
    "Chinese": "不惹人厌烦的"
  },
  {
    "English": "credulous",
    "Chinese": "易受欺骗的"
  },
  {
    "English": "asunder",
    "Chinese": "分裂的"
  },
  {
    "English": "petulant",
    "Chinese": "（说话, 行为）粗鲁无礼的"
  },
  {
    "English": "winnow",
    "Chinese": "筛选"
  },
  {
    "English": "yearn",
    "Chinese": "强烈渴望"
  },
  {
    "English": "indulgent",
    "Chinese": "纵容的"
  },
  {
    "English": "preside",
    "Chinese": "主持, 负责"
  },
  {
    "English": "meretricious",
    "Chinese": "俗里俗气的"
  },
  {
    "English": "burgeon",
    "Chinese": "繁荣, 快速增长"
  },
  {
    "English": "flourish",
    "Chinese": "繁荣"
  },
  {
    "English": "gigantic",
    "Chinese": "极大的"
  },
  {
    "English": "snub",
    "Chinese": "怠慢, 不理睬"
  },
  {
    "English": "underplay",
    "Chinese": "轻描淡写, 低估"
  },
  {
    "English": "obliterate",
    "Chinese": "抹去, 使...消失"
  },
  {
    "English": "seethe",
    "Chinese": "强压怒火, 生闷气"
  },
  {
    "English": "morph",
    "Chinese": "变形"
  },
  {
    "English": "subservient",
    "Chinese": "服服帖帖的, 奉承的"
  },
  {
    "English": "obtuse",
    "Chinese": "愚钝的, 笨的"
  },
  {
    "English": "trenchant",
    "Chinese": "尖酸刻薄的"
  },
  {
    "English": "instigate",
    "Chinese": "激起, 挑起"
  },
  {
    "English": "fusty",
    "Chinese": "过时的"
  },
  {
    "English": "cease",
    "Chinese": "停止"
  },
  {
    "English": "implicate",
    "Chinese": "牵涉"
  },
  {
    "English": "vituperate",
    "Chinese": "辱骂"
  },
  {
    "English": "rattle",
    "Chinese": "扰乱"
  },
  {
    "English": "molder",
    "Chinese": "腐烂, 退化"
  },
  {
    "English": "transmogrify",
    "Chinese": "使...变形"
  },
  {
    "English": "choreograph",
    "Chinese": "精心安排"
  },
  {
    "English": "incipient",
    "Chinese": "开始的"
  },
  {
    "English": "antiquarian",
    "Chinese": "古文物研究的"
  },
  {
    "English": "boisterous",
    "Chinese": "吵闹的"
  },
  {
    "English": "renounce",
    "Chinese": "拒绝, 否认"
  },
  {
    "English": "compartmentalize",
    "Chinese": "分门别类, 划分"
  },
  {
    "English": "maelstrom",
    "Chinese": "混乱，动乱"
  },
  {
    "English": "captious",
    "Chinese": "挑刺的, 吹毛求疵的"
  },
  {
    "English": "vulgar",
    "Chinese": "粗俗的"
  },
  {
    "English": "fealty",
    "Chinese": "忠诚"
  },
  {
    "English": "bristle",
    "Chinese": "生气, 愤怒"
  },
  {
    "English": "await",
    "Chinese": "等待"
  },
  {
    "English": "languish",
    "Chinese": "衰落, 不活跃"
  },
  {
    "English": "nugatory",
    "Chinese": "不重要的"
  },
  {
    "English": "inept",
    "Chinese": "无能的"
  },
  {
    "English": "spartan",
    "Chinese": "简朴的"
  },
  {
    "English": "ancillary",
    "Chinese": "辅助的"
  },
  {
    "English": "sequester",
    "Chinese": "分离, 隔离"
  },
  {
    "English": "hasty",
    "Chinese": "快速的, 仓促的"
  },
  {
    "English": "budding",
    "Chinese": "新出现的"
  },
  {
    "English": "vainglory",
    "Chinese": "极度夸耀, 虚荣"
  },
  {
    "English": "consummate",
    "Chinese": "完满的, 圆满的"
  },
  {
    "English": "like-minded",
    "Chinese": "思维相似的, 想法一致的"
  },
  {
    "English": "ecumenical",
    "Chinese": "多元的, 普遍的"
  },
  {
    "English": "ardent",
    "Chinese": "热衷的, 热情的"
  },
  {
    "English": "rescind",
    "Chinese": "废除（法律）"
  },
  {
    "English": "distend",
    "Chinese": "膨胀"
  },
  {
    "English": "self-regard",
    "Chinese": "自私自利"
  },
  {
    "English": "subterfuge",
    "Chinese": "诡计"
  },
  {
    "English": "agglomerate",
    "Chinese": "聚集"
  },
  {
    "English": "goad",
    "Chinese": "刺激"
  },
  {
    "English": "surfeit",
    "Chinese": "过量"
  },
  {
    "English": "transitory",
    "Chinese": "短暂的"
  },
  {
    "English": "prolix",
    "Chinese": "冗长的"
  },
  {
    "English": "exactitude",
    "Chinese": "准确"
  },
  {
    "English": "chastise",
    "Chinese": "谴责"
  },
  {
    "English": "protract",
    "Chinese": "延长"
  },
  {
    "English": "stymie",
    "Chinese": "阻碍"
  },
  {
    "English": "seminal",
    "Chinese": "非常有影响力的"
  },
  {
    "English": "authoritarian",
    "Chinese": "专制的"
  },
  {
    "English": "leap",
    "Chinese": "（话题、言论）跳跃"
  },
  {
    "English": "tepid",
    "Chinese": "冷淡的, 不热情的"
  },
  {
    "English": "malodor",
    "Chinese": "恶臭"
  },
  {
    "English": "senescence",
    "Chinese": "衰老"
  },
  {
    "English": "decrepitude",
    "Chinese": "衰老"
  },
  {
    "English": "self-styled",
    "Chinese": "自称的"
  },
  {
    "English": "cognizant",
    "Chinese": "知道的, 有意识的"
  },
  {
    "English": "conversant",
    "Chinese": "熟悉的"
  },
  {
    "English": "tribulation",
    "Chinese": "痛苦(的经历）"
  },
  {
    "English": "open-ended",
    "Chinese": "开放的"
  },
  {
    "English": "falsify",
    "Chinese": "篡改, 伪造"
  },
  {
    "English": "panorama",
    "Chinese": "全面展示"
  },
  {
    "English": "beleaguer",
    "Chinese": "困扰，骚扰"
  },
  {
    "English": "incumbent",
    "Chinese": "在职官员"
  },
  {
    "English": "hermetic",
    "Chinese": "密闭的"
  },
  {
    "English": "encapsulate",
    "Chinese": "简要概括"
  },
  {
    "English": "interdisciplinary",
    "Chinese": "交叉学科的"
  },
  {
    "English": "impunity",
    "Chinese": "免于处罚, 免罪"
  },
  {
    "English": "reprisal",
    "Chinese": "报复"
  },
  {
    "English": "myopic",
    "Chinese": "缺乏远见的"
  },
  {
    "English": "tarnish",
    "Chinese": "玷污"
  },
  {
    "English": "sublime",
    "Chinese": "超群出众"
  },
  {
    "English": "remonstrate",
    "Chinese": "反对, 抗议"
  },
  {
    "English": "commiserate",
    "Chinese": "哀悼, 同情"
  },
  {
    "English": "expostulate",
    "Chinese": "争论, 反驳"
  },
  {
    "English": "anneal",
    "Chinese": "加固"
  },
  {
    "English": "vicissitude",
    "Chinese": "变迁, 变化"
  },
  {
    "English": "piecemeal",
    "Chinese": "一次少量地，一件一件地"
  },
  {
    "English": "verbose",
    "Chinese": "冗长的"
  },
  {
    "English": "polyglot",
    "Chinese": "多语的"
  },
  {
    "English": "machination",
    "Chinese": "诡计"
  },
  {
    "English": "flee",
    "Chinese": "逃脱, 逃跑"
  },
  {
    "English": "nefarious",
    "Chinese": "邪恶的"
  },
  {
    "English": "lachrymose",
    "Chinese": "催泪的, 悲伤的"
  },
  {
    "English": "enmity",
    "Chinese": "恶意, 憎恶"
  },
  {
    "English": "indignant",
    "Chinese": "非常愤怒的"
  },
  {
    "English": "confront",
    "Chinese": "反抗"
  },
  {
    "English": "minutia",
    "Chinese": "细节, 小事"
  },
  {
    "English": "commensurable",
    "Chinese": "可用共同标准测量的"
  },
  {
    "English": "discriminatory",
    "Chinese": "不公平的, 歧视的"
  },
  {
    "English": "sabotage",
    "Chinese": "故意破坏"
  },
  {
    "English": "commend",
    "Chinese": "赞美"
  },
  {
    "English": "gossamer",
    "Chinese": "轻而薄的, 虚无缥缈的"
  },
  {
    "English": "lenient",
    "Chinese": "宽容的"
  },
  {
    "English": "rectitude",
    "Chinese": "正直"
  },
  {
    "English": "enamor",
    "Chinese": "使...喜爱"
  },
  {
    "English": "immure",
    "Chinese": "囚禁"
  },
  {
    "English": "impudent",
    "Chinese": "无礼的"
  },
  {
    "English": "insolent",
    "Chinese": "无礼的"
  },
  {
    "English": "irenic",
    "Chinese": "和平的"
  },
  {
    "English": "shear",
    "Chinese": "剪（动物）毛"
  },
  {
    "English": "coruscate",
    "Chinese": "闪烁, 闪光"
  },
  {
    "English": "hideous",
    "Chinese": "丑陋吓人的"
  },
  {
    "English": "trumpet",
    "Chinese": "鼓吹"
  },
  {
    "English": "strident",
    "Chinese": "尖锐的, 刺耳的"
  },
  {
    "English": "muckrake",
    "Chinese": "揭露丑闻"
  },
  {
    "English": "proffer",
    "Chinese": "提供"
  },
  {
    "English": "revel",
    "Chinese": "陶醉"
  },
  {
    "English": "predicate",
    "Chinese": "基于, 取决于"
  },
  {
    "English": "prophylactic",
    "Chinese": "预防性的"
  },
  {
    "English": "pilfer",
    "Chinese": "盗用"
  },
  {
    "English": "constrict",
    "Chinese": "限制"
  },
  {
    "English": "imbibe",
    "Chinese": "喝"
  },
  {
    "English": "quaff",
    "Chinese": "大口喝, 痛饮"
  },
  {
    "English": "crumble",
    "Chinese": "崩溃, 瓦解"
  },
  {
    "English": "disintegrate",
    "Chinese": "瓦解"
  },
  {
    "English": "brook",
    "Chinese": "容忍, 忍受"
  },
  {
    "English": "muddle",
    "Chinese": "使困惑"
  },
  {
    "English": "unerring",
    "Chinese": "一贯准确的"
  },
  {
    "English": "provenance",
    "Chinese": "出处, 起源"
  },
  {
    "English": "inscrutable",
    "Chinese": "难以理解的"
  },
  {
    "English": "genial",
    "Chinese": "友好的"
  },
  {
    "English": "reluctant",
    "Chinese": "不情愿的"
  },
  {
    "English": "supple",
    "Chinese": "灵活的"
  },
  {
    "English": "contravene",
    "Chinese": "违反"
  },
  {
    "English": "ungainly",
    "Chinese": "笨拙的"
  },
  {
    "English": "ludicrous",
    "Chinese": "滑稽可笑的"
  },
  {
    "English": "dispatch",
    "Chinese": "迅速"
  },
  {
    "English": "handicap",
    "Chinese": "障碍"
  },
  {
    "English": "chimera",
    "Chinese": "幻想"
  },
  {
    "English": "ominous",
    "Chinese": "不吉利的"
  },
  {
    "English": "limpid",
    "Chinese": "清澈透明的"
  },
  {
    "English": "forsake",
    "Chinese": "放弃"
  },
  {
    "English": "exonerate",
    "Chinese": "免罪, 免责"
  },
  {
    "English": "annihilate",
    "Chinese": "毁灭, 毁坏"
  },
  {
    "English": "surmise",
    "Chinese": "猜测"
  },
  {
    "English": "rapprochement",
    "Chinese": "友好, 和谐"
  },
  {
    "English": "exert",
    "Chinese": "使用"
  },
  {
    "English": "wield",
    "Chinese": "使用"
  },
  {
    "English": "guzzle",
    "Chinese": "狂饮"
  },
  {
    "English": "kinfolk",
    "Chinese": "亲戚"
  },
  {
    "English": "divergent",
    "Chinese": "不同的"
  },
  {
    "English": "vestige",
    "Chinese": "遗迹,遗留"
  },
  {
    "English": "profusion",
    "Chinese": "大量"
  },
  {
    "English": "forebode",
    "Chinese": "担忧"
  },
  {
    "English": "calamity",
    "Chinese": "大灾难"
  },
  {
    "English": "beget",
    "Chinese": "导致"
  },
  {
    "English": "reprehensible",
    "Chinese": "应受指责的"
  },
  {
    "English": "divest",
    "Chinese": "剥夺"
  },
  {
    "English": "wondrous",
    "Chinese": "奇异的"
  },
  {
    "English": "recalcitrant",
    "Chinese": "顽固的"
  },
  {
    "English": "succinct",
    "Chinese": "简洁的"
  },
  {
    "English": "recrudescent",
    "Chinese": "复发的"
  },
  {
    "English": "frugal",
    "Chinese": "节俭的"
  },
  {
    "English": "unseemly",
    "Chinese": "不得体的"
  },
  {
    "English": "preternatural",
    "Chinese": "异乎寻常的"
  },
  {
    "English": "provident",
    "Chinese": "节俭的"
  },
  {
    "English": "interlope",
    "Chinese": "入侵, 干涉"
  },
  {
    "English": "coterie",
    "Chinese": "小团体"
  },
  {
    "English": "aplomb",
    "Chinese": "自信沉着, 泰然自若"
  },
  {
    "English": "bemoan",
    "Chinese": "哀悼, 悲伤"
  },
  {
    "English": "mediate",
    "Chinese": "调解"
  },
  {
    "English": "exposé",
    "Chinese": "揭露黑暗的报道"
  },
  {
    "English": "reticent",
    "Chinese": "沉默寡言的"
  },
  {
    "English": "myriad",
    "Chinese": "大量丰富的"
  },
  {
    "English": "expurgate",
    "Chinese": "删除（令人反感的内容）"
  },
  {
    "English": "triumvirate",
    "Chinese": "三足鼎立"
  },
  {
    "English": "indefatigable",
    "Chinese": "不知疲倦的"
  },
  {
    "English": "paean",
    "Chinese": "赞美"
  },
  {
    "English": "hallmark",
    "Chinese": "特征"
  },
  {
    "English": "potent",
    "Chinese": "有权势的，有权力的"
  },
  {
    "English": "lopsided",
    "Chinese": "不均衡的"
  },
  {
    "English": "subtle",
    "Chinese": "难以理解的"
  },
  {
    "English": "adamant",
    "Chinese": "固执的"
  },
  {
    "English": "melancholy",
    "Chinese": "忧伤"
  },
  {
    "English": "unalloyed",
    "Chinese": "纯粹的，完全的"
  },
  {
    "English": "spew",
    "Chinese": "喷出, 涌出"
  },
  {
    "English": "maze",
    "Chinese": "迷宫"
  },
  {
    "English": "misfeasance",
    "Chinese": "过失, 不法行为"
  },
  {
    "English": "rebellious",
    "Chinese": "反抗的, 难控制的"
  },
  {
    "English": "durable",
    "Chinese": "持久的, 耐用的"
  },
  {
    "English": "varnish",
    "Chinese": "装饰"
  },
  {
    "English": "labyrinthine",
    "Chinese": "复杂的"
  },
  {
    "English": "mar",
    "Chinese": "损毁, 损伤"
  },
  {
    "English": "platitude",
    "Chinese": "陈词滥调"
  },
  {
    "English": "exclusive",
    "Chinese": "独有的, 排外的"
  },
  {
    "English": "acclaim",
    "Chinese": "欢呼, 喝彩"
  },
  {
    "English": "meld",
    "Chinese": "混合"
  },
  {
    "English": "tremendous",
    "Chinese": "巨大的"
  },
  {
    "English": "scatter",
    "Chinese": "分散"
  },
  {
    "English": "concise",
    "Chinese": "简洁的"
  },
  {
    "English": "oracle",
    "Chinese": "预言"
  },
  {
    "English": "extenuate",
    "Chinese": "减轻"
  },
  {
    "English": "viable",
    "Chinese": "可行的"
  },
  {
    "English": "midst",
    "Chinese": "当中"
  },
  {
    "English": "abuse",
    "Chinese": "滥用"
  },
  {
    "English": "cliché",
    "Chinese": "陈词滥调"
  },
  {
    "English": "contiguous",
    "Chinese": "临近的"
  },
  {
    "English": "endanger",
    "Chinese": "危害"
  },
  {
    "English": "boorish",
    "Chinese": "粗鲁的, 粗野的"
  },
  {
    "English": "high-minded",
    "Chinese": "高尚的"
  },
  {
    "English": "de-emphasize",
    "Chinese": "降低…的重要性"
  },
  {
    "English": "poise",
    "Chinese": "使平衡"
  },
  {
    "English": "quandary",
    "Chinese": "困境"
  },
  {
    "English": "ploy",
    "Chinese": "策略"
  },
  {
    "English": "temptation",
    "Chinese": "诱惑"
  },
  {
    "English": "oppressive",
    "Chinese": "压迫的"
  },
  {
    "English": "hyperbole",
    "Chinese": "夸张"
  },
  {
    "English": "trickster",
    "Chinese": "骗子"
  },
  {
    "English": "genteel",
    "Chinese": "有教养的, 彬彬有礼的"
  },
  {
    "English": "impassioned",
    "Chinese": "充满激情的"
  },
  {
    "English": "deduce",
    "Chinese": "推断"
  },
  {
    "English": "flip",
    "Chinese": "翻动"
  },
  {
    "English": "infinite",
    "Chinese": "无限的"
  },
  {
    "English": "diffident",
    "Chinese": "缺乏自信的, 胆怯的"
  },
  {
    "English": "neutralize",
    "Chinese": "抵消, 使无效"
  },
  {
    "English": "controvert",
    "Chinese": "争论, 辩论"
  },
  {
    "English": "succumb",
    "Chinese": "屈服"
  },
  {
    "English": "fury",
    "Chinese": "狂怒, 暴怒"
  },
  {
    "English": "severe",
    "Chinese": "严厉的"
  },
  {
    "English": "conspire",
    "Chinese": "共谋, 协力"
  },
  {
    "English": "gleam",
    "Chinese": "微光"
  },
  {
    "English": "imperial",
    "Chinese": "帝国的"
  },
  {
    "English": "paraphernalia",
    "Chinese": "行头, 装饰品"
  },
  {
    "English": "cast-iron",
    "Chinese": "坚固的, 顽强的"
  },
  {
    "English": "detritus",
    "Chinese": "碎石, 残余物"
  },
  {
    "English": "rivalry",
    "Chinese": "竞争, 对抗"
  },
  {
    "English": "halt",
    "Chinese": "停止"
  },
  {
    "English": "avant-garde",
    "Chinese": "先锋派, 前卫派"
  },
  {
    "English": "stipulate",
    "Chinese": "规定"
  },
  {
    "English": "dispense",
    "Chinese": "分配, 分发"
  },
  {
    "English": "leach",
    "Chinese": "被冲走, 滤去"
  },
  {
    "English": "brackish",
    "Chinese": "令人恶心的"
  },
  {
    "English": "malodorous",
    "Chinese": "难闻的, 恶臭的"
  },
  {
    "English": "redolent",
    "Chinese": "芬芳的"
  },
  {
    "English": "noisome",
    "Chinese": "有害的, 恶臭的"
  },
  {
    "English": "adjudicate",
    "Chinese": "裁定, 宣判"
  },
  {
    "English": "eschew",
    "Chinese": "避免"
  },
  {
    "English": "abbreviate",
    "Chinese": "缩短"
  },
  {
    "English": "contingent",
    "Chinese": "依情况而定的"
  },
  {
    "English": "auspicious",
    "Chinese": "吉兆的, 幸运的"
  },
  {
    "English": "essential",
    "Chinese": "重要的, 必要的"
  },
  {
    "English": "bootless",
    "Chinese": "无用的"
  },
  {
    "English": "posit",
    "Chinese": "假定, 假设"
  },
  {
    "English": "accrete",
    "Chinese": "逐渐增长"
  },
  {
    "English": "adjunct",
    "Chinese": "附属物"
  },
  {
    "English": "abound",
    "Chinese": "富于, 充满"
  },
  {
    "English": "subsequent",
    "Chinese": "后来的, 随后的"
  },
  {
    "English": "heretofore",
    "Chinese": "迄今为止"
  },
  {
    "English": "preponderance",
    "Chinese": "(数量上的）优势"
  },
  {
    "English": "uncompromising",
    "Chinese": "不妥协的, 坚定的"
  },
  {
    "English": "moralistic",
    "Chinese": "说教的"
  },
  {
    "English": "benevolent",
    "Chinese": "仁慈的, 慈善的"
  },
  {
    "English": "impose",
    "Chinese": "把…强加于"
  },
  {
    "English": "resume",
    "Chinese": "恢复"
  },
  {
    "English": "stalemate",
    "Chinese": "僵局"
  },
  {
    "English": "insatiable",
    "Chinese": "无法满足的"
  },
  {
    "English": "snappish",
    "Chinese": "厉声说话的, 暴躁的"
  },
  {
    "English": "peccadillo",
    "Chinese": "小过失"
  },
  {
    "English": "reparation",
    "Chinese": "修理"
  },
  {
    "English": "inextricable",
    "Chinese": "纠缠不清的, 无法解脱的"
  },
  {
    "English": "impregnable",
    "Chinese": "坚固的"
  },
  {
    "English": "impotent",
    "Chinese": "无力的, 无效的"
  },
  {
    "English": "precede",
    "Chinese": "领先, 在…之前"
  },
  {
    "English": "supplant",
    "Chinese": "取代"
  },
  {
    "English": "encounter",
    "Chinese": "遭遇, 遇到"
  },
  {
    "English": "beset",
    "Chinese": "困扰"
  },
  {
    "English": "fatigue",
    "Chinese": "疲劳"
  },
  {
    "English": "offish",
    "Chinese": "冷漠的"
  },
  {
    "English": "jockey",
    "Chinese": "不择手段的谋取有利地位"
  },
  {
    "English": "perceptive",
    "Chinese": "有洞察力的, 敏锐的"
  },
  {
    "English": "shortcut",
    "Chinese": "捷径"
  },
  {
    "English": "jubilant",
    "Chinese": "喜悦的"
  },
  {
    "English": "sensuous",
    "Chinese": "赏心悦目的"
  },
  {
    "English": "controversial",
    "Chinese": "有争议的"
  },
  {
    "English": "seamy",
    "Chinese": "丑恶的"
  },
  {
    "English": "pledge",
    "Chinese": "保证, 许诺"
  },
  {
    "English": "retain",
    "Chinese": "保持"
  },
  {
    "English": "disproportionate",
    "Chinese": "不成比例的"
  },
  {
    "English": "temper",
    "Chinese": "调和, 使缓和"
  },
  {
    "English": "outdo",
    "Chinese": "超过, 胜过"
  },
  {
    "English": "abash",
    "Chinese": "使羞愧, 使困窘"
  },
  {
    "English": "unexceptional",
    "Chinese": "普通的"
  },
  {
    "English": "obtrusive",
    "Chinese": "显著的，突兀的"
  },
  {
    "English": "impasse",
    "Chinese": "僵局"
  },
  {
    "English": "superficial",
    "Chinese": "表面的"
  },
  {
    "English": "moderate",
    "Chinese": "使缓和"
  },
  {
    "English": "decode",
    "Chinese": "破译, 解码"
  },
  {
    "English": "vagary",
    "Chinese": "反复无常"
  },
  {
    "English": "evangelist",
    "Chinese": "狂热支持者"
  },
  {
    "English": "pedigree",
    "Chinese": "血统, 门第"
  },
  {
    "English": "prominent",
    "Chinese": "著名的"
  },
  {
    "English": "enforce",
    "Chinese": "实施, 强制"
  },
  {
    "English": "amid",
    "Chinese": "在…之中"
  },
  {
    "English": "boost",
    "Chinese": "增加, 促进"
  },
  {
    "English": "stagger",
    "Chinese": "使...震惊"
  },
  {
    "English": "imperil",
    "Chinese": "使处于危险"
  },
  {
    "English": "piety",
    "Chinese": "虔诚"
  },
  {
    "English": "flair",
    "Chinese": "天资, 天分"
  },
  {
    "English": "braggadocio",
    "Chinese": "自夸, 吹牛大王"
  },
  {
    "English": "hurtle",
    "Chinese": "猛冲, 猛烈碰撞"
  },
  {
    "English": "savor",
    "Chinese": "享受"
  },
  {
    "English": "eviscerate",
    "Chinese": "使...失去力量"
  },
  {
    "English": "mince",
    "Chinese": "装腔作势"
  },
  {
    "English": "exterminate",
    "Chinese": "使灭绝, 消除"
  },
  {
    "English": "intact",
    "Chinese": "完整的"
  },
  {
    "English": "belittle",
    "Chinese": "轻视, 贬低"
  },
  {
    "English": "obstruct",
    "Chinese": "阻碍, 妨碍"
  },
  {
    "English": "proximity",
    "Chinese": "距离近"
  },
  {
    "English": "harness",
    "Chinese": "利用"
  },
  {
    "English": "spurious",
    "Chinese": "假的"
  },
  {
    "English": "apocryphal",
    "Chinese": "被人们普遍接受却不正确的, 假的"
  },
  {
    "English": "applaud",
    "Chinese": "赞美, 支持"
  },
  {
    "English": "bifurcate",
    "Chinese": "一分为二"
  },
  {
    "English": "cacophony",
    "Chinese": "刺耳的声音, 不和谐的声音"
  },
  {
    "English": "catastrophe",
    "Chinese": "灾难"
  },
  {
    "English": "circumlocution",
    "Chinese": "绕圈的话语"
  },
  {
    "English": "clairvoyance",
    "Chinese": "洞察力"
  },
  {
    "English": "cloying",
    "Chinese": "令人腻烦的"
  },
  {
    "English": "collude",
    "Chinese": "同谋"
  },
  {
    "English": "concord",
    "Chinese": "意见一致"
  },
  {
    "English": "cosset",
    "Chinese": "溺爱"
  },
  {
    "English": "counterbalance",
    "Chinese": "平衡, 抵消"
  },
  {
    "English": "covet",
    "Chinese": "渴求"
  },
  {
    "English": "cursory",
    "Chinese": "草率的, 仓促的"
  },
  {
    "English": "weary",
    "Chinese": "令人厌烦的"
  },
  {
    "English": "allegory",
    "Chinese": "象征"
  },
  {
    "English": "peripheral",
    "Chinese": "不重要的"
  },
  {
    "English": "perspicacious",
    "Chinese": "有洞察力的"
  },
  {
    "English": "perspicuous",
    "Chinese": "清晰的, 易懂的"
  },
  {
    "English": "sleazy",
    "Chinese": "低俗的, 龌龊的"
  },
  {
    "English": "indemnify",
    "Chinese": "赔偿"
  },
  {
    "English": "eyesore",
    "Chinese": "碍眼的事物"
  },
  {
    "English": "archive",
    "Chinese": "存档, 保存"
  },
  {
    "English": "xenophobic",
    "Chinese": "排外的, 仇视外国的"
  },
  {
    "English": "ineffable",
    "Chinese": "难以言表的"
  },
  {
    "English": "fluid",
    "Chinese": "流动的"
  },
  {
    "English": "despotic",
    "Chinese": "独裁的, 专制的"
  },
  {
    "English": "capitulate",
    "Chinese": "投降"
  },
  {
    "English": "abominate",
    "Chinese": "憎恶, 憎恨"
  },
  {
    "English": "accommodate",
    "Chinese": "调解"
  },
  {
    "English": "mandate",
    "Chinese": "命令"
  },
  {
    "English": "saturate",
    "Chinese": "填满"
  },
  {
    "English": "untoward",
    "Chinese": "不利的"
  },
  {
    "English": "peruse",
    "Chinese": "仔细读"
  },
  {
    "English": "enthrall",
    "Chinese": "吸引"
  },
  {
    "English": "emphatic",
    "Chinese": "着重强调的"
  },
  {
    "English": "nonplus",
    "Chinese": "使困惑, 使不知所措"
  },
  {
    "English": "phlegmatic",
    "Chinese": "性格冷淡的"
  },
  {
    "English": "antidote",
    "Chinese": "解药"
  },
  {
    "English": "impersonal",
    "Chinese": "没有人情味的"
  },
  {
    "English": "ensue",
    "Chinese": "紧随其后"
  },
  {
    "English": "gore",
    "Chinese": "血, 血块"
  },
  {
    "English": "fallow",
    "Chinese": "休耕的"
  },
  {
    "English": "unruly",
    "Chinese": "不服管理的, 难以控制的"
  },
  {
    "English": "synoptic",
    "Chinese": "摘要的"
  },
  {
    "English": "conviction",
    "Chinese": "信念"
  },
  {
    "English": "patrimony",
    "Chinese": "继承, 世袭"
  },
  {
    "English": "vicarious",
    "Chinese": "身临其境的"
  },
  {
    "English": "ductile",
    "Chinese": "易被影响的"
  },
  {
    "English": "dolorous",
    "Chinese": "悲伤的"
  },
  {
    "English": "antiquated",
    "Chinese": "老旧的, 过时的"
  },
  {
    "English": "wayward",
    "Chinese": "任性的"
  },
  {
    "English": "errant",
    "Chinese": "随意的"
  },
  {
    "English": "cannibalize",
    "Chinese": "采用...作为主要来源"
  },
  {
    "English": "discordant",
    "Chinese": "不一致的"
  },
  {
    "English": "insinuate",
    "Chinese": "暗示(表不满)"
  },
  {
    "English": "slinky",
    "Chinese": "鬼鬼祟祟的"
  },
  {
    "English": "attune",
    "Chinese": "使协调一致"
  },
  {
    "English": "bluster",
    "Chinese": "（虚张声势地）恐吓"
  },
  {
    "English": "nonsensical",
    "Chinese": "无意义的"
  },
  {
    "English": "villainous",
    "Chinese": "极坏的, 恶劣的"
  },
  {
    "English": "drudgery",
    "Chinese": "苦工"
  },
  {
    "English": "millstone",
    "Chinese": "重担"
  },
  {
    "English": "canard",
    "Chinese": "谣言"
  },
  {
    "English": "accolade",
    "Chinese": "赞美"
  },
  {
    "English": "laurel",
    "Chinese": "荣誉"
  },
  {
    "English": "intimidate",
    "Chinese": "恐吓"
  },
  {
    "English": "temerity",
    "Chinese": "鲁莽"
  },
  {
    "English": "assemblage",
    "Chinese": "混合"
  },
  {
    "English": "embattle",
    "Chinese": "备战"
  },
  {
    "English": "desultory",
    "Chinese": "漫无目的的"
  },
  {
    "English": "expunge",
    "Chinese": "去除"
  },
  {
    "English": "jaundice",
    "Chinese": "嫉妒"
  },
  {
    "English": "dainty",
    "Chinese": "小巧精致的"
  },
  {
    "English": "obloquy",
    "Chinese": "诋毁，谩骂"
  },
  {
    "English": "remiss",
    "Chinese": "粗心的，疏忽大意的"
  },
  {
    "English": "balkanize",
    "Chinese": "使割据"
  },
  {
    "English": "oxymoron",
    "Chinese": "矛盾修饰法"
  },
  {
    "English": "gaiety",
    "Chinese": "欢快"
  },
  {
    "English": "altercate",
    "Chinese": "争吵"
  },
  {
    "English": "coerce",
    "Chinese": "强制"
  },
  {
    "English": "gregarious",
    "Chinese": "群居的，好交际的"
  },
  {
    "English": "squander",
    "Chinese": "浪费，挥霍"
  },
  {
    "English": "congruent",
    "Chinese": "相一致的"
  },
  {
    "English": "wallow",
    "Chinese": "沉溺于"
  },
  {
    "English": "derelict",
    "Chinese": "被遗弃的"
  },
  {
    "English": "dilapidate",
    "Chinese": "使...破败"
  },
  {
    "English": "invert",
    "Chinese": "颠倒，倒置"
  },
  {
    "English": "introspect",
    "Chinese": "自省"
  },
  {
    "English": "repertoire",
    "Chinese": "全部节目"
  },
  {
    "English": "solace",
    "Chinese": "安慰"
  },
  {
    "English": "inquisitive",
    "Chinese": "好奇的"
  },
  {
    "English": "figment",
    "Chinese": "虚构的事物"
  },
  {
    "English": "intermittent",
    "Chinese": "间歇的，断断续续的"
  },
  {
    "English": "impervious",
    "Chinese": "不能渗透的"
  },
  {
    "English": "cater",
    "Chinese": "迎合"
  },
  {
    "English": "clot",
    "Chinese": "凝固结块"
  },
  {
    "English": "elate",
    "Chinese": "使兴奋, 使高兴"
  },
  {
    "English": "avert",
    "Chinese": "阻止"
  },
  {
    "English": "fad",
    "Chinese": "一时流行的事物"
  },
  {
    "English": "ape",
    "Chinese": "（笨拙的）模仿"
  },
  {
    "English": "irk",
    "Chinese": "使…厌烦"
  },
  {
    "English": "ebb",
    "Chinese": "衰落"
  },
  {
    "English": "yen",
    "Chinese": "（强烈的）渴望"
  },
  {
    "English": "opt",
    "Chinese": "选择"
  },
  {
    "English": "curb",
    "Chinese": "限制, 控制"
  },
  {
    "English": "curt",
    "Chinese": "语言简练的"
  },
  {
    "English": "snag",
    "Chinese": "故障, 问题"
  },
  {
    "English": "glut",
    "Chinese": "过量"
  },
  {
    "English": "woo",
    "Chinese": "吸引"
  },
  {
    "English": "coax",
    "Chinese": "诱骗"
  },
  {
    "English": "bent",
    "Chinese": "有倾向的"
  },
  {
    "English": "balk",
    "Chinese": "（突然地)拒绝"
  },
  {
    "English": "avid",
    "Chinese": "非常渴望的, 贪婪的"
  },
  {
    "English": "agog",
    "Chinese": "急切渴望的"
  },
  {
    "English": "tout",
    "Chinese": "兜售"
  },
  {
    "English": "choke",
    "Chinese": "抑制"
  },
  {
    "English": "erect",
    "Chinese": "笔直的"
  },
  {
    "English": "awry",
    "Chinese": "错误的"
  },
  {
    "English": "quip",
    "Chinese": "机智幽默的评论"
  },
  {
    "English": "aver",
    "Chinese": "断言"
  },
  {
    "English": "quash",
    "Chinese": "废止, 使无效"
  },
  {
    "English": "glib",
    "Chinese": "即兴的"
  },
  {
    "English": "roil",
    "Chinese": "使...混乱"
  },
  {
    "English": "rant",
    "Chinese": "辱骂"
  },
  {
    "English": "lull",
    "Chinese": "使平静"
  },
  {
    "English": "avow",
    "Chinese": "承认"
  },
  {
    "English": "trio",
    "Chinese": "三足鼎立, 三个一组"
  },
  {
    "English": "sage",
    "Chinese": "智慧的"
  },
  {
    "English": "lurk",
    "Chinese": "潜藏"
  },
  {
    "English": "hoax",
    "Chinese": "欺骗"
  },
  {
    "English": "flit",
    "Chinese": "快速移动"
  },
  {
    "English": "apex",
    "Chinese": "最高点, 顶峰"
  },
  {
    "English": "spur",
    "Chinese": "刺激"
  },
  {
    "English": "scant",
    "Chinese": "稀缺的"
  },
  {
    "English": "abhor",
    "Chinese": "厌恶"
  },
  {
    "English": "prone",
    "Chinese": "有倾向的"
  },
  {
    "English": "usurp",
    "Chinese": "篡夺"
  },
  {
    "English": "pithy",
    "Chinese": "简洁有力的"
  },
  {
    "English": "tonic",
    "Chinese": "有益健康的"
  },
  {
    "English": "niche",
    "Chinese": "小众市场"
  },
  {
    "English": "trite",
    "Chinese": "陈词滥调的"
  },
  {
    "English": "stoic",
    "Chinese": "不以苦乐为意的，淡泊的"
  },
  {
    "English": "murky",
    "Chinese": "昏暗的"
  },
  {
    "English": "blunt",
    "Chinese": "直率的"
  },
  {
    "English": "flout",
    "Chinese": "蔑视, 鄙视"
  },
  {
    "English": "rue",
    "Chinese": "后悔"
  },
  {
    "English": "rote",
    "Chinese": "死记硬背"
  },
  {
    "English": "dire",
    "Chinese": "可怕的, 严重的"
  },
  {
    "English": "snob",
    "Chinese": "势利小人"
  },
  {
    "English": "shun",
    "Chinese": "躲避"
  },
  {
    "English": "idle",
    "Chinese": "空闲的"
  },
  {
    "English": "crass",
    "Chinese": "粗鲁的"
  },
  {
    "English": "apt",
    "Chinese": "合适的"
  },
  {
    "English": "hone",
    "Chinese": "磨炼（技能）"
  },
  {
    "English": "veto",
    "Chinese": "否决"
  },
  {
    "English": "blur",
    "Chinese": "使...模糊不清"
  },
  {
    "English": "verge",
    "Chinese": "边缘"
  },
  {
    "English": "swift",
    "Chinese": "快速的"
  },
  {
    "English": "sever",
    "Chinese": "打碎, 分裂"
  },
  {
    "English": "extol",
    "Chinese": "赞美"
  },
  {
    "English": "exalt",
    "Chinese": "赞美"
  },
  {
    "English": "tweak",
    "Chinese": "拧"
  },
  {
    "English": "verve",
    "Chinese": "热情, 活力"
  },
  {
    "English": "coy",
    "Chinese": "腼腆的"
  },
  {
    "English": "whit",
    "Chinese": "少量"
  },
  {
    "English": "pine",
    "Chinese": "渴望"
  },
  {
    "English": "demur",
    "Chinese": "反对"
  },
  {
    "English": "belie",
    "Chinese": "掩盖"
  },
  {
    "English": "spike",
    "Chinese": "（短期大幅）上升"
  },
  {
    "English": "quell",
    "Chinese": "压制, 镇压"
  },
  {
    "English": "vapid",
    "Chinese": "无聊的"
  },
  {
    "English": "venal",
    "Chinese": "贪污的"
  },
  {
    "English": "hitch",
    "Chinese": "（隐形的）问题, 难题"
  },
  {
    "English": "rebut",
    "Chinese": "驳斥"
  },
  {
    "English": "delve",
    "Chinese": "搜寻, 挖掘"
  },
  {
    "English": "totem",
    "Chinese": "标志, 象征"
  },
  {
    "English": "edify",
    "Chinese": "启迪"
  },
  {
    "English": "grip",
    "Chinese": "吸引"
  },
  {
    "English": "crave",
    "Chinese": "极度渴望"
  },
  {
    "English": "mimic",
    "Chinese": "模仿"
  },
  {
    "English": "gauge",
    "Chinese": "评估, 判断, 衡量"
  },
  {
    "English": "deter",
    "Chinese": "阻止"
  },
  {
    "English": "bogus",
    "Chinese": "假的"
  },
  {
    "English": "cloak",
    "Chinese": "伪装, 掩盖"
  },
  {
    "English": "aloof",
    "Chinese": "冷漠的, 疏远的"
  },
  {
    "English": "akin",
    "Chinese": "相似的, 相关的"
  },
  {
    "English": "croon",
    "Chinese": "低吟浅唱"
  },
  {
    "English": "bland",
    "Chinese": "无聊的"
  },
  {
    "English": "surly",
    "Chinese": "傲慢的，粗暴的"
  },
  {
    "English": "probe",
    "Chinese": "仔细调查"
  },
  {
    "English": "hoard",
    "Chinese": "贮藏"
  },
  {
    "English": "sap",
    "Chinese": "活力"
  },
  {
    "English": "rive",
    "Chinese": "劈开"
  },
  {
    "English": "riot",
    "Chinese": "暴乱"
  },
  {
    "English": "glum",
    "Chinese": "悲伤的"
  },
  {
    "English": "whet",
    "Chinese": "削尖"
  },
  {
    "English": "plod",
    "Chinese": "（勤奋而单调地）工作"
  },
  {
    "English": "gloat",
    "Chinese": "洋洋自得, 幸灾乐祸"
  },
  {
    "English": "loath",
    "Chinese": "不情愿的"
  },
  {
    "English": "chic",
    "Chinese": "时尚的"
  },
  {
    "English": "sham",
    "Chinese": "虚假的"
  },
  {
    "English": "don",
    "Chinese": "穿上"
  },
  {
    "English": "oust",
    "Chinese": "驱逐"
  },
  {
    "English": "sift",
    "Chinese": "分离, 筛选"
  },
  {
    "English": "expel",
    "Chinese": "驱逐"
  },
  {
    "English": "loose",
    "Chinese": "松弛的"
  },
  {
    "English": "adept",
    "Chinese": "精通的"
  },
  {
    "English": "lapse",
    "Chinese": "停止"
  },
  {
    "English": "guile",
    "Chinese": "欺骗"
  },
  {
    "English": "decay",
    "Chinese": "衰退"
  },
  {
    "English": "sloth",
    "Chinese": "懒惰"
  },
  {
    "English": "dwarf",
    "Chinese": "使...变得矮小或不重要"
  },
  {
    "English": "deify",
    "Chinese": "奉...为神, 尊敬"
  },
  {
    "English": "hoary",
    "Chinese": "老掉牙的"
  },
  {
    "English": "pique",
    "Chinese": "激怒, 惹怒"
  },
  {
    "English": "hubris",
    "Chinese": "自大, 傲慢"
  },
  {
    "English": "hew",
    "Chinese": "遵守"
  },
  {
    "English": "tilt",
    "Chinese": "倾斜"
  },
  {
    "English": "feat",
    "Chinese": "（彰显技艺等的）成就"
  },
  {
    "English": "marvel",
    "Chinese": "震惊, 惊讶"
  },
  {
    "English": "leak",
    "Chinese": "泄漏信息"
  },
  {
    "English": "guild",
    "Chinese": "协会"
  },
  {
    "English": "slur",
    "Chinese": "诽谤"
  },
  {
    "English": "cede",
    "Chinese": "割让"
  },
  {
    "English": "shrill",
    "Chinese": "尖叫"
  },
  {
    "English": "skim",
    "Chinese": "浏览"
  },
  {
    "English": "wilt",
    "Chinese": "萎蔫，衰弱"
  },
  {
    "English": "mete",
    "Chinese": "分配"
  },
  {
    "English": "spunk",
    "Chinese": "勇气"
  },
  {
    "English": "cinch",
    "Chinese": "容易的事"
  },
  {
    "English": "backwater",
    "Chinese": "停滞、落后的地方"
  },
  {
    "English": "moonshine",
    "Chinese": "空话, 假话"
  },
  {
    "English": "brainchild",
    "Chinese": "(辛苦劳动的)成果, 结晶"
  },
  {
    "English": "deadpan",
    "Chinese": "面无表情的"
  },
  {
    "English": "sidestep",
    "Chinese": "回避, 绕过"
  },
  {
    "English": "upshot",
    "Chinese": "结局"
  },
  {
    "English": "upbeat",
    "Chinese": "积极乐观的, 愉快的"
  },
  {
    "English": "downsize",
    "Chinese": "缩小"
  },
  {
    "English": "impressionable",
    "Chinese": "易受影响的"
  },
  {
    "English": "personable",
    "Chinese": "品貌兼优的"
  },
  {
    "English": "inviting",
    "Chinese": "吸引人的"
  },
  {
    "English": "liken",
    "Chinese": "比较"
  },
  {
    "English": "wholesale",
    "Chinese": "大规模的"
  },
  {
    "English": "wholesome",
    "Chinese": "有益健康的"
  },
  {
    "English": "romanticize",
    "Chinese": "理想化"
  },
  {
    "English": "defining",
    "Chinese": "非常重要的"
  },
  {
    "English": "telling",
    "Chinese": "有说服力的, 有影响力的"
  },
  {
    "English": "dour",
    "Chinese": "严肃的, 阴郁的"
  },
  {
    "English": "teem",
    "Chinese": "充满"
  },
  {
    "English": "backbone",
    "Chinese": "支柱, 支撑"
  },
  {
    "English": "pronounced",
    "Chinese": "显著的, 明显的"
  },
  {
    "English": "calculated",
    "Chinese": "故意的, 精打细算的"
  },
  {
    "English": "backfire",
    "Chinese": "事与愿违, 起反作用"
  },
  {
    "English": "redoubtable",
    "Chinese": "令人肃然起敬的"
  },
  {
    "English": "gridlock",
    "Chinese": "交通堵塞"
  },
  {
    "English": "bookish",
    "Chinese": "书呆子气的"
  },
  {
    "English": "wanting",
    "Chinese": "有缺陷的"
  },
  {
    "English": "airtight",
    "Chinese": "密封的, 不透气的"
  },
  {
    "English": "lest",
    "Chinese": "唯恐"
  },
  {
    "English": "streamline",
    "Chinese": "简化"
  },
  {
    "English": "grandstand",
    "Chinese": "博眼球的"
  },
  {
    "English": "foreboding",
    "Chinese": "不祥的预感"
  },
  {
    "English": "smother",
    "Chinese": "使...窒息"
  },
  {
    "English": "effortless",
    "Chinese": "不费力的"
  },
  {
    "English": "discerning",
    "Chinese": "有洞察力的"
  },
  {
    "English": "rife",
    "Chinese": "非常普遍的"
  },
  {
    "English": "girth",
    "Chinese": "尺寸"
  },
  {
    "English": "hard-boiled",
    "Chinese": "强硬的, 不动感情的"
  },
  {
    "English": "spiteful",
    "Chinese": "恶毒的"
  },
  {
    "English": "forbear",
    "Chinese": "克制, 忍耐"
  },
  {
    "English": "wont",
    "Chinese": "有…倾向的"
  },
  {
    "English": "enjoin",
    "Chinese": "禁止"
  },
  {
    "English": "glean",
    "Chinese": "慢慢收集"
  },
  {
    "English": "glisten",
    "Chinese": "表面闪烁光芒的"
  },
  {
    "English": "cleave",
    "Chinese": "忠诚于…"
  },
  {
    "English": "undue",
    "Chinese": "过量的"
  },
  {
    "English": "qualm",
    "Chinese": "不安"
  },
  {
    "English": "inestimable",
    "Chinese": "无法估量的"
  },
  {
    "English": "mishap",
    "Chinese": "不幸"
  },
  {
    "English": "brink",
    "Chinese": "(事情发生的) 边缘"
  },
  {
    "English": "underpin",
    "Chinese": "支持, 支撑"
  },
  {
    "English": "bleak",
    "Chinese": "阴暗的, 阴郁的"
  },
  {
    "English": "whisk",
    "Chinese": "迅速送走（人或事物）"
  },
  {
    "English": "savvy",
    "Chinese": "有见识的"
  },
  {
    "English": "buoy",
    "Chinese": "使浮起来"
  },
  {
    "English": "makeshift",
    "Chinese": "权宜之计"
  },
  {
    "English": "forthwith",
    "Chinese": "马上, 立刻"
  },
  {
    "English": "cornerstone",
    "Chinese": "重要的基石"
  },
  {
    "English": "bedrock",
    "Chinese": "根基"
  },
  {
    "English": "resourceful",
    "Chinese": "足智多谋的"
  },
  {
    "English": "appreciable",
    "Chinese": "可感知的, 可衡量的"
  },
  {
    "English": "sate",
    "Chinese": "使…厌倦, 使...腻烦"
  },
  {
    "English": "stonewall",
    "Chinese": "拒绝合作"
  },
  {
    "English": "involuntary",
    "Chinese": "无意识的"
  },
  {
    "English": "astronomical",
    "Chinese": "巨大的"
  },
  {
    "English": "misgiving",
    "Chinese": "不安"
  },
  {
    "English": "testy",
    "Chinese": "易怒的"
  },
  {
    "English": "categorical",
    "Chinese": "绝对的, 坚定的"
  },
  {
    "English": "recollect",
    "Chinese": "记忆"
  },
  {
    "English": "peerless",
    "Chinese": "无与伦比的"
  },
  {
    "English": "proofread",
    "Chinese": "校对"
  },
  {
    "English": "heartfelt",
    "Chinese": "真诚的"
  },
  {
    "English": "vainglorious",
    "Chinese": "自负的, 自命不凡的"
  },
  {
    "English": "override",
    "Chinese": "否决, 推翻"
  },
  {
    "English": "hereabouts",
    "Chinese": "在附近"
  },
  {
    "English": "groundless",
    "Chinese": "毫无根据的"
  },
  {
    "English": "uneventful",
    "Chinese": "平凡的, 没有大事发生的"
  },
  {
    "English": "daredevil",
    "Chinese": "鲁莽的"
  },
  {
    "English": "incomparable",
    "Chinese": "无与伦比的"
  },
  {
    "English": "towering",
    "Chinese": "高大的"
  },
  {
    "English": "slapdash",
    "Chinese": "草率的, 粗心大意的"
  },
  {
    "English": "invaluable",
    "Chinese": "极具价值的"
  },
  {
    "English": "slipshod",
    "Chinese": "粗心大意的"
  },
  {
    "English": "heartrending",
    "Chinese": "令人心痛的"
  },
  {
    "English": "retiring",
    "Chinese": "羞涩的, 不善交际的，谦逊的"
  },
  {
    "English": "belabor",
    "Chinese": "批评"
  },
  {
    "English": "yardstick",
    "Chinese": "准绳, 标准"
  },
  {
    "English": "downcast",
    "Chinese": "不开心的, 沮丧的"
  },
  {
    "English": "telltale",
    "Chinese": "泄露内情的"
  },
  {
    "English": "moody",
    "Chinese": "喜怒无常的"
  },
  {
    "English": "discriminating",
    "Chinese": "有洞察力的, 有鉴别能力的"
  },
  {
    "English": "collected",
    "Chinese": "冷静的"
  },
  {
    "English": "taxing",
    "Chinese": "繁重的, 劳累的"
  },
  {
    "English": "demanding",
    "Chinese": "费力的"
  },
  {
    "English": "riveting",
    "Chinese": "吸引人的"
  },
  {
    "English": "celebrated",
    "Chinese": "出名的"
  },
  {
    "English": "pressing",
    "Chinese": "紧急的"
  },
  {
    "English": "exacting",
    "Chinese": "要求高的"
  },
  {
    "English": "earnest",
    "Chinese": "严肃的, 真诚的"
  },
  {
    "English": "unfeeling",
    "Chinese": "冷血的, 没有同情心的"
  },
  {
    "English": "whereabouts",
    "Chinese": "行踪, 下落"
  },
  {
    "English": "uproot",
    "Chinese": "连根拔起, 消灭"
  },
  {
    "English": "agreeable",
    "Chinese": "适合的"
  },
  {
    "English": "composed",
    "Chinese": "冷静的"
  },
  {
    "English": "barring",
    "Chinese": "除了......以外"
  },
  {
    "English": "prohibitive",
    "Chinese": "昂贵的"
  },
  {
    "English": "phenomenal",
    "Chinese": "出众的"
  },
  {
    "English": "incisive",
    "Chinese": "一针见血的, 深刻尖锐的"
  },
  {
    "English": "amiss",
    "Chinese": "错误的"
  },
  {
    "English": "musty",
    "Chinese": "恶臭的"
  },
  {
    "English": "needy",
    "Chinese": "贫穷的"
  },
  {
    "English": "canny",
    "Chinese": "精明的, 聪明的"
  },
  {
    "English": "uncanny",
    "Chinese": "奇异的"
  },
  {
    "English": "mighty",
    "Chinese": "强大的"
  },
  {
    "English": "locale",
    "Chinese": "地点"
  },
  {
    "English": "finale",
    "Chinese": "大结局"
  },
  {
    "English": "rationale",
    "Chinese": "理由"
  },
  {
    "English": "halfhearted",
    "Chinese": "不认真的, 不热心的"
  },
  {
    "English": "morale",
    "Chinese": "士气"
  },
  {
    "English": "proverbial",
    "Chinese": "家喻户晓的"
  },
  {
    "English": "shorthand",
    "Chinese": "速记"
  },
  {
    "English": "madcap",
    "Chinese": "鲁莽的，行为冲动的"
  },
  {
    "English": "leading",
    "Chinese": "最重要的"
  },
  {
    "English": "degenerate",
    "Chinese": "道德败坏的"
  },
  {
    "English": "testing",
    "Chinese": "费力的"
  },
  {
    "English": "lengthy",
    "Chinese": "冗长的"
  },
  {
    "English": "materialize",
    "Chinese": "实现"
  },
  {
    "English": "calculable",
    "Chinese": "可计算的"
  },
  {
    "English": "gainsay",
    "Chinese": "否认"
  },
  {
    "English": "officious",
    "Chinese": "爱掺和的, 爱管闲事的"
  },
  {
    "English": "appraise",
    "Chinese": "评估"
  },
  {
    "English": "restless",
    "Chinese": "不安的"
  },
  {
    "English": "bighearted",
    "Chinese": "慷慨的, 宽大的"
  },
  {
    "English": "artless",
    "Chinese": "朴实的, 单纯的"
  },
  {
    "English": "pitfall",
    "Chinese": "陷阱"
  },
  {
    "English": "hardy",
    "Chinese": "吃苦耐劳的"
  },
  {
    "English": "aback",
    "Chinese": "吃惊地"
  },
  {
    "English": "weighty",
    "Chinese": "重要的"
  },
  {
    "English": "disown",
    "Chinese": "否认"
  },
  {
    "English": "virtually",
    "Chinese": "几乎"
  },
  {
    "English": "unearth",
    "Chinese": "揭露"
  },
  {
    "English": "uptake",
    "Chinese": "理解"
  },
  {
    "English": "instrumental",
    "Chinese": "重要的"
  },
  {
    "English": "reserved",
    "Chinese": "沉默寡言的"
  },
  {
    "English": "pretext",
    "Chinese": "借口"
  },
  {
    "English": "subtext",
    "Chinese": "潜台词"
  },
  {
    "English": "setback",
    "Chinese": "挫折"
  },
  {
    "English": "backlash",
    "Chinese": "激烈反对"
  },
  {
    "English": "standstill",
    "Chinese": "静止, 停滞"
  },
  {
    "English": "level-headed",
    "Chinese": "头脑清晰冷静的"
  },
  {
    "English": "byword",
    "Chinese": "典型, 代名词"
  },
  {
    "English": "one-stop",
    "Chinese": "一站式的, 全方位的"
  },
  {
    "English": "upright",
    "Chinese": "垂直的"
  },
  {
    "English": "acquired",
    "Chinese": "后天习得的"
  },
  {
    "English": "rosy",
    "Chinese": "乐观的"
  },
  {
    "English": "becoming",
    "Chinese": "（尤指有吸引力的）得体的, 合适的"
  },
  {
    "English": "sententious",
    "Chinese": "简洁的;说教的"
  },
  {
    "English": "artifice",
    "Chinese": "诡计，欺骗"
  },
  {
    "English": "unrest",
    "Chinese": "不安"
  },
  {
    "English": "deadlock",
    "Chinese": "僵局"
  },
  {
    "English": "expendable",
    "Chinese": "多余的"
  },
  {
    "English": "porous",
    "Chinese": "可渗透的"
  },
  {
    "English": "scuffle",
    "Chinese": "扭打"
  },
  {
    "English": "unnerve",
    "Chinese": "使...失去勇气"
  },
  {
    "English": "clueless",
    "Chinese": "无知的"
  },
  {
    "English": "studied",
    "Chinese": "深思熟虑的"
  },
  {
    "English": "privation",
    "Chinese": "贫穷，匮乏"
  },
  {
    "English": "distance",
    "Chinese": "超出,把…..甩在后面"
  },
  {
    "English": "list",
    "Chinese": "倾斜"
  },
  {
    "English": "passage",
    "Chinese": "(事物从一个状态到另一个状态的)转变"
  },
  {
    "English": "sound",
    "Chinese": "状态良好的"
  },
  {
    "English": "faculty",
    "Chinese": "才能, 本领"
  },
  {
    "English": "function",
    "Chinese": "重大聚会"
  },
  {
    "English": "avatar",
    "Chinese": "化身, 代表"
  },
  {
    "English": "liberal",
    "Chinese": "慷慨的"
  },
  {
    "English": "license",
    "Chinese": "自由"
  },
  {
    "English": "latitude",
    "Chinese": "自由"
  },
  {
    "English": "court",
    "Chinese": "招致"
  },
  {
    "English": "contract",
    "Chinese": "招致"
  },
  {
    "English": "betray",
    "Chinese": "（无意中）显露"
  },
  {
    "English": "qualify",
    "Chinese": "限制"
  },
  {
    "English": "stomach",
    "Chinese": "容忍"
  },
  {
    "English": "resolve",
    "Chinese": "决定, 决心要做"
  },
  {
    "English": "arrest",
    "Chinese": "阻止"
  },
  {
    "English": "digest",
    "Chinese": "文摘"
  },
  {
    "English": "nexus",
    "Chinese": "连接"
  },
  {
    "English": "kindle",
    "Chinese": "点燃"
  },
  {
    "English": "waffle",
    "Chinese": "犹豫不决"
  },
  {
    "English": "off-key",
    "Chinese": "出格的, 不正常的"
  },
  {
    "English": "balloon",
    "Chinese": "快速上升"
  },
  {
    "English": "fetch",
    "Chinese": "卖得(某个价格）"
  },
  {
    "English": "contain",
    "Chinese": "限制"
  },
  {
    "English": "stem",
    "Chinese": "阻止, 限制"
  },
  {
    "English": "check",
    "Chinese": "阻止"
  },
  {
    "English": "still",
    "Chinese": "静止的"
  },
  {
    "English": "clinical",
    "Chinese": "不感情用事的, 冷静的"
  },
  {
    "English": "novel",
    "Chinese": "新颖的"
  },
  {
    "English": "might",
    "Chinese": "力量, 权力"
  },
  {
    "English": "grave",
    "Chinese": "严肃的"
  },
  {
    "English": "affect",
    "Chinese": "伪装, 装腔作势"
  },
  {
    "English": "flag",
    "Chinese": "衰弱"
  },
  {
    "English": "pan",
    "Chinese": "严厉批评"
  },
  {
    "English": "compromise",
    "Chinese": "妥协, 让步"
  },
  {
    "English": "founder",
    "Chinese": "彻底失败"
  },
  {
    "English": "august",
    "Chinese": "庄严的, 肃穆的"
  },
  {
    "English": "assume",
    "Chinese": "假装"
  },
  {
    "English": "pedestrian",
    "Chinese": "无聊的, 普通的"
  },
  {
    "English": "champion",
    "Chinese": "支持者"
  },
  {
    "English": "coin",
    "Chinese": "发明（一个新词）"
  },
  {
    "English": "weather",
    "Chinese": "渡过（危机）"
  },
  {
    "English": "document",
    "Chinese": "详细记录"
  },
  {
    "English": "contest",
    "Chinese": "质疑, 否认"
  },
  {
    "English": "intrigue",
    "Chinese": "密谋, 诡计"
  },
  {
    "English": "occasion",
    "Chinese": "引起"
  },
  {
    "English": "effect",
    "Chinese": "引起"
  },
  {
    "English": "spell",
    "Chinese": "（一段）时间"
  },
  {
    "English": "husband",
    "Chinese": "节省"
  },
  {
    "English": "industry",
    "Chinese": "努力"
  },
  {
    "English": "demonstrative",
    "Chinese": "显露情感的"
  },
  {
    "English": "pursuit",
    "Chinese": "事业"
  },
  {
    "English": "emergent",
    "Chinese": "新兴的"
  },
  {
    "English": "inform",
    "Chinese": "通知"
  },
  {
    "English": "appropriate",
    "Chinese": "合适的"
  },
  {
    "English": "circumstantial",
    "Chinese": "详细的"
  },
  {
    "English": "project",
    "Chinese": "投掷"
  },
  {
    "English": "subject",
    "Chinese": "屈服"
  },
  {
    "English": "object",
    "Chinese": "反对"
  },
  {
    "English": "long",
    "Chinese": "渴望"
  },
  {
    "English": "pacific",
    "Chinese": "爱好和平的"
  },
  {
    "English": "involved",
    "Chinese": "复杂的"
  },
  {
    "English": "score",
    "Chinese": "获得....成就"
  },
  {
    "English": "intimate",
    "Chinese": "亲密无间的"
  },
  {
    "English": "portentous",
    "Chinese": "不吉利的"
  },
  {
    "English": "rail",
    "Chinese": "抨击, 批评"
  },
  {
    "English": "base",
    "Chinese": "卑鄙的"
  },
  {
    "English": "course",
    "Chinese": "过程"
  },
  {
    "English": "mount",
    "Chinese": "上升"
  },
  {
    "English": "count",
    "Chinese": "有重要性"
  },
  {
    "English": "insulate",
    "Chinese": "绝缘, 绝热, 隔音"
  },
  {
    "English": "row",
    "Chinese": "(多人之间的)争吵"
  },
  {
    "English": "jade",
    "Chinese": "使…厌烦"
  },
  {
    "English": "trammel",
    "Chinese": "阻碍，限制自由"
  },
  {
    "English": "comb",
    "Chinese": "仔细检查, 仔细搜寻"
  },
  {
    "English": "jealous",
    "Chinese": "死守严防的, 精心守护的"
  },
  {
    "English": "usher",
    "Chinese": "引领....进入"
  },
  {
    "English": "cow",
    "Chinese": "恐吓"
  },
  {
    "English": "hedge",
    "Chinese": "故意模棱两可不绝对的言论"
  },
  {
    "English": "obscure",
    "Chinese": "不清晰的，不易辨别的"
  },
  {
    "English": "yield",
    "Chinese": "投降, 屈服"
  },
  {
    "English": "skirt",
    "Chinese": "回避, 避开（话题）"
  },
  {
    "English": "asset",
    "Chinese": "有价值的人或事"
  },
  {
    "English": "dense",
    "Chinese": "浓密的"
  },
  {
    "English": "frown",
    "Chinese": "皱眉"
  },
  {
    "English": "content",
    "Chinese": "满足的"
  },
  {
    "English": "sanction",
    "Chinese": "支持"
  },
  {
    "English": "accent",
    "Chinese": "发重音"
  },
  {
    "English": "perennial",
    "Chinese": "多年生的（植物）"
  },
  {
    "English": "confound",
    "Chinese": "使困惑"
  },
  {
    "English": "promise",
    "Chinese": "前景光明"
  },
  {
    "English": "acknowledge",
    "Chinese": "感谢"
  },
  {
    "English": "volume",
    "Chinese": "音量"
  },
  {
    "English": "discharge",
    "Chinese": "解雇"
  },
  {
    "English": "apology",
    "Chinese": "辩护"
  },
  {
    "English": "patent",
    "Chinese": "明显的"
  },
  {
    "English": "fell",
    "Chinese": "砍树"
  },
  {
    "English": "appreciate",
    "Chinese": "升值"
  },
  {
    "English": "reliable",
    "Chinese": "（结论、模型等）可靠的"
  },
  {
    "English": "abandon",
    "Chinese": "放纵"
  },
  {
    "English": "harry",
    "Chinese": "打扰, 骚扰"
  },
  {
    "English": "experimental",
    "Chinese": "新颖的, 创新的"
  },
  {
    "English": "second",
    "Chinese": "同意"
  },
  {
    "English": "usage",
    "Chinese": "对待方式"
  },
  {
    "English": "autumn",
    "Chinese": "晚年, 暮年"
  },
  {
    "English": "measured",
    "Chinese": "仔细的，有分寸的"
  },
  {
    "English": "entrance",
    "Chinese": "使...着迷"
  },
  {
    "English": "color",
    "Chinese": "扭曲, 影响"
  },
  {
    "English": "economy",
    "Chinese": "节省"
  },
  {
    "English": "listless",
    "Chinese": "没精打采的"
  },
  {
    "English": "humor",
    "Chinese": "幽默"
  },
  {
    "English": "complaint",
    "Chinese": "抱怨"
  },
  {
    "English": "tender",
    "Chinese": "提供"
  },
  {
    "English": "anchor",
    "Chinese": "使...稳定"
  },
  {
    "English": "bitter",
    "Chinese": "怨恨的, 气愤的"
  },
  {
    "English": "husbandry",
    "Chinese": "农业, 畜牧业, 饲养业"
  },
  {
    "English": "anticipate",
    "Chinese": "期待"
  },
  {
    "English": "hail",
    "Chinese": "欢呼，赞美"
  },
  {
    "English": "anonymous",
    "Chinese": "不出名的"
  },
  {
    "English": "tend",
    "Chinese": "照顾,养育"
  },
  {
    "English": "dissipate",
    "Chinese": "使...消散"
  },
  {
    "English": "misuse",
    "Chinese": "不公平地对待"
  },
  {
    "English": "physical",
    "Chinese": "实体的"
  },
  {
    "English": "embrace",
    "Chinese": "接受"
  },
  {
    "English": "descendant",
    "Chinese": "下降的"
  },
  {
    "English": "abstraction",
    "Chinese": "抽象, 概要"
  },
  {
    "English": "substantial",
    "Chinese": "大量的"
  },
  {
    "English": "counterpart",
    "Chinese": "等价物"
  },
  {
    "English": "mirror",
    "Chinese": "与...相似"
  },
  {
    "English": "enterprise",
    "Chinese": "活动"
  },
  {
    "English": "shoulder",
    "Chinese": "承担"
  },
  {
    "English": "recipe",
    "Chinese": "秘诀, 方法"
  },
  {
    "English": "cupidity",
    "Chinese": "贪心"
  },
  {
    "English": "square",
    "Chinese": "符合，一致"
  },
  {
    "English": "slight",
    "Chinese": "轻视"
  },
  {
    "English": "finger",
    "Chinese": "指出"
  },
  {
    "English": "muddy",
    "Chinese": "使...模糊"
  },
  {
    "English": "people",
    "Chinese": "充满"
  },
  {
    "English": "immediate",
    "Chinese": "紧靠的，最接近的"
  },
  {
    "English": "guesswork",
    "Chinese": "猜测"
  },
  {
    "English": "untiring",
    "Chinese": "不知疲倦的"
  },
  {
    "English": "grand",
    "Chinese": "富丽堂皇的"
  },
  {
    "English": "corrosive",
    "Chinese": "（言语）讽刺的，挖苦的"
  },
  {
    "English": "radical",
    "Chinese": "极端的，激进的"
  },
  {
    "English": "fuel",
    "Chinese": "支撑，支持"
  },
  {
    "English": "aside",
    "Chinese": "跑题"
  },
  {
    "English": "sequel",
    "Chinese": "后续，后果"
  },
  {
    "English": "factotum",
    "Chinese": "杂工"
  },
  {
    "English": "disputant",
    "Chinese": "争论者"
  },
  {
    "English": "novice",
    "Chinese": "新手"
  },
  {
    "English": "tyro",
    "Chinese": "新手"
  },
  {
    "English": "neophyte",
    "Chinese": "新手"
  },
  {
    "English": "maverick",
    "Chinese": "标新立异之人"
  },
  {
    "English": "martinet",
    "Chinese": "要求严格纪律的人"
  },
  {
    "English": "sophist",
    "Chinese": "哲学家"
  },
  {
    "English": "quibbler",
    "Chinese": "吹毛求疵的人"
  },
  {
    "English": "pedant",
    "Chinese": "卖弄学问的人"
  },
  {
    "English": "naysayer",
    "Chinese": "否定者, 怀疑者"
  },
  {
    "English": "acolyte",
    "Chinese": "助手"
  },
  {
    "English": "associate",
    "Chinese": "同事, 伙伴"
  },
  {
    "English": "canary",
    "Chinese": "金丝雀"
  },
  {
    "English": "braggart",
    "Chinese": "吹牛者"
  },
  {
    "English": "dictator",
    "Chinese": "独裁者"
  },
  {
    "English": "tyrant",
    "Chinese": "暴君"
  },
  {
    "English": "denizen",
    "Chinese": "居民"
  },
  {
    "English": "bishop",
    "Chinese": "主教"
  },
  {
    "English": "clergy",
    "Chinese": "神职人员, 牧师"
  },
  {
    "English": "prophet",
    "Chinese": "先知, 预言者"
  },
  {
    "English": "virtuoso",
    "Chinese": "艺术品鉴赏家"
  },
  {
    "English": "progeny",
    "Chinese": "子孙, 后裔"
  },
  {
    "English": "hardliner",
    "Chinese": "强硬分子"
  },
  {
    "English": "dilettante",
    "Chinese": "半吊子, 业余的人, 一知半解的人"
  },
  {
    "English": "spearhead",
    "Chinese": "先锋部队"
  },
  {
    "English": "vanguard",
    "Chinese": "先锋"
  },
  {
    "English": "philistine",
    "Chinese": "庸俗的人"
  },
  {
    "English": "polymath",
    "Chinese": "博学的人"
  },
  {
    "English": "prodigy",
    "Chinese": "神童"
  },
  {
    "English": "interlocutor",
    "Chinese": "对话者"
  },
  {
    "English": "spendthrift",
    "Chinese": "挥霍的人"
  },
  {
    "English": "monger",
    "Chinese": "商人, 贩子"
  },
  {
    "English": "culprit",
    "Chinese": "罪犯, 罪魁祸首"
  },
  {
    "English": "curator",
    "Chinese": "管理者"
  },
  {
    "English": "orator",
    "Chinese": "演讲者"
  },
  {
    "English": "fledgling",
    "Chinese": "无经验的人"
  },
  {
    "English": "cynic",
    "Chinese": "认为人性自私的人"
  },
  {
    "English": "quixote",
    "Chinese": "爱空想的人"
  },
  {
    "English": "expansionist",
    "Chinese": "扩张主义者"
  },
  {
    "English": "electorate",
    "Chinese": "选举人"
  },
  {
    "English": "preservationist",
    "Chinese": "保护主义者"
  },
  {
    "English": "zealot",
    "Chinese": "狂热者"
  },
  {
    "English": "extremist",
    "Chinese": "极端主义者"
  },
  {
    "English": "revisionist",
    "Chinese": "修正主义者"
  },
  {
    "English": "mogul",
    "Chinese": "有权势的人"
  },
  {
    "English": "guru",
    "Chinese": "领袖"
  },
  {
    "English": "tycoon",
    "Chinese": "企业界大亨, 巨头"
  },
  {
    "English": "bellwether",
    "Chinese": "领导者"
  },
  {
    "English": "stickler",
    "Chinese": "坚持…的人"
  },
  {
    "English": "diehard",
    "Chinese": "顽固的"
  },
  {
    "English": "nonentity",
    "Chinese": "无足轻重的人"
  },
  {
    "English": "imposter",
    "Chinese": "冒名顶替的人"
  },
  {
    "English": "mastermind",
    "Chinese": "策划者"
  },
  {
    "English": "iconoclast",
    "Chinese": "提倡打破旧习的人"
  },
  {
    "English": "soothsayer",
    "Chinese": "预言家"
  },
  {
    "English": "connoisseur",
    "Chinese": "鉴赏家, 内行"
  },
  {
    "English": "boor",
    "Chinese": "粗人"
  },
  {
    "English": "playwright",
    "Chinese": "剧作家"
  },
  {
    "English": "despot",
    "Chinese": "独裁者"
  },
  {
    "English": "apologist",
    "Chinese": "辩护人"
  },
  {
    "English": "wastrel",
    "Chinese": "浪费的人"
  },
  {
    "English": "autocrat",
    "Chinese": "独裁者"
  },
  {
    "English": "oddball",
    "Chinese": "古怪的人"
  },
  {
    "English": "bore",
    "Chinese": "无聊的人"
  },
  {
    "English": "layperson",
    "Chinese": "外行"
  },
  {
    "English": "has-been",
    "Chinese": "过时的人"
  },
  {
    "English": "progenitor",
    "Chinese": "先驱"
  },
  {
    "English": "benefactor",
    "Chinese": "慈善家"
  },
  {
    "English": "gourmand",
    "Chinese": "吃货"
  },
  {
    "English": "cronyism",
    "Chinese": "任用亲信"
  },
  {
    "English": "nepotism",
    "Chinese": "任人唯亲"
  },
  {
    "English": "totalitarianism",
    "Chinese": "极权主义"
  },
  {
    "English": "utilitarianism",
    "Chinese": "功利主义"
  },
  {
    "English": "cynicism",
    "Chinese": "认为人性自私"
  },
  {
    "English": "chauvinism",
    "Chinese": "盲目的爱国心"
  },
  {
    "English": "egalitarianism",
    "Chinese": "平等主义"
  },
  {
    "English": "altruism",
    "Chinese": "无私, 利他主义"
  },
  {
    "English": "anarchism",
    "Chinese": "无政府主义"
  },
  {
    "English": "anthropocentrism",
    "Chinese": "人类中心说"
  },
  {
    "English": "atheism",
    "Chinese": "无神论"
  },
  {
    "English": "collectivism",
    "Chinese": "集体主义"
  },
  {
    "English": "dualism",
    "Chinese": "二元论"
  },
  {
    "English": "feminism",
    "Chinese": "女权主义"
  },
  {
    "English": "hedonism",
    "Chinese": "享乐主义"
  },
  {
    "English": "individualism",
    "Chinese": "个人主义"
  },
  {
    "English": "nihilism",
    "Chinese": "虚无主义"
  },
  {
    "English": "teetotalism",
    "Chinese": "禁酒主义"
  },
  {
    "English": "inappropriate",
    "Chinese": "不适当的，不合适的"
  },
  {
    "English": "indiscernible",
    "Chinese": "不明显的"
  },
  {
    "English": "disreputable",
    "Chinese": "声明狼藉的"
  },
  {
    "English": "plebeian",
    "Chinese": "平民，粗俗的人"
  },
  {
    "English": "clairvoyant",
    "Chinese": "有洞察力的"
  },
  {
    "English": "hallucinogen",
    "Chinese": "迷幻剂"
  },
  {
    "English": "voyeur",
    "Chinese": "好刺探他人隐私者"
  },
  {
    "English": "boredom",
    "Chinese": "厌倦"
  },
  {
    "English": "apogee",
    "Chinese": "最高点"
  },
  {
    "English": "acme",
    "Chinese": "最高点"
  },
  {
    "English": "precursor",
    "Chinese": "先驱"
  },
  {
    "English": "civil",
    "Chinese": "公民的"
  },
  {
    "English": "peaceable",
    "Chinese": "和平的，温顺的"
  },
  {
    "English": "unfaltering",
    "Chinese": "坚定的"
  },
  {
    "English": "superfluous",
    "Chinese": "多余的"
  },
  {
    "English": "uncertainty",
    "Chinese": "不确定，不可靠"
  },
  {
    "English": "cautious",
    "Chinese": "小心谨慎的"
  },
  {
    "English": "renegade",
    "Chinese": "叛徒"
  },
  {
    "English": "misanthrope",
    "Chinese": "厌恶人类的人，愤世嫉俗的人"
  },
  {
    "English": "leveling",
    "Chinese": "使平等，使一致"
  },
  {
    "English": "straddle",
    "Chinese": "横跨"
  },
  {
    "English": "baleful",
    "Chinese": "邪恶的，不吉利的"
  },
  {
    "English": "shelve",
    "Chinese": "搁置"
  },
  {
    "English": "scribble",
    "Chinese": "草率地写画"
  },
  {
    "English": "abyss",
    "Chinese": "深渊（指危险的处境）"
  },
  {
    "English": "stunning",
    "Chinese": "令人印象深刻的"
  },
  {
    "English": "bulwark",
    "Chinese": "堡垒，壁垒"
  },
  {
    "English": "showcase",
    "Chinese": "展示"
  },
  {
    "English": "staunch",
    "Chinese": "坚定的，忠诚的"
  },
  {
    "English": "untrammeled",
    "Chinese": "自由的"
  },
  {
    "English": "screed",
    "Chinese": "冗长，单调的说话或者文章"
  },
  {
    "English": "stupefaction",
    "Chinese": "非常惊讶或惊慌失措"
  },
  {
    "English": "vitriolic",
    "Chinese": "尖酸刻薄的"
  },
  {
    "English": "bombastic",
    "Chinese": "夸大的，言过其实的"
  },
  {
    "English": "waggish",
    "Chinese": "诙谐的"
  },
  {
    "English": "retract",
    "Chinese": "收回，否认"
  },
  {
    "English": "etch",
    "Chinese": "铭记"
  },
  {
    "English": "exultant",
    "Chinese": "狂喜的"
  },
  {
    "English": "axiomatic",
    "Chinese": "公理的，不证自明的"
  },
  {
    "English": "fusion",
    "Chinese": "熔合"
  },
  {
    "English": "exegesis",
    "Chinese": "解释，注释"
  },
  {
    "English": "cerebral",
    "Chinese": "理智的"
  },
  {
    "English": "ideologue",
    "Chinese": "理论家，提倡者"
  },
  {
    "English": "slavish",
    "Chinese": "缺乏创造力的，盲目模仿的"
  },
  {
    "English": "hands-off",
    "Chinese": "不干涉的，不插手的"
  },
  {
    "English": "no-nonsense",
    "Chinese": "直接的，不允许的不相干的事（话）的"
  },
  {
    "English": "channel",
    "Chinese": "指导，引导"
  },
  {
    "English": "staid",
    "Chinese": "沉着的，严肃的"
  },
  {
    "English": "spurn",
    "Chinese": "因鄙视而拒绝"
  },
  {
    "English": "thenceforth",
    "Chinese": "此后，从那时开始"
  },
  {
    "English": "simpleton",
    "Chinese": "呆子，傻子"
  },
  {
    "English": "duel",
    "Chinese": "反对"
  },
  {
    "English": "duel",
    "Chinese": "斗争"
  },
  {
    "English": "giddy",
    "Chinese": "轻浮的，轻狂的"
  },
  {
    "English": "cannibalism",
    "Chinese": "食人,嗜食同类"
  },
  {
    "English": "galactic",
    "Chinese": "星系的"
  },
  {
    "English": "platitudinous",
    "Chinese": "平凡的，陈腐的"
  },
  {
    "English": "lockstep",
    "Chinese": "因循守旧；步调一致"
  },
  {
    "English": "offhand",
    "Chinese": "即时的；未经准备的"
  },
  {
    "English": "veneer",
    "Chinese": "虚饰或虚伪的外表"
  },
  {
    "English": "wooden",
    "Chinese": "僵硬的，呆板的"
  },
  {
    "English": "subsume",
    "Chinese": "归入，包含"
  },
  {
    "English": "plaudit",
    "Chinese": "鼓掌，喝彩，赞扬"
  },
  {
    "English": "tack",
    "Chinese": "固定，附加"
  },
  {
    "English": "helter-skelter",
    "Chinese": "匆促忙乱地"
  },
  {
    "English": "acquittal",
    "Chinese": "宣告无罪"
  },
  {
    "English": "shed",
    "Chinese": "去除，除去"
  },
  {
    "English": "rummage",
    "Chinese": "仔细检查"
  },
  {
    "English": "disapprobation",
    "Chinese": "不赞成；非难"
  },
  {
    "English": "regressive",
    "Chinese": "退化的"
  },
  {
    "English": "yore",
    "Chinese": "很久以前"
  },
  {
    "English": "laggard",
    "Chinese": "缓慢的；落后的"
  },
  {
    "English": "query",
    "Chinese": "怀疑，提出疑问"
  },
  {
    "English": "unremitting",
    "Chinese": "坚持不懈的，不间断的"
  },
  {
    "English": "accretive",
    "Chinese": "增积的"
  },
  {
    "English": "plangent",
    "Chinese": "悲哀的"
  },
  {
    "English": "iridescent",
    "Chinese": "色彩斑斓的；辉煌灿烂的"
  },
  {
    "English": "legible",
    "Chinese": "清楚的，易读的"
  },
  {
    "English": "asperity",
    "Chinese": "态度粗暴"
  },
  {
    "English": "tangential",
    "Chinese": "离题的；肤浅的"
  },
  {
    "English": "inching",
    "Chinese": "缓慢移动"
  },
  {
    "English": "recuse",
    "Chinese": "取消资格"
  },
  {
    "English": "mock-up",
    "Chinese": "伪装工事；实物模型"
  },
  {
    "English": "overweening",
    "Chinese": "傲慢的，自负的"
  },
  {
    "English": "holistic",
    "Chinese": "整体的"
  },
  {
    "English": "sideshow",
    "Chinese": "附带事件，小事"
  },
  {
    "English": "natter",
    "Chinese": "唠叨，话多"
  },
  {
    "English": "confide",
    "Chinese": "吐露"
  },
  {
    "English": "fiddle",
    "Chinese": "伪造，篡改"
  },
  {
    "English": "malice",
    "Chinese": "恶意，怨恨"
  },
  {
    "English": "bottleneck",
    "Chinese": "阻塞，妨碍"
  },
  {
    "English": "dismissal",
    "Chinese": "免职，开除"
  }
]

export default words_array