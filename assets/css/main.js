var num = prompt(),
    sum = 0;

while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

alert(sum);






var num=prompt()

if (num>0){
        if (num==1){
            alert ('ne sade ne murekkeb ededdir');
        }
        else if (num!=2 && num%2==0){
            alert ('murekkeb ededdir');
        }
        else {
            alert ('sade ededdir')
        }

}
else {
    alert('Input right number')
}