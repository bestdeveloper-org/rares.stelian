
var string1="What one man can do another can do ";
var string2="always"
document.getElementById("string1a").innerHTML='Primul string folosit este '+'"'+string1+'"';
document.getElementById("string1b").innerHTML='Al doilea string folosit este '+'"'+string2+'"';

document.getElementById("string1").innerHTML='Caracterul de pe pozitia 0 este '+'"'+string1.charAt(0)+'"';
document.getElementById("string2").innerHTML='Codul ascii al caracterul de pe pozitia 0 este '+'"'+string1.charCodeAt(0)+'"';
document.getElementById("string3").innerHTML='Stringul concatenat este '+'"'+string1.concat(string2)+'"';
document.getElementById("string4").innerHTML='Caracterul de pe ultima pozitie este "do ": '+'"'+string1.endsWith("do ")+'"';
document.getElementById("string5").innerHTML='Codul ascii al lui "65" este '+'"'+String.fromCharCode(65)+'"';
document.getElementById("string6").innerHTML='Contine string1 cuvantul "can" ? = '+'"'+string1.includes("can")+'"';
document.getElementById("string7").innerHTML='pozitia pe care se gaseste "what" este '+'"'+string1.indexOf("what")+'"';
document.getElementById("string8").innerHTML='Ultima pozitie pe care gasim "do"este '+'"'+string1.lastIndexOf("do")+'"';
document.getElementById("string9").innerHTML='string1 in comaparatie cu string2 este '+'"'+string1.localeCompare(string2)+'" pentru ca string1 este mai lung decat string2';
document.getElementById("string10").innerHTML='Lungimea lui string1 este '+'"'+string1.length+'"';
document.getElementById("string11").innerHTML='Array-ul returnat care contine "another" este '+'"'+string1.match(/another/g)+'"';
document.getElementById("string12").innerHTML='String2 repetat de 2 ori este '+'"'+string2.repeat(2)+'"';
document.getElementById("string13").innerHTML='String1 returnat cu cele 2 "can" schimbat in "may"  este '+'"'+string1.replace(/can/g, "may")+'"';
document.getElementById("string14").innerHTML='"one" este pe pozitia '+'"'+string1.search("one")+'"';
document.getElementById("string15").innerHTML='Noul string este '+'"'+string1.slice(0,4)+'"';
document.getElementById("string16").innerHTML='Array-ul nou creat este '+'"'+"["+string1.split(" ")+"]"+'"';
document.getElementById("string17").innerHTML='String1 incepe cu "What" '+'"'+string1.startsWith("What",0)+'"';
document.getElementById("string18").innerHTML='Substrig-ul format este '+'"'+string1.substring(0, 4)+'"';
document.getElementById("string19").innerHTML='String1 format este '+'"'+string1.toLowerCase()+'"';
document.getElementById("string20").innerHTML='String1 format este '+'"'+string1.toUpperCase()+'"';
document.getElementById("string21").innerHTML='String1 format este '+'"'+string1.trim()+'"';
