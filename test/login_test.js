const assert = require('assert');
Feature('login user');

Scenario('Авторизоваться используя email и пароль через UI', async ({ I, loginPage, currentPage }) => {
	I.amOnPage();
	await loginPage.login('manager@mail.ru', '1');
	const userPanelText = await currentPage.getUserPanel();
	assert.deepEqual(userPanelText, 'Выход');
	
});
Scenario('Авторизоваться используя email и пароль через API', async ({ I }) => {
	const request = await I.sendPostRequest('tasks/rest/dologin', {"email":"manager@mail.ru", "password":"1"});
	assert.deepEqual(request.status, 200);
	
});