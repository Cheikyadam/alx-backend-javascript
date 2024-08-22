function calculateNumber(type, a, b) {
    if (type === "SUM"){
    return Math.round(a) + Math.round(b);
    }
    if (type === "SUBTRACT"){
        return Math.round(a) - Math.round(b);
    }
    if (type === "DIVIDE"){
        const roundedB = Math.round(b);
        if (roundedB == 0){
            return 'Error';
        }
        return Math.round(a) / roundedB;
    }
}

const Utils = {
  calculateNumber: calculateNumber
}

module.exports = Utils;
