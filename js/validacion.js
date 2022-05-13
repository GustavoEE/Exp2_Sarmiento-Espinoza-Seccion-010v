function validacion()
    {
        nombre= document.getElementById('nom').value;
        email = document.getElementById('ema').value; 

        if(nombre == null || nombre.length==0 || /^\s+$/.test(nombre))
        {
            alert('Error... debes ingresar un nombre válido.');
            document.datos.nom.focus();
            return false;
        }

        if(email == null || email.length==0 || /^\s+$/.test(email))
        {
            alert('Error... debes ingresar un correo válido.');
            document.datos.ema.focus();
            return false;
        }
            
        return true;             
    }
