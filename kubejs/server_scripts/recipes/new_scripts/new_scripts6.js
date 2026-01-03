//灵灾精魂修复配方格式
ServerEvents.recipes(event => {
   event.custom({
  "type": "malum:spirit_repair",  //配方类型
  "durabilityPercentage": 0.5, 
  "inputs": [
    'locusazzurro_icaruswings:wind_wand'        //需修复物品
  ],
  "repairMaterial": {
    "count": 1,
    "item": 'malum:hallowed_gold_ingot'  //修复材料
  },
  "spirits": [                    //精魂种类
    {
      "type": "eldritch",
      "count": 8
    },
     {
      "type": "sacred",
      "count": 8
    },
  ]
})
 event.custom({
  "type": "malum:spirit_repair",  //配方类型
  "durabilityPercentage": 0.5, 
  "inputs": [
    'locusazzurro_icaruswings:wind_wand'        //需修复物品
  ],
  "repairMaterial": {
    "count": 1,
    "item": 'malum:hallowed_gold_ingot'  //修复材料
  },
  "spirits": [                    //精魂种类
    {
      "type": "eldritch",
      "count": 8
    },
     {
      "type": "sacred",
      "count": 8
    },
  ]
})
})