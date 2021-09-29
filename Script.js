$("#contact-fm").submit((e)=>{
    e.preventDefault()
    $(".loader-wrapper").show();
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwNYtSccW1VihFI_j6Z0jrUe6VUwYmEZsKzqrJu7w/exec",
        data:$("#contact-fm").serialize(),
        method:"post",
        success:function (response){
            alert("Thank you for Messaging...")
            window.location.reload()
            //window.location.href=""
        },
        error:function (err){
            $(".loader-wrapper").hide();
            alert("Something wrong, check your Network")

        }
    })
})

$("#chaterFm").submit((e)=>{
    e.preventDefault()
    $(".loader-wrapper").show();
    const val = document.getElementById('cname').value;
    console.log(val);
    var lin="https://api.whatsapp.com/send/?phone=918589840073&text=Hello,%20my%20name%20is%20"+val+"%20I%20want%20your%20services"
    document.getElementById("wapi").href = lin;
    let btt=document.querySelectorAll("#wapi")
    btt.forEach(bb=>bb.click())
    window.location.reload()
    $.ajax({
        
    })
})

