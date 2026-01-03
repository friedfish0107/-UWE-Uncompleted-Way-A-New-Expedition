//熔炉配方
ServerEvents.recipes(event => {
    event.smelting('malum:hallowed_gold_ingot','malum:cthonic_gold',0.1,20*5)
    event.smelting('locusazzurro_icaruswings:steel_ingot','locusazzurro_icaruswings:steel_mixture',0.5,20*7)
    event.smelting('irons_spellbooks:arcane_essence','malum:arcane_charcoal',2,20*12)
    event.smelting('minecraft:enchanted_book','malum:hex_ash',0.5,20*1)
})