import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SocialLink = ({ platform, link }: {
    platform: string;
    link: string;
}) => {

	const getIcon = (platform: string) => {
		switch (platform) {
		case 'facebook':
			return <Facebook size='18'/>;
		case 'tweeter':
			return <Twitter size='18' />;
		case 'youtube':
			return <Youtube size='18' />;
		case 'instagram':
			return <Instagram size='18' />;
		case 'github':
			return <Github size='18' />;
		}
	};

	return (
		<Link href={link}>{ getIcon(platform) }</Link>
	);
};

export default SocialLink;