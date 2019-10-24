/**
 * @author       Jonny Peng<jonny.peng@qq.com>
 * @copyright    2018 - 2019 digitsensitive
 * @license      Digitsensitive
 */
import { Jelly } from '../objects/Jelly';
import { Particles } from '../../../public/components/Particles';

export class MainScene extends Phaser.Scene {
  private bg: Phaser.GameObjects.Image;
  private layer1: Phaser.GameObjects.Container;
  private jellys: Jelly[] = [];
  private particles:Particles;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("bg", "./src/games/dragEvent/assets/bg.png");
    this.load.image("Jelly1", "./src/games/dragEvent/assets/Jelly1.png");
    this.load.image("Jelly2", "./src/games/dragEvent/assets/Jelly2.png");
    this.load.image("Jelly3", "./src/games/dragEvent/assets/Jelly3.png");
    this.load.image("Jelly4", "./src/games/dragEvent/assets/Jelly4.png");
    this.load.image("Jelly5", "./src/games/dragEvent/assets/Jelly5.png");
    this.load.image("Jelly6", "./src/games/dragEvent/assets/Jelly6.png");
    Particles.loadImg(this);
  }

  create(): void {
    this.bg = this.add.image(0, 0, "bg").setOrigin(0);
    this.layer1 = this.add.container(0, 0);
    for (let i = 0; i < 6; i++) {
      let jelly: Jelly = new Jelly(this, 100 + i * 120, 300, `Jelly${i + 1}`);
      this.jellys.push(jelly);
    }
    this.particles = new Particles(this,"triangle");
    this.layer1.add(this.jellys);
    this.add.existing(this.particles);
    this.start();
  }

  private start(): void {
    let that = this;
    this.jellys.forEach(jelly => {
      jelly.on("dragstart",dragStartHandle);
      jelly.on("drag", draghandle);
    })

    function draghandle(pointer, dragX, dragY) {
      this.setPosition(dragX, dragY);
    }

    function dragStartHandle(pointer){
      that.particles.boom(pointer.x,pointer.y,40);
    }
  }

}
