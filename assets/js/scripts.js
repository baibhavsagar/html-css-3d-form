
// document.addEventListener("DOMContentLoaded", () => {
//     // Simulate an API request or any async operation
//     setTimeout(() => {
//         hideLoader();
//         showContent();
//     }, 100000); // Replace with your actual data loading logic and time

//     function hideLoader() {
//         const loader = document.getElementById("loader");
//         loader.style.display = "none";
//     }

//     function showContent() {
//         const content = document.getElementById("content");
//         content.style.display = "block";
//     }
// });




document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 1000); // Replace with your actual data loading logic and time

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
        
       
    }
});
