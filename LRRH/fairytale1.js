
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

    // Scrolling Effect-change the png file/notification
    const readingsSection = document.querySelector('.section-readings');
    const notificationImage = document.querySelector('.section-four img[alt="3"]'); // Select the correct image based on its alt attribute

    let notificationChanged = false; // To track if the image is changed

    // Change the notification image when the end of the readings section is reached
    readingsSection.addEventListener('scroll', () => {
        const scrollPosition = readingsSection.scrollTop + readingsSection.clientHeight;
        const scrollHeight = readingsSection.scrollHeight;

        if (scrollPosition >= scrollHeight && !notificationChanged) {
            notificationImage.src = "Notification-one.png"; // Change the image
            notificationChanged = true; // Ensure the change happens only once
        }
    });

    // Display "Take a Quiz!" on clicking the changed notification image
    notificationImage.addEventListener('click', () => {
        if (notificationChanged) {
            alert("Take a Quiz!");
        }
    });



