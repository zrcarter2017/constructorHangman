//create letter constructor
class Letter{
	constructor(lett) {
    this.lett = lett;
    this.placeholder = '_';
    this.exists = false;
    }
}

//allow letter constructor to be exported
module.exports = Letter;