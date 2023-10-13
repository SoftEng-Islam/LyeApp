// Calc NaOH SAP

Math.round((40 / 56.1) * b * Math.pow(10, 3)) / Math.pow(10, 3);

function roundNumber(b, a) {
	return Math.round(b * Math.pow(10, a)) / Math.pow(10, a);
}
document.getElementById("spnHard2").value = " " + roundNumber(Hard, 0);


var selOil = document.querySelectorAll("#selOil option");
// var MoreOilsInfo = new Array();
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
selOil.forEach((ele)=>{
	ele.selected = true;
	ele.click();
	setInterval(()=>{
		selOilOnChange();


	}, 1000);

    const Oil = {
        Name: ele.title,
        Id: ele.id,
        KOH: document.getElementById("txtSAPKOH").value,
        NaOH: document.getElementById("txtSAPNaOH").value,
        Hardness: document.getElementById("spnHard").value,
        Cleansing: document.getElementById("spnCleansing").value,
        Condition: document.getElementById("spnConditioning").value,
        Bubbly: document.getElementById("spnBubbly").value,
        Creamy: document.getElementById("spnCreamy").value,
        Iodine: document.getElementById("spnIodine").value,
        INS: document.getElementById("spnINS").value,
        Lauric: document.getElementById("spnLauric").value,
        Myristic: document.getElementById("spnMyristic").value,
        Palmitic: document.getElementById("spnPalmitic").value,
        Stearic: document.getElementById("spnStearic").value,
        Ricinoleic: document.getElementById("spnRicinoleic").value,
        Oleic: document.getElementById("spnOleic").value,
        Linoleic: document.getElementById("spnLinoleic").value,
        Linolenic:  document.getElementById("spnLinolenic").value,

    }
    MoreOilsInfo.push(Oil)

});

MoreOilsInfo.forEach((ele)=>{
    console.log(JSON.stringify(ele));
})



