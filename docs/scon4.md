---
template: patcher.html
section: legacy
hide:
  - next
  - prev
  - search
  - tabs
latest: v1.7.1
patcher_errors:
  mismatch: Mismatch. Use the vanilla ROM.
patches:
  v1.7.1:
    name: SCON4 1.7.1
    file: https://github.com/NicholasMoser/testrepo/releases/download/1.7.1/patches.zip
    site: https://github.com/NicholasMoser/testrepo/releases/tag/1.7.1
    size: 0x57058000
    patches:
      - name: 'SCON4 1.7.1'
        file: previous.xdelta
        crc: 0xebb03873
      - name: 'SCON4 1.7.1'
        file: vanilla.xdelta
        crc: 0x55ee8b1a
      - name: 'SCON4 1.7.1'
        file: 1.6.1.xdelta
        crc: 0x206cc896
  v1.7.0:
    name: SCON4 1.7.0
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.7.0/patches.zip
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.7.0
    size: 0x57058000
    patches:
      - name: 'SCON4 1.7.0'
        file: previous.xdelta
        crc: 0x206cc896
      - name: 'SCON4 1.7.0'
        file: vanilla.xdelta
        crc: 0x55ee8b1a
  v1.6.1:
    name: SCON4 1.6.1
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.6.1/patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.6.1
    size: 0x57058000
    patches:
      - name: 'SCON4 1.6.1'
        file: patch.xdelta
        crc: 0x55ee8b1a
  v1.6.0:
    name: SCON4 1.6.0
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.6.0/patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.6.0
    size: 0x57058000
    patches:
      - name: 'SCON4 1.6.0'
        file: patch.xdelta
        crc: 0x55ee8b1a
  v1.5.1:
    name: SCON4 1.5.1
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.5.1/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.5.1
    size: 0x57058000
    patches:
      - name: 'SCON4 1.5.1'
        file: patch.xdelta
        crc: 0x55ee8b1a
  v1.5:
    name: SCON4 1.5
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.5/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.5
    size: 0x57058000
    patches:
      - name: 'SCON4 1.5'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4.321:
    name: SCON4 1.4.321
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4.321/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4.321
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.321'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4.32:
    name: SCON4 1.4.32
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4.32/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4.32
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.32'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4.31:
    name: SCON4 1.4.31
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4.31/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4.31
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.31'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4.3:
    name: SCON4 1.4.3
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4.30/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4.30
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.3'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4.21:
    name: SCON4 1.4.21
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4.21/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4.21
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.21'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4.2:
    name: SCON4 1.4.2
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4.2/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4.2
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.2'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4.1:
    name: SCON4 1.4.1
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4.1/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4.1
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.1'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.4:
    name: SCON4 1.4
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.4/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.4
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.3.42:
    name: SCON4 1.3.42
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.3.42/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.3.42
    size: 0x57058000
    patches:
      - name: 'SCON4 1.4.32'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.2.05:
    name: SCON4 1.2.05
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.2.05/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.2.05
    size: 0x57058000
    patches:
      - name: 'SCON4 1.2.05'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.2.04:
    name: SCON4 1.2.04
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.2.04/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.2.04
    size: 0x57058000
    patches:
      - name: 'SCON4 1.2.04'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.2.03:
    name: SCON4 1.2.03
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.2.03/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.2.03
    size: 0x57058000
    patches:
      - name: 'SCON4 1.2.03'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.2.02:
    name: SCON4 1.2.02
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.2.02/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.2.02
    size: 0x57058000
    patches:
      - name: 'SCON4 1.2.02'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.2.01:
    name: SCON4 1.2.01
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.2.01/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.2.01
    size: 0x57058000
    patches:
      - name: 'SCON4 1.2.01'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.2:
    name: SCON4 1.2
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.2.00/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.2.00
    size: 0x57058000
    patches:
      - name: 'SCON4 1.2'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.1.05:
    name: SCON4 1.1.05
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.1.05/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.1.05
    size: 0x57058000
    patches:
      - name: 'SCON4 1.1.05'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.1.04:
    name: SCON4 1.1.04
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.1.04/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.1.04
    size: 0x57058000
    patches:
      - name: 'SCON4 1.1.04'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.1.03:
    name: SCON4 1.1.03
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.1.03/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.1.03
    size: 0x57058000
    patches:
      - name: 'SCON4 1.1.03'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.1.02:
    name: SCON4 1.1.02
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.1.02/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.1.02
    size: 0x57058000
    patches:
      - name: 'SCON4 1.1.02'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.1.01:
    name: SCON4 1.1.01
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.1.01/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.1.01
    size: 0x57058000
    patches:
      - name: 'SCON4 1.1.01'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.1:
    name: SCON4 1.1
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/v1.1.0/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/v1.1.0
    size: 0x57058000
    patches:
      - name: 'SCON4 1.1'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.0.9:
    name: SCON4 1.0.9
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.0.9/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.0.9
    size: 0x57058000
    patches:
      - name: 'SCON4 1.0.9'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.0.7:
    name: SCON4 1.0.7
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.0.7/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.0.7
    size: 0x57058000
    patches:
      - name: 'SCON4 1.0.7'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.0.6:
    name: SCON4 1.0.6
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.0.6/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.0.6
    size: 0x57058000
    patches:
      - name: 'SCON4 1.0.6'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.0.5:
    name: SCON4 1.0.5
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.0.5/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.0.5
    size: 0x57058000
    patches:
      - name: 'SCON4 1.0.5'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.0.4:
    name: SCON4 1.0.4
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.0.4/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.0.4
    size: 0x57058000
    patches:
      - name: 'SCON4 1.0.4'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
  v1.0.3:
    name: SCON4 1.0.3
    file: https://github.com/NicholasMoser/SCON4-Releases/releases/download/1.0.3/uncompressed_patch.xdelta
    site: https://github.com/NicholasMoser/SCON4-Releases/releases/tag/1.0.3
    size: 0x57058000
    patches:
      - name: 'SCON4 1.0.3'
        file: uncompressed_patch.xdelta
        crc: 0x55ee8b1a
---

# Super Clash of Ninja 4

This online patcher uses a lot of memory. If it doesn't seem to work for you try the downloadable patcher [Six Patches of Pain](https://github.com/NicholasMoser/Six-Patches-Of-Pain/releases).

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
    This website does not condone piracy. This patcher requires that you use your own acquired GNT4 ISO. The ISO patching is performed on your machine.

!!! info "ROM Patching Credits"
    ROM patching is based on [RomPatcher.js](https://www.marcrobledo.com/RomPatcher.js/) by Marc Robledo and [smash64.online](https://smash64.online/)
    by the Smash 64 Remix team.
