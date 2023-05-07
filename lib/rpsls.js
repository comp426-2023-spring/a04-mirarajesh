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
		result = "tie";
	} else {
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
    }
	return {"player": option, "opponent": competitor, "result": result};   
}

export function rpsls(option) {
	const accurate_options = ["rock", "paper", "scissors", "lizard", "spock"];
	const competitor = accurate_options[Math.floor(Math.random() * 5)];

	if (option == undefined) {
		return {"player": competitor};
	} else if (!accurate_options.includes(option.toLowerCase())) {
		throw new RangeError("Out of Range");
	}
	option = option.toLowerCase();
	var result;
	if (option == competitor) {
		result = "tie";
	} else {
		if ((option == "spock" && competitor == "scissors") ||
			(option == "scissors" && competitor == "paper") ||
			(option == "paper" && competitor == "rock") ||
			(option == "rock" && competitor == "lizard") ||
			(option == "lizard" && competitor == "spock") ||
			(option == "scissors" && competitor == "lizard") ||
			(option == "lizard" && competitor == "paper") ||
			(option == "paper" && competitor == "spock") ||
			(option == "spock" && competitor == "rock") ||
			(option == "rock" && competitor == "scissors")) {
			result = "win";
		} else {
			result = "lose";
		}
	}
	return {"player": option, "opponent": competitor, "result": result};
}


