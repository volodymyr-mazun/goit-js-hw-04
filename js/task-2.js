
function calcAverageCalories(days) {
    if (days.length === 0) {                    // умова яка буде порівнювати значення з "0" і запобігати виведення типу даних Nan
        return 0;                               // пустий обєкт має повертати "0"
    }  
    let totalCalories = 0;                      // змінна яка буде зберігати суму калорій
    for (let day of days) {                     // цикл який перебере обєкт 
        totalCalories += day.calories;          // сума всіх значень, властивості calories
    }
    const daysLength = days.length;             // довжина масива
    const result = totalCalories / daysLength;  // середнє значення
    return result;                              // оператор який повертає результат у функцію
}

console.log(calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
    ])
);//____________________________________________ 3180

console.log(calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
    ])
);//____________________________________________ 2270

console.log(calcAverageCalories([])
);//____________________________________________ 0
