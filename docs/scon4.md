---
template: patcher.html
section: legacy
hide:
  - next
  - prev
  - search
  - tabs
latest: 1.6.0-beta11
patcher_errors:
  mismatch: Mismatch. Use the vanilla ROM.
patches:
  1.6.0-beta11:
    name: SCON4 1.6.0-beta11
    file: https://github.com/SCON-Development/SCON4-BETA/releases/download/1.6.0-beta11/patch.xdelta
    site: https://github.com/SCON-Development/SCON4-BETA/releases/tag/1.6.0-beta11
    size: 0x57058000
    patches:
      - name: 'SCON4 1.6.0-beta11'
        file: patch.xdelta
        crc: 0x55ee8b1a
  1.6.0-beta10:
    name: SCON4 1.6.0-beta10
    file: https://github.com/SCON-Development/SCON4-BETA/releases/download/1.6.0-beta10/patch.xdelta
    site: https://github.com/SCON-Development/SCON4-BETA/releases/tag/1.6.0-beta10
    size: 0x57058000
    patches:
      - name: 'SCON4 1.6.0-beta10'
        file: patch.xdelta
        crc: 0x55ee8b1a
---

# Super Clash of Ninja 4

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
    This website does not condone piracy. This patcher requires that you use your own acquired GNT4 ISO. The ISO patching is performed on your machine.

!!! info "ROM Patching Credits"
    ROM patching is based on [RomPatcher.js](https://www.marcrobledo.com/RomPatcher.js/) by Marc Robledo and [smash64.online](https://smash64.online/)
    by the Smash 64 Remix team.
