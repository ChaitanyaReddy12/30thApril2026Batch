import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber"

import { Browser, chromium, expect, firefox, Page, webkit } from "playwright/test";

import { TestData1, TestData2, TestData3, OrangeHRMUserCredentials } from "../Files/TestData.json"

let browser: Browser, page: Page

let context

setDefaultTimeout(20 * 1000);

var file = "fullpage123.png"

Given('I launch the browser', async function () {

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

    // let page1 = await context.newPage()

    // let page2 = await context.newPage()

});

Given('I launch the firefox browser', async function () {

    browser = await firefox.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

});

Given('I launch the webkit browser', async function () {

    browser = await webkit.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

});

Given('I launch the headless browser', async function () {

    browser = await firefox.launch({

        headless: true,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    page = await context.newPage()

});


Then('i verify webcalendar dynamically', async function () {

    await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

    let datePicker = await page.locator("//input[@id='datepicker']")

    if (await datePicker.isVisible()) {

        console.log("datePicker is displayed on the webpage");

        await page.locator("//input[@id='datepicker']").click();

        let calendarTable = await page.locator(".ui-datepicker-calendar");

        if (await calendarTable.isVisible()) {

            console.log("calendarTable is displayed on the webpage");

            let rows = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr").all();

            console.log(" rows count is :" + rows.length);

            if (rows.length > 0) {

                console.log("calendar have rows");

                for (let i = 1; i <= rows.length; i++) {

                    let columns = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td").all();

                    console.log(" columns count is :" + columns.length);

                    if (columns.length > 0) {

                        console.log("calendar have columns");

                        for (let j = 1; j <= columns.length; j++) {

                            let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]");

                            let actualDate1 = await page.locator("//table[@class='ui-datepicker-calendar']/tbody/tr[" + i + "]/td[" + j + "]").innerText();

                            let expectedDate = "30";

                            if (actualDate1 == expectedDate) {

                                console.log("date :" + actualDate1
                                    + " is displayed in the calendar row number " + i
                                    + " and column number is: " + j);

                                actualDate.click();
                            }
                        }

                    } else {

                        console.log("calendar doesn't have columns");
                    }
                }

            } else {

                console.log("calendar doesn't have rows");
            }
        }
        else {
            console.log("calendarTable is not displayed on the webpage");
        }
    }
    else {
        console.log("datePicker is not displayed on the webpage");
    }
});

Then('I launch the facebook application', async function () {

    await page.goto('https://www.facebook.com/')

});

Then('I close the browser', async function () {

    await page.close()

});

Then('I launch the test automation practice application', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 })

});

Then('I verify playwright locators', async function () {

    console.log("=========get by placeholder=========")

    //Await page.getByPlaceholder(‘attribute value of the placeholder’).methods()

    await page.getByPlaceholder('Enter Name').fill('quality')

    await page.getByPlaceholder('Enter EMail').fill('qualitythought@yahoo.com')

    console.log("========get by text===============")

    //Await page.getBytext(‘text of the web element).methods()

    await page.getByText('START').click()

    await page.getByText('STOP').click()

    console.log("========get by Role===============")

    //Await page.getByRole('type of the web element',{name :'text of the web element'}).methods()

    await page.getByRole('button', { name: 'START' }).click()

    await page.getByRole('button', { name: 'STOP' }).click()

    await page.getByRole('checkbox', { name: 'Sunday' }).scrollIntoViewIfNeeded()

    await page.getByRole('checkbox', { name: 'Sunday' }).click()

    await page.getByRole('checkbox', { name: 'Monday' }).click()

    await page.getByRole('checkbox', { name: 'Friday' }).click()

    await page.getByRole('textbox', { name: 'Enter Name' }).fill('using get by role locator')

    await page.getByRole('textbox', { name: 'Phone' }).fill('8908908900')

});


Then('I verify playwright locators part2', async function () {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    console.log("=========get by alt text=========")

    //Await page.getByAlttext(‘attribute value of the alt).methods()

    await page.getByAltText('ParaBank').click()

    console.log("=========get by title=========")

    //Await page.getBytitle(‘attribute value of the title).methods()

    await page.getByTitle('ParaBank').click()

    console.log("=========get by Label=========")

    //await page.getBYLabel(‘text of the label web element’).methods()

    await page.goto('https://login.salesforce.com/')

    await page.getByLabel('Username').fill('friday')

    await page.getByLabel('Password').fill('playwright')
});

Then('I verify selenium locators', async function () {

    console.log("=========xpaths=========")

    console.log("=========absolute xpath=========")

    // syntax: await page.locator(‘absolute xpath’).methods()

    // await page.locator('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[2]').fill('absolute@gmail.com')

    console.log("=========Relative xpath=========")

    // syntax: await page.locator(relative xpath’).methods()

    await page.locator('//input[@id="name"]').fill('realtive xpath')

    await page.locator('//*[@placeholder="Enter EMail"]').fill('relative@gmail.com')

    await page.locator('//*[@id="phone"]').fill('7890')

    console.log("=========css selector=========")

    await page.locator('[id="textarea"]').fill('hyderabad')

    // # means id in css selector

    await page.locator('#phone').type('  6789')

    // . means class in css selector

    await page.locator(".wikipedia-search-input").type('playwright')

});

