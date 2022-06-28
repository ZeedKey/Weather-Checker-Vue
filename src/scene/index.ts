import { Raindrop } from "./raindrop";

export class Scene {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  raindrops: Raindrop[];

  constructor(public canvas_ref: HTMLCanvasElement) {
    this.context = this.canvas_ref.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.raindrops = [];
  }

  init() {
    this.canvas_ref.height = this.height;
    this.canvas_ref.width = this.width;

    this.raindrops.push(new Raindrop(this.context));
    
    setInterval(()=>{
        this.raindrops.map((elem) => {
            elem.move();
        });
    })

    this.raindrops.map((elem) => {
      setInterval(() => {
        this.clean();
        elem.move();
      }, 1000/60);
    });
  }

  clean() {
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  spawnRaindrop() {
    this.raindrops.push(new Raindrop(this.context));
  }
}
