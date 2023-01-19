import { t,Selector } from "testcafe";

class checkoutTwoPage {

    finishButton : Selector 

    constructor(){
        this.finishButton = Selector('#finish');
    }

    async clickFinishButton(){
        await t.click(this.finishButton);
    }
}

export default new checkoutTwoPage()