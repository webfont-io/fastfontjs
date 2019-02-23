import { ZipCodeValidator } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();
function hello(compiler: string) {
    console.log(myValidator.isAcceptable("123112"));
    console.log(`Hello from ${compiler}`);
}
hello("test");