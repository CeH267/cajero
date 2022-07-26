/*<script>
        function Login(form){
        
                    if (form.u.value=="clau"){
                if(form.c.value=="123"){
                    location="cajero.html";
                }else {
                    console.log("error de password");
                        }
                }else {
                    console.log("error de usuario");
            }
        }
    </script>
*/
    
    function login(form){
        if (form.u.value=="clau") {
            if (form.c.valuie="123") {
                location="principal.html"
            } else {
                alert("error de password")
            }
        } else {
            alert("error de usuario")
        }                
    }
  
    function formula() {
        let CantidadT=parseInt(document.getElementById("Cant").value);
        let Cantidad1=parseInt(document.getElementById("C1").value);
        let Cantidad2=parseInt(document.getElementById("C2").value);
        document.getElementById("C1").value=(Cantidad1-Cantidad2);
        document.getElementById("C2").value=(Cantidad1+Cantidad2);
    }

    function formula2() {
        let CantidadT=parseInt(document.getElementById("Cant").value);
        let Cantidad1=parseInt(document.getElementById("C1").value);
        let Cantidad2=parseInt(document.getElementById("C2").value);
        document.getElementById("C1").value=(Cantidad1+Cantidad2);
        document.getElementById("C2").value=(Cantidad1-Cantidad2);
    }

    function formula3() {
        let CantidadT=parseInt(document.getElementById("Cant").value);
        let Cantidad1=parseInt(document.getElementById("C1").value);
        let Cantidad2=parseInt(document.getElementById("C2").value);
        document.getElementById("C1").value=(Cantidad1+CantidadT);
    }

    function formula4() {
        let CantidadT=parseInt(document.getElementById("Cant").value);
        let Cantidad1=parseInt(document.getElementById("C1").value);
        let Cantidad2=parseInt(document.getElementById("C2").value);
        document.getElementById("C2").value=(Cantidad2+CantidadT);
        
    }

    function formula5() {
        let CantidadT=parseInt(document.getElementById("Cant").value);
        let Cantidad1=parseInt(document.getElementById("C1").value);
        let Cantidad2=parseInt(document.getElementById("C2").value);
        document.getElementById("C1").value=(Cantidad1-CantidadT);
    }

    function formula6() {
        let CantidadT=parseInt(document.getElementById("Cant").value);
        let Cantidad1=parseInt(document.getElementById("C1").value);
        let Cantidad2=parseInt(document.getElementById("C2").value);
        document.getElementById("C2").value=(Cantidad2-CantidadT);
    }