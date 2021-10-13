export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  /**
   * Shows all post tags in main index view and post view if true
   * Otherwise only shows first (primary) tag
   */
  showAllTags: boolean;
}

const config: WebsiteConfig = {
  title: 'Huy/s Devlog',
  description: 'A reflection of my life and works',
  coverImage: 'img/blog-cover.png',
  logo: 'img/devlog-logo.png',
  lang: 'en',
  siteUrl: 'https://huydhoang.com',
  facebook: 'https://www.facebook.com/groups/huy.devlog',
  twitter: 'https://twitter.com/huydh_',
  showSubscribe: true,
  mailchimpAction:
    'https://huydhoang.us5.list-manage.com/subscribe/post?u=b9292cbb9286dfa520e415392&amp;id=01527baaf5',
  mailchimpName: 'b_b9292cbb9286dfa520e415392_01527baaf5',
  mailchimpEmailFieldName: 'EMAIL',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
  showAllTags: true,
};

export default config;
