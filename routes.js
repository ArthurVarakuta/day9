const users = [
    {name:"masha", age:19},
    {name:"andrew", age:20},
    {name:"dasha", age:18}
]

module.exports = function (app){
    app.get("/", (req, res) =>{
        res.json(users);
    })

    app.post("/", (req, res)=>{
        res.send(users);
    })
}
