const { I, currentPage } = inject();

module.exports = {
	async getUserPanel()
	{
       const userPanelText = await I.grabTextFrom('#fat-menu > ul > li:nth-child(3) > a');
       return userPanelText
    },
	
	async getNewUser()
	{
       const newUser = await I.grabTextFrom('body > div.content > table > tbody > tr > td:nth-child(1)');
       return newUser
    },
	
	async getProfile()
	{
       const catName = await I.grabTextFrom('body > div.content > div.row > div > div.col-md-8.center > table > tbody > tr:nth-child(10) > td:nth-child(2)');
       return catName
    },
	
	async deleteProfile()
	{
       const only = await I.grabTextFrom('body > div.content > p:nth-child(5)');
       return only
    },
	
 
}
