let users = [];

let userInfo = {
    name: '',
    city: '',
    age: ''
}

$('#save').click(function(){
   users.push({
   name: document.getElementById("name").value,
   age: document.getElementById("age").value,
   city: document.getElementById("city").value
})
   console.log(users);
});
$('#city, #name, #age').change(function(){

    let _this = $(this)

    let fieldName = _this.attr('name')

    userInfo[fieldName] = _this.val()

    console.log(userInfo);

});
