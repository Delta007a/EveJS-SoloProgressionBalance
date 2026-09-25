# SoloProgressionBalance 0.4.0

Server-side scaling for solo mining modules, mining drones, mining holds and logistics cargo. Supports native EveJS **final 0.12.9 only**. It preserves upstream ship, skill, module and environmental Dogma modifiers and applies the Solo mining yield once. No EVE client patch is needed.

## Install and configure

Use **EveJS Launcher v1.0.66 → Mods → Add ZIP**, select the release ZIP, enable the mod and restart the Game server. The release ZIP starts disabled. In **Configure**, turn on Solo scaling and set the four existing multipliers: mining module yield, mining drone yield, mining hold, and logistics cargo. Verbose logging is an advanced field. The defaults are 3×, 3×, 3× and 2×, but scaling remains off until enabled. A manual Native server can preload `mods/soloProgressionBalance/loader.js` with Node `--require` before EveJS modules load.

The Launcher writes `mods/soloProgressionBalance/settings.json` and carries it forward during updates. For older installations, copy `.env` values into that JSON before replacing the package; the public ZIP contains no personal `.env`. Configuration precedence is nonempty process environment, then `settings.json`, then legacy `.env`, then defaults. `.env.example` lists the supported environment names. Values must be finite and greater than zero; `1` gives native scaling for a specific multiplier.

## Compatibility and removal

The loader owns narrow in-memory source seams and export overlays. It composes with DroneClassBalance and the other two mods. Disabling both the Launcher switch and the Solo `enabled` setting, then restarting, removes its scaling. Launcher Remove removes package-local settings; back up `settings.json` first if needed.

Final 0.12.9 certification: 44/44 targeted tests, a focused already-launched Mining Drone refresh regression, five clean-final port checks and four-loader composition passed. On a controller-state change, the client prime scales the newly resolved mining amount and retains upstream duration and related attributes. Final live gameplay remains to be checked.

License: AGPL-3.0-only. EveJS itself is AGPL-3.0-only; no vendor source is included in this package.
