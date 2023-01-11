import { t,Selector } from "testcafe";

class Page {

    loginPageHeader : Selector
    usernameField : Selector
    PasswordField : Selector
    loginButton : Selector
    fleeceJacketTitle : Selector
    fleeceJacketPrice : Selector
    cartBackpackButton : Selector
    cartJacketButton : Selector
    shoppingCartButton : Selector
    item01Title : Selector 
    item02Title : Selector 
    checkoutButton : Selector 
    firstnameField : Selector
    lastnameField : Selector
    zipCodeField : Selector
    continueButton : Selector 
    finishButton : Selector 
    thankyouHeader : Selector

    constructor(){
        this.loginPageHeader = Selector('H4').withText('Accepted usernames are:');
        this.usernameField = Selector('#user-name');
        this.PasswordField = Selector('#password');
        this.loginButton = Selector('#login-button');
        this.fleeceJacketTitle = Selector('#item_5_title_link').withText('Sauce Labs Fleece Jacket');
        this.fleeceJacketPrice = Selector('.inventory_item_price').withText('$49.99');
        this.cartBackpackButton = Selector('#add-to-cart-sauce-labs-backpack');
        this.cartJacketButton = Selector('#add-to-cart-sauce-labs-fleece-jacket');
        this.shoppingCartButton = Selector('.shopping_cart_link');
        this.item01Title = Selector('.inventory_item_name').withText('Sauce Labs Backpack');
        this.item02Title = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket');
        this.checkoutButton = Selector('#checkout');
        this.firstnameField = Selector('#first-name');
        this.lastnameField = Selector('#last-name');
        this.zipCodeField = Selector('#postal-code');
        this.continueButton = Selector('#continue');
        this.finishButton = Selector('#finish');
        this.thankyouHeader = Selector('.complete-header').withText('THANK YOU FOR YOUR ORDER');
    }

    async checkLoginPageHeader(){
        await t.expect(this.loginPageHeader.exists).ok();
    }

    async typeUsername(username){
        await t.typeText(this.usernameField,username);
    }

    async typePassword(password){
        await t.typeText(this.PasswordField,password);
    }

    async clickLoginButton(){
        await t.click(this.loginButton);
    }

    async checkFleeceJacketLabel(){
        await t.expect(this.fleeceJacketTitle.exists).ok();
    }
    
    async checkFleeceJacketPrice(){
        await t.expect(this.fleeceJacketPrice.exists).ok();
    }
    
    async clickCartBackpack(){
        await t.click(this.cartBackpackButton);
    }

    async clickCartJacket(){
        await t.click(this.cartJacketButton);
    }

    async clickOnShoppingCart(){
        await t.click(this.shoppingCartButton);
    }
    
    async checkItem01(){
        await t.expect(this.item01Title.exists).ok();
    }
    
    async checkItem02(){
        await t.expect(this.item02Title.exists).ok();
    }

    async clickOnCheckout(){
        await t.click(this.checkoutButton);
    }

    async typeFirstname(firstName){
        await t.typeText(this.firstnameField,firstName);
    }

    async typeLastname(lastName){
        await t.typeText(this.lastnameField,lastName);
    }

    async TypeZipCode(zipCode){
        await t.typeText(this.zipCodeField,zipCode);
    }
    
    async clickContinueButton(){
        await t.click(this.continueButton);
    }
    
    async clickFinishButton(){
        await t.click(this.finishButton);
    }

    async checkThankyouHeader(){
        await t.expect(this.thankyouHeader.exists).ok();
    }

}

export default new Page()