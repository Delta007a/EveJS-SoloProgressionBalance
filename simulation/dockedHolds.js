"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { createHash } = require("node:crypto");

// The bound capacity call must evaluate the selected ship in its pilot's Dogma
// context. Fingerprint that call chain independently of the login handshake.
const METHODS = [
  "_getShipInventoryRecord",
  "_resolveShipDogmaCharacterID",
  "_calculateCapacity",
  "Handle_GetCapacity",
  "_buildCapacityInfo",
];
const REVIEWED_CALL_CHAIN = "a4286271814284602af80eda4855c31dc350220fef807a2593d3371facd4c2eb";

function supportsDockedHolds(root) {
  try {
    const filename = path.join(root, "server/src/services/inventory/invBrokerService.js");
    const source = fs.readFileSync(filename, "utf8").replace(/\r\n/g, "\n");
    const methods = [];
    for (const name of METHODS) {
      const anchor = "\n  " + name + "(";
      if (source.split(anchor).length !== 2) return false;
      const start = source.indexOf(anchor) + 1;
      const end = /^  }$/m.exec(source.slice(start));
      if (!end) return false;
      methods.push(source.slice(start, start + end.index + end[0].length));
    }
    return createHash("sha256").update(methods.join("\n")).digest("hex") === REVIEWED_CALL_CHAIN;
  } catch (_) {
    return false;
  }
}

module.exports = { supportsDockedHolds };
