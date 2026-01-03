ServerEvents.recipes(event => {
    //木镐
    event.shaped(Item.of('minecraft:wooden_pickaxe').set("minecraft:unbreakable", {}), [
        'SC',
    ], {
        S: "#minecraft:planks",
        C: 'malum:alchemical_calx'
    })
    //木镐->石镐
    event.shaped(Item.of('minecraft:stone_pickaxe').set("minecraft:unbreakable", {}), [
        'CA',
        'WC'
    ], {
        C: 'minecraft:cobblestone',
        A: 'malum:alchemical_calx',
        W: 'minecraft:wooden_pickaxe'
    });
    //石镐->铁镐
    event.shaped(Item.of("minecraft:iron_pickaxe").set("minecraft:unbreakable", {}), [
        'IA',
        'SI'
    ], {
        I: "minecraft:iron_ingot",
        A: 'malum:alchemical_calx',
        S: "minecraft:stone_pickaxe"
    });
    //铁镐->钻镐
    event.shaped(Item.of("minecraft:diamond_pickaxe").set("minecraft:unbreakable", {}), [
        'DDD',
        ' A ',
        ' I '
    ], {
        D: "minecraft:diamond",
        A: 'malum:alchemical_calx',
        I: "minecraft:iron_pickaxe"
    });
})