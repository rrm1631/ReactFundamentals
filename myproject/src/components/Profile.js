// Destructure - another ways of getting props from component 

// function Profile(props) {
//     const { name, lname} = props


//     return <h1> Name: {name} {lname}</h1>;
// }

function Profile(props) {
    return <h1> Name: {props.name} {props.lname}</h1>;
}

export default Profile;