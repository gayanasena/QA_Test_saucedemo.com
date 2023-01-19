import { t,Selector } from "testcafe";

class checkoutComplete {

    thankyouHeader : Selector

    constructor(){
        this.thankyouHeader = Selector('.complete-header').withText('THANK YOU FOR YOUR ORDER');
    }

    async checkThankyouHeader(){
        await t.expect(this.thankyouHeader.exists).ok();
    }
}

export default new checkoutComplete()