
function isEnoughCapacity(products, containerSize) {    // оглошення функції з параметрами (кількість продукту, розмір контейнера)
    let totalProducts = 0;                              // змінна яка буде рахувати суму значень властивостей обєкта
    const arrayProducts = Object.values(products);      // змінна яка буде зберігати перетворений масив зі значень властивостей обєкта
        for (let product of arrayProducts) {            // цикл for...of який перебере масив
            totalProducts += product;                   // операція яка буде додавати значення масива з кожною ітерацією
        }
    return totalProducts <= containerSize;              // умова яка буде повертати результат порівняння: суми значень із вмістом контейнера
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));    // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));     // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));    // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false