Then('I verify selenium xpath methods', async function () {

    console.log("=========contains method=========")

    await page.locator('//input[contains(@placeholder,"Enter Name")]').fill('praveen')

    await page.locator('//input[contains(@placeholder,"EMail")]').fill('test@gmail.com')

    await page.locator('//*[contains(@id,"Wikipedia1_wikipedia-search-input")]').fill('selenium')

    console.log("=========starts with method=========")

    await page.locator('//*[starts-with(@placeholder,"Enter")]').last().fill('9090909090')

    await page.locator('//*[starts-with(@placeholder,"Enter")]').first().type('9090909090')

    await page.locator('//textarea[starts-with(@id,"textarea")]').fill('bangalore')

    console.log("=========text method=========")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way of text is :", text)

    text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2nd way of text is :", text)

    text = await page.locator("//h2[contains(text(),'Alerts & Popups')]").innerHTML()

    console.log("3rd way of text is :", text)

    text = await page.locator("//h2[starts-with(text(),'Alerts & Popups')]").innerHTML()

    console.log("4th way of text is :", text)

    /*1st way of text is : Alerts & Popups
2nd way of text is : Alerts & Popups
3rd way of text is : Alerts &amp; Popups
4th way of text is : Alerts &amp; Popups*/

    console.log("=========and method=========")

    await page.locator('//*[@type="text" and @id="field2"]').fill('hi')

    await page.locator('//input[contains(@type,"text") and starts-with(@id,"field1")]').fill('hello')

    console.log("=========or method=========")

    var orCount = await page.locator('//*[@type="text" or @id="field2"]').all()

    console.log('orcouunt is', orCount.length)

    await page.locator('//*[@type="text" or @id="field2"]').first().type('first')

    await page.locator('//*[@type="text" or @id="field2"]').last().type('last')

    await page.locator('//*[@type="text" or @id="field2"]').nth(5).type('sixth web element')

    //(//*[@type="text" or @id="field2"])[5] to identify 5th element

    console.log("=========css selector =========")

    console.log("=======contains==========")

    await page.locator('[id*="field2"]').fill('using css selector contains')

    console.log("=======starts-with==========")

    await page.locator('[id^="field1"]').fill('using css selector starts with')

});

Then('I verify selenium xpath Axes', async function () {

    console.log("=========parent=========")

    var parentCount = await page.locator("//*[@id='field1']//parent::div").all()

    console.log('parentCount is: ', parentCount.length) //parentCount is: 1

    console.log("=========ancestor=========")

    var ancestorCount = await page.locator("//*[@id='field1']//ancestor::div").all()

    console.log('ancestorCount is: ', ancestorCount.length) //ancestorCount is: 14

    console.log("=========preceding=========")

    var precedingCount = await page.locator("//*[@id='field1']//preceding::div").all()

    console.log('precedingCount is: ', precedingCount.length) //precedingCount is: 174

    precedingCount = await page.locator("//*[@id='field1']//preceding::h2").all()

    console.log('precedingCount is: ', precedingCount.length) //precedingCount is: 10

    console.log("=========child=========")

    var childCount = await page.locator('//*[@class="form-group"]//child::input').all()

    console.log('childCount is: ', childCount.length) //childcount is: 12

    await page.locator('//*[@class="form-group"]//child::input').nth(6).click()

    childCount = await page.locator('//*[@class="form-group"]//child::input[@type="text"]').all()

    console.log('childCount is: ', childCount.length) //childcount is: 3

    await page.locator('//*[@class="form-group"]//child::input[@type="text"]').first().fill('child xpath axes')

    console.log("=========descendant=========")

    var descendantCount = await page.locator('//*[@class="form-group"]//descendant::input').all()

    console.log('descendantCount is: ', descendantCount.length) //childcount is: 12

    await page.locator('//*[@class="form-group"]//descendant::input').nth(7).click()

    descendantCount = await page.locator('//*[@class="form-group"]//descendant::input[@type="text"]').all()

    console.log('descendantCount is: ', descendantCount.length) //childcount is: 3

    await page.locator('//*[@class="form-group"]//descendant::input[@type="text"]').first().fill('descendant xpath axes')

    console.log("=========following=========")

    var followingCount = await page.locator('//*[@class="form-group"]//following::input').all()

    console.log('followingCount is: ', followingCount.length) //followingCount is: 32

    console.log("=========following sibling=========")

    var followingSiblingCount = await page.locator('//*[@placeholder="Enter Name"]//following-sibling::input').all()

    console.log('followingSiblingCount is: ', followingSiblingCount.length) //followingSiblingCount is: 2

    followingSiblingCount = await page.locator('//*[@placeholder="Enter Name"]//following-sibling::label').all()

    console.log('followingSiblingCount is: ', followingSiblingCount.length) //followingSiblingCount is: 2

    await page.locator('//*[@placeholder="Enter Name"]//following-sibling::input').first().fill('follwoingsibing@gmail.com')


    //  driver.findElement(By.cssSelector("#shadow_host")).getShadowRoot().findElement(By.cssSelector(".inner-button"))click();

});

