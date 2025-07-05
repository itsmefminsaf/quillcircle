import '@/ui/tailwind.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'QuillCircle',
		template: '%s | QuillCircle',
	},
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
