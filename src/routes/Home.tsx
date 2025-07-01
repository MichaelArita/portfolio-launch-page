import type { Route } from './+types/Home';
// import ViteReact from '@/pages/vite-react-default';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router!' },
	];
}

export default function Home() {
	return <h1>Hello, World!</h1>;
}
