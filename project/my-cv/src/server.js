import { createServer, Model, Response } from "miragejs"



createServer({
    models: {
        projects: Model,
        users: Model
    },

    seeds(server) { 
        server.create("project", { id: "1", name: "Home Town", description: "Welcome to our website dedicated to showcasing the charm and beauty of our small town. Nestled in the heart of the countryside, our town offers a unique blend of history, culture, and natural beauty. Explore our rich heritage through well-preserved historic sites, enjoy local cuisine at quaint restaurants, and experience the warmth and hospitality of our community. Whether you're planning a visit or just curious, our website provides all the information you need about events, attractions, and accommodations. Discover the hidden gems of our town and make unforgettable memories.", imageUrl: '/images/homeTown.png', type: "html,css",live:'https://dazzling-taiyaki-d77e7f.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/homeTown', hostId: "123" })
        server.create("project", { id: "2", name: "Score Board", description: "ScoreBoard is a simple application designed to help you track and manage game scores, allowing users to quickly input scores.", imageUrl: "/images/scoreBoard.png", type: "html,css,js",live:'https://dashing-pie-cd8bb1.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/scoreBoard', hostId: "123" })
        server.create("project", { id: "3", name: "Radom Password", description: "Generate random passwords based on the length of the entered password.", imageUrl: "/images/radomPasssword.png", type: "simple",live:'https://iridescent-torte-7d78f1.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/passwordGenertor', hostId: "123" })
        server.create("project", { id: "4", name: "Metric/Imperial Unit Conversion", description: "Simple application to convert quantitative values", imageUrl: "/images/UnitConvert.png", type: "simple",live:'https://brilliant-llama-8161a1.netlify.app/',github:'https://dazzling-taiyaki-d77e7f.netlify.app/', hostId: "123" })
        server.create("project", { id: "6", name: "We Are Champion", description: "simple messaging app written in js", imageUrl: '/images/WeAreChampion.png', type: "simple",live:'https://radiant-liger-32e516.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/weAreChampion', hostId: "123" })
        server.create("project", { id: "7", name: "Oldagram", description: "oldgram social network design interface written in html and css", imageUrl: '/images/oldagram.png', type: "simple",live:'https://cosmic-llama-9395d3.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/oldgram', hostId: "123" })
        server.create("project", { id: "8", name: "Twimba", description: "twimba social network with interactive functions such as reply, post, like and delete replies and posts", imageUrl: '/images/Twimba.png', type: "simple",live:'https://wondrous-sprite-e3fde8.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/twimba', hostId: "123" })
        server.create("project", { id: "9", name: "Restauran Menu", description: "With the restaurant menu, you can easily calculate the bill and can view and comment on each dish.", imageUrl: '/images/restaurantMenu.png', type: "simple",live:'https://delicate-beijinho-95d69e.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/restauranMenu', hostId: "123" })
        server.create("project", { id: "10", name: "Chooose Color", description: "Application written in js, call api to get color and many color display modes", imageUrl: '/images/chooseColor.png', type: "simple",live:'https://voluble-basbousa-402cbe.netlify.app/',github:'https://github.com/QuocViet92/NewScrimba/tree/main/project/chooseColor', hostId: "123" })
        server.create("project", { id: "11", name: "TravelJournal", description: "Website introducing tourist attractions written in reactjs", imageUrl: '/images/travalJournal.png', type: "simple",live:'https://capable-caramel-bc36b9.netlify.app/',github:'https://github.com/QuocViet92/ReactjsJournal', hostId: "123" })
        server.create("project", { id: "12", name: "Quizzical Game", description: "Quizzical game is written in reactjs, get random questions and answers from api to build into quiz game", imageUrl: '/images/QuizzicalGame.png', type: "simple",live:'https://lovely-malabi-cce503.netlify.app/',github:'https://github.com/QuocViet92/ReactjsQuizGame', hostId: "123" })
        server.create("project", { id: "13", name: "Find Your Film", description: "", imageUrl: '/images/findYourFilm.png', type: "simple",live:'https://mellow-lolly-9d1ebf.netlify.app/',github:'https://github.com/QuocViet92/findFilm', hostId: "123" })
        server.create("project", { id: "14", name: "Dice Game", description: "", imageUrl: '/images/DiceGame.png', type: "simple",live:'https://unique-bombolone-3efa88.netlify.app/',github:'https://github.com/QuocViet92/CharacterGame', hostId: "123" })
        server.create("project", { id: "15", name: "Birthday Gif", description: "", imageUrl: '/images/birthdayGif.png', type: "simple",live:'https://ornate-bublanina-ae4131.netlify.app/',github:'https://github.com/QuocViet92/GifBirthday', hostId: "123" })
        server.create("project", { id: "16", name: "Modest Explorer", description: "", imageUrl: '/images/JavaScript_Logo.png', type: "simple",live:'https://dazzling-taiyaki-d77e7f.netlify.app/',github:'https://dazzling-taiyaki-d77e7f.netlify.app/', hostId: "123" })

        server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 2000  // => mock a 2 second delay in server response

        this.get("/project", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.projects.all()
        })

        this.get("/project/:id", (schema, request) => {
            const id = request.params.id
            return schema.projects.find(id)
        })

        // this.get("/host/vans", (schema, request) => {
        //     // Hard-code the hostId for now
        //     return schema.vans.where({ hostId: "123" })
        // })

        // this.get("/host/vans/:id", (schema, request) => {
        //     // Hard-code the hostId for now
        //     const id = request.params.id
        //     return schema.vans.findBy({ id, hostId: "123" })
        // })
        
        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // ⚠️ This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😅
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})