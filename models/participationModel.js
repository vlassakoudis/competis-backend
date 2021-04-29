class Participation
{
    constructor(idTrial, idAthlete)
    {
        this.idTrial = idTrial;
        this.idAthlete = idAthlete;
    }

    getData()
    {
        return {"trialId":this.idTrial.toString(),"athleteId":this.idAthlete.toString()};
    }
}

module.exports = Participation;