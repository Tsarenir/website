# Mapping
Some random mapping related stuffs.

## Parameters
Multiple addparams and their parameters are separated by semi-colons.

Beware, due to Hammer limitations, your total addparam string's length will need to be less than 100 characters. You can, however, split addparams with the ms_monsterspawns pass parameters property*, or the map's global addparams property.

These can also be applied, individually, to a monster when crossing a certain point in the map, by using the Scriptevent property on a trigger_once or trigger_multiple flagged triggerable by monsters, or with the msnpc_script entity.

They can also be added, globally, to all monsters, via Map Properties->Global Addparams(map_addparams), or to a specific set of monsters, via the ms_monsterspawn/msarea_monsterspawn's Pass AddParams(params)* property.

### Behavior
set_race;<faction_name>
- Change monster's race for interaction with other mobs.
- For a complete list of faction interaction see: msc/test_scripts/reference_scripts/races.script

set_no_roam
- Removes monster wander function.

ext_invalidate
- Flags the mob as an invalid target to other NPCs (so it won't be attacked).
- If the NPC is friendly, set_race;beloved is preferable to this, as invalidated NPC's can still be damaged by AOE attacks.

critical_npc
- Designates this NPC as critical and initiates "siege map" mode.
- 1/3 of every monster spawned hereafter will attempt to hunt any NPC with this tag.

ignore_critical_npc
- Ignores critical NPCs on siege maps.

set_attack_until_spotted
- Simulates attacking an object until damaged or spots an enemy.

set_no_step_adj
- Removes step-adjustment procedure (step size will be 16 units, regardless of mob height).

set_blind_attack
- Removes the requisite that the mob must see a target to attack it.
- Particularly useful with overscaled monsters that need to be able to attack through their minions.

set_npc_turret
- Causes monster to stay in place and act as a turret.

set_dosr
- Monster removes when related ms_monsterspawn is removed via killtarget

set_no_auto_activate
- Normally, mobs immediately cycle up if they spawn near a player, this prevents that behavior.

set_non_agro
- Monster will not target players until attacked.

set_mclip;<0|1>
- Setting this to 0 causes mob to ignore func_monsterclips.

set_die_nt;<seconds>
- Monster will removes if it doesn't find a valid target within <secondsafter spawning.
- Similarly, monster will remove if it doesn't find a target <secondsafter cooling down.

### Visual Effects
set_scale;<ratio>
- Increase/decrease monster size, attempts to alter collision box and reach to match.
set_scale_nr;<ratio>
- As above, but with no reach adjustment.
set_scale_nb;<ratio>
- As above, but with no bounding box adjustment (best when size ratio is between 0.75-1.25)
set_scale_nbr;<ratio>
- As above, but with neither reach nor bounding box adjustment.

set_model;<model_path>
- Changes the default monster model.
- <model_pathshould exclude the ``models/`` prefix, and must end in ".mdl"
- Model must be precached or will crash.

set_submodel;<part:submodel*>
- Changes the submodel indexing on the monster's model.
- Part and submodel index must be separated by a colon ":".
- Keep in mind that the HLMV indexes from 1, while the game indexes from 0.

set_skin
- Changes the model skin.
- Keep in mind that the HLMV indexes from 1, while the game indexes from 0.

glow_red
glow_green
glow_blue
glow_yellow
glow_purple
glow_custom;<(RRR,GGG,BBB)>
- Adds a glow-shell of the indicated color to the monster

make_ghost
- Gives mob a additive/holographic render.
- (can be removed with remove_ghost)

set_fade_in
- Causes monster to 'fade in' on spawn.

set_summon_circle
- Causes monster to appear from a summoning circle with sound.

setfx_tele_in
- Causes monster to spawn with a teleport effect and sound.

setfx_sprite_in
- Causes monster to spawn in with a sprite effect and sound.

setfx_sprite_inx
- As setfx_sprite_in, but uses a different sprite.

setfx_beam_in
- Causes monster to spawn in with a lightning bolt effect.

setfx_spawn_sound
- Triggers a magic sound on spawning. (set_summon_circle/sprite_in already do this.)

set_cbm;<mp3>
- Sets combat music when encountering this monster.
- Overrides any existing combat music setting.

set_cbml;<mins:secs>
- Optional - determines the length of the combat music for a cleaner loop.

set_not_musical
- Tells the combat music system to ignore requests to start combat music from this monster.
- Useful if the monster cannot be slain and will be targeting perpetually - such as the killer whales in Shendar_East's nightmare sequence.

### Resistances
ext_no_player_damage
- Take no damage from players.

make_invulnerable
- Creates a white glow shell and makes NPC invulnerable.
- This can be removed via msnpc_script or when crossing a monster-triggerable brush with the scriptevent: make_vulnerable.

lightning_immune
fire_immune
poison_immune
cold_immune
- Grants immunity to related damage type.

set_stun_prot;<percent%>
- Sets monster's stun resistance, 0-100%.

set_takedmg;<type:ratio>
- Changes monster's vulnerability to specific element.
- Element type and ratio must be separated by a colon.

### Enhancements
speed_x2
speed_x2_5
speed_x3
speed_x4
- Increases monster's frame rate, causing it to both move and attack more quickly.
- (Adjusts XP)

set_mspeed;<ratio>
- Adjusts movement speed without adjusting attack speed.
- Do not use to create turrets (see set_npc_turret).
- Adjusts XP.

demon_blood;[multiplier]
- Adds demon blood to monster.
- Default multiplier is x5 damage.
- Adjusts XP.

make_boss
- Flags NPC as boss (adds regeneration, resistance to previously slain players, and increases XP.)

ext_set_parry
- Lets you add a parry skill to the mob (should be >100 to have effect)

add_dot_poison;[ratio]
add_dot_cold;[ratio]
add_dot_fire;[ratio]
add_dot_lightning;[ratio]
- Grants DOT of type to the monster, coupled with a glow shell related to the element.
- [ratio] increases or reduces the DPS.
- Adjusts XP.

set_tele_hunter;[frequency]
- Causes monster to teleport to current target every [frequency] seconds (default 20).
- Adjusts XP.

set_tele_hunter_random;[frequency]
- As above, but monster will select targets randomly, rather than continuously teleporting to the same target.

set_lshield *
- Grants the monster a lightning field, similar to The Hollow One
- Adjusts XP

### Other
ext_no_drops
- Strips gold and drops from a monster. (Usually)

ext_reduct_xp;<ratio>
- Reduces XP.

set_self_adj;[adjust_max#]
- Causes the monster to self adjust based on the total hp of active players.
- adjust_max can be set from 1-5, indicating the maximum level of adjustment levels the mob can use (this helps prevent overpowered monsters, and is highly recommended with any monster with a base HP of higher than 5,000.)

set_no_avg
- On self adjusting maps, cause the monster not to be counted when determining the average tier.
- This is useful for monsters towards the beginning of the map that may be slain before all players have connected.

set_xp_tr;<minutes to max XP>
- Monster is worth less than maximum XP until the map has been running this many minutes, ramping from 0 to full XP during this time.
- Useful for high level bosses with easy access.

set_range;<units>
- Changes the mob's attack range.
- Does not work for all monsters, or on monsters with multiple attacks of differing ranges.

set_say_spawn;'text'
- Causes mob to say something on spawn.
- Beware there is no sanity check, and using double quotes or odd characters may crash your compile.
- 'text' should be in single quotes if any spaces are used.

set_say_spot;'text'
- As above, but text is said when first spotting an enemy.

set_say_die;'text'
- As above, but text is said when mob dies.

set_solid;<none|box|slidebox|trigger>
- Changes the monsters bounding box type (none will cause it to be noclip to players)

set_dyn_spawn *
- Causes the mob to teleport off-map on spawn, then try to find a spot where no player is looking within its msarea_monsterspawn before teleporting back in.

set_world_spawn;[distance] *
- As set_dyn_spawn, except the monster will attempt to teleport to a random player within the world, favoring clustered players.
- [distance] defaults to 512 if omitted, and represents the maximum distance the monster will attempt to spawn from the player.

## Universal Eventnames
for use with ms_npcscript, these work with most NPCs, including monsters/lure:
XXXX_race - where XXXX is, replace with desired race. This is buggy, and may cause issues (including crash). Common uses include: orc_race, hated_race, beloved_race, human_race. Full faction list and relations can be found here.
ELEMENT_immune: Where ELEMENT is, replace with desired element. Valid elements currently include: lightning, fire, poison, and cold. Using normal_immune sets all immunities to normal (including any immunities the creature might normally have).
fifty_armor - sets 50% damage absorption.
eighty_armor - sets 80% damage absorption.
make_invulnerable - makes monster invulnerable (godmode)
make_vulnerable - makes monster vulnerable
add_XXX_health - where XXX is use 10, 100, 500, or 1000 (untested)
double_health - Doubles creature's health based on current. Prefixes name with "Strong ", can be used repeatedly (but name effect stacks)
quad_health - Quadruplescreature's health based on current. Prefixes name with "Very Strong ", can be used repeatedly (but name effect stacks)