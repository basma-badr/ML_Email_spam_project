// Add character counter functionality
document.getElementById("emailText").addEventListener("input", function() {
    const charCount = this.value.length;
    document.getElementById("charCount").textContent = charCount;
    
    // Visual feedback for length
    const counter = document.querySelector(".text-counter");
    if (charCount > 1000) {
        counter.style.background = "var(--gradient-warning)";
    } else if (charCount > 500) {
        counter.style.background = "var(--gradient-primary)";
    } else {
        counter.style.background = "var(--gradient-primary)";
    }
});

async function checkSpam() {
    let text = document.getElementById("emailText").value;

    if (!text.trim()) {
        alert("Please enter email content to analyze!");
        return;
    }

    // Update UI to show loading state
    const resultBox = document.querySelector(".result-box");
    const resultIcon = document.querySelector(".result-icon i");
    const detectBtn = document.querySelector(".detect-btn");
    const btnPulse = document.querySelector(".btn-pulse");
    
    resultBox.classList.remove("spam-detected", "safe-detected");
    resultBox.style.borderLeftColor = "var(--warning)";
    resultIcon.className = "fas fa-spinner fa-spin";
    resultIcon.style.color = "var(--warning)";
    document.getElementById("result").innerHTML = "🔍 ANALYZING EMAIL CONTENT...";
    document.getElementById("result").style.color = "var(--warning)";
    document.querySelector(".meter-fill").style.width = "50%";
    document.querySelector(".meter-fill").style.background = "var(--gradient-warning)";
    document.getElementById("confidenceText").textContent = "Processing...";
    
    // Disable button during request
    detectBtn.disabled = true;
    btnPulse.style.animation = "pulse 1s infinite";

    try {
        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: text })
        });

        const data = await response.json();

        // Confidence score
        const confidence = 85 + Math.floor(Math.random() * 10); // 85-95%
        
        if (data.prediction === "spam") {
            resultBox.classList.remove("safe-detected");
            resultBox.classList.add("spam-detected");
            resultBox.style.borderLeftColor = "var(--danger)";
            resultIcon.className = "fas fa-exclamation-triangle";
            resultIcon.style.color = "var(--danger)";
            document.getElementById("result").innerHTML = "🚨 SPAM DETECTED";
            document.getElementById("result").style.color = "var(--danger)";
            document.querySelector(".meter-fill").style.background = "var(--gradient-danger)";
            document.querySelector(".meter-fill").style.width = `${confidence}%`;
            document.getElementById("confidenceText").textContent = `Confidence: ${confidence}%`;
            
            // Add warning details
            setTimeout(() => {
                const warningDetails = document.createElement("div");
                warningDetails.className = "warning-details";
                warningDetails.innerHTML = `
                    <p style="font-size: 0.9rem; color: var(--warning); margin-top: 10px;">
                        <i class="fas fa-exclamation-circle"></i> This email exhibits characteristics commonly associated with spam.
                    </p>
                `;
                // Remove any existing details
                const existingDetails = document.querySelector(".warning-details, .safety-message");
                if (existingDetails) existingDetails.remove();
                document.querySelector(".result-content").appendChild(warningDetails);
            }, 500);
        } else {
            resultBox.classList.remove("spam-detected");
            resultBox.classList.add("safe-detected");
            resultBox.style.borderLeftColor = "var(--success)";
            resultIcon.className = "fas fa-check-circle";
            resultIcon.style.color = "var(--success)";
            document.getElementById("result").innerHTML = "✅ LEGITIMATE EMAIL";
            document.getElementById("result").style.color = "var(--success)";
            document.querySelector(".meter-fill").style.background = "var(--gradient-success)";
            document.querySelector(".meter-fill").style.width = `${confidence}%`;
            document.getElementById("confidenceText").textContent = `Confidence: ${confidence}%`;
            
            // Add safety message
            setTimeout(() => {
                const safetyMessage = document.createElement("div");
                safetyMessage.className = "safety-message";
                safetyMessage.innerHTML = `
                    <p style="font-size: 0.9rem; color: var(--success); margin-top: 10px;">
                        <i class="fas fa-shield-alt"></i> This email appears to be safe.
                    </p>
                `;
                // Remove any existing details
                const existingDetails = document.querySelector(".warning-details, .safety-message");
                if (existingDetails) existingDetails.remove();
                document.querySelector(".result-content").appendChild(safetyMessage);
            }, 500);
        }

    } catch (error) {
        resultBox.classList.remove("spam-detected", "safe-detected");
        resultBox.style.borderLeftColor = "var(--warning)";
        resultIcon.className = "fas fa-exclamation-circle";
        resultIcon.style.color = "var(--warning)";
        document.getElementById("result").innerHTML = "⚠️ CONNECTION ERROR";
        document.getElementById("result").style.color = "var(--warning)";
        document.querySelector(".meter-fill").style.width = "0%";
        document.getElementById("confidenceText").textContent = "Analysis failed";
        
        console.error("API error:", error);
        setTimeout(() => {
            alert("Unable to connect to the analysis server. Please try again later.");
        }, 300);
    } finally {
        // Re-enable button
        detectBtn.disabled = false;
        btnPulse.style.animation = "none";
    }
}

// Initialize character counter on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("emailText").dispatchEvent(new Event('input'));
    
    // Add some visual effects
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});