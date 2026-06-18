import { Given, Then, Status } from '@cucumber/cucumber';
import { APIRequestContext, expect, request } from "playwright/test";
import playwrightConfig from '../../playwright.config';

let response: any

Given('I send a delete request', async function () {

    const baseURL = 'https://reqres.in/api/users/2'

    const apiRequestContext = await request.newContext({

        baseURL: baseURL
    })

    response = await apiRequestContext.delete(baseURL, {

        headers: {

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        }
    })

    await apiRequestContext.dispose();

    // 2nd way

     // Create a new API request context
    const apiContext: APIRequestContext = await playwrightConfig.request.newContext({
        baseURL: 'https://reqres.in',
        extraHTTPHeaders: {
            'x-api-key': 'reqres_123a63cda1f448c1883661b9a94ead0c',
        },
    });

    // Send the DELETE request
    const response = await apiContext.delete('/api/users/2');

    // Assert the response status is 204 No Content
    expect(response.status()).toBe(204);

    // Dispose the API request context
    await apiContext.dispose();

});


Then('The response status code of delete should be {int}', async function (expectedStatusCode) {

    expect(response.status()).toBe(expectedStatusCode)

});

Given('I send a get request', async function () {

    const baseURL = 'https://reqres.in/api/users?page=2'

    const apiRequestContext = await request.newContext({

        baseURL: baseURL
    })

    response = await apiRequestContext.get('https://reqres.in/api/users?page=2', {

        headers: {

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        }
    })

});


Then('The response status code of get should be {int}', async function (expectedStatusCode) {

    expect(response.status()).toBe(expectedStatusCode)

    const responseBody = await response.json()

    console.log(responseBody)

    // to get the response from the json

    console.log(responseBody.data[0].id) //7

    console.log(responseBody.data[1].email)

    // to verify the json data

    expect(responseBody.data[1].email).toBe('lindsay.ferguson@reqres.in')

});

Given('I send a post request with body', async function (requestBody) {

    const baseURL = 'https://reqres.in/api/users'

    const apiRequestContext = await request.newContext({

        baseURL: baseURL
    })

    response = await apiRequestContext.post(baseURL, {

        headers: {

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },

        data: JSON.parse(requestBody)

        //  data : {



        //     "name" : responseBody.data[1].email,

        //     "job" : responseBody.data[0].id
        //  }
    })

});


Then('The response status code of post should be {int}', async function (expectedStatusCode) {

    expect(response.status()).toBe(expectedStatusCode)

});

Given('I send a put request with body', async function (requestBody) {

    const baseURL = 'https://reqres.in/api/users/2'

    const apiRequestContext = await request.newContext({

        baseURL: baseURL
    })

    response = await apiRequestContext.put(baseURL, {

        headers: {

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },

        data: JSON.parse(requestBody)

    })

});


Then('The response status code of put should be {int}', async function (expectedStatusCode) {

    expect(response.status()).toBe(expectedStatusCode)

    const responseBody = await response.json()

    console.log(responseBody)

    expect(responseBody.name).toBe('Ashok')

    expect(responseBody.job).toBe('Technical Engineer')
});

Given('I send a patch request with body', async function (requestBody) {

    const baseURL = 'https://reqres.in/api/users/2'

    const apiRequestContext = await request.newContext({

        baseURL: baseURL
    })

    response = await apiRequestContext.patch(baseURL, {

        headers: {

            "x-api-key": "reqres_123a63cda1f448c1883661b9a94ead0c"
        },

        data: JSON.parse(requestBody)

    })

});


Then('The response status code of patch should be {int}', async function (expectedStatusCode) {

    expect(response.status()).toBe(expectedStatusCode)

    const responseBody = await response.json()

    console.log(responseBody)

    expect(responseBody.name).toBe('Jaspreet')

    expect(responseBody.job).toBe('Technical Manager')
});

// Here is the complete Playwright TypeScript + Cucumber BDD automation code for the DELETE request to `https://reqres.in/api/users/2`:

