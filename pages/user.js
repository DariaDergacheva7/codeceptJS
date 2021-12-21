const { I } = inject();

module.exports = {
	buttons:{
		add : 'body > div.content > p:nth-child(2) > a',
		create : 'body > div.content > form > table > tbody > tr:nth-child(21) > td:nth-child(2) > input',
		find : 'body > div.content > form > table > tbody > tr:nth-child(5) > td:nth-child(1) > button',
		deleteUser : 'body > div.content > table > tbody > tr > td:nth-child(6) > a',
		change : 'body > div.content > table > tbody > tr > td:nth-child(5) > a',
		saveChange : 'body > div.content > form > table > tbody > tr:nth-child(20) > td:nth-child(2) > input[type=submit]',
		profile : 'body > div.content > table > tbody > tr > td:nth-child(7) > a',
		users : '#main-menu > ul > li:nth-child(1) > a'
	 },
	fields:{
		newName : 'body > div.content > form > table > tbody > tr:nth-child(1) > td.field_need.field_name',
		newPasswords : 'body > div.content > form > table > tbody > tr:nth-child(3) > td.field_need.field_password > input',
		newEmail : 'body > div.content > form > table > tbody > tr:nth-child(2) > td.field_need.field_email > input',
		search : 'body > div.content > form > table > tbody > tr:nth-child(4) > td > input',
		catName : 'body > div.content > form > table > tbody > tr:nth-child(11) > td.field_need.field_cat > input'
		
	 },
	async create(newName, newEmail, newPasswords)
	{
        await I.click(this.buttons.add);
		await I.click(this.fields.newName);
        await I.fillField(this.fields.newName, newName);
        await I.click(this.fields.newEmail);
        await I.fillField(this.fields.newEmail, newEmail);
		await I.click(this.fields.newPasswords);
        await I.fillField(this.fields.newPasswords, newPasswords);
        await I.click(this.buttons.create);	
	
    },
	async search(email)
	{
		await I.click(this.fields.search);
		await I.fillField(this.fields.search, email);
		await I.click(this.buttons.find);
	},
	async change(catName)
	{
		await I.click(this.buttons.change);
		await I.fillField(this.fields.catName, catName);
		await I.click(this.buttons.saveChange);
		await I.click(this.buttons.profile);
		
	},
	
	async deleteUser(email)
	{
	await I.click(this.buttons.users);
	await I.click(this.fields.search);
	await I.fillField(this.fields.search, email);
	await I.click(this.buttons.find);
	await I.click(this.buttons.deleteUser);
	}
}

