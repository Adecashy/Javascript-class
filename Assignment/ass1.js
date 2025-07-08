function cgpaGrade() {
    let studentGrade = input.value
    if (studentGrade >= 0.10 && studentGrade <= 0.99) {
        displayGrade.innerText = "Fail";
    }
    else if (studentGrade >= 1.00 && studentGrade <= 1.49) {
        displayGrade.innerText = "Pass";
    }
    else if (studentGrade >= 1.50 && studentGrade <= 2.49) {
        displayGrade.innerText = "Third Class";
    }
    else if (studentGrade >= 2.50 && studentGrade <= 3.49) {
        displayGrade.innerText = "Second Class Lower";
    }
    else if (studentGrade >= 3.50 && studentGrade <= 4.49) {
        displayGrade.innerText = "Second Class Upper";
    }
    else if (studentGrade >= 4.50 && studentGrade <= 5.00) {
        displayGrade.innerText = "First Class";
    }
    else {
        displayGrade.innerText = "INVALID";
    }
}