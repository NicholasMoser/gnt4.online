---
template: patcher.html
section: legacy
hide:
  - next
  - prev
  - search
  - tabs
latest: 1.6.0-beta9
patcher_errors:
  mismatch: Mismatch. Use the vanilla ROM.
patches:
  1.6.0-beta9:
    name: SCON4 1.6.0-beta9
    file: https://github.com/NicholasMoser/gnt4mods/releases/download/1.1/patch.zip
    site: https://github.com/NicholasMoser/gnt4mods/releases/tag/1.1
    size: 0x57058000
    patches:
      - name: 'SCON4 1.6.0-beta9'
        file: patch.xdelta
        crc: 0x55ee8b1a
  1.6.0-beta8:
    name: SCON4 1.6.0-beta8
    file: https://github.com/NicholasMoser/gnt4mods/releases/download/1.2/patch.zip
    site: https://github.com/NicholasMoser/gnt4mods/releases/tag/1.2
    size: 0x57058000
    patches:
      - name: 'SCON4 1.6.0-beta8'
        file: patch.xdelta
        crc: 0x55ee8b1a
---

# Smash Remix

{{ patcher().render() }}
{%- if 'latest' not in page.meta %}
{{ exception('you must define the latest version in ' + page.url) }}
{%- endif %}
{%- set latest_patch = page.meta.latest %}

## Latest Version ({{ latest_patch }})

