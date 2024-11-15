**Скорость клубочковой фильтрации**
https://evidence-neurology.ru/medical-calculators/hemorrhage/skf-creatinine-clearance/

```
function Calculator(){
	var error = false;
	// Sex
	var sex = '';
	$('div.calculator.calc_2 div.item.sex input[name=sex]').each(function(){
		if ($(this).prop('checked')){sex = $(this).attr('value');};
	});
	if (sex == ''){$('div.calculator.calc_2 div.item.sex').addClass('error'); error = true;};
	// Creatinine
	var creatinine = parseInt($('div.calculator.calc_2 div.item.creatinine input[name=creatinine]').val());
	var creatinineunits = $('div.calculator.calc_2 div.item.creatinine input[name=creatinineunits]').val();
	if (!creatinine||(creatinineunits == '')){$('div.calculator.calc_2 div.item.creatinine').addClass('error'); error = true;};
	// Age
	var age = parseInt($('div.calculator.calc_2 div.item.age input[name=age]').val());
	if (!age||(age == 0)){$('div.calculator.calc_2 div.item.age').addClass('error'); error = true;};
	// Weight
	var weight = parseInt($('div.calculator.calc_2 div.item.weight input[name=weight]').val());
	if (!weight||(weight == 0)){$('div.calculator.calc_2 div.item.weight').addClass('error'); error = true;};
	// Height
	var height = parseInt($('div.calculator.calc_2 div.item.height input[name=height]').val());
	if (!height||(height == 0)){$('div.calculator.calc_2 div.item.height').addClass('error'); error = true;};

	if (!error){
		if (sex == 'M'){sex = 1;} else {sex = 0.742;};
		if (creatinine == 0){creatinine = 0.1;};
		if (creatinineunits == 'mkmol-l'){creatinine_1 = creatinine/88.4;} else {creatinine_1 = creatinine; creatinine = creatinine*88.4;};
		var result_mdrd = ''; var result_cg = ''; var result_ckdepi = ''; var result_total = ''; var result_total_color = '';
		// MDRD
		var MDRD = 1;
		MDRD = 186 * sex * Math.pow(creatinine_1,-1.154);
		MDRD = MDRD * Math.pow(age,-0.203);
		if (MDRD > 60) {result_mdrd = 'MDRD: > 60 мл/мин / 1,73 кв.м';} else {result_mdrd = 'MDRD: ' + Math.round(MDRD) + ' мл/мин / 1,73 кв.м';};
		// CG and CKDEPI
		var CG = (140 - age);
		CG = CG * weight / creatinine;
		if (sex == 1){
			CG = CG * 1.23; A = 141; B = 0.9; if (creatinine > 80){P = -1.209;} else {P = -0.411;};
		} else {
			A = 144; B = 0.7; if (creatinine > 62){P = -1.209;} else {P = -0.329;};
		};
		var CKDEPI = A*Math.pow((creatinine_1/B),P)*Math.pow(0.993,age);
		result_cg = 'Кокрофт-Голт: ' + Math.round(CG) + ' мл/мин';
		result_ckdepi = 'CKD-EPI: ' + Math.round(CKDEPI) + ' мл/мин / 1,73 кв.м';
		// normalize CG
		// BSA, Dubois
		var BSA = 0.007184 * Math.pow(height,0.725) * Math.pow(weight,0.425);
		BSA = BSA * 100;
		BSA = Math.round(BSA);
		BSA = BSA/100;
		if (BSA > 0){
			CGn = CG * 1.73 / BSA;
			result_cg = 'Кокрофт-Голт: ' + Math.round(CG) + ' мл/мин (' + Math.round(CGn) + ' мл/мин / 1,73 кв.м)';
		};
		// RESULT
		if (MDRD > 60){eGFR = CKDEPI;} else {eGFR = MDRD;};
		if (eGFR >= 90){result_total = 'Нормальная или повышенная СКФ.';}
		else if (eGFR >= 60){result_total = 'Начальное снижение СКФ.';}
		else if (eGFR >= 30){result_total = 'Умеренное снижение СКФ&nbsp;&mdash; III стадия ХБП.';}
		else if (eGFR >= 15){result_total = 'Выраженное снижение СКФ&nbsp;&mdash; IV стадия ХБП.';}
		else {result_total = 'Терминальная почечная недостаточность&nbsp;&mdash; V стадия ХБП.';};

		var text = result_ckdepi + '<br />' + result_mdrd + '<br />' + result_cg + '<br /><strong>' + result_total + '</strong>';
		$('div.calculator.calc_2 div.result div.text').remove();
		if (text != ''){$('div.calculator.calc_2 div.result').prepend('<div class="text">'+text+'</div>');};
		$('div.calculator.calc_2 div.result').removeClass('hidden');
	};
	return false;
};
```
