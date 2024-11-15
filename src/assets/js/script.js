function setActive(id) {
    // Remove active classes from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    document.getElementById(id).classList.add('active');
}

// 
    // Listen to the scroll event
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {  // Change the 50 value to control when the effect kicks in
            navbar.classList.add('bg-white','shadow-sm');  // Change background color to green
        } else {
            navbar.classList.remove('bg-white','shadow-sm');  // Reset background color 
        }
     
    });