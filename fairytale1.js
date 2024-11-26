
   //Menu + Memo note
    const menuList = document.getElementById('menu-list');
    const menuButton = document.querySelector('.circle-button.top-right');

    // Open the menu list when the button is clicked
    menuButton.addEventListener('click', () => {
        menuList.style.display = 'flex'; // Show the list
    });

    // Close the menu list when the close button is clicked
    menuList.querySelector('.close-button').addEventListener('click', () => {
        menuList.style.display = 'none'; // Hide the list
    });

    // Close the menu list when clicking outside the list
    window.addEventListener('click', (e) => {
        if (e.target === menuList) {
            menuList.style.display = 'none'; // Hide the list
        }
    });

    // Select elements
    const list = document.getElementById('memo-list');
    const memoButton = document.querySelector('.memo-button');
    const closeButton = document.querySelector('#memo-list .close-button');
    const saveButton = document.getElementById('save-memo-button');
    const memoTextarea = document.getElementById('memo-textarea');

    // Open the list when the memo button is clicked
    memoButton.addEventListener('click', () => {
        list.style.display = 'flex'; // Show the list
    });

    // Close the list when the close button is clicked
    closeButton.addEventListener('click', () => {
        list.style.display = 'none'; // Hide the list
    });

    // Save the memo
    saveButton.addEventListener('click', () => {
        const memoText = memoTextarea.value;
        // Perform any necessary actions with memoText here (e.g., saving to a database or localStorage)
        list.style.display = 'none'; // Close the list
    });

    // Close the list on clicking outside the list content
    window.addEventListener('click', (e) => {
        if (e.target === list) {
            list.style.display = 'none'; // Hide the list
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



