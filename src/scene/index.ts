import type { ParticlesArrType } from "@/types/particles";
import type { ParticlesType } from "@/types/particles";
import { Raindrop } from "./raindrop";
import { Snowflake } from "./snowflake";

export class Scene {
  static instance: Scene | null;
  intervalId: number;
  context: CanvasRenderingContext2D;
  limit: number;
  raindrops: Raindrop[];
  snowflakes: Snowflake[];

  constructor(public canvas_ref: HTMLCanvasElement) {
    this.intervalId = 0;
    this.raindrops = [];
    this.snowflakes = [];
    this.limit = 100;
    this.context = this.canvas_ref.getContext("2d");
  }

  init(condition: string) {
    this.context.restore();
    this.stopParticles();
    this.clean();
    switch (condition) {
      case "rain":
        this.spawn(Raindrop, this.raindrops);
        break;

      case "snow":
        this.spawn(Snowflake, this.snowflakes);
        break;

      default:
        break;
    }
  }

  spawn(particle: ParticlesType, particleArr: ParticlesArrType) {
    const particleSpawn = setInterval(() => {
      if (particleArr.length >= this.limit) {
        clearInterval(particleSpawn);
      } else {
        particleArr.push(new particle(this.context));
      }
    }, Math.random() * 80);
    this.moveParticles(particleArr);
  }

  moveParticles(particleArr: ParticlesArrType) {
    this.intervalId = setInterval(() => {
      window.requestAnimationFrame(() => {
        this.clean();
        particleArr?.map((elem) => {
          elem.move();
        });
      });
    }, 1000 / 60);
  }

  stopParticles() {
    clearInterval(this.intervalId);
    this.clean();
    this.intervalId = 0;
  }

  clean() {
    this.context.restore();
    this.context.clearRect(0,0,window.innerWidth, window.innerHeight)
    this.canvas_ref.height = window.innerHeight;
    this.canvas_ref.width = window.innerWidth;
    this.raindrops = [];
    this.snowflakes = [];
  }

  static getInstance(canvas_ref: HTMLCanvasElement) {
    if (!this.instance) {
      this.instance = new Scene(canvas_ref);
      return this.instance;
    }
    return this.instance;
  }
}
