import { createServer, Model, Response } from "miragejs"



createServer({
    models: {
        projects: Model,
        users: Model
    },

    seeds(server) {
        server.create("project", { id: "1", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: '/JavaScript_Logo.png', type: "simple", hostId: "123" })
        server.create("project", { id: "2", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "/JavaScript_Logo.png", type: "simple", hostId: "123" })
        server.create("project", { id: "3", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "/JavaScript_Logo.png", type: "simple", hostId: "123" })
        server.create("project", { id: "4", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "/JavaScript_Logo.png", type: "simple", hostId: "123" })
        server.create("project", { id: "6", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: '/JavaScript_Logo.png', type: "simple", hostId: "123" })
        server.create("project", { id: "7", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: '/JavaScript_Logo.png', type: "simple", hostId: "123" })
        server.create("project", { id: "8", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: '/JavaScript_Logo.png', type: "simple", hostId: "123" })
        server.create("project", { id: "9", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: '/JavaScript_Logo.png', type: "simple", hostId: "123" })
        server.create("project", { id: "10", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: '/JavaScript_Logo.png', type: "simple", hostId: "123" })
        server.create("project", { id: "11", name: "Modest Explorer", description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: '/JavaScript_Logo.png', type: "simple", hostId: "123" })

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