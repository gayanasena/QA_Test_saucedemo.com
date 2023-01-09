import { Selector } from 'testcafe';
import { faker } from '@faker-js/faker';

fixture `Part1 access demo site`
    .page `https://www.saucedemo.com`;

test('Automate Site Testing', async t => {
    console.log("---- Site Testing ----");

    await t
    .expect(Selector('H4').withText('Accepted usernames are:').exists).ok()
    .typeText(Selector('#user-name'),'performance_glitch_user')
    .typeText(Selector('#password'),'secret_sauce')
    .click(Selector('#login-button'))
    .expect(Selector('#item_5_title_link').withText('Sauce Labs Fleece Jacket').exists).ok()
    .expect(Selector('.inventory_item_price').withText('$49.99').exists).ok()
    .click(Selector('#add-to-cart-sauce-labs-backpack'))
    .click(Selector('#add-to-cart-sauce-labs-fleece-jacket'))
    .click(Selector('.shopping_cart_link'))
    .wait(2000)
    .expect(Selector('.inventory_item_name').withText('Sauce Labs Backpack').exists).ok()
    .expect(Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket').exists).ok()
    .click(Selector('#checkout'))
    .wait(2000)
    .typeText(Selector('#first-name'),faker.name.firstName())
    .typeText(Selector('#last-name'),faker.name.lastName())
    .typeText(Selector('#postal-code'),faker.address.zipCode())
    .wait(2000)
    .click(Selector('#continue'))
    .click(Selector('#finish'))
    .wait(2000)
    .expect(Selector('.complete-header').withText('THANK YOU FOR YOUR ORDER').exists).ok()
    .wait(5000)

});