Then('I verify playwright Methods', async function () {

    console.log("=========to refresh the page=========")

    await page.reload()

    console.log("=========to scroll to the respective element on the web page=========")

    await page.getByText('New Tab').scrollIntoViewIfNeeded()

    console.log("=========to click the element on the web page=========")

    await page.getByText('New Tab').click()

    console.log("=========to go to the previous page=========")

    await page.bringToFront()

    //1st way

    await page.locator('.start').first().scrollIntoViewIfNeeded()

    await page.locator('.start').first().click()

    //2nd way

    await page.locator('.stop').nth(0).click()

    console.log("=========to enter text to the element on the web page=========")

    await page.getByPlaceholder('Enter Name').fill('sai')

    await page.getByPlaceholder('Enter EMail').type('krishna@gmail.com')

    console.log("=========to get more than one element at a time========")

    var orCount = await page.locator('//*[@type="text" or @id="field2"]').all()

    console.log('orcouunt is', orCount.length) //orcouunt is 13

    console.log("=========to get the page title========")

    console.log(await page.title()) //Automation Testing Practice

    console.log("=========to get the url title========")

    console.log(await page.url()) //https://testautomationpractice.blogspot.com/

    console.log("=========to clear text from the element on the web page=========")

    await page.locator('#field1').scrollIntoViewIfNeeded()

    await page.locator('#field1').clear()

    await page.locator('#field1').fill('venkat')

    console.log("=========to get the text of the element=========")

    //innerText means elements tab or dom text it will return

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way of text is :", text)

    text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2nd way of text is :", text)

    //innerHTML means view page source text it will return

    text = await page.locator("//h2[contains(text(),'Alerts & Popups')]").innerHTML()

    console.log("3rd way of text is :", text)

    text = await page.locator("//h2[starts-with(text(),'Alerts & Popups')]").innerHTML()

    console.log("4th way of text is :", text)

    /*1st way of text is : Alerts & Popups
2nd way of text is : Alerts & Popups
3rd way of text is : Alerts &amp; Popups
4th way of text is : Alerts &amp; Popups*/

    console.log("=========to get/read the text from more than one web element=========")

    //innerText means elements tab or dom text it will return

    console.log("===================1st way=========")

    var textOfTheWebElements = await page.locator(".title").allInnerTexts()

    console.log("textOfTheWebElements count is", textOfTheWebElements.length)

    console.log("=========for loop===========")

    for (let i = 0; i < textOfTheWebElements.length; i++) {

        console.log(`text of the web element ${i} is :`, textOfTheWebElements[i])

        //console.log('text of the web element '+i+' is :', textOfTheWebElements[i])

    }

    /*text of the web element 0 is : Automation Testing Practice
text of the web element 1 is : Upload Files
text of the web element 2 is : Static Web Table
text of the web element 3 is : Dynamic Web Table
text of the web element 4 is : Pagination Web Table
text of the web element 5 is : Tabs
text of the web element 6 is : Dynamic Button
text of the web element 7 is : Alerts & Popups
text of the web element 8 is : Mouse Hover
text of the web element 9 is : Double Click
text of the web element 10 is : Drag and Drop
text of the web element 11 is : Slider
text of the web element 12 is : SVG Elements
text of the web element 13 is : Scrolling DropDown
text of the web element 14 is : Labels And Links
text of the web element 15 is : Form
text of the web element 16 is : ShadowDOM
*/

    console.log("===================2nd way=========")

    var textOfTheWebElements = await page.locator(".title").allTextContents()

    console.log("textOfTheWebElements count is", textOfTheWebElements.length)

    console.log("=========for loop===========")

    for (let i = 0; i < textOfTheWebElements.length; i++) {

        console.log(`text of the web element ${i} is :`, textOfTheWebElements[i])

    }



    /*text of the web element 0 is : Automation Testing Practice
text of the web element 1 is : Upload Files
text of the web element 2 is : Static Web Table
text of the web element 3 is : Dynamic Web Table
text of the web element 4 is : Pagination Web Table
text of the web element 5 is : Tabs
text of the web element 6 is : Dynamic Button
text of the web element 7 is : Alerts & Popups
text of the web element 8 is : Mouse Hover
text of the web element 9 is : Double Click
text of the web element 10 is : Drag and Drop
text of the web element 11 is : Slider
text of the web element 12 is : SVG Elements
text of the web element 13 is : Scrolling DropDown
text of the web element 14 is : Labels And Links
text of the web element 15 is : Form
text of the web element 16 is : ShadowDOM
*/

    console.log("=========to right click of an web element=========")

    await page.locator('.wikipedia-search-input').scrollIntoViewIfNeeded()

    await page.locator('.wikipedia-search-input').click({ button: "right" })

});

Then('I verify playwright Methods part2', async function () {

    console.log("=========visible=========")

    var visible = await page.locator('#female').isVisible()

    console.log(' visible status is: ', visible) //visible status is:  true

    if (visible == true)
        await page.locator('#female').click()

    console.log("=========hidden=========")

    var hidden = await page.locator('#sunday').isHidden()

    console.log(' hidden status is: ', hidden) //hidden status is:  false

    if (hidden == false)
        await page.locator('#sunday').click()

    console.log("=========disabled=========")

    var disabled = await page.locator('#monday').isDisabled()

    console.log(' disabled status is: ', disabled) //disabled status is:  false

    if (disabled == false)
        await page.locator('#monday').click()

    console.log("=========enabled=========")

    var enabled = await page.locator('#tuesday').isEnabled()

    console.log(' enabled status is: ', enabled) //enabled status is:  true

    if (enabled == true)
        await page.locator('#tuesday').click()

    console.log("=========editable=========")

    var editable = await page.locator('#textarea').isEditable()

    console.log(' editable status is: ', editable) //editable status is:  true

    if (editable == true)
        await page.locator('#textarea').fill('using editable method')

    console.log("=========checked=========")

    var checked = await page.locator('#saturday').isChecked()

    console.log(' checked status is: ', checked) //checked status is:  false

    if (checked == false) {

        //1st way to check the checkbox

        //await page.locator('#saturday').click()

        //2nd way to check the checkbox

        await page.locator('#saturday').setChecked(true)

        checked = await page.locator('#saturday').isChecked()

        console.log(' checked status is: ', checked) //checked status is:  true
    }

    if (checked == true) {

        //1st way to uncheck the checkbox

        //await page.locator('#saturday').click()

        //2nd way to uncheck the checkbox

        // await page.locator('#saturday').setChecked(false)

        //3rd way to uncheck the checkbox

        await page.locator('#saturday').uncheck()

        checked = await page.locator('#saturday').isChecked()

        console.log(' checked status is: ', checked) //checked status is:  false

    }

});


