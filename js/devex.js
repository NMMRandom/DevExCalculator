function rotaterbx() {
    element = document.getElementById('rbxsign');
    const spin = [
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' }
    ];
    const timing = {
        duration: 1000,
        iterations: 1,
        easing: 'ease'
    }
    element.animate(spin, timing)
}

function updateValue() {
    var input = document.getElementById('value');
    var output = document.getElementById('calculated-amount');
    var feeOutput = document.getElementById('calculated-amount-fee');
    var clpOutput = document.getElementById('calculated-amount-clp');

    var regex = /^[0-9]+$/;
    var robux = input.value.match(regex) ? parseInt(input.value) : 0;

    var usdValue = (0.0038) * robux;
    var usdAfterFee = usdValue * (1 - 0.056); // 5.6% PayPal fee
    var clp = Math.floor(usdAfterFee * 900);

    output.innerHTML = "<span class='dollar-sign'>$</span>" + format(usdValue.toFixed(2));
    feeOutput.innerHTML = "<span class='dollar-sign'>$</span>" + format(usdAfterFee.toFixed(2));
    clpOutput.innerHTML = "<span class='dollar-sign'>$</span>" + format(clp);
}

// Run when page is fully loaded
window.addEventListener('DOMContentLoaded', updateValue);




function format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

