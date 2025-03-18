// შექმენით მარტივი რენდომაიზერი ჯგუფების შესაქმნელად თქვენი სასურელი ლოგიკით

function rendomizer(){
    const leaders = ["kote khimshiashvili", "nata kvantali", "giorgi shvadze", "luka tatuashvili", "davit mefarishvili", "ilia dzindzibadze", "davit adesihvili"]
    const members = ["ნიკოლოზ ჭიტაძე", "გიო მინდორაშვილი", "ზუკა ქორიძე", "მათე ჭიკაძე", "რატი ჩიგოგიძე", "ბერდია ბექაური", "საბა ისაკაძე", "ლაშა გიორგი აზალაძე", "ნიკა მაჭარაშვილი", "დათა ფოფხაძე", "გობრონ წითლაური", "გიგა კოჩალიძე"]

    let randomLeader = leaders[Math.floor(Math.random() * leaders.length)]
    let randomMember = members[Math.floor(Math.random() * members.length)]


    const p = document.getElementById("dis")

    p.innerHTML = `leader: ${randomLeader} members: ${members[Math.floor(Math.random() * members.length)]}, ${randomMember}`
}
