import { t,Selector } from "testcafe";

class cartPage {

    item01Title : Selector 
    item02Title : Selector 
    checkoutButton : Selector 

    constructor(){
        this.item01Title = Selector('.inventory_item_name').withText('Sauce Labs Backpack');
        this.item02Title = Selector('.inventory_item_name').withText('Sauce Labs Fleece Jacket');
        this.checkoutButton = Selector('#checkout');
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

}

export default new cartPage()