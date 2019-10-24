package stepDefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.EditCustomerPage;
import com.BankGuruPage.HomePage;
import com.BankGuruPage.NewCustomerPage;

import common.CommonTestCase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EditCustomerSteps extends CommonTestCase {
	WebDriver driver;
	NewCustomerPage newCustomerPage;
	EditCustomerPage editCustomerPage;
	HomePage homePage;

	public EditCustomerSteps() {
		driver = CommonTestCase.driver;
		homePage = PageFactory.initElements(driver, HomePage.class);
	}

	@Given("^I open Edit Customer page$")
	public void i_open_Edit_Customer_page() {
		editCustomerPage = homePage.clickEditCustomerButton();

	}

	@When("^I input key tab to customer id$")
	public void i_input_key_tab_to_customer_id() {
		editCustomerPage.inputKeysIntoCustomerID(Keys.TAB);

	}
	
	@Then("^Verify successfully with the message \"([^\"]*)\"$")
	public void verify_successfully_with_a_message(String message){
		verifyTrue(editCustomerPage.verifyDynamicMessage(message));	
	}

	@When("^I input data \"([^\"]*)\" to customer id$")
	public void i_input_data_to_customer_id(String value) {
		editCustomerPage.inputCustomerID(value);

	}

	@When("^I input customer id$")
	public void i_input_customer_id() {
		editCustomerPage.inputCustomerID(CreateCustomerSteps.customerID);

	}

	@When("^I click to submit button$")
	public void i_click_to_submit_button() {
		editCustomerPage.clickSumbit();

	}

	@When("^I update key tab to address$")
	public void i_update_key_tab_to_address() {
		editCustomerPage.clearAddress();
		editCustomerPage.inputKeyIntoAddress(Keys.TAB);

	}

	@When("^I update key tab to city$")
	public void i_update_key_tab_to_city() {
		editCustomerPage.clearCity();
		editCustomerPage.inputKeyCity(Keys.TAB);

	}

	@When("^I update data \"([^\"]*)\" to city$")
	public void i_update_data_to_city(String value) {
		editCustomerPage.clearCity();
		editCustomerPage.inputCity(value);

	}

	@When("^I update key tab to state$")
	public void i_update_key_tab_to_state() {
		editCustomerPage.clearState();
		editCustomerPage.inputKeyState(Keys.TAB);

	}

	@When("^I update data \"([^\"]*)\" to state$")
	public void i_update_data_to_state(String value) {
		editCustomerPage.clearState();
		editCustomerPage.inputState(value);
	}

	@When("^I update data \"([^\"]*)\" to pin$")
	public void i_update_data_to_pin(String value) {
		editCustomerPage.clearPIN();
		editCustomerPage.inputPIN(value);

	}

	@When("^I update key tab to pin$")
	public void i_update_key_tab_to_pin() {
		editCustomerPage.clearPIN();
		editCustomerPage.inputKeyPIN(Keys.TAB);
	}

	@When("^I update key tab to phone$")
	public void i_update_key_tab_to_phone() {
		editCustomerPage.clearMobileNumber();
		editCustomerPage.inputKeyTelephone(Keys.TAB);
	}

	@When("^I update data \"([^\"]*)\" to phone$")
	public void i_update_data_to_phone(String value) {
		editCustomerPage.clearMobileNumber();
		editCustomerPage.inputTelephone(value);
	}

	@When("^I update key tab to email$")
	public void i_update_key_tab_to_email() {
		editCustomerPage.clearEmail();
		editCustomerPage.inputKeyEmail(Keys.TAB);
	}

	@When("^I update data \"([^\"]*)\" to email$")
	public void i_update_data_to_email(String value) {
		editCustomerPage.clearEmail();
		editCustomerPage.inputEmail(value);
	}

	@When("^I update key space to email$")
	public void i_update_key_space_to_email() {
		editCustomerPage.clearEmail();
		editCustomerPage.inputKeyEmail(Keys.SPACE);
	}

	@Then("^Close browser$")
	public void close_browser() {
		CommonTestCase.closeBrowser();
	}
}
