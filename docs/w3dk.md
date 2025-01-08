---
template: patcher.html
section: legacy
hide:
  - next
  - prev
  - search
  - tabs
latest: v1.1.0
patcher_errors:
  mismatch: Mismatch. Use the vanilla ROM.
patches:
  v1.1.0:
    name: Worms 3D Kerfuffle 1.1.0
    file: https://github.com/NicholasMoser/Worms3DKerfuffle/releases/download/1.1.0/patches.zip
    site: https://github.com/NicholasMoser/Worms3DKerfuffle/releases/tag/1.1.0
    size: 0x45E08000
    patches:
      - name: 'Worms3D-Kerfuffle-1.1.0'
        file: previous.xdelta
        crc: 0x861deebb
      - name: 'Worms3D-Kerfuffle-1.1.0'
        file: vanilla.xdelta
        crc: 0x9562468b
  v1.0.1:
    name: Worms 3D Kerfuffle 1.0.1
    file: https://github.com/NicholasMoser/Worms3DKerfuffle/releases/download/1.0.1/patches.zip
    site: https://github.com/NicholasMoser/Worms3DKerfuffle/releases/tag/1.0.1
    size: 0x45E08000
    patches:
      - name: 'Worms3D-Kerfuffle-1.0.1'
        file: previous.xdelta
        crc: 0x72efef1e
      - name: 'Worms3D-Kerfuffle-1.0.1'
        file: vanilla.xdelta
        crc: 0x9562468b
  v1.0.0:
    name: Worms 3D Kerfuffle 1.0.0
    file: https://github.com/NicholasMoser/Worms3DKerfuffle/releases/download/1.0.0/patches.zip
    site: https://github.com/NicholasMoser/Worms3DKerfuffle/releases/tag/1.0.0
    size: 0x45E08000
    patches:
      - name: 'Worms3D-Kerfuffle-1.0.0'
        file: previous.xdelta
        crc: 0x9562468b
      - name: 'Worms3D-Kerfuffle-1.0.0'
        file: vanilla.xdelta
        crc: 0x9562468b
---

# Worms 3D Kerfuffle

This online patcher uses a lot of memory. You may need to run this from a more powerful computer if you are having issues.

The patcher may ask you to convert your copy of the game to another format. This is because our patches can only be applied against a specific format of the game.

{{ patcher().render() }}
{%- if 'latest' not in page.meta %}
{{ exception('you must define the latest version in ' + page.url) }}
{%- endif %}
{%- set latest_patch = page.meta.latest %}

## Latest Version ({{ latest_patch }})

[Patch ROM :fontawesome-solid-spinner:{ .fa-spin style="display: none;" }](#){ .md-button .md-button--primary data-patch-id="{{ page.meta.latest }}" data-modal="{{ modalId(patcher().id) }}" onclick="loadPatcher(this)" #patcher-modal }
[Patch Notes :fontawesome-solid-arrow-up-right-from-square:]({{ page.meta.patches[latest_patch].site }}){ .md-button target='_blank' }

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
    This website does not condone piracy. This patcher requires that you use your own acquired ISO. The ISO patching is performed on your machine.

!!! info "ROM Patching Credits"
    ROM patching is based on [RomPatcher.js](https://www.marcrobledo.com/RomPatcher.js/) by Marc Robledo and [smash64.online](https://smash64.online/)
    by the Smash 64 Remix team.
