function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    // Используем цикл вместо рекурсии для больших чисел
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function compute({ array }) {
    const arr = [];
    for (let i = 0; i < 1000000; i++) { 
        arr.push(i * i);
    }
    
    return array.map(el => {
        try {
            return factorial(el);
        } catch (error) {
            console.error(`Error calculating factorial for ${el}:`, error.message);
            return null;
        }
    });
}

module.exports = { factorial, compute };