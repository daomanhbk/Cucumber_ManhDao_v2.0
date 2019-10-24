package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.LogInPage;
import com.BankGuruPage.RegisterPage;

import common.CommonTestCase;
import cucumber.api.java.en.When;

public class RegisterSteps extends CommonTestCase{
	WebDriver driver;
	RegisterPage registerPage;
	LogInPage logInPage;
	
	public static String username, password;
	
	public RegisterSteps() {
		driver = CommonTestCase.driver;
		registerPage = PageFactory.initElements(driver, RegisterPage.class);
	}
	
	@When("^I input email \"([^\"]*)\"$")
	public void i_input_email(String email) throws Throwable {
		registerPage.inputEmail(email + randomemail()+"@gmail.com");
	}

	@When("^I click to submit account$")
	public void i_click_to_submit_account() throws Throwable {
		registerPage.clickSubmit();
	}

	@When("^I get email and password$")
	public void i_get_email_and_password() throws Throwable {
		username = registerPage.getUserName();
		password = registerPage.getPassword();
	}

	@When("^I navigate to Log In page \"([^\"]*)\"$")
	public void i_navigate_to_Log_In_page(String url) throws Throwable {
		logInPage = registerPage.logInBankURL(url);
	}
}