Then('I verify playwright Methods part3', async function () {

    await page.goto('https://www.myntra.com/')

    console.log("=========hover=========")

    await page.locator("//*[text()='Kids']").first().hover()

    console.log("==============highlight the web element ================")

    await page.getByPlaceholder('Search for products, brands and more').highlight()

    await page.getByPlaceholder('Search for products, brands and more').fill('tshirts')

    console.log("=============get attribute================")

    var attributeValue = await page.getByPlaceholder('Search for products, brands and more').getAttribute('placeholder')

    console.log("Attribute value of placeholder is: ", attributeValue) // Search for products, brands and more

    attributeValue = await page.getByPlaceholder('Search for products, brands and more').getAttribute('class')

    console.log("Attribute value of class is: ", attributeValue) // desktop-searchBar

    attributeValue = await page.getByPlaceholder('Search for products, brands and more').getAttribute('data-reactid')

    console.log("Attribute value of data-reactid is: ", attributeValue) // 1039

    /*Attribute value of placeholder is:  Search for products, brands and more
Attribute value of class is:  desktop-searchBar
Attribute value of data-reactid is:  1039*/
});

Then('I verify playwright Methods part4', async function () {

    console.log("=========clear the text from the textbox=========")

    console.log("=========1st way=========")

    await page.locator('#field1').scrollIntoViewIfNeeded()

    await page.locator('#field1').clear()

    await page.locator('#field1').fill('venkat')

    console.log("=========2nd way=========")

    await page.locator('#field1').fill(" ")

    await page.locator('#field1').type('karthik')

    console.log("=========3rd way is using keybaord actions=========")

    await page.locator('#field1').press('Control+A')

    await page.keyboard.press('Delete')

    await page.keyboard.up('Control')

    await page.keyboard.insertText('Devanand')

    console.log("=========4th way to enter text to the textbox=========")

    await page.locator('#field1').clear()

    await page.locator('#field1').pressSequentially('Ashok')

    console.log("========drag and drop=========")

    await page.locator("#draggable").scrollIntoViewIfNeeded()

    var first = await page.locator("#draggable")

    var second = await page.locator("#droppable")

    await first.dragTo(second)
});

Then('I verify playwright Methods part5', async function () {

    console.log("=========handling dropdown=========")

    var colorsDropdown = await page.locator("#colors")

    await colorsDropdown.scrollIntoViewIfNeeded()

    await colorsDropdown.selectOption("Red")

    await colorsDropdown.selectOption("Green")

    await colorsDropdown.selectOption("White")

    await colorsDropdown.selectOption(["Yellow", "Blue", "Red"])

    await colorsDropdown.selectOption({ index: 2 })

    await colorsDropdown.selectOption([{ index: 2 }, { index: 0 }])

    // class work: handle country and sorted list drodpwns

    console.log("==========screenshots==========")

    console.log("==========1st way to take the scrceenshot of an web element==========")

    await page.getByPlaceholder('Enter Name').scrollIntoViewIfNeeded()

    await page.getByPlaceholder('Enter Name').fill('quality')

    //path is nothing but name of the screenshot or we can privide the complete folder path along with the name of the screenshot

    await page.getByPlaceholder('Enter Name').screenshot({ path: 'verify playwright Methods part5_EnterNameTextbox.png' })

    console.log("==========2nd way to take the scrceenshot up to screen length==========")

    await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/verify playwright Methods part5_Uptoscreenlength.jpg' })

    console.log("==========3rd way to take the scrceenshot of entire web page==========")

    await page.screenshot({ path: './PlaywrightAutomationCode/Screenshots/verify playwright Methods part5_fullpage.jpg', fullPage: true })

})


Then('I verify playwright Dates', async function () {

    const todaysDate = new Date()

    console.log("todaysDate is:", todaysDate) //todaysDate is: 2026-06-02T02:55:59.114Z

    const todaysDateInIST = todaysDate.toLocaleDateString()

    console.log("todaysDateInIST is:", todaysDateInIST) //todaysDateInIST is: 2/6/2026

    await page.locator('.hasDatepicker').first().scrollIntoViewIfNeeded()

    await page.locator('.hasDatepicker').first().fill(todaysDateInIST)

    const yesterdaysDateInIST = new Date(todaysDate)

    yesterdaysDateInIST.setDate(yesterdaysDateInIST.getDate() - 1)

    console.log("yesterdaysDateInIST is:", yesterdaysDateInIST.toLocaleDateString()) //yesterdaysDateInIST is: 1/6/2026

    const futureDateInIST = new Date(todaysDate)

    futureDateInIST.setDate(futureDateInIST.getDate() + 10)

    console.log("futureDateInIST is:", futureDateInIST.toLocaleDateString()) //futureDateInIST is: 12/6/2026

    const year = todaysDate.getFullYear()

    const month = todaysDate.getMonth() + 1

    const date = todaysDate.getDate()

    console.log(year, '/', month, '/', date) //2026 / 6 / 2

    console.log(year, '-', month, '-', date) //2026 - 6 - 2

    console.log(month, '/', year, '/', date) //6 / 2026 / 2

    console.log(year, '/', date, '/', month) //2026 / 2 / 6

    const completeMonthName = todaysDate.toLocaleDateString('en-us', { month: 'long' })

    console.log('completeMonthName is :', completeMonthName) //completeMonthName is : June

    const shortMonthName = todaysDate.toLocaleDateString('en-us', { month: 'short' })

    console.log('shortMonthName is :', shortMonthName) //shortMonthName is : Jun

})

