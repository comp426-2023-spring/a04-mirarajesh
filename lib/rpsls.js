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
	if (option == accurate_options[Math.floor(Math.random() * 3)]){
		result = "tie";
	} else {
		if ((option == "paper" && competitor == "rock") ||
            (option == "scissors" && competitor == "paper") || 
			(option == "rock" && competitor == "scissors")) {
			result = "win";
		} 
        else {
			result = "lose";
		}
	}
	return {
        "player": option, 
        "opponent": competitor, 
        "result": result
    };
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
		if ((option == "spock" && competitor == "scissors" ||competitor == "rock") ||
			(option == "scissors" && competitor == "lizard" || competitor == "paper") ||
			(option == "paper" && competitot == "spock" || competitor == "rock") ||
			(option == "rock" && competitor == "lizard" || competitor == "scissors") ||
			(option == "lizard" && competitor == "spock" || competitor == "paper")) 
            {
			result = "win";
		} 
        else {
			result = "lose";
		}
	}
	return {
        "player": option, 
        "opponent": competitor, 
        "result": result
    };
}


