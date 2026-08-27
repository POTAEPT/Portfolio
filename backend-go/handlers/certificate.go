package handlers

import (
	"log"
	"backend-go/services"

	"github.com/gofiber/fiber/v3"
)

func  GetCertificates(c fiber.Ctx) error {
	certs, err := services.GetCertificates()

	if err != nil {

		log.Println("Error retrieving certificates:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status": "error",
			"message": "Could not retrieve certificates",
		})
	}

	return c.JSON(fiber.Map{
		"status": "success",
		"data": certs,
	})
} 