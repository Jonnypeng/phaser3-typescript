import "phaser";

export class Jelly extends Phaser.GameObjects.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        this.init();
    }

    init() {
        this.setScale(0.3);
        this.setInteractive();
        this.scene.input.setDraggable(this, true);
    }
}