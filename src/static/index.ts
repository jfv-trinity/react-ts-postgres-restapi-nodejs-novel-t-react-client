export function displayModal(element: HTMLElement){
  if (element.style.display == 'block' || element.style.display == null)
    {
      element.style.display='none';
    } else {
      element.style.display='block';
    }
}

export function bookMark(bookId: number){
    console.log(bookId)
    fetch('/bookmark-book', {
        method: 'POST',
        body: JSON.stringify({ bookId:bookId })
    }).then((_res) => {
    window.location.reload();
    });
}

export function retrieveBook(bookId: number){
    window.location.href = "simulator?bookId="+bookId;
}

export function retrieveChapters(bookId: number){
    window.location.href = "chapters?bookId="+bookId;
}

export function retrieveChapter(chapterId: number){
    window.location.href = "view-chapter?chapter="+chapterId;
}

export function retrieveNextChapter(chapterId: number){
    window.location.href = "view-chapter?chapter="+(chapterId+1);
}

export function retrievePreviousChapter(chapterId: number){
    window.location.href = "view-chapter?chapter="+(chapterId-1);
}

export function editBook (bookId: number){
    window.location.href = "edit-book?bookId="+bookId;
}

export function deleteChapter(bookId: number, chapterId:number){
    fetch('/delete-chapter', {
        method: 'POST',
        body: JSON.stringify({bookId: bookId, chapterId: chapterId})
        }).then((_res) => {
            window.location.href = "simulator?bookId="+bookId;
        });
}

export function deleteBook(bookId:number){
    fetch('/delete-book', {
        method: 'POST',
        body: JSON.stringify({ bookId: bookId})
    }).then((_res) => {
        window.location.href = "book";
    });
}

export function editChapter(bookId: number, chapterId:number){
    window.location.href = "edit-chapter?&bookId="+bookId+"&chapterId="+chapterId;
}

// function checkEmail(element: HTMLElement, subtext: HTMLElement) {

//   if (element.value.includes("@") == false || element.value.includes(".com") == false){
//       element.style.borderColor="red";
//       subtext.classList="subtext";
//       subtext.innerHTML="Invalid Email";
//     }
//   else{
//       emailSubtext.classList="hidden-subtext";
//       element.style.borderColor="green";
//       }
// }

export function checkPassword(password: string, password1: string, element: HTMLElement){
    if(password == password1){
      element.style.borderColor='green';
    }
    else
    {
     element.style.borderColor='red';
    }
  }

export function previousPage(){
    history.back()
}

export function timeoutNotifications()
       {
        const Success = document.getElementById("successNotification");
        const Error = document.getElementById("errorNotification");
           if(Success){
                Success.remove();
                clearInterval(window.setInterval('timeoutNotifications()', 10000));}
           else if(Error){
                Error.remove();
                clearInterval(window.setInterval('timeoutNotifications()', 10000));
           }
       }