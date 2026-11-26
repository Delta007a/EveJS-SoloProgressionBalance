# SoloProgressionBalance 0.4.10

Adds EveJS 261125.3 and Fitting simulation on EVE client build 3724492. The updated client checks cover the specialized-hold display and the effective capacity of assembled ships docked at the pilot's current location.

On EveJS 261115.2, supported holds of the pilot's other assembled ships in the current station or structure show the server's effective capacity. This includes skill bonuses and the configured multipliers.

Enabling the mod in Launcher now activates Solo scaling on the next Game server start. Configure retains the four multipliers and optional logging.

EveJS 261108.1 support updates the optional login payload and keeps the native numeric Placebo signature. Scaling continues to apply to effective native values.

Optional fitting simulation adds its payload to the existing login packet on supported EveJS versions. DCB and Solo still share one private controller when both are installed.

Offline login composition checks passed. The maintainer also checked the updated build in-game on EveJS 261028.1.

Supports native EveJS `0.12.9`, `261018.1`, `261028.1`, `261108.1`, `261115.2`, `261125.3`. The 261028.1 port was checked with **EveJS Launcher 1.0.76** and EVE client **build 3396210**. The user confirmed all four mods passed in-game verification on 2026-10-31; the automated port checks remain separate evidence. Older declared server support is retained, without claiming a new full certification of those versions.

The maintainer confirmed the four updated mods work together in-game on EveJS 261108.1.

## Install and update

Download `EveJS-SoloProgressionBalance-0.4.10.zip` from [Releases](https://github.com/Delta007a/EveJS-SoloProgressionBalance/releases/latest). Open Launcher **Mods > Add ZIP** and enable the mod, or use **Mods > Check mod updates** for an existing installation. Fresh ZIP installs start disabled. Restart Game and reconnect after enabling, disabling or changing settings.

Launcher updates preserve `settings.json`. If you use a legacy `.env`, back it up before updating and copy any overrides you still rely on into Launcher **Configure** or `settings.json`. The v0.4.6 update contract only carries forward `settings.json`. The row order in the defaults table matches the four multiplier variables in `.env.example`.

## Behavior and defaults

Scales fresh effective native mining-module yield, mining-drone yield, specialized mining holds and applicable logistics/support cargo exactly once. Native skills, hull/module bonuses, Industrial Core and upstream environmental Dogma modifiers remain part of the result.

| Setting | Default |
| --- | --- |
| Mining module yield | 3x |
| Mining drone yield | 3x |
| Mining holds | 3x |
| Logistics/support cargo | 2x |
| Verbose logging | false |

Legacy activation flags are ignored. This includes `enabled` in `settings.json` and `EVEJS_SOLO_PROGRESSION_BALANCE` in `.env` or the process environment. A multiplier of `1` keeps the native value for that category. Values must be finite and positive. Nonempty process environment variables take precedence over `settings.json`, followed by legacy `.env` and built-in defaults. The two example files list the public defaults.

## Embedded fitting simulation

Projects relevant holds/cargo and mining-module/drone tooltips, including specialized-hold presentation. Works alone or with DroneClassBalance 0.2.8. Both packages carry bundle revision 8. ABI 1 and wire schema 1 remain compatible with the earlier bundles on the previously supported server and client pairs.

Exact source/version guards support simulation on 0.12.9, 261018.1, 261028.1, 261108.1 and 261115.2 with client build 3396210. EveJS 261125.3 uses client build 3724492. All supported pairs require reviewed method fingerprints. Unsupported, absent, malformed or conflicting delivery retains native simulation. Gameplay remains server-authoritative. Injection is transient and never writes vendor client files.

## Removal

Disable in Launcher, then use your normal server restart and client reconnect procedure. Back up `settings.json` before Remove, which deletes package-local settings. No client archive restoration is needed.

License: AGPL-3.0-only. No vendor source is included.
