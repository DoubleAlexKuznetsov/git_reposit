var str = process.argv[2];
str = str.replace(/[������]/g, "");
process.stdout.write(str);