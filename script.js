function setcontent(){

    var birthyear = prompt("enter your age here");
    var calculated_age = (2020-birthyear) * 365;
    var h2 = document.createElement('h2');
    var text = document.createTextNode('you are ' +  calculated_age + ' years old');

    h2.appendChild(text)
    // h2.setAttribute('id', 'header')

    document.getElementById('flex-result').appendChild(h2);


    // console.log(calculated_age);


}


function reset(){
    var resetttt = document.getElementById('flex-result')
    resetttt.remove();    
}