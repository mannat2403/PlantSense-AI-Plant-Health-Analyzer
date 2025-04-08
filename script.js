// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const loginButton = document.querySelector('.btn-secondary');
const signUpButton = document.querySelector('.btn-primary');
const analyzeButton = document.querySelector('.analyze-btn');
const uploadArea = document.querySelector('.upload-area');
const plantImageInput = document.getElementById('plant-image');
const sampleResults = document.querySelector('.sample-results');
const viewAllButton = document.querySelector('.view-all');
const categoryButtons = document.querySelectorAll('.category'); // Selects all plant category buttons
const plantInfoSection = document.getElementById('plant-info');
const plantTitle = document.getElementById('plant-title');
const plantDescription = document.getElementById('plant-description');

// Event Listeners
navToggle.addEventListener('click', toggleNav);
// loginButton.addEventListener('click', openLoginModal);
// signUpButton.addEventListener('click', openSignUpModal);
analyzeButton.addEventListener('click', analyzePlantHealth);
uploadArea.addEventListener('click', () => {
    plantImageInput.click();
});
plantImageInput.addEventListener('change', handleFileUpload);
viewAllButton.addEventListener('click', viewAllPlants);

// Add click event listeners to each category
categoryButtons.forEach(category => {
    category.addEventListener('click', () => {
        const categoryType = category.getAttribute('data-category'); // Get category type
        showInfo(categoryType);
    });
});

// Function to Show Plant Information
document.addEventListener("DOMContentLoaded", function () {
    function showInfo(category) {
        const plantData = {
            indoor: {
                title: "Indoor Plants",
                description: `
                    Indoor plants improve air quality and boost mood. 
                    
                    🌱 **Popular Indoor Plants:** Snake Plant, Peace Lily, Spider Plant, Pothos, ZZ Plant.
                    
                    🌡 **Care Tips:** Place in indirect sunlight, water moderately.
                    
                    🏡 **Best for:** Homes, offices, and apartments.
                `
            },
            vegetable: {
                title: "Vegetable Plants",
                description: `
                    Grow your own vegetables for organic food!
                    
                    🥕 **Popular Vegetables:** Tomatoes, Carrots, Bell Peppers, Lettuce, Spinach.
                    
                    ☀ **Care Tips:** Provide 6+ hours of sunlight, water regularly.
                    
                    🍽 **Best for:** Healthy eating, home gardens.
                `
            },
            fruit: {
                title: "Fruit Plants",
                description: `
                    Fruit plants offer fresh, delicious harvests.
                    
                    🍏 **Popular Fruits:** Apple Tree, Banana Plant, Citrus Trees, Strawberries.
                    
                    🌞 **Care Tips:** Full sunlight, deep watering, seasonal pruning.
                    
                    🌿 **Best for:** Sustainable gardening.
                `
            },
            succulent: {
                title: "Succulents",
                description: `
                    Low-maintenance plants perfect for indoors.
                    
                    🌵 **Popular Succulents:** Aloe Vera, Jade Plant, Cactus, String of Pearls.
                    
                    🏜 **Care Tips:** Water every 2-3 weeks, ensure sunlight.
                    
                    🌍 **Best for:** Beginners, indoor decorations.
                `
            },
            flowering: {
                title: "Flowering Plants",
                description: `
                    Beautiful plants that add color and fragrance.
                    
                    🌺 **Popular Flowers:** Roses, Sunflowers, Orchids, Jasmine, Lavender.
                    
                    🌱 **Care Tips:** Sunlight, watering, occasional fertilization.
                    
                    🏵 **Best for:** Aesthetic gardens.
                `
            }
        };

        document.getElementById("plant-title").innerText = plantData[category].title;
        document.getElementById("plant-description").innerText = plantData[category].description;
        document.getElementById("plant-info").classList.remove("hidden");
    }

    function hideInfo() {
        document.getElementById("plant-info").classList.add("hidden");
    }

    // Expose functions to global scope
    window.showInfo = showInfo;
    window.hideInfo = hideInfo;
});


// Functions
function toggleNav() {
    navLinks.classList.toggle('active');
}


    // Function to open modal
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

// Function to close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn-secondary").addEventListener("click", function () {
        openModal("loginModal");
    });

    document.querySelector(".btn-primary").addEventListener("click", function () {
        openModal("signupModal");
    });

    document.querySelectorAll(".close").forEach(function (btn) {
        btn.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });
});


