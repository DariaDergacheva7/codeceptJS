const assert = require('assert');
Feature('delete user');


Scenario('Удалить пользователя по email через API', async ({ I }) => {
	await I.sendPostRequest('tasks/rest/doregister', {"email":"test123@kingsready.com", "name":"demo-test", "password":"qaz"});
	const request = await I.sendPostRequest('tasks/rest/deleteuser', {"email":"test123@kingsready.com"});
	assert.deepEqual(request.status, 200);
	
});

Scenario('Удаление пользователя через UI', async ({ I, loginPage, currentPage, userPage }) => {
	I.amOnPage();
	await loginPage.login('manager@mail.ru', '1');
	await userPage.create('demo_test123', 'test123@kingsready.com', 'qaz');
	await userPage.search('test123@kingsready.com');
	await userPage.deleteUser('test123@kingsready.com');
	const only = await currentPage.deleteProfile();
	assert.deepEqual(only, 'Всего:0\u00A0'); // Хитрый символ неразрывного пробела (&nbse) в текстовой строке заменяется "\u00A0"


});