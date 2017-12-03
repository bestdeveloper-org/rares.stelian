var arr1=["andrei","alin","marian","alex"];
var arr2=["ana","andreea","roxana"];
var arr3=[30,40,50,10,15];
//afisarea array-urilor
document.getElementById("arr1.0").innerHTML="Arrayul arr1 este: "+arr1;
document.getElementById("arr2.0").innerHTML="Arrayul arr2 este: "+arr2;
document.getElementById("arr3.0").innerHTML="Arrayul arr3 este: "+arr3;
//----------------------------------------------------------------------------------------------------------------
//length
document.getElementById("arr3").innerHTML="length: Arrayul arr1 are: "+arr1.length+ " elemente";
//concat
document.getElementById("arr4").innerHTML="concat: Arrayul arr1 concatenat cu arr2 este: "+arr1.concat(arr2);
//copyWithin
document.getElementById("arr5").innerHTML="copyWithin: Arrayul rezultat are: "+arr1.copyWithin(2,0,1);
//every
(function(){
function checkNumber (number) {
	return number<=50;
}

function print() {
	document.getElementById("arr6").innerHTML="every:Verificarea conditiei din functia checkNumber este: "+arr3.every(checkNumber);
}
print();
})();
//fill
document.getElementById("arr7").innerHTML="fill: Arrayul rezultat are: "+arr1.fill("lucian",0,1);
//filter
(function(){
function checkNumber (number) {
	return number<=40;
}

function print() {
	document.getElementById("arr8").innerHTML="filter:Noul array format este: "+arr3.filter(checkNumber);
}
print();
})();
//find
(function(){
function checkNumber (number) {
	return number>40;
}

function print() {
	document.getElementById("arr9").innerHTML="find:Verificarea conditiei din functia checkNumber este: "+arr3.find(checkNumber);
}
print();
})();

//findIndex
(function(){
function checkNumber (number) {
	return number>40;
}

function print() {
	document.getElementById("arr10").innerHTML="findIndex:Verificarea conditiei din functia checkNumber este: "+arr3.findIndex(checkNumber);
}
print();
})();

//forEach
(function(){
arr1.forEach(function(name){
	document.write=(name+" ");
})

})();

