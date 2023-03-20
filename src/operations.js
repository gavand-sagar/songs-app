export function checkEvenOdd(number) {
    if (isNaN(number)) {
        // in case number == "Sagar"
        // in case number == undefinded
        // in case number == {}
        return null
    }

    if (number == null || number == '') {
        // in case number == null
        return null
    }

    if (number % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}



export function makeCapiltal(name) {
    if (name == '') {
        return ''
    }

    if (name == null || name == undefined) {
        return null
    }

    let first = name.charAt(0).toUpperCase()
    let remaining = name.substring(1).toLowerCase();
    return first + remaining;
}


export function addition(a, b) {
    return a + b;
}