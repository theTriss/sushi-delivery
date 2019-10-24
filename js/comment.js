window.addEventListener('load', function() {

    const commentButton = document.querySelector('input[type="button"]'),
          name = document.forms[0].name,
          comment = document.querySelector('textarea'),
          commentContainer = document.querySelector('.comment-container');
    var counter;
       
        if(localStorage.getItem('counter')) {
            counter = localStorage.getItem('counter');
            addCommentFromLocalStore();
        } else {
            counter = 0;
            localStorage.setItem('counter', counter);
        }
    
    commentButton.onclick = function() {
        
        clearFieldsWithWrongMessage.call(name);
        clearFieldsWithWrongMessage.call(comment);
        
        if(checkCorrectInput.call(name) && checkCorrectInput.call(comment)) {
        
            var objectWithComment = {};

            createComment(name.value, comment.value, new Date());

            ++counter;
            localStorage.setItem('counter', counter);
            objectWithComment.logo = name.value;
            objectWithComment.date = checkDate(new Date());
            objectWithComment.comment = comment.value;
            objectWithComment = JSON.stringify(objectWithComment);
            localStorage.setItem(counter, objectWithComment);
            
            clearInputFields.call(name);
            clearInputFields.call(comment);
        }
    }
    
    function checkDate(date) {
        let dateToday = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();

        if(dateToday < 10) {
            dateToday = '0' + dateToday;
        }
        if(month < 10) {
            month = '0' + month;
        }
        return dateToday + '.' + month + '.' + year;
    }
    
    function addCommentFromLocalStore() {
        for(var i = 1; i <= counter; i++){
            var objectWithComment = localStorage.getItem(i);
            objectWithComment = JSON.parse(objectWithComment);
            createComment(objectWithComment.logo, objectWithComment.comment, objectWithComment.date);
        }
    }
    
    function createComment(userLogin, userComment, commentDate) {
        
        var blockComment = document.createElement('div'),
            nameAndDate = document.createElement('div'),
            userName = document.createElement('span'),
            date = document.createElement('span'),
            comment = document.createElement('p');
        
        blockComment.classList.add('block-comment');
        nameAndDate.classList.add('nameAndDate');
        userName.classList.add('userName');
        date.classList.add('date');
        
        
        userName.innerHTML = userLogin;
        if(typeof commentDate == 'object') {
            date.innerHTML = checkDate(commentDate);   
        } else {
            date.innerHTML = commentDate;
        }
        comment.innerHTML = userComment;
        
        nameAndDate.appendChild(userName);
        nameAndDate.appendChild(date);
        blockComment.appendChild(nameAndDate);
        blockComment.appendChild(comment);
        commentContainer.insertBefore(blockComment, commentContainer.firstElementChild)
    }
    
    function checkCorrectInput() {
        console.log(this)
        if(this == name){
            if(this.value.length < 6) {
                this.previousElementSibling.innerHTML = 'Логин должен содержать минимум 6 символов';
                this.previousElementSibling.style.color = 'red';
                this.classList.add('wrong');
                return false;
            } 
        } else if(this == comment){
            console.log(1);
            if(this.value.length == 0){
                this.previousElementSibling.innerHTML = 'Заполните поле для комментариев';
                this.previousElementSibling.style.color = 'red';
                this.classList.add('wrong');
                return false;
            }
        }
        return true;
    }
    
    function clearFieldsWithWrongMessage() {
        this.previousElementSibling.innerHTML = '';
        if(this.classList.contains('wrong')){
            this.classList.remove('wrong');
        }
    }
    
    function clearInputFields() {
        this.value = '';
    }
})