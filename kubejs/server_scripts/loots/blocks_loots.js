//用于方块掉落修改
LootJS.lootTables(event => {
    event.modifyBlockTables('minecraft:gravel').firstPool(pool => {
        pool.rolls(1).bonusRolls(0);
        pool.addEntry(LootEntry.of('malum:alchemical_calx').withWeight(10)) //添加带权重的方块掉落物格式
        pool.addEntry(LootEntry.of('minecraft:flint').withWeight(30))
        pool.addEntry(LootEntry.of('minecraft:gravel').withWeight(60))
    });
});

