import { conditionStyle } from "@/types/condition-style-enum";

export const resolveCondition = (full_condition: string, return_type?: 'style' | 'value') => {
    const value = full_condition?.toLowerCase()

    for (let key of Object.keys(conditionStyle)) {
        if (value?.includes(key)) {
            return return_type === 'style' ? conditionStyle[key] : key;
        }
    }
}