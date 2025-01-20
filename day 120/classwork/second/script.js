// 2) შექმენით ფუნქცია რომელსაც გადაეცემა მინ 2 და მაქსიმუმ უთვალავი ელემენტი, პირველი არგუმენტი უნდა იყყოს ფუნქცია და დანარჩენი არგუმენტი ინტეჯერები, მაგ func(add, 1,7,2,1), add, minus, mulitply

function miniCalt(operator, ...number) {
    if(operator == "add") {
        return number + number
    } else if(operator == "minus") {
        return number - number
    } else if(operator == "mulitply") {
        return number * number
    }
}