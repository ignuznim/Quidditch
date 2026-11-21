// PROTOTYPE - NOT FOR PRODUCTION
// Question: 빗자루로 날며 패스·슛·방해 공 피하기가 4분 한 판 내내 재미있는가?
// Date: 2026-11-21
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
// Distances are in metres of the sky arena, times in seconds, speeds in metres per second.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- The match ----
  matchTime: { value: 240, min: 60, max: 600, step: 10 },       // s, clock length; higher score wins at 0
  glimmerAt: { value: 60, min: 10, max: 180, step: 5 },         // s, when the golden ball first appears
  goalPoints: { value: 10, min: 1, max: 50, step: 1 },          // points per hoop goal
  glimmerPoints: { value: 50, min: 10, max: 200, step: 5 },     // points for catching the glimmer; ends the match
  laxUntil: { value: 60, min: 0, max: 180, step: 5 },           // s, the rivals play loosely until here
  rampUntil: { value: 120, min: 30, max: 300, step: 5 },        // s, by here the rivals play at full strength

  // ---- Flight (self-levelling arcade broom) ----
  flySpeed: { value: 17, min: 8, max: 30, step: 0.5 },          // m/s, cruising speed
  boostMult: { value: 1.45, min: 1, max: 2.2, step: 0.05 },     // x cruising speed with Shift held
  boostDrain: { value: 0.35, min: 0.05, max: 1, step: 0.05 },   // stamina per second while boosting (stamina 0..1)
  boostRegen: { value: 0.18, min: 0.02, max: 1, step: 0.02 },   // stamina per second while not boosting
  diveGain: { value: 9, min: 0, max: 25, step: 0.5 },           // m/s gained at a full dive, lost at a full climb
  turnRate: { value: 1.9, min: 0.5, max: 4, step: 0.1 },        // rad/s, yaw at full stick
  pitchMax: { value: 0.65, min: 0.2, max: 1.2, step: 0.05 },    // rad, steepest climb or dive
  pitchResponse: { value: 3.5, min: 0.5, max: 10, step: 0.25 }, // 1/s, how fast pitch follows the stick, and levels on release
  speedResponse: { value: 1.6, min: 0.2, max: 6, step: 0.1 },   // 1/s, how fast speed follows its target
  ceiling: { value: 42, min: 15, max: 80, step: 1 },            // m, highest altitude
  floor: { value: 2, min: 0.5, max: 8, step: 0.5 },             // m, lowest altitude (grazing it slows you)
  arenaHalfLength: { value: 62, min: 40, max: 120, step: 1 },   // m, from centre to the end walls along the pitch
  arenaHalfWidth: { value: 34, min: 20, max: 80, step: 1 },     // m, from centre to the side walls
  wallSlow: { value: 0.55, min: 0.1, max: 1, step: 0.05 },      // x speed kept after grazing a wall or the ground

  // ---- The ball (볼라), passes and shots ----
  catchRadius: { value: 2.6, min: 1, max: 6, step: 0.1 },       // m, a free or passed ball is caught inside this
  passSpeed: { value: 30, min: 10, max: 60, step: 1 },          // m/s
  passCone: { value: 1.3, min: 0.3, max: 3.1, step: 0.1 },      // rad, teammates inside this cone ahead are pass targets
  tapTime: { value: 0.2, min: 0.05, max: 0.6, step: 0.01 },     // s, a press shorter than this is a pass
  chargeTime: { value: 1.1, min: 0.3, max: 3, step: 0.05 },     // s to a full charge
  shotMin: { value: 26, min: 10, max: 60, step: 1 },            // m/s at no charge
  shotMax: { value: 52, min: 20, max: 90, step: 1 },            // m/s at full charge
  sweetFrom: { value: 0.72, min: 0.3, max: 0.95, step: 0.01 },  // charge fraction where the perfect window opens
  sweetTo: { value: 0.92, min: 0.4, max: 1, step: 0.01 },       // ...and where it closes
  sweetBonus: { value: 1.18, min: 1, max: 1.6, step: 0.02 },    // x shot speed inside the perfect window
  aimAssist: { value: 0.5, min: 0, max: 1.2, step: 0.05 },      // rad, a shot bends toward a hoop inside this angle
  sweetAssist: { value: 0.75, min: 0, max: 1.5, step: 0.05 },   // rad, aim assist on a perfect shot
  ballGravity: { value: 6, min: 0, max: 20, step: 0.5 },        // m/s² on a loose ball (it floats a little, enchanted)
  ballDrag: { value: 0.35, min: 0, max: 2, step: 0.05 },        // 1/s, a loose ball slows
  hoopRadius: { value: 2.7, min: 1, max: 6, step: 0.1 },        // m, inner radius of each hoop
  goalDistance: { value: 54, min: 30, max: 110, step: 1 },      // m, from centre to each team's hoops
  resetDelay: { value: 1.6, min: 0.3, max: 5, step: 0.1 },      // s after a goal before the keeper puts the ball back in play

  // ---- Tackles ----
  tackleRange: { value: 4.2, min: 1, max: 10, step: 0.1 },      // m
  tackleCooldown: { value: 0.9, min: 0.1, max: 3, step: 0.05 }, // s between tries
  playerTackleChance: { value: 0.7, min: 0, max: 1, step: 0.05 }, // your tackle wins the ball this often
  stealImmunity: { value: 1.2, min: 0, max: 4, step: 0.1 },     // s a new carrier cannot be tackled
  kickoffGrace: { value: 4, min: 0, max: 15, step: 0.5 },       // s the opening carrier cannot be tackled

  // ---- Rumblers (럼블러) ----
  rumblerSpeedStart: { value: 13, min: 4, max: 40, step: 0.5 }, // m/s in the first minute
  rumblerSpeedEnd: { value: 21, min: 4, max: 50, step: 0.5 },   // m/s at full strength
  rumblerTurn: { value: 1.6, min: 0.2, max: 6, step: 0.1 },     // rad/s homing turn
  rumblerRadius: { value: 1.8, min: 0.5, max: 4, step: 0.1 },   // m, hits a rider inside this
  rumblerFirstAt: { value: 8, min: 0, max: 60, step: 1 },       // s, the first rumbler wakes
  rumblerSecondAt: { value: 45, min: 0, max: 180, step: 1 },    // s, the second wakes
  rumblerRest: { value: 2.2, min: 0.3, max: 8, step: 0.1 },     // s after a hit before it hunts again
  stunTime: { value: 1.3, min: 0.2, max: 4, step: 0.1 },        // s a hit rider wobbles and cannot catch
  rumblerHomeBias: { value: 0.6, min: 0, max: 1, step: 0.05 },  // at full strength, chance a rumbler hunts your team's carrier first

  // ---- The glimmer (글리머) ----
  glimmerSpeed: { value: 24, min: 8, max: 50, step: 0.5 },      // m/s
  glimmerDart: { value: 1.7, min: 1, max: 3, step: 0.05 },      // x speed during a sudden dart
  glimmerTurnEvery: { value: 1.4, min: 0.3, max: 5, step: 0.1 }, // s, average time between changes of heading
  glimmerFlee: { value: 9, min: 0, max: 30, step: 0.5 },        // m, it darts away from a seeker this close
  glimmerCatch: { value: 1.8, min: 0.5, max: 5, step: 0.1 },    // m, caught inside this
  seekerBoost: { value: 1.12, min: 1, max: 1.6, step: 0.02 },   // x speed of every seeker (they fly light)

  // ---- Rivals (폭풍까마귀) and teammates' AI ----
  aiSpeedLax: { value: 0.8, min: 0.4, max: 1.2, step: 0.02 },   // x flySpeed for rivals in the first minute
  aiSpeedFull: { value: 0.98, min: 0.5, max: 1.3, step: 0.02 }, // x flySpeed for rivals at full strength
  mateSpeed: { value: 0.92, min: 0.5, max: 1.3, step: 0.02 },   // x flySpeed for your AI teammates
  aiTackleLax: { value: 0.12, min: 0, max: 1, step: 0.02 },     // rival tackle success, first minute
  aiTackleFull: { value: 0.45, min: 0, max: 1, step: 0.02 },    // rival tackle success, full strength
  interceptFull: { value: 0.55, min: 0, max: 1, step: 0.05 },   // rival chance to cut out a pass flying past (0 in the lax minute)
  keeperSaveLax: { value: 0.22, min: 0, max: 1, step: 0.02 },   // rival keeper save chance, first minute
  keeperSaveFull: { value: 0.5, min: 0, max: 1, step: 0.02 },   // rival keeper save chance, full strength
  mateKeeperSave: { value: 0.45, min: 0, max: 1, step: 0.02 },  // your keeper's save chance
  keeperReach: { value: 4.5, min: 1, max: 10, step: 0.1 },      // m, a keeper can reach a shot this close
  aiShootRange: { value: 26, min: 8, max: 50, step: 1 },        // m, AI carriers shoot from inside this
  aiAimError: { value: 2.6, min: 0, max: 8, step: 0.1 },        // m of aim scatter at the hoop
  enemySeekerSkill: { value: 0.88, min: 0.3, max: 1.3, step: 0.02 }, // x seeker speed for the rival seeker
  mateSeekerSkill: { value: 0.7, min: 0.3, max: 1.3, step: 0.02 },   // x seeker speed for your seeker when you are not flying it

  // ---- Catch-up ----
  catchUpMult: { value: 1.08, min: 1, max: 1.4, step: 0.01 },   // x speed for the trailing team, ends when level

  // ---- Feel and view ----
  camDistance: { value: 7.5, min: 3, max: 20, step: 0.5 },      // m behind the rider
  camHeight: { value: 2.6, min: 0, max: 8, step: 0.1 },         // m above the rider
  fovBase: { value: 64, min: 40, max: 90, step: 1 },            // degrees at cruising speed
  fovSpeed: { value: 18, min: 0, max: 40, step: 1 },            // degrees added at top speed
  switchEvery: { value: 0.6, min: 0.1, max: 3, step: 0.05 },    // s between automatic switches to the rider nearest the ball
  stickRadius: { value: 80, min: 40, max: 160, step: 5 },       // px (of 1280), touch joystick travel
};
