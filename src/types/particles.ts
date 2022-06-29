import type { Raindrop } from "@/scene/raindrop";
import type { Snowflake } from "@/scene/snowflake";

export type ParticlesType = typeof Snowflake | typeof Raindrop;
export type ParticlesArrType = Array<Snowflake | Raindrop>
