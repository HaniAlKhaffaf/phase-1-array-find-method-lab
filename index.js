// code your solution here

function superbowlWin(arrOfObj) {
    const result = arrOfObj.find(element => element.result === "W")
    if (result) {
        return result.year
    }
    else 
        "Undefined"
}
