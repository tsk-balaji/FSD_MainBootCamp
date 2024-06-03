class person{
    #aadharNo;
    #panNo;
    constructor(
        name,
        age,
        height,
        weight,
        employment,
        education,
        place,
        ){
        this.name = name;
        this.age = age;
        this.place = place;
        this.height = height;
        this.weight = weight;
        this.employment = employment;
        this.education = education;
        this.#aadharNo = aadharNo;
        this.#panNo = panNo;
    }
}