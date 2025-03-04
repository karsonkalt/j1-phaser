import Phaser from "phaser";

import Scene from "./scenes/Scene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      // debug: true,
    },
  },
  scene: [Scene],
};

new Phaser.Game(config);
