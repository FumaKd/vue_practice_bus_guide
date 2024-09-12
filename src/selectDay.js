import { ref } from "vue"

export function useSelectTypeOfDay(day, hours) {
    const typeOfDay = ref()
    switch (day) {
        case 0:
            if (hours.value >= 0 && hours.value <= 2) typeOfDay.value = "std"
            else typeOfDay.value = "snd"
            break
        case 1:
            if (hours.value >= 0 && hours.value <= 2) typeOfDay.value = "snd"
            else typeOfDay.value = "wkd"
            break
        case 6:
            if (hours.value >= 0 && hours.value <= 2) typeOfDay.value = "wkd"
            else typeOfDay.value = "std"
            break
        default:
            typeOfDay.value = "wkd"
    }
    return typeOfDay
}
