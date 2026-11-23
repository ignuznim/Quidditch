// PROTOTYPE - NOT FOR PRODUCTION
// Question: 2D 도트로 바꾼 빗자루 공중 구기가 2분 한 판으로 가볍고 재미있는가?
// Date: 2026-11-21
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
// Distances are in art pixels of the 256x160 view, times in seconds, speeds in pixels per second.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.35, min: 0, max: 1, step: 0.05 },

  // ---- The match ----
  matchTime: { value: 180, min: 30, max: 300, step: 5 },     // s on the clock
  glimmerAt: { value: 20, min: 5, max: 120, step: 5 },       // s, the golden glimmer appears
  goalPoints: { value: 10, min: 1, max: 50, step: 1 },
  glimmerPoints: { value: 150, min: 10, max: 300, step: 5 },
  laxUntil: { value: 30, min: 0, max: 120, step: 5 },        // s, rivals play loose until here
  rampUntil: { value: 75, min: 10, max: 200, step: 5 },      // s, rivals at full strength from here
  fieldWidth: { value: 480, min: 256, max: 960, step: 10 },  // px, the pitch from end to end (about 2 screens)

  // ---- Flying ----
  flySpeed: { value: 66, min: 30, max: 140, step: 2 },       // px/s
  accel: { value: 420, min: 100, max: 1500, step: 20 },      // px/s² toward the stick's speed (a little drift)
  dashSpeed: { value: 165, min: 60, max: 320, step: 5 },     // px/s during a dash
  dashTime: { value: 0.22, min: 0.05, max: 0.6, step: 0.01 }, // s
  dashCooldown: { value: 0.75, min: 0.1, max: 3, step: 0.05 }, // s
  catchUpMult: { value: 1.1, min: 1, max: 1.5, step: 0.02 }, // x speed for the trailing team, until level

  // ---- The ball (퀘이플), passes and shots ----
  catchRadius: { value: 8, min: 3, max: 16, step: 1 },       // px
  carryImmunity: { value: 0.7, min: 0, max: 3, step: 0.05 }, // s a new carrier cannot be robbed
  passSpeed: { value: 150, min: 60, max: 300, step: 5 },     // px/s
  tapTime: { value: 0.18, min: 0.05, max: 0.5, step: 0.01 }, // s, a shorter press is a pass
  chargeTime: { value: 0.85, min: 0.3, max: 2.5, step: 0.05 }, // s to a full charge
  shotMin: { value: 120, min: 50, max: 300, step: 5 },       // px/s at no charge
  shotMax: { value: 215, min: 80, max: 400, step: 5 },       // px/s at full charge
  ballGravity: { value: 40, min: 0, max: 200, step: 5 },     // px/s² on a loose ball
  ballDrag: { value: 0.6, min: 0, max: 3, step: 0.05 },      // 1/s on a loose ball
  hoopHalf: { value: 6, min: 3, max: 14, step: 1 },          // px, half the hoop's opening
  perfectRange: { value: 90, min: 20, max: 300, step: 5 },   // px, a perfect shot from inside this beats the keeper
  longShotSave: { value: 0.35, min: 0, max: 1, step: 0.05 }, // added save chance on a shot from beyond it
  resetDelay: { value: 1.2, min: 0.2, max: 4, step: 0.1 },   // s after a goal before the keeper throws it out

  // ---- Tackles ----
  tackleReach: { value: 10, min: 4, max: 20, step: 1 },      // px, a dash that comes this close robs the carrier
  playerSteal: { value: 0.85, min: 0, max: 1, step: 0.05 },  // your dash wins the ball this often
  aiStealLax: { value: 0.25, min: 0, max: 1, step: 0.05 },   // a rival dash in the loose start
  aiStealFull: { value: 0.6, min: 0, max: 1, step: 0.05 },   // ...at full strength
  interceptFull: { value: 0.5, min: 0, max: 1, step: 0.05 }, // rival chance to cut out a pass flying close (0 in the loose start)

  // ---- Keepers ----
  keeperSpeed: { value: 46, min: 10, max: 120, step: 2 },    // px/s
  keeperSave: { value: 0.45, min: 0, max: 1, step: 0.05 },   // the rival keeper stops a shot that comes within reach this often
  lungeReach: { value: 7, min: 0, max: 20, step: 1 },         // px your save reach grows while you dive (B or A without the quaffle)
  keeperReach: { value: 10, min: 3, max: 24, step: 1 },      // px

  // ---- Rival and teammate AI ----
  aiSpeedLax: { value: 0.75, min: 0.3, max: 1.3, step: 0.05 }, // x flySpeed for rivals, loose start
  aiSpeedFull: { value: 0.95, min: 0.3, max: 1.3, step: 0.05 }, // x flySpeed for rivals, full strength
  mateSpeed: { value: 0.9, min: 0.3, max: 1.3, step: 0.05 },   // x flySpeed for your teammate
  aiShootRange: { value: 85, min: 20, max: 160, step: 5 },     // px from the hoops
  aiAimError: { value: 9, min: 0, max: 30, step: 1 },          // px of scatter
  mateAimError: { value: 14, min: 0, max: 40, step: 1 },       // px of scatter on your teammate's shots
  seekerLag: { value: 0.35, min: 0.05, max: 2, step: 0.05 },   // s a rival's glimmer chase looks late
  seekerBoost: { value: 1.15, min: 1, max: 1.6, step: 0.05 },  // x speed for both seekers (they fly light)
  mateSeekerSpeed: { value: 0.82, min: 0.3, max: 1.5, step: 0.02 }, // x your seeker's speed chasing the snitch
  rivalSeekerSpeed: { value: 1.0, min: 0.3, max: 1.5, step: 0.05 }, // x flySpeed chasing the glimmer

  // ---- Beaters ----
  batReach: { value: 11, min: 4, max: 24, step: 1 },          // px, a beater swings at a bludger this close
  batSpeed: { value: 150, min: 50, max: 300, step: 5 },       // px/s of a batted bludger
  batFlight: { value: 1.0, min: 0.2, max: 3, step: 0.1 },     // s a batted bludger flies straight before it hunts again
  batCooldown: { value: 1.3, min: 0.2, max: 4, step: 0.1 },   // s between swings
  beaterSpeed: { value: 0.9, min: 0.3, max: 1.5, step: 0.05 }, // x speed for beaters

  // ---- Rumblers (블러저) ----
  rumblerSpeedStart: { value: 48, min: 10, max: 160, step: 2 }, // px/s
  rumblerSpeedEnd: { value: 74, min: 10, max: 200, step: 2 },   // px/s at full strength
  rumblerTurn: { value: 1.8, min: 0.2, max: 6, step: 0.1 },     // rad/s homing
  rumblerFirstAt: { value: 6, min: 0, max: 60, step: 1 },       // s
  rumblerSecondAt: { value: 25, min: 0, max: 120, step: 1 },    // s
  rumblerRest: { value: 1.8, min: 0.2, max: 6, step: 0.1 },     // s after a hit
  rumblerHit: { value: 8, min: 3, max: 16, step: 1 },           // px
  stunTime: { value: 1.0, min: 0.2, max: 3, step: 0.1 },        // s a hit rider wobbles

  // ---- The glimmer (골든 스니치) ----
  glimmerSpeed: { value: 88, min: 20, max: 200, step: 2 },      // px/s
  glimmerDart: { value: 1.9, min: 1, max: 3, step: 0.05 },      // x speed in a dart
  glimmerTurnEvery: { value: 1.1, min: 0.2, max: 4, step: 0.1 }, // s between heading changes
  glimmerFlee: { value: 22, min: 0, max: 60, step: 1 },          // px, it darts from a flyer this close
  snitchHide: { value: 3, min: 0, max: 60, step: 1 },           // s after it appears before the rival seeker chases it (0: no head start)
  snitchSight: { value: 34, min: 10, max: 120, step: 1 },       // px: closer than this you can see the snitch
  glintEvery: { value: 2.6, min: 0.5, max: 8, step: 0.1 },      // s between glints (it shows where it is, briefly)
  glintTime: { value: 0.45, min: 0.1, max: 2, step: 0.05 },     // s a glint lasts
  reachRange: { value: 14, min: 4, max: 30, step: 1 },          // px: your reach must end this close to catch it
  reachTime: { value: 0.8, min: 0.3, max: 2, step: 0.05 },      // s for the reach meter to fill
  reachFrom: { value: 0.62, min: 0.1, max: 0.95, step: 0.01 },  // the gold window opens (fraction of the meter)
  reachTo: { value: 0.82, min: 0.2, max: 1, step: 0.01 },       // ...and closes
  missPause: { value: 1.0, min: 0, max: 3, step: 0.1 },         // s before you can reach again after a miss
  rivalSight: { value: 34, min: 10, max: 120, step: 1 },        // px: the rival seeker sees the snitch this close
  rivalNotice: { value: 1, min: 0, max: 1, step: 0.05 },        // chance the rival seeker notices a glint
  rivalReach: { value: 13, min: 4, max: 30, step: 1 },          // px: the rival seeker's reach
  rivalCatchRate: { value: 1.6, min: 0.1, max: 5, step: 0.1 },  // per second: the rival's hand closing while the snitch is in its reach
  clashRange: { value: 9, min: 3, max: 20, step: 1 },           // px: seekers this close shoulder each other
  clashForce: { value: 90, min: 0, max: 300, step: 5 },         // px/s each is pushed apart
  clashStun: { value: 0.6, min: 0, max: 2, step: 0.05 },        // s a seeker wobbles when hit by one mid-dash
  glimmerCatch: { value: 7, min: 2, max: 16, step: 1 },          // px

  // ---- Screen ----
  shake: { value: 2, min: 0, max: 6, step: 1 },                  // px of screen shake on a goal or a hit
};

