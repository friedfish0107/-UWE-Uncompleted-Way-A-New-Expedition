ServerEvents.recipes(event => {
    //工作台变贵
    event.remove({ output: 'minecraft:crafting_table' })
    event.shaped("minecraft:crafting_table", [
        "CC",
        "PP"
    ], {
        "C": "minecraft:copper_ingot",
        "P": "#minecraft:planks"
    })
    //熔炉新配方
    event.shapeless('minecraft:furnace', [
        "#minecraft:stone_tool_materials", 'malum:alchemical_calx',
    ]);
    //??
    event.shaped(Item.of("minecraft:crafting_table").withLore("What the f**k"), [
        "QWQ",
        "SOS",
        "QSQ"
    ], {
        "Q": "minecraft:stick",
        "W": "minecraft:orange_carpet",
        "S": "minecraft:iron_ingot",
        "O": "minecraft:oak_planks"
    })
})