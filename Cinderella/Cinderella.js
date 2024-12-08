
   //Menu + Memo note
   const menuList = document.getElementById('menu-list');
   const menuButton = document.querySelector('.circle-button.top-right');

   // Open the menu list
   menuButton.addEventListener('click', () => {
       menuList.style.display = 'flex'; // Show the list
   });

   // Close the menu list 
   menuList.querySelector('.close-button').addEventListener('click', () => {
       menuList.style.display = 'none'; // Hide the list
   });

   // Close the menu list-outside 
   window.addEventListener('click', (e) => {
       if (e.target === menuList) {
           menuList.style.display = 'none'; // Hide the list
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

// Scrolling Effect - Change the notification image


document.addEventListener('DOMContentLoaded', () => {
    // Select relevant elements
    const readingsSection = document.querySelector('.section-readings');
    const quizButton = document.querySelector('.section-four img[alt="3"]');

    let notificationChanged = false; // To track if the image is changed

    // Add scroll listener to the readings section
    readingsSection.addEventListener('scroll', () => {
        const scrollHeight = readingsSection.scrollHeight;
        const scrollTop = readingsSection.scrollTop;
        const clientHeight = readingsSection.clientHeight;

        // Trigger image change when scrolled to the end
        if (!notificationChanged && scrollTop + clientHeight >= scrollHeight - 10) {
            quizButton.src = 'Cdd2.png'; // Change the image
            notificationChanged = true;
        }
    });

    // Add click event to the quizButton for displaying the notification
    quizButton.addEventListener('click', () => {
        if (notificationChanged) {
            // Create and style the notification text dynamically
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

            // Append the notification text to the document body
            document.body.appendChild(notificationText);

            // Remove the notification after 3 seconds
            setTimeout(() => {
                document.body.removeChild(notificationText);
            }, 3000);
        }
    });
});

