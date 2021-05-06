let usuarios = [
    {
        username: 'jon',
        pass: '1234'
    },
    {
        username: 'messi',
        pass: '1234'
    }
];

function login() {
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;
    let iniciado = true;
    // el foreach es un for que recorre popr items en vez de por [i]
    usuarios.forEach(usuario =>{
        if(username === usuario.username && pass === usuario.pass) {
            console.log("sesion iniciada");
            window.location.href = "paginafinal.html";
            iniciado = true;
        }
        else {
            iniciado = false;
        }
    })
    
    /*for(let i = 0; i < usuarios.length; i++){
        if(username === usuarios[i].username && pass === usuarios[i].pass) {
            console.log("sesion iniciada");
            window.location.href = "clase1.html";
            iniciado = true;
        }
        else {
            iniciado = false;
        }
    }
    */
    if(!iniciado){ // if(iniciado == false)
        console.log("username o pass incorrectos");
    }
    
}

function agregar(){
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;
    const obj = {
        username: username,
        pass : pass
    }
    //me cree un usuario
    usuarios.push(obj);
    console.log(usuarios);
}