const assert = require('assert');
Feature('search user');


Scenario('Создать и найти пользователя по email через API', async ({ I }) => {
	await I.sendPostRequest('tasks/rest/doregister', {"email":"vajisi8430@kingsready.com", "name":"demo", "password":"qaz"});
	const request = await I.sendPostRequest('tasks/rest/getuser', {"email":"vajisi8430@kingsready.com"});
	assert.deepEqual(request.status, 200);
	assert.deepEqual(request.data.name, 'demo');
	await I.sendPostRequest('tasks/rest/deleteuser', {"email":"vajisi8430@kingsready.com"}); //чистим созданого пользователя
	
});

Scenario('Создать и найти пользователя по email через UI', async ({ I, loginPage, currentPage, userPage }) => {
	I.amOnPage();
	await loginPage.login('manager@mail.ru', '1');
	await userPage.create('demo_test124', 'test124@kingsready.com', 'qaz');
	await userPage.search('test124@kingsready.com');
	const newUser = await currentPage.getNewUser();
	assert.deepEqual(newUser, 'test124@kingsready.com');
	await userPage.deleteUser('test124@kingsready.com'); //чистим созданого пользователя
	
});
