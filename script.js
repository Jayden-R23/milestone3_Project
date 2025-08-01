const facts = [
  "Code is like humor When you have to explain it its bad.",
  "First, solve the problem. Then, write the code.",
  "404: Motivation not found just kidding, keep going.",
  "Done is better than perfect.",
  "Clear is better than clever.",
  "Users don’t care about your backend struggles. They care about how it feels.",
  "You don’t need more time. You need more focus.",
];
document.getElementById("fact-button").addEventListener("click", () => {
  const random = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact-display").textContent = random;
});
