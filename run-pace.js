function _calcPace(distance, unitOfMeasurement, hours, minutes, seconds) {
    // distance is invariably defined in KM
    if (unitOfMeasurement == 'mile') {
        distance = distance / 1.609344;
    }
    var targetTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    var targetPace = targetTimeInSeconds / distance;
    return targetPace;
}

function updatePace() {
    var distance = document.getElementById("target_distance").value;
    var unitOfMeasurement = document.getElementById("target_unit_of_measurement").value;
    var hours = parseInt(document.getElementById("target_hours").value, 10);
    var minutes = parseInt(document.getElementById("target_minutes").value, 10);
    var seconds = parseInt(document.getElementById("target_seconds").value, 10);
    var targetPace = _calcPace(distance, unitOfMeasurement, hours, minutes, seconds);
    targetPace = formatToMinutes(targetPace);
    var targetTime = document.getElementById("target_hours").value+":"+document.getElementById("target_minutes").value+":"+document.getElementById("target_seconds").value;
    document.getElementById("output_pace").innerHTML = "Your average target pace should be <b class='pace'>"+targetPace+" min / "+unitOfMeasurement+"</b>. With this pace you will finish in <b class='pace'>"+targetTime+"</b>.";
}

function _convertToNumber(input) {
    var n =  input.toString().replace(/[^0-9]/g, "");
    if (n == "") {
        n = 0;
    }
    return n;
}

function formatToMinutes(inputSeconds) {
    var min = Math.floor(inputSeconds / 60);
    var sec = Math.floor(inputSeconds % 60, 2);
    if (sec.toString().length == 1) sec = "0" + sec;
    return min+":"+sec;
}

function checkDistanceQuickselect() {
    var distance = 42.195;
    var unitOfMeasurement = 'kilometer';
    var quickSelect = document.getElementById("target_distance_quickselect").value;
    switch(quickSelect) {
        case '800m':
            distance = .8;
            unitOfMeasurement = 'kilometer';
            break;
        case '1mi':
            distance = 1.60934;
            unitOfMeasurement = 'kilometer';
            break;
        case '3km':
            distance = 3;
            unitOfMeasurement = 'kilometer';
            break;
        case '5km':
            distance = 5;
            unitOfMeasurement = 'kilometer';
            break;
        case '10km':
            distance = 10;
            unitOfMeasurement = 'kilometer';
            break;
        case '16km':
            distance = 16;
            unitOfMeasurement = 'kilometer';
            break;
        case 'half-marathon-km':
            distance = 21.1;
            unitOfMeasurement = 'kilometer';
            break;
        case 'marathon-km':
            distance = 42.195;
            unitOfMeasurement = 'kilometer';
            break;
        case '50km':
            distance = 50;
            unitOfMeasurement = 'kilometer';
            break;
        case '100km':
            distance = 100;
            unitOfMeasurement = 'kilometer';
            break;
        case '100mi':
        default:
            distance = 100;
            unitOfMeasurement = 'mile';
            break;
    }
    document.getElementById("target_distance").value = distance;
    document.getElementById("target_unit_of_measurement").value = unitOfMeasurement;
    updatePace();
}

function checkDistance() {
    var distance = document.getElementById("target_distance").value;
    distance = distance.replace(/[^0-9\.]/g, "");
    if (distance.indexOf(".") != distance.lastIndexOf(".")) {
        distance = distance.replace(/\./g, "");
    }
    document.getElementById("target_distance").value = distance;
    updatePace();
}

function checkUnitOfMeasurement() {
    updatePace();
}

function checkHours() {
    document.getElementById("target_hours").value = _convertToNumber(document.getElementById("target_hours").value);
    updatePace();
}

function checkMinutes() {
    var minutes = _convertToNumber(document.getElementById("target_minutes").value);
    document.getElementById("target_minutes").value = (minutes.toString().length==1 ? "0" : "") + minutes;
    updatePace();
}

function checkSeconds() {
    var seconds = _convertToNumber(document.getElementById("target_seconds").value);
    document.getElementById("target_seconds").value = (seconds.toString().length==1 ? "0" : "") + seconds;
    updatePace();
}