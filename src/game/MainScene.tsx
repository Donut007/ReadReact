import Phaser from "phaser";
import Box from "./Box";

export default class MainScene extends Phaser.Scene {
  boxes: Box[] = [];
  boxGroup!: Phaser.GameObjects.Group;

  constructor() {
    super("GameScene");
  }

  create(): void {
    this.boxGroup = this.add.group({
      classType: Box,
      runChildUpdate: true
    });

    for (let i = 0; i < 10; i++) {
      this.boxGroup.add(
        new Box(this, 100 + i * 60, 300)
      );
    }
  }

  update(): void {
    // (this.boxGroup.getChildren() as Box[]).forEach(box => {
    //   box.update();
    // });
  }
}