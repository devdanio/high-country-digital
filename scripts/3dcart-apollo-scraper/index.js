const puppeteer = require("puppeteer");
const fs = require("fs").promises;

const searchQueries = [
  '"eCommerce Software by 3dcart"',
  '"Powered by 3dcart"',
  'site:3dcart.com "success stories"',
  '"online store" 3dcart',
  '3dcart "shopping cart"',
  "intext:3dcart",
  "site:*.3dcartstores.com",
];

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractDomain(fullUrl) {
  try {
    const parsedUrl = new URL(fullUrl);
    return parsedUrl.hostname;
  } catch (error) {
    console.error(`Error parsing URL ${fullUrl}: ${error.message}`);
    return fullUrl;
  }
}

async function scrollToBottom(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

async function collectGoogleResults() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  let results = new Set();

  try {
    for (const query of searchQueries) {
      console.log(`Searching for: ${query}`);
      await page.goto(
        `https://www.google.com/search?q=${encodeURIComponent(query)}&num=100`
      );

      let pageNum = 1;
      while (results.size < 1000) {
        console.log(
          `Processing page ${pageNum} of Google results for "${query}"`
        );
        await delay(2000); // 2 second delay between searches

        await scrollToBottom(page);

        const urls = await page.evaluate(() => {
          return Array.from(
            document.querySelectorAll('a[jsname="UWckNb"]')
          ).map((el) => el.href);
        });

        for (const url of urls) {
          const domain = extractDomain(url);
          if (!results.has(domain)) {
            results.add(domain);
            await fs.appendFile("google_results.txt", domain + "\n");
            console.log(`Added domain: ${domain} (Total: ${results.size})`);
          }
        }

        if (results.size >= 1000) break;

        const nextButton = await page.$("#pnnext");
        if (nextButton) {
          await nextButton.click();
          await page.waitForNavigation({ waitUntil: "networkidle0" });
          pageNum++;
        } else {
          console.log(`No more search results available for "${query}".`);
          break;
        }
      }

      if (results.size >= 1000) break;
    }
  } finally {
    await browser.close();
    console.log(
      `Google search complete. Total unique domains found: ${results.size}`
    );
  }
}

async function verify3dcartSites() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  let verified = 0;

  try {
    const domains = (await fs.readFile("google_results.txt", "utf8"))
      .split("\n")
      .filter(Boolean);
    console.log(`Loaded ${domains.length} domains for verification`);

    for (const domain of domains) {
      try {
        await page.goto(`http://${domain}`, {
          waitUntil: "networkidle0",
          timeout: 30000,
        });
        const is3dcart = await page.evaluate(() => {
          return document.body.innerText.toLowerCase().includes("3dcart");
        });

        if (is3dcart) {
          console.log(`Verified 3dcart site: ${domain}`);
          await fs.appendFile("verified_3dcart_sites.txt", domain + "\n");
          verified++;
        }
      } catch (error) {
        console.error(`Error verifying ${domain}: ${error.message}`);
      }

      await delay(1000); // 1 second delay between site visits
    }
  } finally {
    await browser.close();
    console.log(
      `Verification complete. Total verified 3dcart sites: ${verified}`
    );
  }
}

async function main() {
  await collectGoogleResults();
  await verify3dcartSites();
}

main().catch(console.error);
