function IsPalendrom(str) {
    str = str.replace(/\W/g, '')
    str = str.toLowerCase();
    console.log(str);
    var count = 0;
    var length = str.length;
    for (var i = 0; i < length; i++) {
        console.log(str[i]);
        console.log(str[length - i - 1]);
        if (str[i] == str[length - i - 1]) {
            count += 1;
        }
    }
    console.log(count);
    if (count == length) {
        return 1;
    } else {
        return 0;
    }
}