export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
      youtube: string;
      github: string;
      linkedin: string;
    };
  }

const siteConfig: SiteConfig = {
	siteName: 'Explorer',
	description: 'A minimalistic travel blog which shares the experiences from travels around the world!',
	currentlyAt: 'Poland',
	socialLinks: {
		youtube: 'https://youtube.com/@makrdev',
		github: 'https://github.com/git-asia',
		linkedin: 'https://www.linkedin.com/in/joanna-tuszynska/',
	}
};

export default siteConfig;