function domReady(
	condition: DocumentReadyState[] = ["complete", "interactive"]
) {
	return new Promise((resolve) => {
		if (condition.includes(document.readyState)) {
			resolve(true);
		} else {
			document.addEventListener("readystatechange", () => {
				if (condition.includes(document.readyState)) {
					resolve(true);
				}
			});
		}
	});
}

const safeDOM = {
	append(parent: HTMLElement, child: HTMLElement) {
		if (!Array.from(parent.children).find((e) => e === child)) {
			return parent.appendChild(child);
		}
	},
	remove(parent: HTMLElement, child: HTMLElement) {
		if (Array.from(parent.children).find((e) => e === child)) {
			return parent.removeChild(child);
		}
	},
};

function useLoading() {
	const className = `loaders-css__square-spin`;
	const styleContent = `
@keyframes square-spin {
  25% { transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% { transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% { transform: perspective(100px) rotateX(0) rotateY(0); }
}
.${className} > div {
  animation-fill-mode: both;
  width: 50px;
  height: 50px;
  background: #fff;
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}
.app-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282c34;
  z-index: 9;
}
    `;
	const oStyle = document.createElement("style");
	const oDiv = document.createElement("div");

	oStyle.id = "app-loading-style";
	oStyle.innerHTML = styleContent;
	oDiv.className = "app-loading-wrap";
	oDiv.innerHTML = `<div class="${className}"><div></div></div>`;

	return {
		appendLoading() {
			safeDOM.append(document.head, oStyle);
			safeDOM.append(document.body, oDiv);
		},
		removeLoading() {
			safeDOM.remove(document.head, oStyle);
			safeDOM.remove(document.body, oDiv);
		},
	};
}

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading();
domReady().then(appendLoading);

window.onmessage = (ev) => {
	ev.data.payload === "removeLoading" && removeLoading();
};

setTimeout(removeLoading, 4999);

window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (Selector, Text) => {
		const element = document.getElementById(Selector);
		if (element) element.innerText = Text;
	};
	for (const type of ["chrome", "node", "electron"]) {
		replaceText(`${type}-version`, process.versions[type]);
	}
});


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