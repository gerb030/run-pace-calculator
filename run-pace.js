

function _calcPace(distance, hours, minutes, seconds) {
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
    var targetPace = _calcPace(distance, hours, minutes, seconds);
    targetPace = formatToMinutes(targetPace);
    document.getElementById("output_pace").innerHTML = "Your target pace should be <b>"+targetPace+"</b> min / "+unitOfMeasurement+".";
}

function _convertToNumber(input) {
    return input.toString().replace(/[^0-9]/g, "");
}

function formatToMinutes(inputSeconds) {
    var min = Math.floor(inputSeconds / 60);
    var sec = Math.floor(inputSeconds % 60, 2);
    if (sec == 0) sec = "00";
    return min+":"+sec;
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
    // todo: validation
    updatePace();
}

function checkHours() {
    // todo: validation
    document.getElementById("target_hours").value = _convertToNumber(document.getElementById("target_hours").value);
    updatePace();
}

function checkMinutes() {
    // todo: validation
    document.getElementById("target_minutes").value = _convertToNumber(document.getElementById("target_minutes").value);
    updatePace();
}

function checkSeconds() {
    // todo: validation
    document.getElementById("target_seconds").value = _convertToNumber(document.getElementById("target_seconds").value);
    updatePace();
}