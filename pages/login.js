const { I } = inject();

module.exports = {
	buttons:{
		login : 'body > div.content > div.row > div:nth-child(1) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input',

	 },
	fields:{
		passwords : 'body > div.content > div.row > div:nth-child(1) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]',
		email : 'body > div.content > div.row > div:nth-child(1) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]'
		
	 },
	async login(email, passwords)
	{
        await I.click(this.fields.email);
        await I.fillField(this.fields.email, email);
        await I.click(this.fields.passwords);
        await I.fillField(this.fields.passwords, passwords);
        await I.click(this.buttons.login);

    }
}

