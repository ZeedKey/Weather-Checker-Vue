import { Particle } from "./particle";

export class Raindrop extends Particle {
  radius: number;

  constructor(public context: CanvasRenderingContext2D | null) {
    super(context);
    this.radius = 0;
  }

  paint() {
    if (this.context) {
      this.context.fillStyle = "#8CDFE8";
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
    }

    this.context?.beginPath();
    this.context?.arc(this.x, this.y, this.radius, 0, Math.PI);
    this.context?.fill();

    this.context?.bezierCurveTo(
      this.x,
      this.y - 20,
      this.x,
      this.y - 20,
      this.x + this.radius,
      this.y
    );
    this.context?.fill();
    this.context?.closePath();
  }
}
