let cl= console.log;


interface Iperson {
    fname:string;
    lname :string;
    child ? : string | null
}


let user : Iperson = {
    fname: "jhon",
    lname :"doe",

}

cl(user)

