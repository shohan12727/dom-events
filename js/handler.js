document.getElementById('button-update-title')
    .addEventListener('click', function() {
        
       const pageTitleElement = document.getElementById('page-text');
       console.log(pageTitleElement);
       pageTitleElement.innerText= 'update page title text.' 
    });

    document.getElementById('btn-login').addEventListener('click',function(){
        const userInfoEl = document.getElementById('user-info');
        userInfoEl.innerText = 'user logged in successfully'
    })