function analyzePlantHealth() {
    analyzeButton.disabled = true;
    analyzeButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';

    setTimeout(() => {
        displayAnalysisResult({
            plantName: "Tomato Plant",
            healthStatus: "Healthy",
            confidence: "98%",
            analysis: "Leaf structure and coloration normal",
            recommendation: "Continue regular watering schedule"
        });
        analyzeButton.innerHTML = '<i class="fas fa-microscope"></i> Analyze';
        analyzeButton.disabled = false;
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging
    
    const testimonials = document.querySelectorAll(".testimonial");
    const indicators = document.querySelectorAll(".slider-indicators span");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (testimonials.length === 0 || indicators.length === 0) {
        console.error("No testimonials or indicators found! Check your HTML.");
        return;
    }

    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle("active", i === index);
            indicators[i].classList.toggle("active", i === index);
        });
        console.log(`Slide changed to: ${index}`); // Debugging
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            console.log("Previous button clicked!"); // Debugging
            prevSlide();
            resetAutoSlide();
        });
    } else {
        console.error("Previous button not found!");
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            console.log("Next button clicked!"); // Debugging
            nextSlide();
            resetAutoSlide();
        });
    } else {
        console.error("Next button not found!");
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            console.log(`Indicator clicked: ${index}`); // Debugging
            currentIndex = index;
            updateSlider(currentIndex);
            resetAutoSlide();
        });
    });

    updateSlider(currentIndex);
    startAutoSlide();
});

// Add this to your script.js file

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to chat bubble button
    const chatBubble = document.querySelector('.chat-bubble');
    if (chatBubble) {
        chatBubble.addEventListener('click', function() {
            // Scroll to the chatbot section when clicked
            document.getElementById('chatbot').scrollIntoView({ behavior: 'smooth' });
            
            // Focus on the input field
            setTimeout(() => {
                document.getElementById('user-input').focus();
            }, 800);
        });
    }
    
    // Initialize chatbot
    initChatbot();
});

// Initialize the chatbot with a welcome message
function initChatbot() {
    let chatBox = document.getElementById("chat-box");
    
    // Only add welcome message if chatbox exists and is empty
    if (chatBox && chatBox.innerHTML.trim() === "") {
        // Add welcome message
        let botMessage = `<div class="message bot-message">
            Hello! I am your Plant Health Assistant. How can I help you today? You can ask me about:
            <ul>
                <li>Plant diseases like Early Blight or Late Blight</li>
                <li>Healthy plant characteristics</li>
                <li>Plant care recommendations</li>
                <li>Disease symptoms and treatments</li>
            </ul>
        </div>`;
        chatBox.innerHTML = botMessage;
    }
    
    // Set up event listeners for chatbot
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    
    if (sendBtn && userInput) {
        // Send message when button is clicked
        sendBtn.addEventListener("click", function() {
            sendMessage();
        });
        
        // Send message when Enter key is pressed
        userInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    }
}

// Function to send message to chatbot
function sendMessage() {
    let userText = document.getElementById("user-input").value.trim();
    if (userText === "") return;
    
    let chatBox = document.getElementById("chat-box");
    
    // Add user message
    let userMessage = `<div class="message user-message">${userText}</div>`;
    chatBox.innerHTML += userMessage;
    
    // Clear input field
    document.getElementById("user-input").value = "";
    
    // Auto scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Simulating typing effect
    let typingIndicator = `<div class="message bot-message" id="typing">
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>`;
    chatBox.innerHTML += typingIndicator;
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Send user message to Flask backend
    fetch("/get", {
        method: "POST",
        body: new URLSearchParams({ msg: userText }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(response => response.json())
    .then(data => {
        // Remove typing indicator
        document.getElementById("typing").remove();
        
        // Format links in response if any
        let responseText = formatLinks(data.response);
        
        // Add bot message
        let botMessage = `<div class="message bot-message">${responseText}</div>`;
        chatBox.innerHTML += botMessage;
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        // Remove typing indicator
        document.getElementById("typing").remove();
        
        // Show error message
        let errorMessage = `<div class="message bot-message">
            Sorry, I couldn't process your request. Please try again later.
        </div>`;
        chatBox.innerHTML += errorMessage;
        chatBox.scrollTop = chatBox.scrollHeight;
        
        console.error("Error:", error);
    });
}

// Function to format links in text
function formatLinks(text) {
    // Convert URLs to clickable links
    return text.replace(
        /(https?:\/\/[^\s]+)/g, 
        '<a href="$1" target="_blank">$1</a>'
    );
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileData = e.target.result;
            processFileData(fileData);
        };
        reader.readAsDataURL(file);
    }
}

function processFileData(fileData) {
    const img = document.createElement('img');
    img.src = fileData;
    img.alt = "Uploaded Plant Image";
    uploadArea.innerHTML = '';
    uploadArea.appendChild(img);
    analyzeButton.disabled = false;
}

function viewAllPlants() {
    alert('View all plants');
}

function displayAnalysisResult(result) {
    sampleResults.innerHTML = `
        <h3>Sample Analysis</h3>
        <div class="result-card">
            <div class="result-image">
                <img src="/api/placeholder/300/200" alt="Sample leaf">
            </div>
            <div class="result-details">
                <div class="result-header">
                    <h4>${result.plantName}</h4>
                    <span class="health-indicator healthy">${result.healthStatus}</span>
                </div>
                <div class="result-info">
                    <p><strong>Confidence:</strong> ${result.confidence}</p>
                    <p><strong>Analysis:</strong> ${result.analysis}</p>
                    <p><strong>Recommendation:</strong> ${result.recommendation}</p>
                </div>
            </div>
        </div>
    `;
}
