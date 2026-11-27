"use strict";
const path = require("node:path");
const { attachMember } = require("./familyRuntime");
const { readBundle, getRuntimeProfile } = require("./delivery");
const { supportsDockedHolds } = require("./dockedHolds");
const { buildSoloPolicy } = require("./policy");
const { permitted } = require("./capability");
function install(gameplayState, api, runtimeRoot, modRoot) {
  if (!gameplayState?.active || !api) return { active: false, reason: "gameplay-inactive" };
  const profile = getRuntimeProfile(runtimeRoot);
  if (!profile) return { active: false, reason: "unsupported-client-login" };
  const bundle = readBundle(__dirname);
  const dockedHolds = supportsDockedHolds(runtimeRoot);
  let policy;
  return attachMember(runtimeRoot, { id: "soloprogressionbalance", bundle,
    eligible: () => permitted(modRoot, runtimeRoot, bundle, profile.clientBuild), policy() {
      if (policy === undefined) {
        const { listItemTypes } = require(path.join(runtimeRoot, "server/src/services/inventory/itemTypeRegistry"));
        const { isMiningModuleItem } = require(path.join(runtimeRoot, "server/src/space/runtime/moduleHeat"));
        policy = buildSoloPolicy(gameplayState, api, listItemTypes(), isMiningModuleItem, profile, dockedHolds);
        console.log(`[soloProgressionBalance/simulation] policy ${policy?.revision || "unavailable"}`);
      }
      return policy;
    } });
}
module.exports = { install };
