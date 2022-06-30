import type { Condition } from '@/types/condition-enum';

export const conditionStyle: Record<Condition, string> = {
    "rain" : "canvas_rainy_theme",
    "sun" : "canvas_sunny_theme",
    "cloud" : "canvas_cloudy_theme",
    "snow" : "canvas_snowy_theme",
}