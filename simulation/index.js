"use strict";
const path = require("node:path");
const { attachMember } = require("./familyRuntime");
const { readBundle, getRuntimeVersion, getClientBuild } = require("./delivery");
const { buildSoloPolicy } = require("./policy");
const { permitted } = require("./capability");
function install(gameplayState, api, runtimeRoot, modRoot) {
  if (!gameplayState?.active || !api) return { active: false, reason: "gameplay-inactive" };
  const bundle = readBundle(__dirname);
  const version = getRuntimeVersion(runtimeRoot);
  const clientBuild = getClientBuild(version);
  let policy;
  return attachMember(runtimeRoot, { id: "soloprogressionbalance", bundle,
    eligible: () => permitted(modRoot, runtimeRoot, bundle, clientBuild), policy() {
      if (policy === undefined) {
        const { listItemTypes } = require(path.join(runtimeRoot, "server/src/services/inventory/itemTypeRegistry"));
        const { isMiningModuleItem } = require(path.join(runtimeRoot, "server/src/space/runtime/moduleHeat"));
        policy = buildSoloPolicy(gameplayState, api, listItemTypes(), isMiningModuleItem, version);
        console.log(`[soloProgressionBalance/simulation] policy ${policy?.revision || "unavailable"}`);
      }
      return policy;
    } });
}
module.exports = { install };
