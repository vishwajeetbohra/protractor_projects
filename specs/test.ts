import { browser} from 'protractor'
describe('Protractor Typescript Demo', function() {
	it('title verifications', function() {
	  browser.get('https://angularjs.org/');
	  browser.getTitle().then(function(title){
		console.log("The title is  : "+title)
		browser.sleep(5000);
	  })
	});
});