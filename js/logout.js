
        let UserCreds = JSON.parse(sessionStorage.getItem("admin-creds"));
        let UserInfo = JSON.parse(sessionStorage.getItem("admin-info"));

        let MsgHead = document.getElementById('msgContent'); // Corrected the variable assignment
        let GreetHead = document.getElementById('greetContent'); // Corrected the variable assignment
        let Lgout = document.getElementById('lgout'); // Corrected the variable assignment

        let SignOut = () => {
            sessionStorage.removeItem("admin-creds");
            sessionStorage.removeItem("admin-info");
            window.location.href = 'login.html';
        };

        let CheckCred = () => {
            if (!sessionStorage.getItem("admin-creds"))
                window.location.href = 'login.html';
            else {
                MsgHead.innerText = `"${UserCreds.email}" Logged In`;
                GreetHead.innerText = `Welcome ${UserInfo.FirstName + " " + UserInfo.LastName}!`;
            }
        };

        window.addEventListener('load', CheckCred);

        // Add event listener only if the element exists
        if (Lgout) {
            Lgout.addEventListener('click', SignOut);
        }

