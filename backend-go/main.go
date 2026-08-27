package main

import (
	"log"
	"backend-go/routes"
	"backend-go/services"

	"github.com/gofiber/fiber/v3"
	"github.com/joho/godotenv"

)

func main() {

	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	services.InitSupabase()

	app := fiber.New()
	routes.SetupRoutes(app)

	log.Println("Starting server on port 8080...")
	log.Fatal(app.Listen(":8080"))
}