Then('I verify web table in static way', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("web table is diplayed on the web page")

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectedText = "Amod"

        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[6]//td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is diplayed on the web table ") //Amod  is diplayed on the web table 
        }
        else {

            console.log(expectedText, " is not diplayed on the web table ")
        }
    }
    else {

        console.log("web table is not diplayed on the web page")
    }

})

Then('I verify web table in static way2', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("web table is diplayed on the web page") //web table is diplayed on the web page

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectedText = "Animesh"

        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[6]//td[2]").innerText()

        if (actualText == expectedText) {

            console.log(expectedText, " is diplayed on the web table ")
        }
        else {

            console.log(expectedText, " is not diplayed on the web table") // Animesh is not diplayed on the web table
        }
    }
    else {

        console.log("web table is not diplayed on the web page")
    }

})

Then('I verify web table in dynamic way', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("web table is diplayed on the web page") //web table is diplayed on the web page

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let rows = await page.locator("//table[@name='BookTable']//tbody//tr").all()

        if (rows.length > 0) {

            console.log(" web table have rows")

            for (let i = 2; i <= rows.length; i++) {

                let columns = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//td").all()

                if (columns.length > 0) {

                    for (let j = 1; j <= columns.length; j++) {

                        // let expectedText = "Animesh"

                        // let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//td[" + j + "]").innerText()

                        // if (actualText == expectedText) {

                        //     console.log(expectedText, " is diplayed on the web table in the row :" + i + " and columns is :" + j)
                        // } 

                        // let expectedText = "Mukesh"

                        // let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//td[" + j + "]").innerText()

                        // if (actualText == expectedText) {

                        //     console.log(expectedText, " is diplayed on the web table in the row :" + i + " and columns is :" + j)
                        // } 

                        // let expectedText = "Selenium"

                        // let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//td[" + j + "]").innerText()

                        // if (actualText == expectedText) {

                        //     console.log(expectedText, " is diplayed on the web table in the row :" + i + " and columns is :" + j)
                        // } 

                        let expectedText = "Java"

                        let actualText = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//td[" + j + "]").innerText()

                        if (actualText.includes(expectedText)) {

                            console.log(expectedText, " is diplayed on the web table in the row :" + i + " and columns is :" + j)
                        }

                        /*Java  is diplayed on the web table in the row :3 and columns is :1
Java  is diplayed on the web table in the row :3 and columns is :3
Java  is diplayed on the web table in the row :4 and columns is :3
Java  is diplayed on the web table in the row :6 and columns is :1
Java  is diplayed on the web table in the row :7 and columns is :3*/
                    }

                }
                else {

                    console.log(" web table doesn't have columns")
                }

            }
        }
        else {

            console.log(" web table doesn't have rows")
        }
    }
    else {

        console.log("web table is not diplayed on the web page")
    }

})

Then('I verify web table in dynamic way header section', async function () {

    let webTable = await page.locator("//table[@name='BookTable']").isVisible()

    if (webTable == true) {

        console.log("web table is diplayed on the web page") //web table is diplayed on the web page

        await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()

        let rows = await page.locator("//table[@name='BookTable']//tbody//tr").all()

        if (rows.length > 0) {

            console.log(" web table have rows")

            for (let i = 1; i <= rows.length; i++) {

                if (i == 1) {

                    let columns = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//th").all()

                    for (let j = 1; j <= columns.length; j++) {

                        let column_Header_Text = await page.locator("//table[@name='BookTable']//tbody//tr[" + i + "]//th[" + j + "]").innerText()

                        console.log("column_Header_Text is", column_Header_Text)
                    }
                }

            }
        }
        else {

            console.log(" web table doesn't have rows")
        }
    }
    else {

        console.log("web table is not diplayed on the web page")
    }

})

Then('I verify web calendar in static way', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.locator('#datepicker').click()

    let webCalendar = await page.locator(".ui-datepicker-calendar").isVisible()

    if (webCalendar == true) {

        console.log("web Calendar is diplayed on the web page")

        let expectedDate = "24"

        let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']//tbody/tr[4]//td[4]")

        let actualDateText = await page.locator("//table[@class='ui-datepicker-calendar']//tbody/tr[4]//td[4]").innerText()

        if (actualDateText == expectedDate) {

            console.log(expectedDate, " is diplayed on the web calendar ")

            await actualDate.click()
        }
        else {

            console.log(expectedDate, " is not diplayed on the web calendar ")
        }
    }
    else {

        console.log("web Calendar is not diplayed on the web page")
    }

})

Then('I verify web calendar in static way2', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.locator('#datepicker').click()

    let webCalendar = await page.locator(".ui-datepicker-calendar").isVisible()

    if (webCalendar == true) {

        console.log("web Calendar is diplayed on the web page")

        let expectedDate = "26"

        let actualDate = await page.locator("//table[@class='ui-datepicker-calendar']//tbody/tr[4]//td[4]")

        let actualDateText = await page.locator("//table[@class='ui-datepicker-calendar']//tbody/tr[4]//td[4]").innerText()

        if (actualDateText == expectedDate) {

            console.log(expectedDate, " is diplayed on the web calendar ")

            await actualDate.click()
        }
        else {

            console.log(expectedDate, " is not diplayed on the web calendar ")
        }
    }
    else {

        console.log("web Calendar is not diplayed on the web page")
    }

})

