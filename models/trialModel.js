class Trial 
{
    constructor(idTrial, label, gender, startHour, duration) 
    {
        this.idTrial = idTrial;
        this.label = label;
        this.gender = gender;
        this.startHour = startHour;
        this.duration = duration;
    }

    getData()
    {
        return {"label":this.label.toString(),"gender":this.gender.toString(),"startHour":this.startHour.toString(),
                "duration":this.duration.toString()};
    }
}

module.exports = Trial;