var str = process.argv[2];
str = str.replace(/[ÊÍĞêíğ]/g, "");
process.stdout.write(str);