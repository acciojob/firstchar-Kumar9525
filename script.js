function firstChar(text) {
  // your code here
	let trimText=text.trim();
	return trimText.charAt(0);
}
// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
