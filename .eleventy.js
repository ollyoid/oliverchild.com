const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // Passthrough copies
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/files");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  // Image shortcode
  eleventyConfig.addShortcode("image", async function (src, alt, sizes) {
    if (!src) return "";

    let formats = ["webp", "jpeg"];
    if (src.toLowerCase().endsWith(".gif")) {
      formats = ["gif"];
    }

    let metadata = await Image(src, {
      widths: [300, 600, "auto"],
      formats: formats,
      outputDir: "./_site/img/",
      urlPath: "/img/",
      sharpOptions: {
        animated: true
      }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("date", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
