
   //Menu + Memo note
   const menuList = document.getElementById('menu-list');
   const menuButton = document.querySelector('.circle-button.top-right');

   // Open menu
   menuButton.addEventListener('click', () => {
       menuList.style.display = 'flex'; 
   });

   // Close menu l
   menuList.querySelector('.close-button').addEventListener('click', () => {
       menuList.style.display = 'none';
   });

   // Close the menu from outside 
   window.addEventListener('click', (e) => {
       if (e.target === menuList) {
           menuList.style.display = 'none'; 
       }
   });

   const list = document.getElementById('memo-list');
   const memoButton = document.querySelector('.memo-button');
   const closeButton = document.querySelector('#memo-list .close-button');
   const saveButton = document.getElementById('save-memo-button');
   const memoTextarea = document.getElementById('memo-textarea');

   memoButton.addEventListener('click', () => {
       list.style.display = 'flex'; 
   });

   closeButton.addEventListener('click', () => {
       list.style.display = 'none'; 
   });

   // Save memo
   saveButton.addEventListener('click', () => {
       const memoText = memoTextarea.value;
       list.style.display = 'none'; 
   });

   window.addEventListener('click', (e) => {
       if (e.target === list) {
           list.style.display = 'none'; 
       }
   });



   
   document.addEventListener('DOMContentLoaded', () => {
       const readingsSection = document.querySelector('.section-readings');
       const quizButton = document.querySelector('.section-four img[alt="3"]');
   
       let notificationChanged = false; 
   
       readingsSection.addEventListener('scroll', () => {
           const scrollHeight = readingsSection.scrollHeight;
           const scrollTop = readingsSection.scrollTop;
           const clientHeight = readingsSection.clientHeight;
   
           if (!notificationChanged && scrollTop + clientHeight >= scrollHeight - 10) {
               quizButton.src = 'cddd2.png'; 
               notificationChanged = true;
           }
       });
   
       quizButton.addEventListener('click', () => {
           if (notificationChanged) {
               const notificationText = document.createElement('div');
               notificationText.textContent = 'Take a Quiz!';
               Object.assign(notificationText.style, {
                   position: 'absolute',
                   top: '50%',
                   left: '50%',
                   transform: 'translate(-50%, -50%)',
                   backgroundColor: '#fff',
                   padding: '10px',
                   borderRadius: '5px',
                   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                   zIndex: '1000',
                   fontSize: '16px',
                   fontWeight: 'bold',
                   textAlign: 'center',
               });
   
               document.body.appendChild(notificationText);
   
               setTimeout(() => {
                   document.body.removeChild(notificationText);
               }, 3000);
           }
       });
   });
   
   document.addEventListener('DOMContentLoaded', () => {
       const pageSequence = [
        "Cinderellaa.html",
        "Cd2.html",
        "Cd3.html",
        "Cd4.html",
        "Cd5.html"
       ];
   
       const currentPage = window.location.pathname.split("/").pop();
       let currentIndex = pageSequence.indexOf(currentPage);
   
       if (currentIndex === -1) {
           console.error("Current page is not found in the sequence:", currentPage);
           return;
       }
   
       const menuButton = document.querySelector('.section-one .menu-button');
       const nextButton = document.querySelector('.section-three .next-button');
       const backButton = document.querySelector('.section-three .circle-button.top-left');
   
       if (!menuButton || !nextButton || !backButton) {
           console.error("One or more buttons are not found in the DOM.");
           return;
       }
   
       // Menu Button 
       menuButton.addEventListener('click', () => {
           const menuList = document.getElementById('menu-list');
           if (menuList) {
               menuList.style.display = 'flex'; 
           } else {
               console.error("Menu list not found in the DOM.");
           }
       });
   
       // Back Button 
       backButton.addEventListener('click', () => {
           if (currentIndex > 0) {
               currentIndex--;
               console.log("Navigating to:", pageSequence[currentIndex]);
               window.location.href = pageSequence[currentIndex];
           }
       });
   
       // Next Button 
       nextButton.addEventListener('click', () => {
           if (currentIndex < pageSequence.length - 1) {
               currentIndex++;
               console.log("Navigating to:", pageSequence[currentIndex]);
               window.location.href = pageSequence[currentIndex];
           }
       });
   });
   
   
   
   