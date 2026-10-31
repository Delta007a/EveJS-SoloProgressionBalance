# SoloProgressionBalance 0.4.3

Supports native EveJS `0.12.9`, `261018.1`, `261028.1`. The 261028.1 port was checked with **EveJS Launcher 1.0.76** and EVE client **build 3396210**. The user confirmed all four mods passed in-game verification on 2026-10-31; the automated port checks remain separate evidence. Older declared server support is retained, without claiming a new full certification of those versions.

## Install and update

Download `EveJS-SoloProgressionBalance-0.4.3.zip` from [Releases](https://github.com/Delta007a/EveJS-SoloProgressionBalance/releases/latest). Use Launcher **Mods > Add ZIP**, enable the mod and open **Configure**. Release ZIPs contain `loader.js.disabled` and start disabled. Configuration changes require a Game server restart; transient client features require a fresh client connection.

The package contains no personal `settings.json`, `.env`, runtime database or client archive. Launcher carries forward package-local files declared by the settings schema. Back up personal configuration before updating or removing a mod. For legacy customized source installations, transfer settings to the documented JSON configuration before updating; source files are replaced by updates.

## Behavior and defaults

Scales fresh effective native mining-module yield, mining-drone yield, specialized mining holds and applicable logistics/support cargo exactly once. Native skills, hull/module bonuses, Industrial Core and upstream environmental Dogma modifiers remain part of the result.

| Setting | Default |
| --- | --- |
| Enable Solo scaling | false |
| Mining module yield | 3x |
| Mining drone yield | 3x |
| Mining holds | 3x |
| Logistics/support cargo | 2x |
| Verbose logging | false |

Scaling stays off until enabled in Configure. `1` keeps native scaling for a category. Values must be finite and positive. Precedence: nonempty process environment, `mods/soloProgressionBalance/settings.json`, legacy `.env`, built-in defaults. `settings.example.json` and `.env.example` contain defaults, not user settings.

## Embedded fitting simulation

Projects relevant holds/cargo and mining-module/drone tooltips, including specialized-hold presentation. Works alone or with DroneClassBalance 0.2.3. Both embed the same private aggregate runtime (ABI 1, wire schema 1, bundle revision 4); no standalone Fitting Simulation Companion or public provider API is required. Disable/remove an old standalone companion first.

Exact source/version guards support simulation on 0.12.9, 261018.1 and 261028.1 with client build 3396210 and reviewed method fingerprints. Unsupported, absent, malformed or conflicting delivery retains native simulation. Arbitrary third-party login hooks are not certified. Gameplay remains server-authoritative. Injection is transient and never writes vendor client files. With MoonOreAnomalies, respect its manifest load-before order.

## Removal

Disable in Launcher, then use your normal server restart and client reconnect procedure. Back up `settings.json` before Remove, which deletes package-local settings. No client archive restoration is needed.

License: AGPL-3.0-only. No vendor source is included.
