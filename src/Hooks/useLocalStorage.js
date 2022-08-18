import { useState } from "react"
const useLocalStorage = (itemName,initialValue) =>{
    const localStorageItem = localStorage.getItem(itemName)
    let parseItems

    if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parseItems = initialValue
    } else {
        parseItems = JSON.parse(localStorageItem)
    }

    const [item,setItem] = useState(parseItems)

    const saveItem = (newItem) =>{
        const stringifiedItems = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItems)
        setItem(newItem)
    }

    return [
        item,
        saveItem
    ]
}

export default useLocalStorage