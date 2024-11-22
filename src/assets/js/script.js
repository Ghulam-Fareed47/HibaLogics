


// Function to handle setting active class for navbar links
function setActive(id) {
    // Remove active class from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    document.getElementById(id).classList.add('active');
}

// On document ready, set the first link (Portfolio) as active on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set the first link (portfolio-link) as active on page load
    setActive('portfolio-link');
});






document.addEventListener('DOMContentLoaded', function () {
    // Set the first link in the sidebar as active on page load
    setSidebarActive('sidebar-portfolio');
});

function setSidebarActive(id) {
    // Remove active class from all sidebar links
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked sidebar link
    document.getElementById(id).classList.add('active');
}



  

// NAVBAR COLOR AND SHADOW
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0); // Ensure the page starts at the top

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {  // Change the 50 value to control when the effect kicks in
        navbar.classList.add('bg-white', 'shadow-sm');  // Change background color to green
    } else {
        navbar.classList.remove('bg-white', 'shadow-sm');  // Reset background color 
    }
});

//DROPDOWN FOR MOBILE--------START
const callUsButto = document.querySelectorAll('.callusdrop');
const contactContainer = document.getElementById('contactContainer');

callUsButto.forEach(e => {
    e.addEventListener('click', () => {
        contactContainer.classList.toggle('translate-x-0'); // Toggle showing from top to bottom
        contactContainer.classList.toggle('-translate-x-[120%]'); // Reset to hidden state
    }); 
});

// MENU BUTTON ANIMATION

function toggleMenu(button) {
    // Toggle the current button's aria-pressed state
    const isPressed = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', !isPressed);
}

// Close the menu and reset aria-pressed when other buttons are clicked
document.querySelectorAll('.close-menu-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const hamburgerButton = document.getElementById('hamburgerButton');
        hamburgerButton.setAttribute('aria-pressed', 'false');
    });
});

// SERVICES----------START

function toggleservices(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Close all other sections
    const allButtons = document.querySelectorAll('button[aria-expanded="true"]');
    allButtons.forEach((btn) => {
        if (btn !== button) {
            const otherContent = btn.nextElementSibling;
            const otherIcon = btn.querySelector("i");
            btn.setAttribute("aria-expanded", "false");
            otherContent.style.maxHeight = "0";
            otherIcon.classList.remove("fa-minus");
            otherIcon.classList.add("fa-plus");
            btn.classList.remove("text-primary");
        }
    });

    // Toggle current section
    button.setAttribute("aria-expanded", isExpanded ? "false" : "true");
    content.style.maxHeight = isExpanded ? "0" : content.scrollHeight + "px";

    // Change color and icon based on expansion state
    if (isExpanded) {
        button.classList.remove("text-primary");
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        button.classList.add("text-primary");
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}


// FAQs ----------------START

function toggleFAQs(button) {
    const content = button.nextElementSibling; // Gets the content <div> of the FAQ
    const icon = button.querySelector("i"); // Gets the icon inside the button
    const isExpanded = button.getAttribute("aria-expanded") === "true"; // Check if it's expanded

    // Close all other sections
    const allButtons = document.querySelectorAll('button[aria-expanded="true"]');
    allButtons.forEach((btn) => {
        if (btn !== button) {
            const otherContent = btn.nextElementSibling;
            const otherIcon = btn.querySelector("i");
            btn.setAttribute("aria-expanded", "false");
            otherContent.style.maxHeight = "0"; // Collapse other sections
            otherIcon.classList.remove("fa-minus");
            otherIcon.classList.add("fa-plus");
            btn.classList.remove("text-primary"); // Remove active state from other buttons
        }
    });

    // Toggle current section
    button.setAttribute("aria-expanded", isExpanded ? "false" : "true");
    content.style.maxHeight = isExpanded ? "0" : content.scrollHeight + "px"; // Expand or collapse the section

    // Change color and icon based on expansion state
    if (isExpanded) {
        button.classList.remove("text-primary");
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        button.classList.add("text-primary");
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}


  // Scroll to Top Functionality
document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide Button Based on Scroll Position
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});




