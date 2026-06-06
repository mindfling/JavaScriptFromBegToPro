// * Practice exercise 3.2
const shoppingList = [];
console.log(shoppingList);

shoppingList.push("Milk", "Bread", "Apples");
console.log(shoppingList);

shoppingList[1] = "Banana and Egg";
console.log(shoppingList);

shoppingList.splice(1, 1, "Banana", "Egg");
console.log(shoppingList);

const last = shoppingList[shoppingList.length - 1];
console.log('last: ', last, [last]);
const lastSlice = shoppingList.slice(shoppingList.length-1, shoppingList.length);
console.log('lastSlice: ', lastSlice);
const lastItem = shoppingList.pop()
console.log('lastItem: ', lastItem);
console.log(shoppingList);


console.log('Milk index', shoppingList.indexOf('Milk'));


// simple very simplest way to sort array
const sortList = shoppingList.sort();
console.log('sortList: ', sortList);
console.log('reversed: ', sortList.reverse());

console.log('Milk index', sortList.indexOf('Milk'));


// find Banana
const bananaIndex = sortList.indexOf("Banana");
console.log('Let`s find banana Index: ', bananaIndex);


// insert after Banana
// sortList.splice(bananaIndex + 1, 0, 'Lettuce');
// console.log('sortList: ', sortList);
// sortList.splice(bananaIndex + 1, 0, 'Carrots');
// console.log('sortList: ', sortList);

sortList.splice(bananaIndex + 1, 0, "Carrots", "Lettuce");
console.log("final shoppingList", shoppingList);


const newList = ["Juice", "Pop"];
console.log('newList: ', newList);


let updatedList = sortList.concat(newList);
updatedList = updatedList.concat(newList);
console.log('updatedList: ', updatedList);


/**
 * 
 * 1. Create an empty array to use as a shopping list.
 * 2. Add Milk , Bread , and Apples to your list.
 * 3. Update " Bread " with Bananas and Eggs .
 * 4. Remove the last item from the array and output it into the console.
 * 5. Sort the list alphabetically.
 * 6. Find and output the index value of Milk .
 * 7. After Bananas , add Carrots and Lettuce .
 * 8. Create a new list containing Juice and Pop
 * 9. Combine both lists, adding the new list twice to the end of the first list.
 * 10. Get the last index value of Pop and output it to the console.
 * 11. Your final list should look like this: ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
 */

/*
Практическое занятие 3.2
1.	 Создайте массив — список покупок в продуктовом магазине.
2.	 Добавьте в список Milk, Bread и Apples.
3.	 Замените Bread на Bananas и Eggs.
4.	 Удалите последний элемент из массива и выведите его на экран.
5.	 Отсортируйте список в алфавитном порядке.
6.	 Найдите и выведите значение индекса Milk.
7.	 После Bananas добавьте Carrots и Lettuce.
8.	 Создайте новый список, в котором будет Juice и Pop.
9.	 Объедините оба списка, добавив новый список дважды в конец первого списка.
10.	 Получите последнее значение индекса Pop и выведите его на экран.
11.	 Итоговый результат должен быть таким:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
*/


// for more information see
// https://learn.javascript.ru/array-methods
