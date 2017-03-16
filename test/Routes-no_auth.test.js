import fs from 'fs';


import webdriver, {By, until} from 'selenium-webdriver';

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//Para configurar el timeout no pueden ser funciones arrows
describe('Principal page router test', function() {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(100000);

    before(() => driver.navigate().to('http://127.0.0.1:3000/'));

    it('Home page', function() {
        driver.findElement(By.tagName('span'))
        .then(element => element.getAttribute('value'))
        .then(value => value==="React Application");
    });


    it('Change language', function() {
        driver.findElement(By.linkText('Spanish')).click();
        return driver.wait(until.elementLocated(By.linkText('Español')));
    });

    it('Login page', function() {
        driver.findElement(By.linkText('Iniciar sesión')).click();
        driver.wait(until.elementLocated(By.tagName('form')));
        driver.findElement(By.className('card-heading'))
        .then(element => element.getAttribute('value'))
        .then(value => value==="Login");
    });

    it('Sign up page', function() {
        driver.findElement(By.linkText('Registrarse')).click();
        driver.wait(until.elementLocated(By.tagName('form')));
        driver.findElement(By.className('card-heading'))
        .then(element => element.getAttribute('value'))
        .then(value => value==="Sign up");
    });

    after(() => driver.quit());
});