// Difficulty: each level's values stand in for the ones above while a match runs (어려움 = the values above).
// Chosen on the 경기 준비 screen.
window.DIFFICULTY = {
  easy: { // 쉬움: the snitch shows from further, glints often and moves slower; a wide gold window; a slow rival
    snitchSight: 60, glintEvery: 1.5, glintTime: 0.8, glimmerSpeed: 74, glimmerFlee: 16,
    reachRange: 21, reachTime: 0.9, reachFrom: 0.45, reachTo: 0.9, missPause: 0.4,
    snitchHide: 15, rivalReach: 7, rivalCatchRate: 0.25, rivalSeekerSpeed: 0.62, seekerLag: 0.9, rivalNotice: 0.25, rivalSight: 24,
    aiSpeedLax: 0.7, aiSpeedFull: 0.82, rumblerSpeedEnd: 60, clashStun: 0.3,
  },
  normal: { // 보통
    snitchSight: 46, glintEvery: 2.0, glintTime: 0.6, glimmerSpeed: 82, glimmerFlee: 19,
    reachRange: 17, reachTime: 0.85, reachFrom: 0.55, reachTo: 0.86, missPause: 0.7,
    snitchHide: 8, rivalReach: 10, rivalCatchRate: 0.7, rivalSeekerSpeed: 0.8, seekerLag: 0.55, rivalNotice: 0.5, rivalSight: 30,
    clashStun: 0.45,
  },
  hard: {}, // 어려움
};