/*class work : 

1) handle web calendar in dynamic way
2) handle Dynamic Web Table in both static and dynamic way
3) handle both Date Picker 1 and Date Picker 2 in both static and dynamic way

*/

Then('I verify and method in playwright', async function () {

    await page.getByPlaceholder('Enter Name').fill('Ashok')

    console.log("=======selenium xpath and method===========")

    await page.locator('//input[@id="email" and  @placeholder="Enter EMail"]').fill('deepthi@gmail.com')

    console.log("=======playwright and method===========")

    await page.locator('//input[@id="phone"]').and(page.getByPlaceholder('Enter Phone')).fill('9700900900')

    await page.locator('//input[@id="phone" and  @placeholder="Enter Phone"]').and(page.getByPlaceholder('Enter Phone')).fill('9700900900')

    await page.locator('.wikipedia-search-input').and(page.locator('#Wikipedia1_wikipedia-search-input')).fill('Testing')

})

Then('I verify Hard assertion in playwright', async function () {

    await page.goto('https://www.amazon.in/')

    await expect(page.getByPlaceholder('Search Amazon.in')).toBeVisible()

    await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

    await expect(page.locator('#nav-search-submit-button')).toBeAttached()

    await page.locator('#nav-search-submit-button').click()

    // await expect(page.locator("//*[text()='Sell']")).toBeHidden()

    //await expect(page.locator("//*[text()='Sell']")).toBeDisabled()

    await expect(page.locator("//*[text()='Sell']")).toBeEnabled()

    await expect(page.locator("//*[text()='Sell']")).toHaveCount(1)

    await page.locator("//*[text()='Sell']").click()

    console.log("============test automation practice==========")

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.locator("//*[@class='title']")).toHaveCount(17)

    let title = await page.locator("//*[@class='title']").allInnerTexts()

    for (let i = 0; i < title.length; i++) {

        console.log(title[i])
    }

    await expect(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])

    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files'])

    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files', "Static Web Table"])

    await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute('class')

    await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute('id', 'name')

    await expect(page.getByPlaceholder("Enter Name")).toHaveId('name')

    await expect(page.getByPlaceholder("Enter EMail")).toHaveId('email')

    await expect(page.getByPlaceholder("Enter EMail")).toBeTruthy()

    await expect(page.getByPlaceholder("Enter EMail")).toBeEmpty()

    await page.getByPlaceholder("Enter EMail").pressSequentially('test@gmail.com')

    await expect(page.getByText("START")).toHaveRole('button')

    await expect(page.getByText("START")).toHaveText('START')

    await page.getByText("START").click()

    console.log("hi team good morning")

})


Then('I verify soft assertion in playwright', async function () {

    await page.goto('https://www.amazon.in/')

    await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeVisible()

    await page.getByPlaceholder('Search Amazon.in').fill('mobiles')

    await expect.soft(page.locator('#nav-search-submit-button')).toBeAttached()

    await page.locator('#nav-search-submit-button').click()

    // await expect.soft(page.locator("//*[text()='Sell']")).toBeHidden()

    // await expect.soft(page.locator("//*[text()='Sell']")).toBeDisabled()

    await expect.soft(page.locator("//*[text()='Sell']")).toBeEnabled()

    await expect.soft(page.locator("//*[text()='Sell']")).toHaveCount(1)

    await page.locator("//*[text()='Sell']").click()

    console.log("============test automation practice==========")

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.locator("//*[@class='title']")).toHaveCount(17)

    let title = await page.locator("//*[@class='title']").allInnerTexts()

    for (let i = 0; i < title.length; i++) {

        console.log(title[i])
    }

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files'])

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files', "Static Web Table"])

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute('class')

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute('id', 'name')

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveId('name')

    await expect.soft(page.getByPlaceholder("Enter EMail")).toHaveId('email')

    await expect.soft(page.getByPlaceholder("Enter EMail")).toBeTruthy()

    await expect.soft(page.getByPlaceholder("Enter EMail")).toBeEmpty()

    await page.getByPlaceholder("Enter EMail").pressSequentially('test@gmail.com')

    await expect.soft(page.getByText("START")).toHaveRole('button')

    await expect.soft(page.getByText("START")).toHaveText('START')

    await page.getByText("START").click()

    console.log("hi team good morning")

})

Then('I verify filters', async function () {

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill('standard_user')

    await page.getByPlaceholder('Password').fill('secret_sauce')

    await page.locator('#login-button').click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'remove' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .getByRole('button', { name: 'Remove' }).click()

    await page.locator("//*[@class='inventory_item']")
        .filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'remove' }).click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//div[@class='form-check form-check-inline']")
        .filter({ hasText: 'Sunday' }).click()

    await page.locator("//div[@class='form-check form-check-inline']")
        .filter({ hasText: 'Monday' }).click()

    await page.locator("//div[@class='form-check form-check-inline']")
        .filter({ hasText: 'Tues' }).click()

    await page.locator("//div[@class='form-check form-check-inline']")
        .filter({ hasText: 'male' }).first().click()
})

