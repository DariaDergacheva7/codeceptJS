const { I, authPage } = inject();

module.exports = {
	buttons:{
		register : 'body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input',
	 },
	fields:{
		name : 'body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]',
		passwords : 'body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=password]',
		email : 'body > div.content > div.row > div:nth-child(2) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]'
		
	 },
	async auth(name, email, passwords)
	{
		await I.click(this.fields.name);
        await I.fillField(this.fields.name, name);
        await I.click(this.fields.email);
        await I.fillField(this.fields.email, email);
        await I.click(this.fields.passwords);
        await I.fillField(this.fields.passwords, passwords);
        await I.click(this.buttons.register);
    }
}

