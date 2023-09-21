const toolbar = plugin.CreateToolbar("MyToolbar");
const button = toolbar.CreateButton("MyButton", "", "");

import { makeHello } from "@rbxts/graffiti";

button.Click.Connect(() => {
	print(makeHello("Graffiti"));
});
