export function rps(option) {
	const accurate_options = ["rock", "paper", "scissors"];
	if (option == undefined) {
		return {"player": accurate_options[Math.floor(Math.random() * 3)]};
	} else if (!accurate_options.includes(option.toLowerCase())) {
		throw new RangeError("Out of Range");
	}

	option = option.toLowerCase();
	var result;
    const competitor = accurate_options[Math.floor(Math.random() * 3)];
	if (option == accurate_options[Math.floor(Math.random() * 3)]) {
		result = "tie"; } 
	 // scissors versus rock
     if (option == "scissors" && competitor == "rock") {
        final = "lose"; }
    // paper versus rock 
    if (option == "paper" && competitor == "rock") {
        final = "win"; }
    // scissors verus paper 
    if (option == "scissors" && competitor == "paper") {
        final = "win"; }
    // rock versus paper 
    if (option == "rock" && competitor == "paper") {
        final = "lose"; } 
    // rock versus scissors 
    if (option == "rock" && competitor == "scissors") { 
        final = "win"; } 
    // paper versus scissors 
    if (option == "paper" && competitor == "scissors") {
        final = "lose"; }
	return {"player": option, 
    "opponent": competitor, 
    "result": result};
}

export function rpsls(option) {
	const accurate_options = ["rock", "paper", "scissors", "lizard", "spock"];
	if (option == undefined) {
		return {"player": accurate_options[Math.floor(Math.random() * 5)]};
	} else if (!accurate_options.includes(option.toLowerCase())) {
		throw new RangeError("Out of Range");
	}
	option = option.toLowerCase();
	var result;
    const competitor = accurate_options[Math.floor(Math.random() * 5)];
	if (option == competitor) {
		result = "tie"; } 
    if (option == "spock" && (competitor == "scissors" || competitor == "rock")) {
        final = "win"; }
    if (option == "spock" && (competitor == "lizard" || competitor == "paper")) {
        final = "lose"; }
    if (option == "scissors" && (competitor == "lizard" || competitor == "paper")) {
        final = "win"; }
    if (option == "scissors" && (competitor == "spock" || competitor == "rock")) {
        final = "lose"; }
    if (option == "rock" && (competitor == "spock" || competitor == "paper")) {
        final = "lose"; }
    if (option == "rock" && (competitor == "lizard" || competitor == "scissors")) {
        final = "win"; } 
    if (option == "lizard" && (competitor == "scissors" || competitor == "rock")) {
        final = "lose"; }
    if (option == "lizard" && (competitor == "spock" || competitor == "paper")) {
        final = "win"; }
    if (option == "paper" && (competitor == "spock" || competitor == "rock")) {
        final = "win"; }
    if (option == "paper" && (competitor == "lizard" || competitor == "scissors")) {
        final = "lose"; }
    
	return {
        "player": option, 
        "opponent": competitor, 
        "result": result
    };
}


