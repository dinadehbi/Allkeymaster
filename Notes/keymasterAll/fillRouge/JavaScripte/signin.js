
const myForm2 = document.getElementById('signinForm');
const signInButton = document.getElementById("signinButton");


signInButton.addEventListener("click", function(){
    myForm2.addEventListener('submit', function(e) {
        e.preventDefault();
        var formData2 = new FormData(this);

        fetch('../PHP/keymasterlogin.php', {
            method: 'POST',
            body: formData2
        })
        .then(response2 => {
            if (!response2.ok) {
                alert('Network response was not ok');
            }
            return response2.json();
        })
        .then(data=> {
            console.log(data);
            if (data[0] === 'true') {
                 sessionStorage.setItem("username", JSON.stringify(data[1]));
                 window.location.href="../HTML/home.html";

            }else {
                Ereur.style.display="block";
                Ereur.innerHTML = data[0];
                }
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
})

