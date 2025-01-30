const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const openMode = document.getElementById("openMode");
const closeMode = document.getElementById("closeMode");
const modeContainer = document.getElementById("modeContainer");

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// Open Mode
openMode.addEventListener("click", () => {
    modeContainer.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Close Modal
closeMode.addEventListener("click", () => {
    modeContainer.classList.add("hidden");
});

// Close modal when clicking outside the modal box
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});




        

        

        // Close modal when clicking outside the modal box
        window.addEventListener("click", (e) => {
            if (e.target === modeContainer) {
                modeContainer.classList.add("hidden");
            }
        });