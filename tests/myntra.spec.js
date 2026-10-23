import { test, expect } from '@playwright/test';

test('Find minimum product price using map()', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    const products = page.locator('//li[@class="product-base"]');

    
    const pricesText = await page.locator(
        '//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (not(@class) and text())]'
    ).allInnerTexts();
    console.log('pricesTexts:',pricesText);
    // Convert prices into numbers using map()
    const prices = pricesText.map(text =>
        Number(text.replace(/[^\d]/g, ''))
    );

    console.log('Total prices:', prices);

    // Find minimum price
    const minPrice = Math.min(...prices);

    console.log('Minimum product price: ₹' + minPrice);

    // Locate the product with the minimum price
    const minProduct =  page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[(@class="product-discountedPrice" and normalize-space()="Rs. ${minPrice}") or not(@class) and normalize-space()="Rs. ${minPrice}"]/ancestor::div[@class="product-productMetaInfo"]`);

 // Get Product Brand using XPath
const productBrand = await minProduct
    .locator('//h3[@class="product-brand"]')
    .innerText();

// Get Product Name using XPath
const productName = await minProduct
    .locator('//h4[@class="product-product"]')
    .innerText();

console.log('Product Brand:', productBrand);
console.log('Product Name:', productName);
});