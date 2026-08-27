package routes

import (
	"backend-go/handlers"
	"backend-go/middleware"

	"github.com/gofiber/fiber/v3"
)

func SetupRoutes(app *fiber.App) {
	
	api := app.Group("/api")

	api.Get("/health", handlers.HealthCheck)

	api.Get("/certificates", handlers.GetCertificates)

	api.Post("/certificates", middleware.RequireAuth, func(c fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status": "success",
			"message": "Welcome you have permission to create a certificate",
		})	
	})
	
}