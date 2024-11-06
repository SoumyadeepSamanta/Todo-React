const person = {
    name:'Buju',
    age:22,
    address: {
        street:'Roy Road',
        city:'Kolkata',
        country:'India'
    },
    phno: 12345,
    profiles: ['twitter','linkedin','instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}

export default function LearningJavascript () {

    return (
        <>
            <div>{person.name}</div>
            <div>{person.age}</div>
            <div>{person.address.street}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.phno}</div>
            <div>{person.printProfile()}</div>
        </>
    )
  }