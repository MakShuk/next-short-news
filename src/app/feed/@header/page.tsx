import React from 'react';
import GitHubLink from '../../components/link/git-hub';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import SwitchTheme from '@/app/components/buttons/switch-theme';

export default function HeaderArea() {
	return (
		<Navbar shouldHideOnScroll className="bg-white dark:bg-black">
			<NavbarBrand>
				<p className="font-bold text-inherit text-sky-600 dark:text-neutral-300">SHORT.NW</p>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<SwitchTheme />
				</NavbarItem>
				<NavbarItem>
					<GitHubLink />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