[Patch ROM :fontawesome-solid-spinner:{ .fa-spin style="display: none;" }](#){ .md-button .md-button--primary data-patch-id="{{ page.meta.latest }}" data-modal="{{ modalId(patcher().id) }}" onclick="loadPatcher(this)" #patcher-modal }
[Patch Notes :fontawesome-solid-arrow-up-right-from-square:]({{ page.meta.patches[latest_patch].site }}){ .md-button target='_blank' }
[Credits](#){ .md-button data-micromodal-trigger="{{ modalId('credits') }}" #credits }

## Previous Versions

{%- for id, data in page.meta.patches.items() %}
{% if id != page.meta.latest %}
#### {{ id }} { #{{ id }} }
- [Patch {{ id }} :fontawesome-solid-spinner:{ .fa-spin style="display: none;" }](#{{ id }}){ data-patch-id="{{ id }}" data-modal="{{ modalId(patcher().id) }}" onclick="loadPatcher(this)" #patcher-modal }
- [Patch Notes :fontawesome-solid-arrow-up-right-from-square:]({{ data.site }}){ target='_blank' }
{%- endif %}
{%- endfor %}

* * *

!!! info "Disclaimer"
    This website does not condone piracy. This patcher requires that you use your own acquired Smash 64 ROM. The ROM patching is performed on your machine.

!!! info "ROM Patching Credits"
    ROM patching is based on [RomPatcher.js](https://www.marcrobledo.com/RomPatcher.js/) by Marc Robledo.

{#- putting this down here allows us hide the whitespace created from the empty toc labels #}
{{ modalOk(id='credits', title='Credits', scrollable=true, body="
### Remix Team: { #hidden data-toc-label='' }
- Project Leader: The_Smashfather
- Designer and Gameplay Developer: Fray
- Developer: MarioReincarnate
- Developer: Cyjorg
- Developer: halofactory
- Lead Artist: Sope!
- Lead Musician: Pringles
- Animation and Model Import Specialist: Subdrag
- Moveset Designer: Honey
- Lead Tester: goombapatrol
- Installation Specialist: CEnnis91

### Modelers: { #hidden data-toc-label='' }
- Retro64
- Sope!
- Likiji123
- Fray
- Pik
- dshaynie
- Garrett Atwood
- Adrian Garcia
- M-1
- TheQuickSlash

### Artists: { #hidden data-toc-label='' }
- Sope!
- Retro64
- Connor Rentz
- Colonel Birdstrong
- Jay6T4
- Likiji123
- Pik
- Gael Romo
- TheQuickSlash

### Animators: { #hidden data-toc-label='' }
- Sope!
- Fray
- Coolguy
- Super4ng
- dshaynie
- Retro64
- MrLuigi001
- SushiiZ
- BlazingFireOmega
- PrufStudent
- Zeozen
- M-1
- Meekal
- halofactory
- TheQuickSlash

### Musicians: { #hidden data-toc-label='' }
- TT
- MyNewSoundtrack
- PablosCorner
- Sope!
- Retro64
- DSC
- Coffee
- mosky2000
- Jay6T4
- PurpleFreezer
- Pun
- Fray
- TheQuickSlash
- Pringles
- TheMrIron2
- UnforseenUplink
- supa

### Stage Designers: { #hidden data-toc-label='' }
- BridGurrr
- Jay6T4
- Plaehni
- farcry15
- smb123w64gb
- Sope!
- Fray
- Snooplax
- Sixty Four
- M-1
- Retro64
- TheQuickSlash
- ownsoldier
- halofactory

### Voice Artists: { #hidden data-toc-label='' }
- Zarkpudd
- Puma Pet

### Modders: { #hidden data-toc-label='' }
- Qapples
- Smb123w64gb
- FaxMeApplejuice
- goombapatrol

### Video Design Team: { #hidden data-toc-label='' }
- Darkhorse
- dshaynie
- Fray
- Sope!
- TheQuickSlash
- Retro64

### Consultants: { #hidden data-toc-label='' }
- Madao
- DannySsB
- tehz
- Carnivorous
- CrookedPoe/Clockwise
- CrashOveride
- Kaki
- Katakiri
- Aqua Midi

### Playtesters: { #hidden data-toc-label='' }
- Abnormal Adept
- Darkhorse
- hanson933
- IronAidan07
- majin_bukkake
- minymidge
- Stevie G
- Luigidoed
- Hyper64
- Dogs_Johnson
- emptyW
- FaxMeApplejuice
- phreshguy
- measTHEbeast
- Xrmy
- Q!
- Raychu
- Pluto
- The Yid
- Wololo
- wookiee-alex
- thelordoflight
- JODO
- farcry15
- mimimax
- Pluto
- kyleglor
- Revan
- Big Red
- Bamboo
- cobr
- Dr. D
- Andykins
- Loz
- jonnjonn
- Kaki
- Maafia
- SushiiZ
- JaimeHR
- MojoMonkey
- DannySsB
- Vidya James
- SuperSqank
- supa
- JeyKeyAr
- RazzSmash
- PADB
- madrush
- krakhead
- KM
- fruitman
- baby caweb
- MissingN0pe
- Shalaka
- foca64
- HAMMERHEART
- Kix
- Lowww
- beta
- halofactory
- LOC
- Maciaga
- pecosix
- PKStickThing
- SyluxX1V
- Weedwack
- KeroKeroppi
- 1upShyguy
- epona
- Stew
- thetaiter
- LesbianChemicalPlant
- Bedoop
- CMM1215
- Djzach
- Exile
- FrankBlack22
- Freean
- Gibrani
- Huntsman
- Indefa
- MultiVolt
- Policombo
- Raihem
- Roman
- ShyGuyGH
- The Ranger
- Tylan 64
- חלקלקToad
- MissingNo.
- Wiseacre
- Pringles

### Original Sequencing Musical Credits: { #hidden data-toc-label='' }
- Golen
- King Meteor
- Sirius
- Joo \*Johnnyz\* Buaes
- Sonic SBL
- ChocolateJake
- jrlepage
- Matas Pealoza
- pigpag
- Zenkusa
- Ryland Fallon
- Jonathan Shen
- Dave Phaneuf
- Sean Bee
- Insane Apu
- Chibi Vegito
- Leu
- Mantato
- Anikom15
- Zenkusa
- Dentelle (D. Stphanie)
- David Alberto
- Dr. Fruitcake
- JexuBandicoot527
- Ethan Williams
- Kirby of Doom
- Susan Carriere, A. R. C. T.
- erik@vbe.com
- Josh \"Dicaeopolis\" Porter
- Paper_Luigi
- Mark Jansen
- WaVeOf_DaRKnEsS
- matthewcollinson
- anthony bouchereau
- ZERMa
- mittens
- Joe Cortez
- Teck
- Kiopineapple
- Gigasoft
- William Borges
- Blue Warrior
- isabellechiming
- Vènatus
") }}
