module.exports = function (context, options) {
    const isProd = process.env.NODE_ENV === "production";
    // 获取配置中的trackingID参数
    const { trackingID } = options;
    return {
      name: "plugin-baidu-analytics",
      injectHtmlTags({ content }) {
        if (!isProd) {
          return {};
        }
        return {
          headTags: [
            {
              tagName: "link",
              attributes: {
                rel: "preconnect",
                href: "https://hm.baidu.com",
              },
            },
            {
              tagName: "script",
              attributes: {
                async: true,
                src: `https://hm.baidu.com/hm.js?${trackingID}`,
              },
            },
          ],
        };
      },
    };
  };