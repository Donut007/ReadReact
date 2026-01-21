import Phaser from "phaser";
import MainScene from "./MainScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "phaser-container",
  scene: [MainScene],
  backgroundColor: "#1d1d1d",
};