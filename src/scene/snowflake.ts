import { Particle } from "./particle";
export class Snowflake extends Particle {
  radius: number;

  constructor(public context: CanvasRenderingContext2D) {
    super(context);
    this.radius = 0;
  }

  paint() {
    this.context.fillStyle = "#FFFFFF";
    if (this.weight < 0.33) {
      this.context.lineWidth = 0.8;
      this.radius = 2;
    }
    if (this.weight > 0.33 && this.weight < 0.66) {
      this.context.lineWidth = 1.2;
      this.radius = 3;
    }
    if (this.weight > 0.66) {
      this.context.lineWidth = 1.5;
      this.radius = 4;
    }
    this.context.beginPath();
    this.context?.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context?.fill();
    this.context.closePath();
  }
}
