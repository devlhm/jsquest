import { verifySolution } from "../api/solution";
import { gameMethods } from "./gameMethods";
import { finishGame } from "./finishGame";

export interface Command {
	[key: string]: any[];
}

export const runCode = (
	chapterIndex: number | any,
	lessonIndex: number | any,
	code: any
) => {
	verifySolution(chapterIndex, lessonIndex, code).then((res) => {
		switch (res.status) {
			case 200:
				gameMethods.reset();
				setTimeout(() => {
					handleSolutionSuccess(res);
				}, 500);
				break;
			default:
				handleSolutionFailure(res);
				break;
		}
		return res;
	});
};

const handleSolutionFailure = (res: any) => {
	const errMessageSpan = document.getElementById("error-message")!;
	const errIndicator = document.getElementById("error-indicator")!;
	errIndicator.style.display = "flex";
	errMessageSpan.innerText = res.data.message;
};

const handleSolutionSuccess = (res: any) => {
	console.log(res);

	const commands: Command[] = res.data.codeToExec!;
	const interval = 500;

	let awaitTime = 0;

	commands.forEach((command, index) => {
		setTimeout(function () {
			const commandName: string = Object.keys(command)[0];
			const args: any[] = command[commandName];

			gameMethods[commandName](...args);
		}, index * interval);

		awaitTime = index * interval + 1000;
	});

	setTimeout(function () {
		finishGame();
	}, awaitTime);
};
