console.log('uspesna konekcija')

const uiBtnToRegister = document.getElementById('to-register');
const uiBtnToLogin = document.getElementById('to-login');
const uiFormLogin = document.getElementsByClassName('form-login')[0];
const uiFormRegister = document.getElementsByClassName('form-register')[0];


function switchToRegisterPage() {
console.log('switching to register page');
uiFormLogin.style.display = 'none';
uiFormRegister.style.display = 'block';
}


function switchToLoginPage() {
    console.log('switching to login page');
    uiFormRegister.style.display = 'none';
    uiFormLogin.style.display = 'block';
}


uiBtnToRegister.addEventListener('click', switchToRegisterPage );
uiBtnToLogin.addEventListener('click', switchToLoginPage );






//lines

const uiBtnToTextOne = document.getElementById('lineOne');
const uiBtnToTextTwo = document.getElementById('lineTwo');

const uiDescription = document.getElementsByClassName('description')[0];
const uiDescriptionOne = document.getElementsByClassName('descriptionOne')[0];

function switchToTextOne() {
    console.log('switch to text one');
    uiDescription.style.display='block';
    uiDescriptionOne.style.display='none';
}

function switchToTextTwo() {
    console.log('switch to text two');
    uiDescriptionOne.style.display='block';
    uiDescription.style.display='none';
}

uiBtnToTextOne.addEventListener('click', switchToTextOne);
uiBtnToTextTwo.addEventListener('click', switchToTextTwo);







//video link


$(function(){
    $('#play').click(function(){
        if(!$('#iframe').lenght) {
            $('#iframeHolder').html('<iframe width="800" height="600" src="https://www.youtube.com/embed/4bHUsy74Fss" title="YouTube video player" parent.closeIFrame(); frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
           
        }
    
    });
});











