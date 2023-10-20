const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;
console.log(ipcRenderer);


// close App
let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
	ipc.send("closeApp");
});

// minimize
let minimize = document.getElementById("minimize");
minimize.addEventListener("click", () => {
	ipc.send("minimizeApp");
});

// maximize
let maximize = document.getElementById("maximize");
maximize.addEventListener("click", () => {
	ipc.send("maximizeApp");
});



// Close Lists, Like list pages, list Notes
// let closeListPages = document.getElementById("closeListPages"),
// 	Pages = document.getElementById("Pages");
// closeListPages.addEventListener("click", () => {
// 	// Pages.classList.toggle("w-1/5");
// 	Pages.classList.toggle("");
// });




// closeOrResize
let closeOrResize = document.getElementById("closeOrResize"),
	notes = document.getElementById("notes"),
	isDown = false;


closeOrResize.addEventListener("mousedown", function (event) {
	isDown = true;
	window.addEventListener( "mousemove", function (e) {
		e.preventDefault();
		if (isDown) {
			notes.style.width = e.clientX + "px";
		}
	},true);
},true);

document.addEventListener("mouseup",function () {
		isDown = false;
},true);