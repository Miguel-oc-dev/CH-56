export function costCalculator(amount) {
    const amt = Number(amount);
    const fee = 3;
    const interest = 0.01;
    const total = amt + fee + (amt * interest);
    return total.toFixed(2);
}
