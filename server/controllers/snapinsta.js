const puppeteer = require("puppeteer");

let browser;

const startBrowser = async () => {
  browser = await puppeteer.launch({ headless: "new" });
  // browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: "new" });
};

const disableResources = async (page) => {
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (
      request.resourceType() === "stylesheet" ||
      request.resourceType() === "font" ||
      request.resourceType() === "image" ||
      request.resourceType() === "media" ||
      request.url().includes("googlesyndication.com") ||
      request.url().includes("doubleclick.net")
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });
};

const profileData = async (req, res) => {
  const { url } = req.query;

  try {
    const page = await browser.newPage();
    await disableResources(page);
    await page.goto("https://toolzu.com/downloader/instagram/instadp/");
    await page.type("#instagramdownloaderform-search", url);

    await page.waitForSelector("div button.btn.btn-block");
    await page.evaluate(() => {
      document.querySelector("div button.btn.btn-block").click();
    });

    await page.waitForSelector("div.card.border-none");
    const { thumbnail, download, type } = await page.evaluate(() => {
      const data = {
        thumbnail: document.querySelector("img.card-img-top")?.src,
        download: document.querySelector("a.cbp-caption")?.href,
        type: "IMAGE",
      };

      return data;
    });
    await page.close();
    return res.status(200).send([{ thumbnail, download, type }]);
  } catch (error) {
    res.status(500).send({ status: "something went wrong" });
  }
};

const postImages = async (req, res) => {
  const { url } = req.query;
  let page;

  try {
    page = await browser.newPage();
    await disableResources(page);
    await page.goto("https://snapinsta.app/");
    await page.type("#url", url);
    await page.click("button.btn.btn-get");

    // SETTIMEOUT TIME START
    // await page.waitForTimeout(2000); // Adjust timeout as necessary

    // const errorMessage = await page.evaluate(() => {
    //   const errorDiv = document.querySelector("#alert.alert.alert-box.show");
    //   return errorDiv ? errorDiv.innerText : null;
    // });

    // if (errorMessage) {
    //   await page.close();
    //   return res.status(500).send({ status: "Error occured !" });
    // }

    // const downloadItemExists = await page.evaluate(() => {
    //   return !!document.querySelector(".download-item");
    // });

    // if (!downloadItemExists) {
    //   await page.close();
    //   return res.status(500).send({ status: "Error occured !" });
    // }

    // await page.waitForSelector(".download-item");
    // SETTIMEOUT TIME END

    await page.waitForSelector(".download-item");

    const extractedData = await page.evaluate(() => {
      const allImageDivs = Array.from(
        document.querySelectorAll(".download-item")
      );
      const imageArray = [];
      for (const item of allImageDivs) {
        const previewImage = item.querySelector(".media-box img");
        const downloadLink = item.querySelector(".media-box .download-media");

        if (previewImage && downloadLink) {
          imageArray.push({
            thumbnail: previewImage.src,
            download: downloadLink.href,
            type: downloadLink.innerText.trim().includes("Photo")
              ? "IMAGE"
              : "VIDEO",
          });
        }
      }

      return imageArray;
    });

    return res.status(200).send(extractedData);
  } catch (error) {
    res
      .status(500)
      .send({ status: "something went wrong", error: error.message });
  } finally {
    if (page) {
      await page.close();
    }
  }
};

const postReels = async (req, res) => {
  const { url } = req.query;
  let page;

  try {
    page = await browser.newPage();
    await disableResources(page);
    await page.goto("https://snapinsta.app/");
    await page.type("#url", url);
    await page.click("button.btn.btn-get");

    // await page.waitForTimeout(2000); // Adjust timeout as necessary

    // const errorMessage = await page.evaluate(() => {
    //   const errorDiv = document.querySelector("#alert.alert.alert-box.show");
    //   return errorDiv ? errorDiv.innerText : null;
    // });

    // if (errorMessage) {
    //   await page.close();
    //   return res.status(500).send({ status: "Error occured !" });
    // }

    // const downloadItemExists = await page.evaluate(() => {
    //   return !!document.querySelector(".download-item");
    // });

    // if (!downloadItemExists) {
    //   await page.close();
    //   return res.status(500).send({ status: "Error occured !" });
    // }

    // await page.waitForSelector("a.btn.download-media");

    await page.waitForSelector(".download-item");

    const downloadLink = await page.evaluate(() => {
      const downloadBtn = document.querySelector("a.btn.download-media");
      if (downloadBtn) {
        return downloadBtn.href;
      }
      return null;
    });

    const reelThumbnail = await page.evaluate(() => {
      const reelThumbnail = document.querySelector("div.media-box img");
      if (reelThumbnail) {
        return reelThumbnail.src;
      }
      return null;
    });

    return res.status(200).send([
      {
        thumbnail: reelThumbnail,
        download: downloadLink,
        type: "VIDEO",
      },
    ]);
  } catch (error) {
    res
      .status(500)
      .send({ status: "something went wrong", error: error.message });
  } finally {
    if (page) {
      await page.close();
    }
  }
};

startBrowser();

module.exports = { postReels, postImages, profileData };
