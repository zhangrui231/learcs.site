// docusaurus-plugin-inject-js/index.js

module.exports = function (context, options) {
    return {
      name: 'docusaurus-plugin-inject-js',
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'script',
              attributes: {
                type: 'text/javascript',
                src: 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.4/libs/oversea/index.js', 
              },
            },
            // 也可以直接插入内联JavaScript代码
            {
              tagName: 'script',
              
              innerHTML: `
              document.addEventListener('DOMContentLoaded', function() {
                console.log('DOMContentLoaded coze');
                new CozeWebSDK.WebChatClient({
                    config: {
                    bot_id: '7380921096788590598',
                    },
                    componentProps: {
                    title: '智能助手',
                    },
                });
              });
              `,
            },
          ],
        };
      },
    };
  };
  