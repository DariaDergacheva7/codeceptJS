const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
	  url: 'http://users.bugred.ru/user/login/index.html',
      show: false,
      browser: 'chromium'
    },
	 REST: {
	 endpoint: 'http://users.bugred.ru/'
    },

  },
  include: {
    I: './steps_file.js',
	authPage: './pages/auth.js',
	loginPage: './pages/login.js',
	currentPage: './pages/current.js',
	userPage: './pages/user.js'
  },
  bootstrap: null,
  mocha: {
	  reporterOptions: {
        reportDir : './output'
    }
  },
  name: 'codeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: false
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}