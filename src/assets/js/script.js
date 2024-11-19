


function setActive(id) {
    // Remove active classes from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // Add active class to the clicked link
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

// SERVICES----------START

function toggleFAQ(button) {
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


