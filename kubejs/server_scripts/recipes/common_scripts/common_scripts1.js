//常规工作台合成配方
ServerEvents.recipes(event => {
  event.shapeless(Item.of('minecraft:potion[potion_contents={potion:"minecraft:awkward"}]'), [
    ['minecraft:experience_bottle'], ['malum:alchemical_calx'],
  ]);
  event.shapeless(Item.of('minecraft:experience_bottle'), [
    ['malum:refined_brilliance'], ['minecraft:glass_bottle'],
  ]);
  event.shaped('minecraft:enchanted_golden_apple', [
    'SCS',
    'SAS',
    'SSS'
  ], {
    S: 'malum:alchemical_calx',
    C: 'malum:hallowed_gold_ingot',
    A: 'minecraft:golden_apple'
  });
  event.shapeless(Item.of('locusazzurro_icaruswings:golden_string', 4), [
    ['minecraft:string'], ['malum:hallowed_gold_ingot'],
  ]);
  event.shaped('l2archery:master_bow', [
    ' SC',
    'S C',
    ' SC'
  ], {
    S: 'minecraft:stick',
    C: 'locusazzurro_icaruswings:golden_string',
  });
  event.shaped('locusazzurro_icaruswings:demeter_charge', [
    'CSC',
    'SAS',
    'CSC'
  ], {
    S: 'locusazzurro_icaruswings:golden_string',
    C: 'malum:alchemical_calx',
    A: 'minecraft:ender_pearl'
  });
  event.shaped(Item.of('locusazzurro_icaruswings:steel_mixture', 2), [
    'CSC',
    'SAS',
    'CSC'
  ], {
    S: '#minecraft:coals',
    C: 'malum:alchemical_calx',
    A: 'minecraft:diamond'
  });
  event.shaped(Item.of('malum:runewood_item_pedestal', 4), [
    'CCC',
    ' A ',
    'CCC'
  ], {
    C: 'malum:runewood_planks_slab',
    A: 'malum:runewood_planks'
  });
  event.shaped(Item.of('malum:spirit_altar'), [
    'BCB',
    'DAD',
    'BCB'
  ], {
    C: 'malum:runewood_planks',
    A: 'malum:runewood_log',
    D: 'malum:hallowed_gold_ingot',
    B: 'malum:alchemical_calx'
  });
  event.shaped(Item.of('malum:spirit_altar'), [
    'BBB',
    ' A ',
    'CCC'
  ], {
    B: 'malum:runewood_planks',
    A: 'malum:hallowed_gold_ingot',
    C: 'malum:alchemical_calx'
  });
  event.shaped(Item.of('malum:runewood_obelisk', 4), [
    'CBC',
    'CAC',
    'CAC'
  ], {
    B: 'malum:hallowed_gold_ingot',
    A: 'malum:runewood_log',
    C: 'malum:alchemical_calx'
  });
  event.shaped(Item.of('malum:crude_scythe'), [
    'BB ',
    ' A ',
    ' A '
  ], {
    B: 'locusazzurro_icaruswings:steel_ingot',
    A: 'minecraft:stick',
  });
  event.shaped(Item.of('locusazzurro_icaruswings:synapse_alloy_sword[irons_spellbooks:spell_container={data:[{id:"irons_spellbooks:pocket_dimension",index:0,level:6}],maxSpells:1,mustEquip:0b,spellWheel:1b},dream_stone:real_unbreak=1b]'), [
    'CB ',
    ' B ',
    ' A '
  ], {
    B: 'locusazzurro_icaruswings:synapse_alloy_ingot',
    A: 'locusazzurro_icaruswings:steel_ingot',
    C: 'beyonddimensions:unstable_space_time_fragment'
  });
  event.shapeless(Item.of('minecraft:mace[repair_cost=3,enchantments={levels:{"minecraft:density":3,"minecraft:wind_burst":3}}]'), [
    ['minecraft:mace'], ['malum:paracausal_flame'],
  ]);
  event.shapeless(Item.of('malum:soul_stained_steel_scythe[repair_cost=7,enchantments={levels:{"minecraft:knockback":2,"minecraft:sharpness":4,"minecraft:sweeping_edge":2}}]'), [
    ['malum:soul_stained_steel_scythe'], ['malum:paracausal_flame'],
  ]);
  event.shapeless(Item.of('locusazzurro_icaruswings:astraea_wings[dream_stone:real_unbreak=1b]'), [
    ['locusazzurro_icaruswings:astraea_wings'], ['malum:paracausal_flame'],
  ]);
  event.shapeless(Item.of('minecraft:enchanted_book[stored_enchantments={levels:{"malum:haunted":1}}]'), [
    ['minecraft:book'], ['malum:null_slate'], ['malum:alchemical_calx'],
    ['malum:alchemical_calx'],
  ]);
  event.shapeless(Item.of('minecraft:enchanted_book[stored_enchantments={levels:{"malum:rebound":1}}]'), [
    ['minecraft:book'], ['malum:null_slate'], ['malum:alchemical_calx'],
    ['malum:alchemical_calx'], ['malum:alchemical_calx'],
  ]);
  event.shapeless(Item.of('minecraft:enchanted_book[stored_enchantments={levels:{"malum:spirit_plunder":1}}]'), [
    ['minecraft:book'], ['malum:null_slate'], ['malum:alchemical_calx'],
    ['malum:alchemical_calx'], ['malum:alchemical_calx'],
  ]);
  event.shapeless(Item.of('minecraft:enchanted_book[stored_enchantments={levels:{"malum:haunted":1}}]'), [
    ['minecraft:book'], ['malum:null_slate'], ['malum:alchemical_calx'],
    ['malum:alchemical_calx'], ['malum:alchemical_calx'], ['malum:alchemical_calx'],
  ]);
  event.shapeless(Item.of('minecraft:enchanted_book[stored_enchantments={levels:{"malum:ascension":1}}]'), [
    ['minecraft:book'], ['malum:null_slate'], ['malum:alchemical_calx'],
    ['malum:alchemical_calx'], ['malum:alchemical_calx'], ['malum:alchemical_calx'],
    ['malum:alchemical_calx'],
  ]);
  event.shapeless(Item.of('locusazzurro_icaruswings:magic_membrane'), [
    ['locusazzurro_icaruswings:zephir_essence'], ['minecraft:phantom_membrane'], ['malum:alchemical_calx'],
  ]);
});




