class Users {
    constructor(){
        this.id= 1;
        this.title = "",
        this.content = "",
        this.list = [
        {
            id : 0,
            username : "rofinurhakim",
            password : 'kitabisa',
        },
        {
            id : 1,
            username : "onepiece",
            password : 'mugiwara',
        },
        {
            id : 2,
            username : "naruto",
            password : 'boruto',
        },
    ]
    }
    fetchAll = () => {
        return this.list;
    
}
}

module.exports = Users;