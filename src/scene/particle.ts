export class Particle {
    y: number;
    x: number;
    weight: number;
    
    constructor(public context: CanvasRenderingContext2D) {
      this.y = 0;
      this.x = window.innerWidth - Math.random() * window.innerWidth;
      this.move = this.move.bind(this);
      this.weight = Math.random();
    }

    move() {
        if (this.y >= window.innerHeight) {
          this.y = 0;
          this.x = window.innerWidth - Math.random() * window.innerWidth;
        } else {
          if (this.weight < 0.33) {
            this.y += 4;
          }
          if (this.weight > 0.33 && this.weight < 0.66) {
            this.y += 6;
          }
          if (this.weight > 0.66) {
            this.y += 10;
          }
        }
        this.paint();
      }

      paint() {
        throw new Error("Method 'paint()' must be implemented.");
      }
}