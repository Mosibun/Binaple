"use strict";

// Function to buy a builder using 1 gem
function buyBuilderWithGem() {
    if (gems >= 7) {
        if (buildersLeft < 5) {
            buildersLeft++;
            gems -= 7; // Deduct 1 gem for the purchase

            // Update the displayed counts
            updateBuilderCount();
            updateGemsDisplay();

            // Save the updated builders count and gems to localStorage
            localStorage.setItem('builders', buildersLeft.toString());
            localStorage.setItem('gems', gems.toString());
        } else {
            alert('Maximum builder limit (5) reached.');
        }
    } else {
        alert('Not enough gems to buy a builder.');
    }
}

// Event listener for the "Buy Builder for 1 Gem" button
document.getElementById('buyBuilderGemButton').addEventListener('click', buyBuilderWithGem);
