$('#boton').click((e)=>{
    
    $('#boton').css('background-color','yellow')
    $.ajax({
        url:`http://localhost:5000/amigos`,
        type: 'GET',
        contentType: 'application/json',
        success: (res)=>{
            res.forEach(({name,age}) => {
                $(`
                <li class="css">
                    ${name}: ${age} años.
                </li>
            `).appendTo("#lista")
            });
        }  
    })
})
   
$("#search").click(function(){
    
    $("img").css("display","none");
    let inputvalue = $('#input')[0].value
    
    $.ajax({
        url:`http://localhost:5000/amigos/${inputvalue}`,
        type: 'GET',
        contentType: 'application/json',
        success: ({name})=>{
            console.log('hoalis')
            $('#amigo')[0].innerHTML= name
        }  
    })
    
})
$("#delete").click(function(){
    
    $('#success')[0].innerHTML= ''
    let deletes = $('#inputDelete')[0].value
    alert('estas apunto de eliminar al amigo' + deletes)
    $.ajax({
        url:`http://localhost:5000/amigos/${deletes}`,
        type: 'DELETE',
        contentType: 'application/json',
        success: ({name})=>{
            console.log($('success')[0])
            $('#success')[0].innerHTML= 'Elimindado'
        }  
    })
    
})