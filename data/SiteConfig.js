module.exports = {
  blogPostDir: "programs", // The name of directory that contains your posts.
  siteTitle: "Oregon Knowledge Bank", // Site title.
  siteTitleAlt: "OKB", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://okb.netlify.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A local resource for public safety programs and research.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Policing", // Default category for posts.
  userName: "Oregon Knowledge Bank", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Salem, OR", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "The CJC and DPSST's CPE...", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    // {
    //   label: "GitHub",
    //   url: "https://github.com/alexpichel/okb",
    //   iconClassName: "fa fa-github"
    // },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/ORKnowledgebank",
    //   iconClassName: "fa fa-twitter"
    // },
    {
      label: "Contact",
      url: "mailto:okb@oregon.gov",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. CJC & DPSST" // Copyright string for the footer of the website and RSS feed.
};
