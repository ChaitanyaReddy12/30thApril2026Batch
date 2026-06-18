// import { BeforeAll, AfterAll, After, Before, Status } from '@cucumber/cucumber';
// import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
// import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

// import { pageFixture } from "../hooks/pageFixture";
// import { TestData1, TestData2, TestData3, OrangeHRMUserCredentials } from "../Files/TestData.json"
// import path from 'path';
// import process from 'process';



// let page: Page;
// let browser: Browser;
// let context: BrowserContext;

// setDefaultTimeout(60000) // 60 seconds, if any step takes more than 60 seconds, it will be failed due to timeout error

// BeforeAll(async function () {


//     browser = await chromium.launch({
//         headless: false,
//         args: ["--start-maximized"],
//     });

//     console.log("BeforeAll")

// });

// Before(async function () {

//     context = await browser.newContext({
//         recordVideo: { dir: 'test-result/videos' },
//         viewport: null
//     });

//     // 3. Start tracing before navigating or creating a page
//     await context.tracing.start({
//         screenshots: true,
//         snapshots: true,
//         sources: true
//     });

//     page = await context.newPage();

//     pageFixture.page = page

//     console.log("Before")
// });

// After(async function (scenario) {
//     // Sanitize scenario name to use as a filename
//     const traceName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
//     const tracePath = path.join(process.cwd(), `reports/traces/${traceName}.zip`);

//     // 5. Close the page
//     await pageFixture.page.close();

//     // 6. Stop tracing and save the file
//     // Tip: You can wrap this in an if condition to save only on failure
//     await context.tracing.stop({ path: tracePath });

//     // 7. Clean up the context and browser
//     // await context.close();
//     // await browser.close();
// });

// AfterAll(async function () {

//     //close the page
//     await pageFixture.page.close();

//     //browser.close/context.close 

//     //await context.close()

//     console.log("afterAll")

//     console.log("==============================")
// });



// Then('I launch the test automation practice application in hooks', async function () {

//     await pageFixture.page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 })

// });

// Then('I am reading the testdata1 from the json file in hooks', async function () {

//     await pageFixture.page.getByPlaceholder('Enter Name').fill(TestData1.Name)

//     await pageFixture.page.getByPlaceholder('Enter EMail').fill(TestData1.Email)

//     await pageFixture.page.getByRole('textbox', { name: 'Phone' }).fill(TestData1.Phone)

//     await pageFixture.page.locator('[id="textarea"]').fill(TestData1.Address)

//     await pageFixture.page.locator(".wikipedia-search-input").type(TestData1.wikipedia)

// })

// Then('I am reading the testdata2 from the json file in hooks', async function () {

//     await pageFixture.page.getByPlaceholder('Enter Name').fill(TestData2.Name)

//     await pageFixture.page.getByPlaceholder('Enter EMail').fill(TestData2.Email)

//     await pageFixture.page.getByRole('textbox', { name: 'Phone' }).fill(TestData2.Phone)

//     await pageFixture.page.locator('[id="textarea"]').fill(TestData2.Address)

//     await pageFixture.page.locator(".wikipedia-search-input").type(TestData2.wikipedia)

// })

// Then('I am reading the testdata3 from the json file in hooks', async function () {

//     await pageFixture.page.getByPlaceholder('Enter Name').fill(TestData3.Name)

//     await pageFixture.page.getByPlaceholder('Enter EMail').fill(TestData3.Email)

//     await pageFixture.page.getByRole('textbox', { name: 'Phone' }).fill(TestData3.Phone)

//     await pageFixture.page.locator('[id="textarea"]').fill(TestData3.Address)

//     await pageFixture.page.locator(".wikipedia-search-input").type(TestData3.wikipedia)

// })

// Then('I am reading the testdata for orangehrm application in hooks', async function () {

//     await pageFixture.page.goto(OrangeHRMUserCredentials.url)

//     await pageFixture.page.locator('//input[@name="username"]').fill(OrangeHRMUserCredentials.username)

//     await pageFixture.page.locator('//input[@name="password"]').fill(OrangeHRMUserCredentials.password)

//     await pageFixture.page.locator('//button[@type="submit"]').click()

// })

// Then('test case title', async function () {

//     await page.getByRole('textbox', { name: 'Enter Name' }).click();

//     await page.getByRole('textbox', { name: 'Enter Name' }).fill('test');

//     await page.getByRole('textbox', { name: 'Enter Name' }).press('Tab');

//     await page.getByRole('textbox', { name: 'Enter EMail' }).fill('hate');

//     await page.getByRole('textbox', { name: 'Enter EMail' }).press('Tab');

//     await page.getByRole('textbox', { name: 'Enter Phone' }).fill('chaitanya');
//     await page.locator('#Wikipedia1_wikipedia-search-input').click();
//     await page.locator('#Wikipedia1_wikipedia-search-input').fill('selenium');
//     await page.locator('input[type="submit"]').click();
//     const page1Promise = page.waitForEvent('popup');
//     await page.getByRole('link', { name: 'Selenium (software)' }).click();
//     const page1 = await page1Promise;
//     await page.getByRole('button', { name: 'START' }).click();
//     page.once('dialog', dialog => {
//         console.log(`Dialog message: ${dialog.message()}`);
//         dialog.dismiss().catch(() => { });
//     });
//     await page.getByRole('button', { name: 'START' }).click();
//     await page.getByLabel('Colors:').selectOption('green');
//     await page.getByLabel('Country:').selectOption('germany');

// })