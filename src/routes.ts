import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
	route('/about', 'pages/about.tsx'),
	route('/home', 'routes/Home.tsx'),
	route('*?', 'routes/Catchall.tsx'),
] satisfies RouteConfig;
