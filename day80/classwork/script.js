// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.lenght);
// lenght - გამოაქვს სიის სიგრძე თუ რამდენი ელემენტია მასივში ასევე სე მუშაობს სტრინგზე

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.toString);
// toString - გადააქცევს მასივს სტრინგათ ანუ ეს რიცხვები ჩაჯდება სტრინგში ("ბრჭყალებში") ასევე აკავშირებს ერთამეთთან მძიმეებით

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.at([2]));
// at - გამოაქვს ინდექსის მიხედვით ელემენტი, ასევე როგორც დადებითი ასევე შეგიძლია გამოიყენო უარყოფითათ

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.join("-"));
// join - ელემენტებს აქცევს სტრინგად და ასევე შეგიძლია გაუწერო ის რომ ელემენტებისგან სადაც შეგიძლია აირჩიო რა სიმბოლო იყოს ელემენტებისგან დაშორებული


// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.pop());
// pop - შლის ელემენტს მასივის ბოლოდან, pop ს არ გადავსცემთ არანაირ არგუმენტს

// let numbers1 = [0,1,2,3,4,5];
// console.log(numbers1.push("Zuka"));
// push - ამატებს ელემენტს მასივში როგორ append პითონში

// let names = ["Zuka","Gigi","Lika"];
// console.log(names.shift());
// shift - ამოწმებს და შლის მასივის პირველ ელემენტს

// let numbers = [2,3,4,5,6,7,8,9];
// console.log(numbers.unshift(0,1));
// unshif - ამატებს მასივის დასაწყისში ელემენტებს

// let numbers = [1,2,3,4,5];
// delete numbers[2];
// console.log(numbers);
// delete - შლის ელემენტს მასივიდან როდესაც არგუმენტს გადავსცემთ

// let numbers1 = [0,1,2,3,4];
// let numbers2 = [5,6,7,8,9];
// let combineArray = numbers1.concat(numbers2);
// console.log(combineArray)
// concat - აერთებს მასივებს ერთმანდეთზე ჯერ ვწერთ თუ რომელ მასივი გვინდა რო რომელ მასივს შეუერთეს შემდეგ კი concant(გადავცემთ 1 არგუმენტს ან რამდენიც გვინდა, რომ შეერთეს ამ მასივთან)

// let numbers1 = [0,20,2,3,4];
// console.log(numbers1.indexOf(20));
// indexOf - იწყებს პირველიდან,ჯერ უნდა ვუთხრათ თუ რა გვინდა რომ იპოვოს მასივში მაგალითად მე დავუწერე რომ მიპოვე 20 და იპოვა 20 და გამომიტანა ის თუ მენამდენე ინდექსზე არის ჩემი 20, და თუ ვეტყვით ისეთ რაღაცას რაც მასივში არ წერია მაშინ ის გამოგვიტანს -1

// let numbers1 = [0,20,2,3,4];
// console.log(numbers1.lastIndexOf(20));
// lastIndexOf - ეძებს ბოლოდან ჩვენს გადაცემულ რიცხვს

// let numbers1 = [0,20,2,3,4,];
// console.log(numbers1.includes(20));
// includes - გვეუბნება თუ არის ჩვენ მიერ გადაცემული რიცხვი ან სტრიგნი მასივში და თუ არის მაშინ გვიბრუნებს true და თუ არ არის მაშინ გვიბრუნებს false


// let numbers1 = [2,20,1,3,4];
// console.log(numbers1.sort());
// sort - ალაგებს მასივს

// let numbers1 = [1,2,3,4,5];
// console.log(numbers1.reverse());
// reverse - აბრუნებს მასივს შემოტრიალებულად