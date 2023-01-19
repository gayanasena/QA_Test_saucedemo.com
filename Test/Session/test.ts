import { Selector } from 'testcafe';
import { faker } from '@faker-js/faker';
import cartPage  from './PageModels/cartPageModel'
import checkoutComplete  from './PageModels/checkout-completePageModel'
import checkoutOnePage from './PageModels/checkout-step-onePageModel'
import checkoutTwoPage from './PageModels/checkout-step-twoPageModel'
import inventoryPage from './PageModels/inventoryPageModel'
import loginPage from './PageModels/loginPageModel'


const { userVariables} = require('testcafe')

fixture `Part1 access demo site`
    .page(userVariables.url)

test('Automate Site Testing', async t => {
    console.log("---- Site Testing ----");

    // check and veridy it is login page
    await loginPage.checkLoginPageHeader();

    // type username and password
    await loginPage.typeUsername(userVariables.username);
    await loginPage.typePassword(userVariables.password);

    // click on ligin button
    await loginPage.clickLoginButton();

    // check fleece jacket availability and price tag
    await inventoryPage.checkFleeceJacketLabel();
    await inventoryPage.checkFleeceJacketPrice();

    // add 2 type of items to cart
    await inventoryPage.clickCartBackpack();
    await inventoryPage.clickCartJacket();

    // click on shopping cart
    await inventoryPage.clickOnShoppingCart();

    // check if bought 2 items on cart
    await cartPage.checkItem01();
    await cartPage.checkItem02();

    // checkout from cart
    await cartPage.clickOnCheckout();

    // fill user information in form
    await checkoutOnePage.typeFirstname(faker.name.firstName());
    await checkoutOnePage.typeLastname(faker.name.lastName());
    await checkoutOnePage.TypeZipCode(faker.address.zipCode());

    // click on continue 
    await checkoutOnePage.clickContinueButton();

    // click on finish
    await checkoutTwoPage.clickFinishButton();

    // verify process came into the correct final page
    await checkoutComplete.thankyouHeader();

});

