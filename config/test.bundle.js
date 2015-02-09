var testsContext = require.context('../src', true, /spec\.es6\.js$/);
testsContext.keys().forEach(testsContext);
