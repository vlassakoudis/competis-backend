class Athlete
{
    constructor(idAthlete, lastName, firstName, birthYear, club, gender)
    {
        this.idAthlete = idAthlete;
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthYear = birthYear;
        this.club = club;
        this.gender = gender; 
    }

    getData()
    {
        return [this.lastName.toString(),this.firstName.toString(),this.birthYear.toString(),this.club.toString(),this.gender.toString()];
    }
}

module.exports = Athlete;