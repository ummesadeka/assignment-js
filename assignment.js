function kilometerToMeter (kilometer){
    var meter = kilometer/1000;
    return meter;
}

function hotelCost(day) {
    var cost = 0;
    if(day<=10){
        cost = day * 100;
    }
    else if(day <=20){
        var firstTenDays = 10*100;
        var remaining = day - 10;
        var secondTenDays = remaining * 80;
        cost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remaining = day - 20;
        var restOfTheDays = remaining * 50;
        cost = firstTenDays + secondTenDays + restOfTheDays;
    }
    return cost;
}


function budgetCalculator(watch, phone, laptop){
    var totalBudgetAmt = 0;
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    totalBudgetAmt = watchPrice + phonePrice + laptopPrice;
    return totalBudgetAmt;
}


function megaFriend(){
    var friendNames = ["Rahim","Korim","Mohammad Abbas"];
    var max = friendNames[0].length;
    var strMax = "";
    for(var i = 0; i<friendNames.length; i++){
        var element = friendNames[i].length;
        if(element>max){
            max = element;
            strMax = friendNames[i];
        }

    }
    return strMax;
}
