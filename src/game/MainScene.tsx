import Phaser from "phaser";

// import HimekoImg from '../assets/Himeko.png';
export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    // this.load.image("Himeko", HimekoImg);
  }

  create() {
    // this.add.image(400, 300, "Himeko");
  }
}