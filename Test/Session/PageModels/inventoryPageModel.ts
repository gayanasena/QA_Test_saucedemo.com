import { t,Selector } from "testcafe";

class inventoryPage {

    fleeceJacketTitle : Selector
    fleeceJacketPrice : Selector
    cartBackpackButton : Selector
    cartJacketButton : Selector
    shoppingCartButton : Selector

    constructor(){
        this.fleeceJacketTitle = Selector('#item_5_title_link').withText('Sauce Labs Fleece Jacket');
        this.fleeceJacketPrice = Selector('.inventory_item_price').withText('$49.99');
        this.cartBackpackButton = Selector('#add-to-cart-sauce-labs-backpack');
        this.cartJacketButton = Selector('#add-to-cart-sauce-labs-fleece-jacket');
        this.shoppingCartButton = Selector('.shopping_cart_link');
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

}

export default new inventoryPage()