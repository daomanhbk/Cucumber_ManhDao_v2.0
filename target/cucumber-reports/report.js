$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature_01_LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Payment feature",
  "description": "  As an automation tester\r\nI want a payment function \r\nSo that I want to make sure payment correctly",
  "id": "payment-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LogInGuruBank"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Create account, login and verify login successfully",
  "description": "",
  "id": "payment-feature;create-account,-login-and-verify-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@CreateAccountAndLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to Guru bank and click Here link",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I input email \"randomEmail\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click to submit account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I get email and password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I navigate to Log In page \"http://demo.guru99.com/v4/\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I log in system",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify successfully with message \"Welcome To Manager\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "When "
});
formatter.match({
  "location": "LogInSteps.i_navigate_to_Guru_bank_and_click_Here_link()"
});
formatter.result({
  "duration": 18953888609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "randomEmail",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.i_input_email(String)"
});
formatter.result({
  "duration": 233772471,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_click_to_submit_account()"
});
formatter.result({
  "duration": 2575718007,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.i_get_email_and_password()"
});
formatter.result({
  "duration": 193847748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/v4/",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.i_navigate_to_Log_In_page(String)"
});
formatter.result({
  "duration": 1512442977,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.i_log_in_system()"
});
formatter.result({
  "duration": 2519722405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome To Manager",
      "offset": 34
    }
  ],
  "location": "HomeSteps.verify_successfully_with_message(String)"
});
formatter.result({
  "duration": 221847665,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Feature_02_CreateCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Create customer",
  "description": "  As an automation tester\nI want to create new customer\nSo that I want to verify all fields is correct message",
  "id": "create-customer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Create customer with empty customer name",
  "description": "",
  "id": "create-customer;create-customer-with-empty-customer-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@TC_01_Create_NameCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I input key tab to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify successfully with a message \"Customer name must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1308847128,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_tab_to_customer_name()"
});
formatter.result({
  "duration": 325672256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer name must not be blank",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 102773087,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC_02_03_Create_NameCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I input data \"\u003cCustomer Name\u003e\" to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Verify successfully with a message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Customer Name",
        "Message"
      ],
      "line": 20,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 21,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 22,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateCustomer"
    },
    {
      "line": 13,
      "name": "@TC_02_03_Create_NameCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I input data \"123456\" to customer name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Verify successfully with a message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1020478593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_customer_name(String)"
});
formatter.result({
  "duration": 199167682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 65661191,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateCustomer"
    },
    {
      "line": 13,
      "name": "@TC_02_03_Create_NameCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I input data \"name!@#\" to customer name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Verify successfully with a message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1256667549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_customer_name(String)"
});
formatter.result({
  "duration": 215023112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 49909430,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create customer with input first character blank space name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-first-character-blank-space-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC_04_Create_NameCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I input key space to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Verify successfully with a message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 517048509,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_space_to_customer_name()"
});
formatter.result({
  "duration": 202018944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 45509474,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create customer with empty address field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_05_Create_AddressCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I input key tab to address",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Verify successfully with a message \"Address Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 976573175,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_tab_to_address()"
});
formatter.result({
  "duration": 148566418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Field must not be blank",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 46946389,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Create customer with input first character blank space address field",
  "description": "",
  "id": "create-customer;create-customer-with-input-first-character-blank-space-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@TC_06_Create_AddressCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I input key space to address",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify successfully with a message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1050394279,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_space_to_address()"
});
formatter.result({
  "duration": 356141903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 76290834,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Create customer with empty address field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-address-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@TC_07_Create_CityCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I input key tab to city",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Verify successfully with a message \"City Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 934388881,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_tab_to_city()"
});
formatter.result({
  "duration": 148332279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City Field must not be blank",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 42488955,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@TC_08_09_Create_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I input data \"\u003cCity\u003e\" to city",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Verify successfully with a message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "City",
        "Message"
      ],
      "line": 55,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 56,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 57,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateCustomer"
    },
    {
      "line": 48,
      "name": "@TC_08_09_Create_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I input data \"123456\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Verify successfully with a message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1120695206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_city(String)"
});
formatter.result({
  "duration": 248622589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 35580127,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CreateCustomer"
    },
    {
      "line": 48,
      "name": "@TC_08_09_Create_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I input data \"name!@#\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Verify successfully with a message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1130817786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_city(String)"
});
formatter.result({
  "duration": 281067245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 58692418,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Create customer with input first character blank space city field",
  "description": "",
  "id": "create-customer;create-customer-with-input-first-character-blank-space-city-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@TC_10_Create_CityCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I input key space to city",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Verify successfully with a message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1003963770,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_space_to_city()"
});
formatter.result({
  "duration": 175047612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 41255148,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Create customer with empty state field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-state-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@TC_11_Create_StateCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I input key tab to state",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Verify successfully with a message \"State must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 505472794,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_tab_to_state()"
});
formatter.result({
  "duration": 173978125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State must not be blank",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 55935305,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@TC_12_13_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I input data \"\u003cState\u003e\" to state",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "Verify successfully with a message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "State",
        "Message"
      ],
      "line": 78,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 79,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 80,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 79,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@TC_12_13_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I input data \"123456\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "Verify successfully with a message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1127776463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_state(String)"
});
formatter.result({
  "duration": 228577010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 32517648,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@TC_12_13_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I input data \"name!@#\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "Verify successfully with a message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 484369717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_state(String)"
});
formatter.result({
  "duration": 227321340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 49290587,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "",
  "description": "Create customer with input first character blank space state field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@TC_14_Create_StateCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I input key space to state",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "Verify successfully with a message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1086760038,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_space_to_state()"
});
formatter.result({
  "duration": 138591231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 37845340,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 91,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "I input data \"\u003cPIN\u003e\" to pin",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Verify successfully with a message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "PIN",
        "Message"
      ],
      "line": 97,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "ABC",
        "Characters are not allowed"
      ],
      "line": 98,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "123",
        "PIN Code must have 6 Digits"
      ],
      "line": 99,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 100,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;4"
    },
    {
      "cells": [
        "12 345",
        "Characters are not allowed"
      ],
      "line": 101,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 98,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "I input data \"ABC\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Verify successfully with a message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1308325961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 130714469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 39235710,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "I input data \"123\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Verify successfully with a message \"PIN Code must have 6 Digits\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 978791136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 170446664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must have 6 Digits",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 59398005,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "I input data \"name!@#\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Verify successfully with a message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1131517731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 178241619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 63355075,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@TC_15_17_18_20_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "I input data \"12 345\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Verify successfully with a message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1419257551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12 345",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_pin(String)"
});
formatter.result({
  "duration": 140894879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 31993658,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Create customer with empty PIN field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-pin-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 103,
      "name": "@TC_16_Create_PinCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "I input key tab to pin",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Verify successfully with a message \"PIN Code must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1031172061,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_tab_to_pin()"
});
formatter.result({
  "duration": 134614062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must not be blank",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 36457087,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "",
  "description": "Create customer with input first character blank space PIN field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@TC_19_Create_PinCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "I input key space to pin",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "Verify successfully with a message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 902864203,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_space_to_pin()"
});
formatter.result({
  "duration": 127360375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 43023875,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Create customer with empty telephone field",
  "description": "",
  "id": "create-customer;create-customer-with-empty-telephone-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@TC_21_Create_TelephoneCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I input key tab to phone",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "Verify successfully with a message \"Mobile no must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1113521563,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_tab_to_phone()"
});
formatter.result({
  "duration": 237230587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile no must not be blank",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 36718728,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "",
  "description": "Create customer with input first character blank space telephone field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 123,
      "name": "@TC_22_Create_TelephoneCannotFirstCharacterBlankSpace"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "I input key space to phone",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "Verify successfully with a message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 973488833,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_space_to_phone()"
});
formatter.result({
  "duration": 298127920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 48065948,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 132,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 131,
      "name": "@TC_23_24_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 133,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 134,
  "name": "I input data \"\u003cPhone\u003e\" to phone",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "Verify successfully with a message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 137,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Phone",
        "Message"
      ],
      "line": 138,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "012 11122",
        "Characters are not allowed"
      ],
      "line": 139,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "@#98",
        "Special characters are not allowed"
      ],
      "line": 140,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 139,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 131,
      "name": "@TC_23_24_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 133,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 134,
  "name": "I input data \"012 11122\" to phone",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "Verify successfully with a message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1031111058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "012 11122",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_phone(String)"
});
formatter.result({
  "duration": 259766348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 39609836,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 131,
      "name": "@TC_23_24_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 133,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 134,
  "name": "I input data \"@#98\" to phone",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "Verify successfully with a message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1058166313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@#98",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_phone(String)"
});
formatter.result({
  "duration": 256754293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 60560936,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "",
  "description": "Create customer with input first character blank space telephone field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@TC_25_Create_EmailCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 146,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "I input key tab to email",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "Verify successfully with a message \"Email-ID must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 668857242,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_tab_to_email()"
});
formatter.result({
  "duration": 350505670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID must not be blank",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 88253371,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 151,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 150,
      "name": "@TC_26_Create_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 152,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "I input data \"\u003cEmail\u003e\" to email",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "Verify successfully with a message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Email",
        "Message"
      ],
      "line": 157,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "Guru99@",
        "Email-ID is not valid"
      ],
      "line": 158,
      "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 158,
  "name": "Create customer with input numeric value name field",
  "description": "",
  "id": "create-customer;create-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 150,
      "name": "@TC_26_Create_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 152,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "I input data \"Guru99@\" to email",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "Verify successfully with a message \"Email-ID is not valid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1170781650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99@",
      "offset": 14
    }
  ],
  "location": "CreateCustomerSteps.i_input_data_to_email(String)"
});
formatter.result({
  "duration": 179113641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID is not valid",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 32758133,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "",
  "description": "Create customer with input first character blank space PIN field",
  "id": "create-customer;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 160,
      "name": "@TC_27_Create_EmailCannotHaveBlankSpace"
    }
  ]
});
formatter.step({
  "line": 164,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "I input key space to email",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "Verify successfully with a message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 620798699,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_input_key_space_to_email()"
});
formatter.result({
  "duration": 296093319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 91339476,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 171,
  "name": "Create new Customer and get NewCustomerID",
  "description": "",
  "id": "create-customer;create-new-customer-and-get-newcustomerid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 170,
      "name": "@TC_28_CreateCustomerSuccessfully"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "I input with data \"\u003cCustomerName\u003e\" to customer name",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "I input with data \"\u003cDateOfBirth\u003e\" to date of birth",
  "keyword": "When "
});
formatter.step({
  "line": 175,
  "name": "I input with data \"\u003cAddress\u003e\" to address",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I input with data \"\u003cCity\u003e\" to city",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "I input with data \"\u003cState\u003e\" to state",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "I input with data \"\u003cPIN\u003e\" to pin",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I input with data \"\u003cPhone\u003e\" to phone",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "I input with data \"\u003cEmail\u003e\" to email",
  "keyword": "When "
});
formatter.step({
  "line": 181,
  "name": "I input with data \"\u003cPassword\u003e\" to password",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "Verify successfully with a message \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "I get text UserID",
  "keyword": "And "
});
formatter.examples({
  "line": 186,
  "name": "",
  "description": "",
  "id": "create-customer;create-new-customer-and-get-newcustomerid;",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "DateOfBirth",
        "Address",
        "City",
        "State",
        "PIN",
        "Phone",
        "Email",
        "Password"
      ],
      "line": 187,
      "id": "create-customer;create-new-customer-and-get-newcustomerid;;1"
    },
    {
      "cells": [
        "Neymar Jr",
        "10/10/1993",
        "Da nang",
        "Da nang",
        "Da nang",
        "466250",
        "4555442476",
        "randomEmail",
        "1234567890"
      ],
      "line": 188,
      "id": "create-customer;create-new-customer-and-get-newcustomerid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 188,
  "name": "Create new Customer and get NewCustomerID",
  "description": "",
  "id": "create-customer;create-new-customer-and-get-newcustomerid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 170,
      "name": "@TC_28_CreateCustomerSuccessfully"
    },
    {
      "line": 1,
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "I open New Customer page",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "I input with data \"Neymar Jr\" to customer name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "I input with data \"10/10/1993\" to date of birth",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 175,
  "name": "I input with data \"Da nang\" to address",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I input with data \"Da nang\" to city",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "I input with data \"Da nang\" to state",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "I input with data \"466250\" to pin",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I input with data \"4555442476\" to phone",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "I input with data \"randomEmail\" to email",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 181,
  "name": "I input with data \"1234567890\" to password",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "Verify successfully with a message \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "I get text UserID",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCustomerSteps.i_open_New_Customer_page()"
});
formatter.result({
  "duration": 1037369307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Neymar Jr",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_customer_name(String)"
});
formatter.result({
  "duration": 335933062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/10/1993",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_date_of_birth(String)"
});
formatter.result({
  "duration": 346984083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da nang",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_address(String)"
});
formatter.result({
  "duration": 248422655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da nang",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_city(String)"
});
formatter.result({
  "duration": 213573151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da nang",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_state(String)"
});
formatter.result({
  "duration": 267934725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "466250",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_pin(String)"
});
formatter.result({
  "duration": 434982160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4555442476",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_phone(String)"
});
formatter.result({
  "duration": 102331257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "randomEmail",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_email(String)"
});
formatter.result({
  "duration": 272813888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 19
    }
  ],
  "location": "CreateCustomerSteps.i_input_with_data_to_password(String)"
});
formatter.result({
  "duration": 198792497,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_click_submit_button()"
});
formatter.result({
  "duration": 2190127989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Registered Successfully!!!",
      "offset": 36
    }
  ],
  "location": "CreateCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 84555475,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomerSteps.i_get_text_UserID()"
});
formatter.result({
  "duration": 157501383,
  "status": "passed"
});
formatter.uri("Feature_03_EditCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Edit customer",
  "description": "  As an automation tester\nI want to edit customer\nSo that I want to verify all fields is correct message",
  "id": "edit-customer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1221834971,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Edit customer with empty customer id",
  "description": "",
  "id": "edit-customer;edit-customer-with-empty-customer-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC_01_Edit_NameCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I input key tab to customer id",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify successfully with the message \"Customer ID is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_key_tab_to_customer_id()"
});
formatter.result({
  "duration": 373862677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer ID is required",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 86601712,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC_02_03_Edit_CustomerIdCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I input data \"\u003cCustomer ID\u003e\" to customer id",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify successfully with the message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Customer ID",
        "Message"
      ],
      "line": 21,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "1236Acc",
        "Characters are not allowed"
      ],
      "line": 22,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 23,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1202721711,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC_02_03_Edit_CustomerIdCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I input data \"1236Acc\" to customer id",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify successfully with the message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1236Acc",
      "offset": 14
    }
  ],
  "location": "EditCustomerSteps.i_input_data_to_customer_id(String)"
});
formatter.result({
  "duration": 276742043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 64981697,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 698993313,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC_02_03_Edit_CustomerIdCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I input data \"name!@#\" to customer id",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify successfully with the message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 14
    }
  ],
  "location": "EditCustomerSteps.i_input_data_to_customer_id(String)"
});
formatter.result({
  "duration": 187352540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 33201725,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1005651395,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@TC_04_Edit_ValidCustomerId"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 254118832,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1430430930,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1234555281,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_08_Edit_AddressCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I update key tab to address",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify successfully with the message \"Address Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 174673838,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 974699367,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_address()"
});
formatter.result({
  "duration": 497721564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Field must not be blank",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 77160036,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1296281265,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@TC_09_Edit_CityCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I update key tab to city",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify successfully with the message \"City Field must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 211322043,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1564687086,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_city()"
});
formatter.result({
  "duration": 461891784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City Field must not be blank",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 83606230,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@TC_10_11_Edit_CityCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I update data \"\u003cCity\u003e\" to city",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Verify successfully with the message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "City",
        "Message"
      ],
      "line": 52,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 53,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 54,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 937246490,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@TC_10_11_Edit_CityCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I update data \"123456\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Verify successfully with the message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 209888301,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1572336057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_city(String)"
});
formatter.result({
  "duration": 414070552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 64657290,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1086015662,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@TC_10_11_Edit_CityCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I update data \"name!@#\" to city",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Verify successfully with the message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 139377568,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1345265075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_city(String)"
});
formatter.result({
  "duration": 327548179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 61383945,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1085414098,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@TC_12_Edit_StateCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I update key tab to state",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Verify successfully with the message \"State must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 246716341,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1467090771,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_state()"
});
formatter.result({
  "duration": 467290705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State must not be blank",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 87814715,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@TC_13_14_Edit_StateCannotBeNumberic"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I update data \"\u003cState\u003e\" to state",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Verify successfully with the message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "State",
        "Message"
      ],
      "line": 71,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "123456",
        "Numbers are not allowed"
      ],
      "line": 72,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 73,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1076463970,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@TC_13_14_Edit_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I update data \"123456\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Verify successfully with the message \"Numbers are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 258026536,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1548985749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_state(String)"
});
formatter.result({
  "duration": 264804895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 47092725,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 932907536,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@TC_13_14_Edit_StateCannotBeNumberic"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I update data \"name!@#\" to state",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Verify successfully with the message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 253144905,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1353260668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_state(String)"
});
formatter.result({
  "duration": 375167008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 57744936,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I update data \"\u003cPIN\u003e\" to pin",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "Verify successfully with the message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "PIN",
        "Message"
      ],
      "line": 83,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "PIN123",
        "Characters are not allowed"
      ],
      "line": 84,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    },
    {
      "cells": [
        "123",
        "PIN Code must have 6 Digits"
      ],
      "line": 85,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 86,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1049343832,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I update data \"PIN123\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "Verify successfully with the message \"Characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 166119346,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1469734694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN123",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_pin(String)"
});
formatter.result({
  "duration": 450207462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Characters are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 55616186,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1082206339,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I update data \"123\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "Verify successfully with the message \"PIN Code must have 6 Digits\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 212428203,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1449390448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_pin(String)"
});
formatter.result({
  "duration": 320291318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must have 6 Digits",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 58858853,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1177321288,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@TC_15_17_18_Edit_PinMustBeNumeric"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I update data \"name!@#\" to pin",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "Verify successfully with the message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 175115314,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1459857536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_pin(String)"
});
formatter.result({
  "duration": 437374666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 69617202,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1162898894,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@TC_16_Edit_PinCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I update key tab to pin",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "Verify successfully with the message \"PIN Code must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 230481143,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1802023811,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_pin()"
});
formatter.result({
  "duration": 284523951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN Code must not be blank",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 53105552,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1109392768,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@TC_19_Edit_TelephoneCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I update key tab to phone",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Verify successfully with the message \"Mobile no must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 256145676,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1550135281,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_phone()"
});
formatter.result({
  "duration": 321919351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile no must not be blank",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 30380435,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 103,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@TC_20_Edit_TelephoneCannotHaveSpecialCharacter"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I update data \"\u003cPhone\u003e\" to phone",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Verify successfully with the message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;",
  "rows": [
    {
      "cells": [
        "Phone",
        "Message"
      ],
      "line": 110,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;1"
    },
    {
      "cells": [
        "name!@#",
        "Special characters are not allowed"
      ],
      "line": 111,
      "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1178249023,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Edit customer with input numeric value name field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-numeric-value-name-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@TC_20_Edit_TelephoneCannotHaveSpecialCharacter"
    },
    {
      "line": 1,
      "name": "@EditCustomer"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I update data \"name!@#\" to phone",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Verify successfully with the message \"Special characters are not allowed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 123903317,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1152512555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name!@#",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_phone(String)"
});
formatter.result({
  "duration": 402995553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Special characters are not allowed",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 39055522,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1771025591,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 113,
      "name": "@TC_21_Edit_EmailCannotEmpty"
    }
  ]
});
formatter.step({
  "line": 115,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I update key tab to email",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Verify successfully with the message \"Email-ID must not be blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 236929452,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1605092426,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_tab_to_email()"
});
formatter.result({
  "duration": 457523563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID must not be blank",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 81884048,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 121,
  "name": "",
  "description": "Edit customer with input special value customer ID field",
  "id": "edit-customer;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 120,
      "name": "@TC_22_Edit_EmailIncorrectFormat"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I update data \"\u003cEmail\u003e\" to email",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "Verify successfully with the message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 129,
  "name": "",
  "description": "",
  "id": "edit-customer;;",
  "rows": [
    {
      "cells": [
        "Email",
        "Message"
      ],
      "line": 130,
      "id": "edit-customer;;;1"
    },
    {
      "cells": [
        "Guru99@",
        "Email-ID is not valid"
      ],
      "line": 131,
      "id": "edit-customer;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 1186402942,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "",
  "description": "Edit customer with input special value customer ID field",
  "id": "edit-customer;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EditCustomer"
    },
    {
      "line": 120,
      "name": "@TC_22_Edit_EmailIncorrectFormat"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I update data \"Guru99@\" to email",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "Verify successfully with the message \"Email-ID is not valid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 252004892,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1460519045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99@",
      "offset": 15
    }
  ],
  "location": "EditCustomerSteps.i_update_data_to_email(String)"
});
formatter.result({
  "duration": 296656802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email-ID is not valid",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 52313574,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User to navigate to Edit customer page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I open Edit Customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditCustomerSteps.i_open_Edit_Customer_page()"
});
formatter.result({
  "duration": 2035688381,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 133,
      "name": "@TC_23_Edit_EmailCannotHaveBlankSpace"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I update key space to email",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Verify successfully with the message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "duration": 160996877,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "duration": 1402829470,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_space_to_email()"
});
formatter.result({
  "duration": 214520280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "duration": 36764922,
  "status": "passed"
});
formatter.match({
  "location": "EditCustomerSteps.close_browser()"
});
formatter.result({
  "duration": 1181350291,
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           formatter.result({
  "duration": 6026798903,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d77.0.3865.120)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027F7HYFH2\u0027, ip: \u002710.30.5.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\manhdao\\AppData\\Local\\Temp\\scoped_dir21012_1250705645}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51038}, acceptInsecureCerts\u003dfalse, browserVersion\u003d77.0.3865.120, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 810c546b6050f93ca4bcebe4f74ace03\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Edit Customer\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:443)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:522)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat common.CommonFunctions.waitForElemenVisible(CommonFunctions.java:256)\r\n\tat com.BankGuruPage.HomePage.clickEditCustomerButton(HomePage.java:28)\r\n\tat stepDefinitions.EditCustomerSteps.i_open_Edit_Customer_page(EditCustomerSteps.java:29)\r\n\tat ✽.Given I open Edit Customer page(Feature_03_EditCustomer.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 134,
  "name": "Edit customer with input special value customer ID field",
  "description": "",
  "id": "edit-customer;edit-customer-with-input-special-value-customer-id-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 133,
      "name": "@TC_23_Edit_EmailCannotHaveBlankSpace"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "I input customer id",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "I click to submit button",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I update key space to email",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Verify successfully with the message \"First character can not have space\"",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "EditCustomerSteps.i_input_customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditCustomerSteps.i_click_to_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditCustomerSteps.i_update_key_space_to_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "First character can not have space",
      "offset": 38
    }
  ],
  "location": "EditCustomerSteps.verify_successfully_with_a_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditCustomerSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});