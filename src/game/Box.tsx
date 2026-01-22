import Phaser from "phaser";

export default class Box extends Phaser.GameObjects.Rectangle {
    speed: number;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number = 60,
        height: number = 40,
        color: number = 0x3498db
    ) {
        super(scene, x, y, width, height, color);

        // add to scene
        scene.add.existing(this);

        this.speed = Phaser.Math.Between(100, 250);
    }

    update(): void {
        // this.x += 1;
    }
}
