// https://github.com/Developer-Sagor/JS-Problem-Solve


// kilometerToMeter

function kilometerToMeter(num) {
    var kilometer = 1000;
    var meter = kilometer * num;

    return meter;
}

var result = kilometerToMeter(1);
console.log(result);



//budgetCalculator

function budgetCalculator(watch, phone, laptop) {

    var item1 = watch * 50;
    var item2 = phone * 100;
    var item3 = laptop * 500;
    var total = item1 + item2 + item3;

    return total;


}

var result = budgetCalculator(2, 3, 4);
console.log(result);


// hotelCost

function hotelCost(perNight) {

    var cost = 0;

    if (perNight <= 10) {

        cost = perNight * 100;

    } else if (perNight <= 20) {

        var first10 = 10 * 100;
        var totalNight = perNight - 10;
        var totalcost = totalNight * 80;
        cost = first10 + totalcost;

    } else {

        var firstpart = 10 * 100;
        var second10 = 10 * 80;
        var remainingNight = perNight - 20;
        var UnlimitedNight = remainingNight * 50;
        cost = firstpart + second10 + UnlimitedNight;

    }

    return cost;

}

var totalHotelCost = hotelCost(123);
console.log(totalHotelCost);


// megaFriend