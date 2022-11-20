import { register, Tags } from '@minecraft/server-gametest';
import { BlockLocation } from '@minecraft/server';

register("ScriptAPIOSS", "simulated_player", (test) => {
  const spawnLoc = new BlockLocation(1, 5, 1);
  const landLoc = new BlockLocation(1, 2, 1);
  const playerName = "Player";
  const player = test.spawnSimulatedPlayer(spawnLoc, playerName);
  test.assertEntityPresent("player", spawnLoc);
  test.assert(player.name === playerName, "Assert player.name == playerName");
  test.succeedWhen(() => {
    test.assertEntityPresent("player", landLoc);
  });
})
  .structureName("mystructure:structure")
  .tag(Tags.suiteDefault);