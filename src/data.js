import { ref } from "vue"

export function useGetData() {
    const endPoint = "https://script.google.com/macros/s/AKfycbzUqrWHjTHtx9XPr8uBRiSgVhIYc5rY420FGQHff8qr0OTu1qCrWezUIBMPdXzgilZdCQ/exec?mode=api"
    const busInfo = ref()
    fetch(endPoint)
        .then((res) => res.json())
        .then((data) => busInfo.value = data)
    return busInfo
}
