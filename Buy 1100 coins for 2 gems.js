"use strict";

function buy1100CoinsWithGems() {
    if (gems >= 3) {
        coins += 1600;
        gems -= 3;

        // Update the displayed counts
        document.getElementById('coins').textContent = `Coins: ${coins}`;
        updateGemsDisplay();

        localStorage.setItem('coins', coins.toString());
        localStorage.setItem('gems', gems.toString());

        alert('You have successfully purchased 1600 coins!');
    } else {
        alert('Not enough gems to buy 1600 coins.');
    }
}

document.getElementById('buy1100CoinsButton').addEventListener('click', buy1100CoinsWithGems);