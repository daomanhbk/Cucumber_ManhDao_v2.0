package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.HomePage;

import common.CommonTestCase;
import cucumber.api.java.en.Then;

public class HomeSteps extends CommonTestCase{
	WebDriver driver;
	HomePage homePage;
	
	public HomeSteps() {
		driver = CommonTestCase.driver;
		homePage = PageFactory.initElements(driver, HomePage.class);
	}
	
	@Then("^Verify successfully with message \"([^\"]*)\"$")
	public void verify_successfully_with_message(String message) throws Throwable {
		verifyTrue(homePage.getHomePageWelcomeText().contains(message));
	}
	
//	@When("^Quit Browser$")
//	public void quitBrowser() {
//		CommonTestCase.closeBrowser();
//	}
}
