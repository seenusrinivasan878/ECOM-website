// import { test, expect } from '@playwright/test';

// test('Find minimum product price using map()', async ({ page }) => {

//     await page.goto('https://www.myntra.com/boy-tshirts');

//     const products = page.locator('//li[@class="product-base"]');

    
//     const pricesText = await page.locator(
//         '//li[@class="product-base"]//span[contains(@class,"product-discountedPrice")]'
//     ).allInnerTexts();

//     // Convert prices into numbers using map()
//     const prices = pricesText.map(text =>
//         Number(text.replace(/[^\d]/g, ''))
//     );

//     console.log('Total prices:', prices);

//     // Find minimum price
//     const minPrice = Math.min(...prices);

//     console.log('Minimum product price: ₹' + minPrice);

//     // Locate the product with the minimum price
//     const minProduct = products.filter({
//         has: page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/child::span[not(@class) and text()] | //li[@class="product-base"]/descendant::div[@class="product-price"]/child::span/child::span[@class="product-discountedPrice"]')}).first();

//     // Get brand
//     const productBrand = await minProduct
//         .locator('.product-brand')
//         .innerText();

//     // Get product name
//     const productName = await minProduct
//         .locator('.product-product')
//         .innerText();

//     console.log('Product Brand:', productBrand);
//     console.log('Product Name:', productName);
// });