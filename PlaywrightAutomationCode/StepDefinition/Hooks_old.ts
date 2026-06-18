// import { BeforeAll, AfterAll, After, Before, Status } from '@cucumber/cucumber';
// import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
// import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

// import { pageFixture } from "../hooks/pageFixture";
// import { TestData1, TestData2, TestData3, OrangeHRMUserCredentials } from "../Files/TestData.json"


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

//     page = await context.newPage();

//     pageFixture.page = page

//     console.log("Before")
// });

// After(async function ({ pickle, result }) {

//     if (result?.status === Status.FAILED) {
//         // Screenshots are saved in the directory after the test is completed for each scenario

//         const img = await pageFixture.page.screenshot({ path: `./test-result/ScreenshotsFailed/${pickle.name}.png` });

//         await this.attach(img, 'image/png');

//         // Attach video on failure (if enabled in Playwright config)
//         const videoPath = await page.video()?.path();
        
//         if (videoPath) {
//             this.attach(videoPath, 'video/webm');
//         }
//     }
//     else if (result?.status === Status.PASSED) {

//         const img = await pageFixture.page.screenshot({ path: `./test-result/ScreenshotsPassed/${pickle.name}.png` });

//         await this.attach(img, 'imagepasssed/png');

//         const videoPath = await page.video()?.path();

//         if (videoPath) {
//             this.attach(videoPath, 'video/webm');
//         }
//     }
//     console.log("after")
// });

// AfterAll(async function () {

//     // //close the page

//     await pageFixture.page.close();

//     // //browser.close/context.close 

//    // await context.close()

//     // console.log("afterAll")

//     // console.log("==============================")
// });




//   Then('I launch the test automation practice application in hooks', async function () {
  
//       await pageFixture.page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 })
  
//   });

//   Then('I am reading the testdata1 from the json file in hooks', async function () {

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