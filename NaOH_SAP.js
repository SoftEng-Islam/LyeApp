// Calc NaOH SAP

Math.round((40 / 56.1) * b * Math.pow(10, 3)) / Math.pow(10, 3);

function roundNumber(b, a) {
	return Math.round(b * Math.pow(10, a)) / Math.pow(10, a);
}
document.getElementById("spnHard2").value = " " + roundNumber(Hard, 0);

var selOil = document.querySelectorAll("#selOil option");
var MoreOilsInfo = new Array();
document.getElementById("txtSAPKOH").readOnly = false;
document.getElementById("txtSAPNaOH").readOnly = false;
document.getElementById("spnHard").readOnly = false;
document.getElementById("spnCleansing").readOnly = false;
document.getElementById("spnConditioning").readOnly = false;
document.getElementById("spnBubbly").readOnly = false;
document.getElementById("spnCreamy").readOnly = false;
document.getElementById("spnIodine").readOnly = false;
document.getElementById("spnINS").readOnly = false;

document.getElementById("spnLauric").readOnly = false;
document.getElementById("spnMyristic").readOnly = false;
document.getElementById("spnPalmitic").readOnly = false;
document.getElementById("spnStearic").readOnly = false;
document.getElementById("spnRicinoleic").readOnly = false;
document.getElementById("spnOleic").readOnly = false;
document.getElementById("spnLinoleic").readOnly = false;
document.getElementById("spnLinolenic").readOnly = false;
selOil.forEach((ele) => {
	ele.selected = true;
	ele.click();
	setInterval(() => {
		selOilOnChange();
	}, 1000);
	let idNum = ele.id;
	idNum = idNum.replace(/[^0-9]/g, "");
	const Oil = {
		Name: ele.title,
		Id: +idNum,
		KOH: parseFloat(document.getElementById("txtSAPKOH").value),
		NaOH: parseFloat(document.getElementById("txtSAPNaOH").value),
		Hardness: parseFloat(document.getElementById("spnHard").value),
		Cleansing: parseFloat(document.getElementById("spnCleansing").value),
		Condition: parseFloat(document.getElementById("spnConditioning").value),
		Bubbly: parseFloat(document.getElementById("spnBubbly").value),
		Creamy: parseFloat(document.getElementById("spnCreamy").value),
		Iodine: parseFloat(document.getElementById("spnIodine").value),
		INS: parseFloat(document.getElementById("spnINS").value),
		Lauric: parseFloat(document.getElementById("spnLauric").value),
		Myristic: parseFloat(document.getElementById("spnMyristic").value),
		Palmitic: parseFloat(document.getElementById("spnPalmitic").value),
		Stearic: parseFloat(document.getElementById("spnStearic").value),
		Ricinoleic: parseFloat(document.getElementById("spnRicinoleic").value),
		Oleic: parseFloat(document.getElementById("spnOleic").value),
		Linoleic: parseFloat(document.getElementById("spnLinoleic").value),
		Linolenic: parseFloat(document.getElementById("spnLinolenic").value),
	};
	MoreOilsInfo.push(Oil);
});

MoreOilsInfo.forEach((ele) => {
	console.log(JSON.stringify(ele));
});
