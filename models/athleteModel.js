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
        return {"lastName":this.lastName.toString(),"firstName":this.firstName.toString(),"birthYear":this.birthYear.toString(),"club":this.club.toString(),"gender":this.gender.toString()};
    }
}

module.exports = Athlete;