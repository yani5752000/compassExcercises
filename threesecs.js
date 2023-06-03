// setTimeout(() => {
//     console.log("4311o th3r3 w0r1d")
// }, 3000);
// const arr = ["4311o", "th3r3", "w0r1d"];
// for (let i = 0; i < arr.length; i++){
//     setTimeout(() => {
//         console.log(arr[i]);
//     }, i * 1000);
// }
// const sentence = "hello there from lighthouse labs";
// for (let i = 0; i < sentence.length; i++) {
//     setTimeout(() => {
//         process.stdout.write(sentence[i]);
//     }, (i + 1) * 100);
// }

// const signs = ['|', "/", "-", "\", "|", "/", "-", "\", "|"];
const signs = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
for (let i = 0; i < signs.length; i++) {
    setTimeout(() => {
        process.stdout.write("\r" + signs[i]);
    }, i  * 1000);
}