Then('I verify playwright simple alert', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        console.log("dialog/alert type is:", dialog.type()) // alert

        expect(dialog.type()).toContain('alert')

        console.log("dialog/alert message is:", dialog.message()) // I am a JS Alert

        expect(dialog.message()).toContain('I am a JS Alert')

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()

})

Then('I verify playwright confirmation alert accept', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        console.log("dialog/alert type is:", dialog.type()) // confirm

        expect(dialog.type()).toContain('confirm')

        console.log("dialog/alert message is:", dialog.message()) // I am a JS Confirm

        expect(dialog.message()).toContain('I am a JS Confirm')

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

})

Then('I verify playwright confirmation alert dismiss', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        console.log("dialog/alert type is:", dialog.type()) // confirm

        expect(dialog.type()).toContain('confirm')

        console.log("dialog/alert message is:", dialog.message()) // I am a JS Confirm

        expect(dialog.message()).toContain('I am a JS Confirm')

        dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

})

Then('I verify playwright prompt alert accept without text', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        console.log("dialog/alert type is:", dialog.type()) // prompt

        expect(dialog.type()).toContain('prompt')

        console.log("dialog/alert message is:", dialog.message()) // I am a JS prompt

        expect(dialog.message()).toContain('I am a JS prompt')

        dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

})

Then('I verify playwright prompt alert accept with text', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        console.log("dialog/alert type is:", dialog.type()) // prompt

        expect(dialog.type()).toContain('prompt')

        console.log("dialog/alert message is:", dialog.message()) // I am a JS prompt

        expect(dialog.message()).toContain('I am a JS prompt')

        dialog.accept("hi quality thought team")
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

})

Then('I verify playwright prompt alert dismiss', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        console.log("dialog/alert type is:", dialog.type()) // prompt

        expect(dialog.type()).toContain('prompt')

        console.log("dialog/alert message is:", dialog.message()) // I am a JS prompt

        expect(dialog.message()).toContain('I am a JS prompt')

        dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

})

/*clas work: hanlde simple,confirmation,prompt alerts in test automation practice website*/

Then('I verify playwright frames', async function () {

    await page.goto('https://the-internet.herokuapp.com/nested_frames')

    var allFramesCount = await page.frames()

    console.log('allFramesCount is:', allFramesCount.length) // 6

    /*await page.frameLocator(xpath/url).locator(playwright/seleniumlocator).playwrightmethods(click()/fill()/innerText())*/

    //1st way

    var bottomText = await page.frameLocator('//*[@src="/frame_bottom"]').locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottom frame text is", bottomText)

    // leftText = await page.frameLocator('//*[@src="/frame_bottom"]').locator("//*[contains(text(),'BOTTOM')]").innerHTML()

    // console.log("left frame text is" ,leftText)

    //2nd way

    var bottomText2 = await page.frame({ url: 'https://the-internet.herokuapp.com/frame_bottom' })

    var b2 = await bottomText2?.locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottom frame 2nd way text is", b2)

    await page.goto('https://demo.automationtesting.in/Frames.html')

    allFramesCount = await page.frames()

    console.log('allFramesCount is:', allFramesCount.length) // 12

    const f1 = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' })

    var f2 = await f1?.locator('//*[@type="text"]').first().fill("hi everyone")

    await page.locator("//*[text()='Iframe with in an Iframe']").click()

    const multiFrame = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' })

    var allChildFramesCount = await multiFrame?.childFrames()

    console.log('allChildFramesCount is:', allChildFramesCount?.length) // 1

    if (allChildFramesCount && allChildFramesCount.length > 0) {

        await allChildFramesCount[0].locator('//*[@type="text"]').last().fill("hi team good morning")
    }

})

Then('I verify playwright file upload', async function () {

    console.log("=====Upload Single File=============")

    // var singleFileUpload =  await page.locator("#singleFileInput")

    // await singleFileUpload.scrollIntoViewIfNeeded()

    await page.locator("#singleFileInput").setInputFiles("fullpage123.png")

    await page.locator("//button[text()='Upload Single File']").click()

    console.log("=====Multiple File upload=============")

    await page.locator("#multipleFilesInput").setInputFiles([file, "./PlaywrightAutomationCode/Screenshots/UptoScreenlength.jpg",
        "C:\\Users\\Abcom\\OneDrive\\Desktop\\Automation_Playwright\\25thApril2026\\typescript and javascript\\Playwright\\10th Class_Frames_upload files\\10th Class.docx"
    ])

    await page.locator("//button[text()='Upload Multiple Files']").click()

})


