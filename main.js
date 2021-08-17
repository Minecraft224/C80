name_of_student_array=[];

function submit() {
    var displayname=[];
    for(var j=1;j<=4;j++){
var nameofstudent=document.getElementById("name_of_the_student"+j).value;
console.log(nameofstudent);
name_of_student_array.push(nameofstudent);
    }
    console.log(name_of_student_array);
    var length=name_of_student_array.length;
    console.log(length);
    for(var k=0;k<length;k++){
        displayname.push("<h4>NAME:"+name_of_student_array[k]+"</h4>");
        console.log(displayname);
    }
    console.log(displayname);
    document.getElementById("display_name_with_commas").innerHTML=displayname;
    var removecomma=displayname.join("");
    console.log(removecomma);
    document.getElementById("display_name_without_commas").innerHTML=removecomma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}
function sorting() {
    name_of_student_array.sort();
    console.log(name_of_student_array);
    displaysort=[];
    var length1=name_of_student_array.length;
    console.log(length1);
    for(var k=0;k<length1;k++){
        displaysort.push("<h4>NAME:"+name_of_student_array[k]+"</h4>");
        console.log(displaysort);
        
    }
    var removecomma=displaysort.join("");
    console.log(removecomma);
    document.getElementById("display_name_without_commas").innerHTML=removecomma;
}