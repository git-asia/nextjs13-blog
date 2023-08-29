export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
      facebook: string;
      twitter: string;
      youtube: string;
      instagram: string;
      github: string;
    };
  }

const siteConfig: SiteConfig = {
	siteName: 'Explorer',
	description: 'A minimalistic travel blog which shares the experiences from travels around the world!',
	currentlyAt: 'Poland',
	socialLinks: {
		facebook: 'https://facebook.com',
		twitter: 'https://twitter.com',
		youtube: 'https://youtube.com',
		instagram: 'https://www.instagram.com',
		github: 'https://github.com/git-asia',
	}
};

export default siteConfig;