
//用于添加物品文字提示（F3+T重载）
ItemEvents.modifyTooltips(event => {
    event.add("dirt", "§2深绿 §3深青 §4深红 §5深紫 §6金 §7灰 §8深灰 §9蓝 §a绿 §b青 §c红 §d亮紫 §e黄 §f白")
    event.add("stone", ["§e可以放置", "§a用于建造洞穴", "§7无法制作石质工具", "§8虫蛀石头已被删除", "§b挖掘§6石头/石头矿石§b100%获取", "一块普通的石头"])
    event.add('explorerscompass:explorerscompass', [
        '§e用于寻找各种结构',
        '§a不同阶段流程流派的所需结构均已标注',
        '§7英文名称结构均已经删除'])
    event.add('naturescompass:naturescompass', [
        '§e用于寻找各种群系',
        '§a不同阶段流程流派的所需群系均已标注'])

    event.add('beyonddimensions:unstable_space_time_fragment', [
        '§e用于制作§6维度网络发生器',
        '§b由§6得墨忒耳能量粒子§b投入§6哭泣之井§b转化得来',
        '§b在物品栏中放一个小时即可稳定'])

    event.add('malum:rune_of_volatile_distortion', [
        '§e佩戴者造成的伤害随机变动(90%-120%)',
        '§a10%概率使变动后的伤害翻倍'
    ])
    event.add('hazennstuff:runestone_fragments', '§e用于制作§68种§e可以放在饰品栏中的§6符文')
    event.add('malum:cthonic_gold', '§b以晶簇形态生长于§6深板岩金矿§b周围')
    event.add('malum:hallowed_gold_ingot', '§b烧制§6深岩珍金§b获得')
    event.add('locusazzurro_icaruswings:demeter_charge', [
        '§e可以用作§6得墨忒耳§e的弹药',
        '§a投入§6哭泣之井§a转化为§6不稳定时空碎片'
    ])
    event.add('beyonddimensions:net_creater', [
        '§e右键任意位置打开§6时空裂缝',
        '§aO键可随时打开无限的§6存储网络'
    ])
    event.add('locusazzurro_icaruswings:steel_ingot', '§b烧制§6碳素钢混料§b获得')
    event.add('malum:repair_pylon', [
        '§e进行§6精魂修复',
        '§b由§6碳素钢锭§b投入§6哭泣之井§b转化得来',
    ])
    event.add('malum:runewood_sapling', [
        '§b§6橡木树苗§b投入§6哭泣之井§b转化而来',
    ])
    event.add('irons_spellbooks:arcane_essence', '§b煅烧§6奥术木炭§b获得')
    event.add('malum:runic_workbench', [
        '§e制作各流派§6法术符文',
        '§a制作§6特殊附魔书',
        '§a制作§6初级法术卷轴',
        '§a制作§6稀有材料'
    ])
    event.add('malum:runewood_obelisk', [
        '§e加快§6精魂灌注§e速度',
        '§a每座加快25%速度【每个§6祭坛§a最多生效4座】'
    ])
    event.add('malum:spirit_altar', [
        '§e举行§6精魂灌注仪式',
        '§a制作各流派§6法术书§a、§6法杖',
        '§a制作§6高级附魔书核心材料',
        '§a制作强大§6魔法药剂',
        '§a制作§6奥术装备饰品'
    ])
    event.add('malum:runewood_item_pedestal', '§e可放置物品用于§6精魂祭坛§e进行§6精魂灌注合成')
    event.add('beyonddimensions:stable_space_time_fragment', [
        '§b§6不稳定时空碎片§b在物品栏放一小时得到',
        '§e投入§6哭泣之井§e转化为§6维度网络发生器'
    ])
    event.add('irons_spellbooks:arcane_anvil', [
        '§e给§6装备/武器/法杖/法术书§e打法球强化',
        '§a每件最多能打20个§6法球'
    ])
    event.add('locusazzurro_icaruswings:synapse_alloy_sword', [
        '§f特殊武器',
        '§e拥有撕裂§6空间§e的力量，可打开独立于世界之外的§6有限空间',
        '§7无法破坏'
    ])

    event.add('hazennstuff:dreadsteel_ingot', '§b烧制§6惧石§b获得')
    event.add('hazennstuff:excalibur_fragment', '§e§6魔剑士流派§e的核心物品，合成不会消耗')
    event.add('iss_magicfromtheeast:yin_yang_core', '§e§6两仪流派§e的核心物品，合成不会消耗')
    event.add('iss_magicfromtheeast:arcane_relics', '§e§6魂灵流派§e的核心物品，合成不会消耗')
    event.add('l2complements:heirophant_green', '§e§6唤魔流派§e的核心物品，合成不会消耗')
    event.add('redstonegolem:redstone_golem_spawn_egg', '§f如果你感觉自己准备好了就去召唤§6红石傀儡')
    event.add('malum:paracausal_flame', [
        '§e召唤§6boss§e的常规材料之一',
        '§a制作特殊的§6武器§a及§6饰品',
        '§a给特定§6武器§a打特定§6附魔'
    ])
    event.add('malum:hex_ash', '§b熔炉烧制任意§6附魔书§b获取')
    event.add('malum:null_slate', '§e用于制作§6镰刀类型附魔书')
    event.add('malum:rune_of_haste', '§e§6矿工之怒§e：+20%§6攻击速度§e和§6挖掘速度')
    event.add('malum:rune_of_ailment_cleansing', '§e缩短25%§6debuff§e持续时间')
    event.add('malum:rune_of_sacrificial_empowerment', '§e击杀§6生物§e10秒内+15%§6镰刀伤害')
    event.add('malum:rune_of_twinned_duration', '§e受到的§6buff§e时长翻倍')
    event.add('malum:rune_of_the_hells', '§e每0.5秒熄灭自身的§6火§e并治疗1点§6生命值')
    event.add('tcbm:cardboardbox', [
        '§e包装带走任意可破坏的§6方块',
        '§aShift+右键 包装§6方块',
        '§a对着包装好的§6纸箱§a Shift+右键 去除包装'
    ])
    event.add('malum:fused_consciousness', '§e用于制作一些强大的§6奥术道具')
    event.add('malum:hallowed_gold_ingot', '§e用于§6精魂修复§e的消耗品')
    event.add('locusazzurro_icaruswings:demeter', [
        '§e使用§6得墨忒耳能量粒子§e作为弹药',
        '§e右键发射15点伤害且能给敌人上6层(命中)/4层(未命中)§6宿命debuff§e的§6能量爆发',
        '§a常规攻击给目标上1层§6宿命debuff',
        '§a§6宿命§a：每次获得此效果，会增加等级并刷新时长，最高叠加至10级;10级时，每再次获得效果，会受到新增加效果每级50点§6物理伤害'
    ])

})



