/*enums - pascalCase */

enum Size { small, medium, large };
enum Notify {success = 1, error = 0};

let mySize: Size = Size.medium;
console.log(mySize);

let systemNotify: Notify = Notify.success;
console.log(systemNotify);