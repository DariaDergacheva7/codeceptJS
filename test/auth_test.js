const assert = require('assert');
Feature('auth');

Scenario('Зарегистрировать нового пользователя через API', async ({ I }) => {
	const request = await I.sendPostRequest('tasks/rest/doregister', {"email":"vajisi8430@kingsready.com", "name":"demo", "password":"qaz"});
	assert.deepEqual(request.status, 200);
	assert.deepEqual(request.data.name, 'demo');
	await I.sendPostRequest('tasks/rest/deleteuser', {"email":"vajisi8430@kingsready.com"});
	
});

Scenario('Зарегистрировать нового пользователя через UI', async ({ I, authPage, currentPage, userPage }) => {
	I.amOnPage();
	await authPage.auth('demo', 'vajisi74460@kingsready.com', 'qwerty');
	const userPanelText = await currentPage.getUserPanel();
	assert.deepEqual(userPanelText, 'Выход');
	await I.sendPostRequest('tasks/rest/deleteuser', {"email":"vajisi74460@kingsready.com"}); //чистим созданого пользователя(через API быстрее и проще)
	
});
