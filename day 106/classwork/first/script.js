//  შექმენით ფუნქცია რომელსაც მატრიცა (2დ მასივი) X-ების O-ების და ცარიელი სტრინგების. ფუნქციამ უნდა გამოთვალოს ფრეა, თუ რომელამა მოთამაშემ მოიგო თამაში. ( ინფუთი ყოველთვის ვალიდური იქნება )

function xoGame(game){
    for(let rows of game) {
        if(rows[0] == rows[1] && rows[1] == rows[2] && rows[0] !== "") {
            console.log("მოიგო 0-მა")
        } else if(rows[0] == rows[1] && rows[1] == rows[2] && rows[2] !== "") {
            console.log("მოიგო 2 მა")
        } else if(rows[0] == rows[1] && rows[1] == rows[2] && rows[1] !== "") {
            console.log("მოიგო 1-მა")
        }
    }
}