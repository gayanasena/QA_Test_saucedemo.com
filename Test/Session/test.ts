import { Selector } from 'testcafe';
import { faker } from '@faker-js/faker';
import Page from './PageModels/pageModel'

const { userVariables} = require('testcafe')

fixture `Part1 access demo site`
    .page(userVariables.url)

test('Automate Site Testing', async t => {
    console.log("---- Site Testing ----");

    // check and veridy it is login page
    await Page.checkLoginPageHeader();

    // type username and password
    await Page.typeUsername(userVariables.username);
    await Page.typePassword(userVariables.password);

    // click on ligin button
    await Page.clickLoginButton();

    // check fleece jacket availability and price tag
    await Page.checkFleeceJacketLabel();
    await Page.checkFleeceJacketPrice();

    // add 2 type of items to cart
    await Page.clickCartBackpack();
    await Page.clickCartJacket();

    // click on shopping cart
    await Page.clickOnShoppingCart();

    // check if bought 2 items on cart
    await Page.checkItem01();
    await Page.checkItem02();

    // checkout from cart
    await Page.clickOnCheckout();

    // fill user information in form
    await Page.typeFirstname(faker.name.firstName());
    await Page.typeLastname(faker.name.lastName());
    await Page.TypeZipCode(faker.address.zipCode());

    // click on continue 
    await Page.clickContinueButton();

    // click on finish
    await Page.clickFinishButton();

    // verify process came into the correct final page
    await Page.thankyouHeader();

});

