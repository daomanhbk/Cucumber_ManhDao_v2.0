package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.HomePage;
import com.BankGuruPage.LogInPage;
import com.BankGuruPage.RegisterPage;

import common.CommonTestCase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LogInSteps extends CommonTestCase {

	WebDriver driver;
	LogInPage logInPage;
	RegisterPage registerPage;
	HomePage homePage;

	public LogInSteps() {
		driver = CommonTestCase.openBrowser();
		logInPage = PageFactory.initElements(driver, LogInPage.class);
	}

	@Given("^I navigate to Guru bank and click Here link$")
	public void i_navigate_to_Guru_bank_and_click_Here_link() throws Throwable {
		registerPage = logInPage.clickHereLink();

	}

	@When("^I log in system$")
	public void i_log_in_system() throws Throwable {
		logInPage.inputUserID(RegisterSteps.username);
		logInPage.inputPassword(RegisterSteps.password);
		homePage = logInPage.clickLogin();
	}


}
