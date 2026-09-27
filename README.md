# SoloProgressionBalance 0.4.1

Configurable server-side scaling for mining modules, mining drones, mining holds and applicable logistics/support cargo. Supports native **EveJS final 0.12.9 only**. Native ship, skill, module and environmental Dogma modifiers are preserved, with Solo scaling applied once.

Version 0.4.1 adds automatic **Fitting > Simulate** support for relevant hold/cargo capacities and mining-module/drone output tooltips. Applicable specialized holds also appear in the simulated cargo hover readout. No separate companion is required. Existing gameplay behavior and configuration are unchanged; actual gameplay remains server-authoritative.

**Install and configure.** Download `EveJS-SoloProgressionBalance-0.4.1.zip` from Releases. In **EveJS Launcher 1.0.66 > Mods > Add ZIP**, select it, enable SoloProgressionBalance and open Configure. Turn on Enable Solo scaling, set the four multipliers, restart the Game server and reconnect a fresh EVE client. The ZIP starts disabled. Default multipliers are 3x mining modules, 3x mining drones, 3x mining holds and 2x logistics cargo; scaling remains off until enabled. These are configurable multipliers, not fixed ship values.

Launcher writes `mods/soloProgressionBalance/settings.json` and preserves it during updates. For older installations, transfer personal `.env` settings into JSON before replacing the package. Configuration precedence remains nonempty process environment, `settings.json`, legacy `.env`, then defaults. `.env.example` lists the supported variables. Values must be finite and positive; `1` keeps native scaling for that category. Verbose logging is an advanced field.

**Simulation compatibility.** Currently verified only on **EveJS 0.12.9 / EVE client build 3396210 / Launcher 1.0.66**. Mining output uses fresh native effective ghost Dogma before Solo scaling, preserving skills, hull bonuses, module states and Industrial Core effects without compounding. Holds are changed only where the existing Solo rules apply; missing holds are not created. SoloProgressionBalance and DroneClassBalance 0.2.1 can be used together; either also works alone. Disable/remove the historical standalone Fitting Simulation Companion before using this release.

Unsupported client/server seams, missing compatible Launcher delivery or invalid policy safely retain native simulation; normal server gameplay continues. The known AutoMining login-transform conflict also retains native simulation. Arbitrary third-party client hooks are not certified. Settings changes require a server restart and fresh client reconnect. The specialized-hold hover readout is optional if its UI seam is incompatible; native tooltip rounding remains unchanged.

**Removal.** Close clients gracefully, stop the server, disable SoloProgressionBalance in Launcher, then restart and reconnect. Client hooks are transient; no vendor files need restoration. Back up `settings.json` before Launcher Remove, which removes the package and local settings. Manual server gameplay can still preload `mods/soloProgressionBalance/loader.js` with Node `--require` before EveJS loads; automatic simulation delivery uses Launcher.

License: AGPL-3.0-only. EveJS itself is AGPL-3.0-only; no vendor source is included in this package.
