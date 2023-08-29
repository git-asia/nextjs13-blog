import React from 'react';
import PaddingContainer from '../layout/padding-container';
import siteConfig from '@/config/site';
import Link from 'next/link';
import SocialLink from '../elements/social-links';

const Footer = () => {
	return (
		<div className='py-8 mt-10 border-t'>
			<PaddingContainer>
				<div>
					<h2 className='text-3xl font-bold'>{siteConfig.siteName}</h2>
					<p className='max-w-md mt-2 text-lg text-neutral-700'>{siteConfig.description}</p>
				</div>
				{/* Social and Currently At */}
				<div className='flex flex-wrap justify-between gap-4 mt-6'>
					<div>
						<div className='font-medium text-lg'>#exploretheworld</div>
						<div className='flex items-center gap-3 text-neutral-600 mt-2'>
							<SocialLink platform='facebook' link={siteConfig.socialLinks.facebook}/>
							<SocialLink platform='tweeter' link={siteConfig.socialLinks.twitter}/>
							<SocialLink platform='youtube' link={siteConfig.socialLinks.youtube}/>
							<SocialLink platform='instagram' link={siteConfig.socialLinks.instagram}/>
							<SocialLink platform='github' link={siteConfig.socialLinks.github}/>
						</div>
					</div>
					<div>
						<div className='text-sm text-neutral-400'>Currently At</div>
						<div className='flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md'>
							<div className='bg-emerald-400 rounded-full w-2 h-2' />
							{siteConfig.currentlyAt}
						</div>
					</div>
				</div>
				{/* Bottom section */}
				<div className='flex flex-wrap items-center justify-between gap-4 border-t py-3 mt-16'>
					<div className='text-sm text-neutral-400'>
						<p>All rights reserved | Copyright {new Date().getFullYear()}</p>
					</div>
					<div>
						<p>Made with 🐥 by{' '} 
							<Link href='https://bluedack.dev'
								className='text-blue-700'>@Blue Duck Dev</Link>
						</p>
					</div>
				</div>
			</PaddingContainer>
		</div>
	);
};

export default Footer;