import { test } from "@playwright/test";

test("Find minimum product price using map()", async ({ page }) => {

    await page.goto("https://www.myntra.com/boy-tshirts");

    const pricesText = await page.locator('//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or (not(@class) and normalize-space(text()')]

    ).allInnerTexts();

    // Convert price strings into numbers
    const prices = pricesText.map(text =>
        Number(text.replace(/[^\d]/g, ""))
    );

    console.log("total prices:"
        , prices);

    // Find the minimum price
    const minPrice = Math.min(...prices);

    console.log("Minimum product price: ₹" + minPrice);
    // Locate the brand of the product with the minimum price
    const ProductBrand = await page.locator('//span[@class='product-discountedPrice'and normalize-space(.)='Rs. ${minPrice}']/ancestor::li[@class="product-base"]//h3[@class="product-brand"]//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h3[@class="product-brand"]').allTextContents();

    console.log("Product Brand:",ProductBrand);
    //minimum productName
    const ProductName = page.locator(
//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"and normalize-space(.)='Rs. ${minPrice}']/ancestor::div[@class="product-productMetaInfo"]//h4[@class="product-product"]);
    console.log("Product Name:", await ProductName.first().textContent());

});