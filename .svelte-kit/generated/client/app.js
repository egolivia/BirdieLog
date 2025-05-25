export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/clubs": [~3],
		"/clubs/[id]": [~4],
		"/quellen": [5],
		"/quiz": [~6],
		"/quiz/regeln": [~7],
		"/quiz/regeln/teil1": [8],
		"/quiz/regeln/teil2": [9],
		"/quiz/regeln/teil3": [10],
		"/quiz/regeln/teil4": [11],
		"/quiz/regeln/teil5": [12],
		"/quiz/regeln/teil6": [13],
		"/quiz/regeln/teil7": [14],
		"/quiz/takeQuiz": [~15],
		"/scorecards": [~16],
		"/scorecards/graph": [~18],
		"/scorecards/new": [~19],
		"/scorecards/[id]": [~17],
		"/videos": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';