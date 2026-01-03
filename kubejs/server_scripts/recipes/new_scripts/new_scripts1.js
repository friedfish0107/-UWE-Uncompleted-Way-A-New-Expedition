//灵灾精魂灌注配方格式
ServerEvents.recipes(event => {
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 4,       //物品栏(数量)
        "item": 'irons_spellbooks:arcane_essence'       //物品栏(id)
      },
      {
        "count": 8,
        "item": 'malum:alchemical_calx'
      },
      {
        "count": 2,
        "item": 'malum:hallowed_gold_ingot'
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'minecraft:anvil'   //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'irons_spellbooks:arcane_anvil'       //输出物品id
    },
    "spirits": [
      {
        "type": "infernal",                //精魂种类
        "count": 8                       //精魂数量
      },
      {
        "type": 'wicked',
        "count": 8
      },
      {
        "type": 'arcane',
        "count": 8
      }
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 4,       //物品栏(数量)
        "item": 'minecraft:phantom_membrane'       //物品栏(id)
      },
      {
        "count": 1,
        "item": 'locusazzurro_icaruswings:zephir_essence'
      },
    ],
    "ingredient": {
      "count": 4,
      "item": 'locusazzurro_icaruswings:steel_ingot'   //核心物品id
    },
    "output": {
      "count": 8,
      "id": 'locusazzurro_icaruswings:synapse_alloy_ingot'      //输出物品id
    },
    "spirits": [
      {
        "type": "aerial",                //精魂种类
        "count": 16                       //精魂数量
      },
      {
        "type": 'wicked',
        "count": 16
      },
      {
        "type": 'arcane',
        "count": 16
      },
      {
        "type": 'eldritch',
        "count": 16
      }
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'minecraft:elytra'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'locusazzurro_icaruswings:synapse_chestplate'   //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'locusazzurro_icaruswings:astraea_wings'      //输出物品id
    },
    "spirits": [
      {
        "type": "aerial",                //精魂种类
        "count": 16                       //精魂数量
      },
      {
        "type": 'arcane',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'malum:paracausal_flame'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'malum:block_of_hallowed_gold'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'minecraft:redstone_block'      //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'minecraft:redstone_block'      //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'minecraft:egg'   //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'redstonegolem:redstone_golem_spawn_egg'      //输出物品id
    },
    "spirits": [
      {
        "type": "aerial",                //精魂种类
        "count": 32                       //精魂数量
      },
      {
        "type": 'eldritch',
        "count": 32
      },
      {
        "type": "wicked",                //精魂种类
        "count": 32                      //精魂数量
      },
      {
        "type": "infernal",                //精魂种类
        "count": 32                       //精魂数量
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 3,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:void_essence'       //物品栏(id)
      },
      {
        "count": 6,       //物品栏(数量)
        "item": 'endersequipment:putrid_flesh'       //物品栏(id)
      },
      {
        "count": 6,       //物品栏(数量)
        "item": 'endersequipment:rotten_bone'      //物品栏(id)
      },
      {
        "count": 4,       //物品栏(数量)
        "item": 'minecraft:blaze_rod'      //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'hazennstuff:dreadsteel_ingot'   //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:paracausal_flame'      //输出物品id
    },
    "spirits": [
      {
        "type": "infernal",                //精魂种类
        "count": 16                      //精魂数量
      },
      {
        "type": 'arcane',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'malum:paracausal_flame'       //物品栏(id)
      },
      {
        "count": 2,       //物品栏(数量)
        "item": 'minecraft:ender_eye'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'malum:crude_scythe'   //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:soul_stained_steel_scythe'      //输出物品id
    },
    "spirits": [
      {
        "type": "eldritch",                //精魂种类
        "count": 16                      //精魂数量
      },
      {
        "type": 'wicked',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 16,       //物品栏(数量)
        "item": 'minecraft:beef'       //物品栏(id)
      },
      {
        "count": 16,       //物品栏(数量)
        "item": 'minecraft:porkchop'       //物品栏(id)
      },
      {
        "count": 16,       //物品栏(数量)
        "item": 'minecraft:mutton'       //物品栏(id)
      },
      {
        "count": 16,       //物品栏(数量)
        "item": 'minecraft:chicken'       //物品栏(id)
      },
      {
        "count": 32,       //物品栏(数量)
        "item": 'minecraft:rotten_flesh'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'malum:paracausal_flame'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:ring_of_growing_flesh'      //输出物品id
    },
    "spirits": [
      {
        "type": 'wicked',
        "count": 32
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 8,       //物品栏(数量)
        "item": 'irons_spellbooks:arcane_essence'       //物品栏(id)
      },
      {
        "count": 2,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:void_essence'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'malum:paracausal_flame'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:ring_of_echoing_arcana' //输出物品id
    },
    "spirits": [
      {
        "type": 'wicked',
        "count": 32
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 2,       //物品栏(数量)
        "item": 'malum:hallowed_gold_ingot'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_haste' //输出物品id
    },
    "spirits": [
      {
        "type": 'infernal',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:void_essence'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_volatile_distortion' //输出物品id
    },
    "spirits": [
      {
        "type": 'eldritch',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:zephir_essence'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_unnatural_stamina' //输出物品id
    },
    "spirits": [
      {
        "type": 'aerial',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:steel_ingot'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_ailment_cleansing' //输出物品id
    },
    "spirits": [
      {
        "type": 'aerial',
        "count": 8
      },
      {
        "type": 'arcane',
        "count": 8
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'hazennstuff:chlorophyte_ingot'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_indomitability' //输出物品id
    },
    "spirits": [
      {
        "type": 'earthen',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'hazennstuff:dreadsteel_ingot'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_sacrificial_empowerment' //输出物品id
    },
    "spirits": [
      {
        "type": 'eldritch',
        "count": 8
      },
      {
        "type": 'sacred',
        "count": 8
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 4,       //物品栏(数量)
        "item": 'minecraft:experience_bottle'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_twinned_duration' //输出物品id
    },
    "spirits": [
      {
        "type": 'earthen',
        "count": 8
      },
      {
        "type": 'infernal',
        "count": 8
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 8,       //物品栏(数量)
        "item": 'minecraft:blaze_rod'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 16,
      "item": 'hazennstuff:runestone_fragments'  //核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:rune_of_the_hells' //输出物品id
    },
    "spirits": [
      {
        "type": 'wicked',
        "count": 8
      },
      {
        "type": 'infernal',
        "count": 8
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'minecraft:chest'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'minecraft:chest'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'minecraft:chest'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'minecraft:chest'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'locusazzurro_icaruswings:synapse_alloy_ingot' //核心物品id
    },
    "output": {
      "count": 2,
      "id": 'tcbm:cardboardbox' //输出物品id
    },
    "spirits": [
      {
        "type": 'infernal',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'hazennstuff:arcane_steel_block'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:synapse_alloy_ingot'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'hazennstuff:arcane_steel_block'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:synapse_alloy_ingot'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'malum:fused_consciousness'//核心物品id
    },
    "output": {
      "count": 1,
      "id": 'locusazzurro_icaruswings:wind_wand' //输出物品id
    },
    "spirits": [
      {
        "type": 'infernal',
        "count": 16
      },
      {
        "type": 'eldritch',
        "count": 16
      },
      {
        "type": 'aerial',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'malum:fused_consciousness'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:synapse_alloy_ingot'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:synapse_alloy_ingot'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'hazennstuff:spider_fang'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'malum:paracausal_flame'//核心物品id
    },
    "output": {
      "count": 1,
      "id": 'locusazzurro_icaruswings:demeter' //输出物品id
    },
    "spirits": [
      {
        "type": 'infernal',
        "count": 16
      },
      {
        "type": 'eldritch',
        "count": 16
      },
      {
        "type": 'aerial',
        "count": 16
      },
      {
        "type": 'earthen',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:nether_essence'      //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:nether_essence'       //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:nether_essence'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'hazennstuff:chlorophyte_ingot'//核心物品id
    },
    "output": {
      "count": 1,
      "id": 'malum:fused_consciousness' //输出物品id
    },
    "spirits": [
      {
        "type": 'infernal',
        "count": 16
      },
      {
        "type": 'eldritch',
        "count": 16
      },
    ]
  }
  )
  event.custom({
    "type": "malum:spirit_infusion",   //配方类型
    "extraIngredients": [
      {
        "count": 2,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:synapse_alloy_ingot'      //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:magic_membrane'      //物品栏(id)
      },
      {
        "count": 1,       //物品栏(数量)
        "item": 'locusazzurro_icaruswings:magic_membrane'       //物品栏(id)
      },
    ],
    "ingredient": {
      "count": 1,
      "item": 'minecraft:elytra'//核心物品id
    },
    "output": {
      "count": 1,
      "id": 'locusazzurro_icaruswings:astraea_wings' //输出物品id
    },
    "spirits": [
      {
        "type": 'infernal',
        "count": 16
      },
      {
        "type": 'aerial',
        "count": 16
      },
    ]
  }
  )
})