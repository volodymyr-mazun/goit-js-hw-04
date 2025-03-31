
const profile = {
    username: "Jacob",
    playTime: 300,
    
        changeUsername(newName) {       // метод який змінює значення властивості "username", Jacob на Marco
            this.username = newName;    // this - ключове слово, синтаксис звернення до властивості
        },  

        updatePlayTime(hours) {         // метод який змінює значення властивості "playTime", 300 на 320
            this.playTime += hours;     // збільшення значення властивості "playTime" на число яке буде вказано в аргументі
        },   
        
        getInfo() {                     // метод для повернення шаблоного рядка, із новими значеннями властивості, для нового гравця
            return `${this.username} has ${this.playTime} active hours!`;  
        }          
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"