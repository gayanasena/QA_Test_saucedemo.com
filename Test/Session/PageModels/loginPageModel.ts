import { t,Selector } from "testcafe";

class loginPage {
    loginPageHeader : Selector
    usernameField : Selector
    PasswordField : Selector
    loginButton : Selector

    constructor(){
        this.loginPageHeader = Selector('H4').withText('Accepted usernames are:');
        this.usernameField = Selector('#user-name');
        this.PasswordField = Selector('#password');
        this.loginButton = Selector('#login-button');
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

}

export default new loginPage()