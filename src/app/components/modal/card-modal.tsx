'use client';

import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Link,
} from '@nextui-org/react';

import { useRouter } from 'next/navigation';
interface ModaCardProps {
	title: string;
	originalUrl: string;
	content: string[];
	isOpen: boolean;
}

export default function CardModal({ title, content, isOpen, originalUrl }: ModaCardProps) {
	const router = useRouter();
	return (
		<>
			<Modal
				isOpen={isOpen}
				scrollBehavior="outside"
				placement="auto"
				onOpenChange={() => router.back()}
				backdrop="blur"
				classNames={{
					body: 'py-1',
					backdrop: 'bg-[#292f46]/50 backdrop-opacity-40',
					base: 'decoration-black text-black dark:text-neutral-300',
					header: 'border-b-[1px]  border-[#c3c5c9]  dark:border-[#414142] py-2',
					footer: 'border-t-[1px] border-[#c3c5c9] dark:border-[#414142] grid grid-cols-2 py-2',
					closeButton: 'hover:bg-white/5 active:bg-white/10',
				}}
			>
				<ModalContent>
					{() => (
						<>
							<ModalHeader>{title}</ModalHeader>
							<ModalBody>
								<ul>
									{content.map((el, i) => {
										return (
											<li key={i} className="mb-0.5">
												✔️ {el}
											</li>
										);
									})}
								</ul>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" href={originalUrl}>
									<Link
										className="w-full h-full grid text-[#F31260] align-middle justify-center"
										href={originalUrl}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-5 h-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
											/>
										</svg>
									</Link>
								</Button>
								<Button color="danger" variant="flat" onClick={() => router.back()}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
