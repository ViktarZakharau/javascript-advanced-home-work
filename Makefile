first-setup:
	npm install eslint --save-dev
	npm install eslint-config-airbnb-base --save-dev
	npm install eslint-plugin-import --save-dev
	npm init @eslint/config

lint:
	npx eslint .
