import { randint } from "https://deno.land/x/random@v1.1.3/mod.ts";
function generateCode(length = 8) {
let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < length; i++) {
result += characters.charAt(randint(0, characters.length - 1));
}
return result;
}