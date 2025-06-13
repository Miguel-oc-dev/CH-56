export function rubricPassFail(score) {
    const numScore = Number(score);
    return numScore >= 60 ? "Pass" : "Fail";
}
