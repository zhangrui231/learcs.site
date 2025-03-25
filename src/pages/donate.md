---
title: 支持社区发展
sidebar_position: 99
hide_table_of_contents: true
---

# 支持 CS 自学社区发展

CS 自学社区是一个面向国内广大计算机自学者的平台，致力于提供优质的名校公开课翻译资源。我们依托开源生态，借助最新的 AI 技术成果，高效翻译课程内容，清理语言障碍，让国内自学者能够无障碍获取全球顶尖教育资源。您的捐赠将帮助我们：

- 🚀 维护社区网站运营
- 🌍 翻译更多优质课程资源
- 🔧 开发相关学习工具
- 🎯 支持志愿者团队建设
- 🐣 资助社区成员的教育科技创业项目，推动创新教育发展

## 捐赠方式

请扫描下方二维码进行捐赠，支持我们的发展：

<div className="donation-grid">
  <div className="donation-method">
    <h3>微信支付</h3>
    <div className="donation-qrcode-container">
      <img 
        src="/img/wechat-pay-qrcode.jpg" 
        alt="微信支付二维码" 
        className="donation-qrcode"
      />
    </div>
    <p>扫码后请输入捐赠金额</p>
  </div>
  <div className="donation-method">
    <h3>支付宝</h3>
    <div className="donation-qrcode-container">
      <img 
        src="/img/alipay-qrcode.jpg" 
        alt="支付宝二维码" 
        className="donation-qrcode"
      />
    </div>
    <p>扫码后请输入捐赠金额</p>
  </div>
</div>

## 捐赠致谢

所有捐赠者将获得：

- 📧 电子感谢信
- 🏆 社区荣誉榜展示（可选）
- 💡 优先获取新课程通知

> "教育应该是免费的，但运营成本是真实存在的。感谢您的理解与支持！"  
> —— CS 自学社区团队

<style>{`
.donation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}
.donation-method {
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--ifm-background-surface-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.donation-method:hover {
  transform: translateY(-5px);
}
.donation-qrcode-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 aspect ratio */
  margin: 1rem 0;
}
.donation-qrcode {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 1px solid #eee;
  padding: 10px;
  background: white;
}
@media (max-width: 600px) {
  .donation-grid {
    grid-template-columns: 1fr;
  }
}
`}</style>