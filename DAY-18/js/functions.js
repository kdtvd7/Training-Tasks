

// parent methods

//direct parent
$('#parentDemo').addClass('style-1');
$('#parentDemo').parent().addClass('style-2');

//all parents
$('#parentsDemo').addClass('style-1');
$('#parentsDemo').parents('div').addClass('style-2');

//parents until demo
$('#parentsUntilDemo').addClass('style-1');
$('#parentsUntilDemo').parentsUntil('#great-grand').addClass('style-2');


//children methods
$('#childrenDemo').addClass('style-1');
$('#childrenDemo').children().addClass('style-2');

//children filter methods
$('#childrenFilterDemo').addClass('style-1');
$('#childrenFilterDemo').children('div').addClass('style-2');
$('#childrenFilterDemo').children('p').addClass('style-3');

//find method
$('#findDemo').addClass('style-1');
$('#findDemo').find('*').addClass('style-1');
$('#findDemo').find('span').addClass('style-2');


//siblings method
$('#siblingsDemo').addClass('style-1');
$('#siblingsDemo').siblings().addClass('style-2');

//siblings filter method
$('#siblingsFilterDemo').addClass('style-1');
$('#siblingsFilterDemo').siblings('p').addClass('style-2');
$('#siblingsFilterDemo').siblings('div').addClass('style-3');

//next method
$('#nextDemo').addClass('style-1');
$('#nextDemo').next().addClass('style-2');

//next all method
$('#nextAllDemo').addClass('style-1');
$('#nextAllDemo').nextAll().addClass('style-2');

//next until method
$('#nextUntilDemo').addClass('style-1');
$('#nextUntilDemo').nextUntil('h4').addClass('style-2');

//prev method
$('#prevDemo').addClass('style-1');
$('#prevDemo').prev().addClass('style-2');

//prev all method
$('#prevAllDemo').addClass('style-1');
$('#prevAllDemo').prevAll().addClass('style-2');

//prev until method
$('#prevUntilDemo').addClass('style-1');
$('#prevUntilDemo').prevUntil('p').addClass('style-2');

//first method
$(".firstDemo").first().addClass("style-1");

//last method
$(".lastDemo").last().addClass("style-1");

//eq method
$(".eqDemo").eq(2).addClass("style-1");

//filter method
$(".filterDemo").filter("#filter").addClass("style-1");

//not method
$(".notDemo").not("#odd").addClass("style-1");