var a = ["Rajendra Prasad", "Sarvepalli Radhakrishnan"];
function fun() {
    setTimeout(function () {
        var a = ["Abdul Kalam", "Pratibha Patil", "Pranab Mukherjee"];
    }, 10);
}
fun();
a.push("Ram Nath Kovind");
console.log(a);
