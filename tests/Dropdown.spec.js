import {test} from  '@playwright/test'

test('launch flipkart',async ({page})=>{
    await page.goto('https://www.myntra.com/boy-tshirts');
    const title = await page.title();
    console.log(title);
    console.log(await page.url());

    await page.goto('http://www.instagram.com')
    console.log(await page.url());
    console.log(await page.title());
    await page.goBack();
    await page.goForward();

})

