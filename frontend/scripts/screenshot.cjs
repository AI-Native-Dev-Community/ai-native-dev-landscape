// screenshot.js
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    // Launch the browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // set size to 1920x1080 once before processing URLs
    await page.setViewport({ width: 1920, height: 1080 });

    // Navigate to the desired URL
    for (const url of ['/landscape', '/catalog', '/awesome']) {
        await page.goto("http://localhost:4173" + url)
        await page.waitForNetworkIdle();

        // Take a screenshot and save it in the 'dist' directory
        // full page screenshot
        await page.screenshot({ path: `dist/${url.replace('/', '_')}.png`, fullPage: true }); // Change the filename as needed
    }

    // Close the browser
    await browser.close();
})();