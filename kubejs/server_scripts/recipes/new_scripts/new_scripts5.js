//灵灾符文工艺配方格式
ServerEvents.recipes( event=>{
    event.custom({
  "type": "malum:runeworking", //配方种类
  "primaryInput": {
    "count": 1,
    "item": 'malum:hex_ash'  //输入物品
  },
  "result": {
    "count": 4,
    "id":'malum:null_slate', //输出物品
  },
  "secondaryInput": {     
    "type": "wicked",      //精魂类型
    "count": 16           //精魂数量
  }
    })
})


