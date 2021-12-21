const assert = require('assert');
Feature('change user');

Scenario('Изменить юзера через API', async ({ I }) => {
	await I.sendPostRequest('tasks/rest/doregister', {"email":"test123@kingsready.com", "name":"demo-test", "password":"qaz"});
	const request = await I.sendPostRequest('tasks/rest/useronefield', {"email":"test123@kingsready.com", "field":"cat" ,"value":"Kisa"});
	assert.deepEqual(request.status, 200);
	assert.deepEqual(request.data.message, 'Поле cat успешно изменено на Kisa у пользователя с email test123@kingsready.com');
	await I.sendPostRequest('tasks/rest/deleteuser', {"email":"test123@kingsready.com"}); //чистим созданого пользователя
	
});

Scenario('Изменение одного поля пользователя через UI', async ({ I, loginPage, currentPage, userPage }) => {
	I.amOnPage();
	await loginPage.login('manager@mail.ru', '1');
	await userPage.create('demo_test123', 'test123@kingsready.com', 'qaz');
	await userPage.search('test123@kingsready.com');
	await userPage.change('Мурка');
	const catName = await currentPage.getProfile();
	assert.deepEqual(catName, 'Мурка');
	await userPage.deleteUser('test123@kingsready.com'); //чистим созданого пользователя
	
});