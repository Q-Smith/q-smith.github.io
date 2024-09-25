// Installed Plugins
import pluginMetagen from "eleventy-plugin-metagen";

// Custom configurations
import assetsConfig from "./src/_config/assets.js";

export default function(eleventyConfig) {
    // Installed Plugins
    eleventyConfig.addPlugin(pluginMetagen);

    // Custom configurations
    eleventyConfig.addPlugin(assetsConfig);

    // Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "docs"
        }
    };
};