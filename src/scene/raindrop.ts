export class Raindrop {
  constructor(
    public context: CanvasRenderingContext2D,
    public pos_y,
    public pos_x,
    public id
  ) {
    this.y = 0;
    this.x = window.innerWidth - Math.random() * window.innerWidth;
    this.paint = this.paint.bind(this);
    this.move = this.move.bind(this);
    this.paint();
  }

  move() {
    this.y += 0.5;
    this.paint();
  }

  paint() {
    this.context.strokeStyle = "#F0F8FF";
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x, this.y + 10);
    this.context.stroke();
    this.context.closePath();
  }
}