// ---

// ### Project Structure

// ```
// playwright-cucumber-delete/
// ├── features/
// │   └── delete-user.feature
// ├── steps/
// │   └── delete-user.steps.ts
// ├── cucumber.json
// ├── package.json
// └── tsconfig.json
// ```

// ---

// ### 1. `features/delete-user.feature`

// ```gherkin
// Feature: Delete User API

//   Scenario: Successfully delete a user
//     Given the API base URL is "https://reqres.in/api"
//     And the request header "x-api-key" is set to "reqres_123a63cda1f448c1883661b9a94ead0c"
//     When I send a DELETE request to "/users/2"
//     Then the response status code should be 204
//     And the response body should be empty
// ```

// ---

// ### 2. `steps/delete-user.steps.ts`

// ```typescript
// import { Given, When, Then, Before, After } from '@cucumber/cucumber';
// import { request, APIRequestContext, APIResponse } from '@playwright/test';
// import { expect } from '@playwright/test';

// let apiContext: APIRequestContext;
// let response: APIResponse;
// let baseURL: string;
// const headers: Record<string, string> = {};

// Before(async () => {
//   apiContext = await request.newContext();
// });

// After(async () => {
//   await apiContext.dispose();
// });

// Given('the API base URL is {string}', (url: string) => {
//   baseURL = url;
// });

// Given('the request header {string} is set to {string}', (key: string, value: string) => {
//   headers[key] = value;
// });

// When('I send a DELETE request to {string}', async (endpoint: string) => {
//   response = await apiContext.delete(`${baseURL}${endpoint}`, {
//     headers,
//   });
// });

// Then('the response status code should be {int}', async (statusCode: number) => {
//   expect(response.status()).toBe(statusCode);
// });

// Then('the response body should be empty', async () => {
//   const body = await response.text();
//   expect(body).toBe('');
// });
// ```

// ---

// ### 3. `cucumber.json`

// ```json
// {
//   "default": {
//     "require": ["steps/**/*.ts"],
//     "requireModule": ["ts-node/register"],
//     "paths": ["features/**/*.feature"],
//     "format": ["progress-bar", "html:reports/cucumber-report.html"],
//     "formatOptions": { "snippetInterface": "async-await" }
//   }
// }
// ```

// ---

// ### 4. `package.json`

// ```json
// {
//   "name": "playwright-cucumber-delete",
//   "version": "1.0.0",
//   "scripts": {
//     "test": "cucumber-js",
//     "test:report": "cucumber-js --format html:reports/cucumber-report.html"
//   },
//   "dependencies": {
//     "@cucumber/cucumber": "^10.3.2",
//     "@playwright/test": "^1.44.0"
//   },
//   "devDependencies": {
//     "ts-node": "^10.9.2",
//     "typescript": "^5.4.5",
//     "@types/node": "^20.12.12"
//   }
// }
// ```

// ---

// ### 5. `tsconfig.json`

// ```json
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "module": "commonjs",
//     "strict": true,
//     "esModuleInterop": true,
//     "outDir": "dist",
//     "rootDir": ".",
//     "resolveJsonModule": true
//   },
//   "include": ["features/**/*.ts", "steps/**/*.ts"]
// }
// ```

// ---

// ### Setup & Run

// ```bash
// # Step 1 - Install dependencies
// npm install @cucumber/cucumber @playwright/test
// npm install --save-dev ts-node typescript @types/node

// # Step 2 - Run the tests
// npm test
// ```

// ---

// ### Expected Output

// ```
// Feature: Delete User API

//   Scenario: Successfully delete a user        ✔ passed
//     Given the API base URL is "https://reqres.in/api"
//     And the request header "x-api-key" is set to "reqres_123a63cda1f448c1883661b9a94ead0c"
//     When I send a DELETE request to "/users/2"
//     Then the response status code should be 204
//     And the response body should be empty

// 1 scenario (1 passed)
// 5 steps (5 passed)
// ```

