package stepDefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuruPage.HomePage;
import com.BankGuruPage.NewCustomerPage;

import common.CommonTestCase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateCustomerSteps extends CommonTestCase {
	WebDriver driver;
	NewCustomerPage newCustomerPage;
	HomePage homePage;
	
	public static String customerID;
	 // Background: User to navigate to Create customer page 
	 // 	Given I open New Customer page 
	public CreateCustomerSteps() {
		driver = CommonTestCase.driver;
		homePage = PageFactory.initElements(driver, HomePage.class);
	}

	@Given("^I open New Customer page$")
	public void i_open_New_Customer_page(){
		newCustomerPage = homePage.clickNewCustomerButton();
	}

	@When("^I input key tab to customer name$")
	public void i_input_key_tab_to_customer_name(){
		newCustomerPage.inputTabCustomerName();
		
		
	}

	@Then("^Verify successfully with a message \"([^\"]*)\"$")
	public void verify_successfully_with_a_message(String message){
		verifyTrue(newCustomerPage.verifyDynamicMessage(message));	
	}

	@When("^I input data \"([^\"]*)\" to customer name$")
	public void i_input_data_to_customer_name(String value){
		newCustomerPage.inputCustomerName(value);
		
	}

	@When("^I input key space to customer name$")
	public void i_input_key_space_to_customer_name(){
		newCustomerPage.inputSpaceCustomerName();
		
	}

	@When("^I input key tab to address$")
	public void i_input_key_tab_to_address(){
		newCustomerPage.inputKeyIntoAddress(Keys.TAB);
		
	}

	@When("^I input key space to address$")
	public void i_input_key_space_to_address(){
		newCustomerPage.inputKeyIntoAddress(Keys.SPACE);
		
	}

	@When("^I input key tab to city$")
	public void i_input_key_tab_to_city(){
		newCustomerPage.inputKeyCity(Keys.TAB);
		
	}

	@When("^I input data \"([^\"]*)\" to city$")
	public void i_input_data_to_city(String value){
		newCustomerPage.inputCity(value);
		
	}

	@When("^I input key space to city$")
	public void i_input_key_space_to_city(){
		newCustomerPage.inputKeyCity(Keys.SPACE);
		
	}

	@When("^I input key tab to state$")
	public void i_input_key_tab_to_state(){
		newCustomerPage.inputKeyState(Keys.TAB);
		
	}

	@When("^I input data \"([^\"]*)\" to state$")
	public void i_input_data_to_state(String value){
		newCustomerPage.inputState(value);
		
	}

	@When("^I input key space to state$")
	public void i_input_key_space_to_state(){
		newCustomerPage.inputKeyState(Keys.SPACE);
		
	}

	@When("^I input data \"([^\"]*)\" to pin$")
	public void i_input_data_to_pin(String value){
		newCustomerPage.inputPIN(value);
		
	}

	@When("^I input key tab to pin$")
	public void i_input_key_tab_to_pin(){
		newCustomerPage.inputKeyPIN(Keys.TAB);
		
	}

	@When("^I input key space to pin$")
	public void i_input_key_space_to_pin(){
		newCustomerPage.inputKeyPIN(Keys.SPACE);
		
	}

	@When("^I input key tab to phone$")
	public void i_input_key_tab_to_phone(){
		newCustomerPage.inputKeyTelephone(Keys.TAB);
		
	}

	@When("^I input key space to phone$")
	public void i_input_key_space_to_phone(){
		newCustomerPage.inputKeyTelephone(Keys.SPACE);
		
	}

	@When("^I input data \"([^\"]*)\" to phone$")
	public void i_input_data_to_phone(String value){
		newCustomerPage.inputTelephone(value);
		
	}

	@When("^I input key tab to email$")
	public void i_input_key_tab_to_email(){
		newCustomerPage.inputKeyEmail(Keys.TAB);
		
	}

	@When("^I input data \"([^\"]*)\" to email$")
	public void i_input_data_to_email(String value){
		newCustomerPage.inputEmail(value);
		
	}

	@When("^I input key space to email$")
	public void i_input_key_space_to_email(){
		newCustomerPage.inputKeyEmail(Keys.SPACE);
		
	}

	@When("^I input with data \"([^\"]*)\" to customer name$")
	public void i_input_with_data_to_customer_name(String value){
		newCustomerPage.inputCustomerName(value);
		
	}

	@When("^I input with data \"([^\"]*)\" to date of birth$")
	public void i_input_with_data_to_date_of_birth(String value){
		newCustomerPage.inputDateOfBirth(value);
		
	}

	@When("^I input with data \"([^\"]*)\" to address$")
	public void i_input_with_data_to_address(String value){
		newCustomerPage.inputAddress(value);
		
	}

	@When("^I input with data \"([^\"]*)\" to city$")
	public void i_input_with_data_to_city(String value){
		newCustomerPage.inputCity(value);
		
	}

	@When("^I input with data \"([^\"]*)\" to state$")
	public void i_input_with_data_to_state(String value){
		newCustomerPage.inputState(value);
		
	}

	@When("^I input with data \"([^\"]*)\" to pin$")
	public void i_input_with_data_to_pin(String value){
		newCustomerPage.inputPIN(value);
		
	}

	@When("^I input with data \"([^\"]*)\" to phone$")
	public void i_input_with_data_to_phone(String value){
		newCustomerPage.inputTelephone(value);
		
	}

	@When("^I input with data \"([^\"]*)\" to email$")
	public void i_input_with_data_to_email(String value){
		newCustomerPage.inputEmail(value+randomemail()+"@gmail.com");
		
	}

	@When("^I input with data \"([^\"]*)\" to password$")
	public void i_input_with_data_to_password(String password){
		newCustomerPage.inputPassword(password);
		
	}

	@When("^I click submit button$")
	public void i_click_submit_button(){
		newCustomerPage.clickSubmit();
		
	}

	@Then("^I get text UserID$")
	public void i_get_text_UserID(){
		customerID = newCustomerPage.getCustomerID();
		
	}

}
