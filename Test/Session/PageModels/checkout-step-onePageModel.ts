import { t,Selector } from "testcafe";

class checkoutOnePage {
    firstnameField : Selector
    lastnameField : Selector
    zipCodeField : Selector
    continueButton : Selector 

    constructor(){
        this.firstnameField = Selector('#first-name');
        this.lastnameField = Selector('#last-name');
        this.zipCodeField = Selector('#postal-code');
        this.continueButton = Selector('#continue');
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
}

export default new checkoutOnePage()