Then('I verify playwright Waits', async function () {

    await page.goto('https://www.facebook.com')

    console.log("============wait for timeout============")

    //await page.waitForTimeout(10000) //10000 means 10000 milliseconds means 10 seconds

    await page.waitForTimeout(10000)

    await page.locator('//input[@name="email"]').fill("Quality")

    await page.waitForTimeout(10000)

    await page.locator('//input[@name="pass"]').fill("thought@yahoo.com")

    console.log("============wait for selector============")

    /*syntax:
1st way
await page.waitForSelector(webelement)
2nd way
await page.waitForSelector(webelement, {timeout: 10000}) ////10000 means 10000 milliseconds means 10 seconds
*/

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    console.log("============1st way===========")

    await page.waitForSelector('//input[@name="username"]')

    await page.locator('//input[@name="username"]').fill('Admin')

    console.log("============2nd way===========")

    await page.waitForSelector('//input[@name="password"]', { timeout: 7000 }) // 7000 means 7 seconds

    await page.locator('//input[@name="password"]').fill('admin123')

    console.log("============wait for load============")

    //Await page.waitForLoadstate(10000)

    //1st way

    await page.waitForLoadState()

    await page.locator('//button[@type="submit"]').click()

    await page.goto('https://www.myntra.com/')

    //2nd way

    await page.waitForLoadState('domcontentloaded', { timeout: 10000 }) // 10 seconds html,css content is loading in the web page

    await page.locator('//*[@data-group="men"]').first().click()

    //3rd way

    await page.waitForLoadState('domcontentloaded') //  html,css content is loading in the web page

    await page.locator('//*[@data-group="women"]').first().click()

    //4th way

    await page.waitForLoadState('load', { timeout: 10000 }) // 10 seconds html,css content and images is loading in the web page

    await page.locator('//*[@data-group="kids"]').first().click()

    //5th way

    await page.waitForLoadState('load') //   html,css content and images is loading in the web page

    await page.locator('//*[@data-group="home"]').first().click()

    await page.goto('https://login.salesforce.com/?locale=in')

    //6th way

    await page.waitForLoadState('networkidle', { timeout: 10000 }) // 10 seconds , no network issues as well like 404, 500 ..etc

    await page.getByLabel('Username').fill('admin')

    //7th way

    await page.waitForLoadState('networkidle') //  10 seconds , no network issues as well like 404, 500 ..etc 

    await page.getByLabel('Password').fill('admin')

})


Then('verify playwright windows handling', async function () {

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null
    })

    let page1 = await context.newPage()

    let page2 = await context.newPage()

    let page3 = await context.newPage()

    let allPagesCount = await context.pages()

    console.log("allPagesCount is:", allPagesCount.length) //allPagesCount is:3

    await page1.goto('https://testautomationpractice.blogspot.com/')

    await expect(page1).toHaveTitle('Automation Testing Practice')

    await page2.goto('https://login.salesforce.com/')

    await expect(page2).toHaveTitle('Login | Salesforce')

    await page3.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page3).toHaveTitle('OrangeHRM')

    await page3.locator('//input[@name="username"]').fill('Admin')

    await page3.locator('//input[@name="password"]').fill('admin123')

    await page3.locator('//button[@type="submit"]').click()

    await allPagesCount[0].bringToFront()

    await page1.getByText('New Tab').scrollIntoViewIfNeeded()

    await page1.getByText('New Tab').click()

    await page1.waitForTimeout(5000)

    allPagesCount = await context.pages()

    console.log("allPagesCount is:", allPagesCount.length) //allPagesCount is:4

    await allPagesCount[3].close()

    console.log("=======switch to the 2nd page and enter the credentials=========")

    await allPagesCount[1].bringToFront()

    await page2.getByLabel('Username').fill('friday')

    await page2.getByLabel('Password').fill('playwright')

    console.log("=======switch to the 1st page and enter the credentials=========")

    await allPagesCount[0].bringToFront()

    const pagePopup = page1.waitForEvent('popup')

    await page1.getByText('Popup Windows').scrollIntoViewIfNeeded()

    await page1.getByText('Popup Windows').click()

    await page1.waitForTimeout(5000)

    const popupPage = await pagePopup

    console.log('popup url is', await popupPage.url())

    console.log('popup title is', await popupPage.title())

    allPagesCount = await context.pages()

    console.log("allPagesCount is:", allPagesCount.length) //allPagesCount is:4

    console.log("=======close the specific tab========")

    await allPagesCount[4].close()

    console.log("=======close the complete browser========")

    await context.close()
})


Then('I am reading the testdata1 from the json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData1.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData1.Email)

    await page.getByRole('textbox', { name: 'Phone' }).fill(TestData1.Phone)

    await page.locator('[id="textarea"]').fill(TestData1.Address)

    await page.locator(".wikipedia-search-input").type(TestData1.wikipedia)

})

Then('I am reading the testdata2 from the json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData2.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData2.Email)

    await page.getByRole('textbox', { name: 'Phone' }).fill(TestData2.Phone)

    await page.locator('[id="textarea"]').fill(TestData2.Address)

    await page.locator(".wikipedia-search-input").type(TestData2.wikipedia)

})

Then('I am reading the testdata3 from the json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData3.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData3.Email)

    await page.getByRole('textbox', { name: 'Phone' }).fill(TestData3.Phone)

    await page.locator('[id="textarea"]').fill(TestData3.Address)

    await page.locator(".wikipedia-search-input").type(TestData3.wikipedia)

})

Then('I am reading the testdata for orangehrm application', async function () {

    await page.goto(OrangeHRMUserCredentials.url)

    await page.locator('//input[@name="username"]').fill(OrangeHRMUserCredentials.username)

    await page.locator('//input[@name="password"]').fill(OrangeHRMUserCredentials.password)

    await page.locator('//button[@type="submit"]').click()

})

Then('I am reading the testdata from the feature file {string},{string},{string},{string},{string}', async function (name, email, phone, address, wikipedia) {

    await page.getByPlaceholder('Enter Name').fill(name)

    await page.getByPlaceholder('Enter EMail').fill(email)

    await page.getByRole('textbox', { name: 'Phone' }).fill(phone)

    await page.locator('[id="textarea"]').fill(address)

    await page.locator(".wikipedia-search-input").type(wikipedia)
});

When('I am reading the testdata for orangehrm application {string},{string},{string}', async function (url, username, password) {

    await page.goto(url)

    await page.locator('//input[@name="username"]').fill(username)

    await page.locator('//input[@name="password"]').fill(password)

    await page.locator('//button[@type="submit"]').click()

});
