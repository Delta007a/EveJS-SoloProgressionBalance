"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const config = require("../config");
const manifest = require("../evejs-launcher.mod.json");

const root = fs.mkdtempSync(path.join(os.tmpdir(), "solo-loader-switch-"));
try {
  const defaults = config.load(root, {});
  assert.equal(Object.hasOwn(defaults, "enabled"), false);
  assert.deepEqual([
    defaults.miningYieldScale, defaults.miningDroneYieldScale,
    defaults.miningHoldScale, defaults.logisticsCargoScale,
  ], [3, 3, 3, 2]);
  assert.equal(manifest.activation.strategy, "loader_rename");
  assert.equal(manifest.settings.fields.some(field => field.id === "enabled"), false);

  fs.writeFileSync(path.join(root, "settings.json"), JSON.stringify({
    enabled: false, miningHoldScale: 4,
  }));
  fs.writeFileSync(path.join(root, ".env"),
    "EVEJS_SOLO_PROGRESSION_BALANCE=0\nEVEJS_SOLO_LOGISTICS_CARGO_SCALE=5\n");
  const actual = config.load(root, {
    EVEJS_SOLO_PROGRESSION_BALANCE: "0",
    EVEJS_SOLO_MINING_YIELD_SCALE: "1",
  });
  assert.equal(Object.hasOwn(actual, "enabled"), false);
  assert.equal(actual.miningYieldScale, 1);
  assert.equal(actual.miningHoldScale, 4);
  assert.equal(actual.logisticsCargoScale, 5);
  assert.deepEqual(actual.problems, []);
  assert.equal(JSON.parse(fs.readFileSync(path.join(root, "settings.json"), "utf8")).enabled, false);
} finally {
  fs.rmSync(root, { recursive: true, force: true });
}
console.log("PASS Launcher-only activation, legacy settings, defaults and overrides");
