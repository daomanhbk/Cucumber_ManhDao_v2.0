package com.BankGuruPage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.BankGuru.UI.RegisterPageUI;

import common.CommonFunctions;

public class RegisterPage extends CommonFunctions {

	public RegisterPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	public void inputEmail(String value) {
		waitForElemenVisible(RegisterPageUI.EMAIL_TXT);
		inputElement(RegisterPageUI.EMAIL_TXT, value);		
		
	}
	
	public void clickSubmit() {
		waitForElemenVisible(RegisterPageUI.SUBMIT_BTN);
		clickToElement(RegisterPageUI.SUBMIT_BTN);
	}
	
	public String getUserName() {
		waitForElemenVisible(RegisterPageUI.USER_LBL);
		return getTextElement(RegisterPageUI.USER_LBL);
	}
	
	public String getPassword() {
		waitForElemenVisible(RegisterPageUI.PASSWORD_LBL);
		return getTextElement(RegisterPageUI.PASSWORD_LBL);
	}
	
//	public void logInBankURL(String url) {
//		openUrl(url);
//	}
	
	public LogInPage logInBankURL(String url) {
		openUrl(url);
		return PageFactory.initElements(driver, LogInPage.class);
	}

}