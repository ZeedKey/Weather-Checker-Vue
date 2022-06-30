import type { ParticlesArrType } from "@/types/particles";
import type { ParticlesType } from "@/types/particles";
import { Raindrop } from "./raindrop";
import { Snowflake } from "./snowflake";

export class Scene {
  limit: number;
  intervalId?: number;
  particles: ParticlesArrType;
  context: CanvasRenderingContext2D | null;
  static instance: Scene | null;

  constructor(public canvas_ref: HTMLCanvasElement, public condition: string) {
    this.intervalId = 0;
    this.particles = [];
    this.limit = 100;
    this.context = this.canvas_ref.getContext("2d");
  }

  init(condition = this.condition) {
    this.context?.restore();
    this.stopParticles();
    switch (condition) {
      case "rain":
        this.spawn(Raindrop);
        break;

      case "snow":
        this.spawn(Snowflake);
        break;

      default:
        break;
    }
  }

  spawn(particle: ParticlesType) {
    const particleSpawn = setInterval(() => {
      if (this.particles.length >= this.limit) {
        clearInterval(particleSpawn);
      } else {
        this.particles.push(new particle(this.context));
      }
    }, Math.random() * 80);
    this.moveParticles();
  }

  moveParticles() {
    this.intervalId = setInterval(() => {
      window.requestAnimationFrame(() => {
        this.clean();
        this.particles?.map((elem) => {
          elem.move();
        });
      });
    }, 1000 / 60);
  }

  stopParticles() {
    clearInterval(this.intervalId);
    this.clean();
    this.intervalId = undefined;
    this.particles=[];
  }

  clean() {
    this.context?.restore();
    this.context?.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.canvas_ref.height = window.innerHeight;
    this.canvas_ref.width = window.innerWidth;
  }

  static getInstance(canvas_ref: HTMLCanvasElement, condition: string) {
    if (!Scene.instance) {
      Scene.instance = new Scene(canvas_ref, condition);
    }
    return Scene.instance;
  }
}
