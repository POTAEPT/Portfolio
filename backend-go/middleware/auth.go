package middleware

import (
	"context"
	"strings"
	"backend-go/services"
	"github.com/gofiber/fiber/v3"
)

func RequireAuth(c fiber.Ctx) error {
	 authHeader := c.Get("Authorization")
	 if authHeader == "" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status": "error",
			"message": "Missing Authorization header",
		})
	 }

	 parts := strings.Split(authHeader, " ")
	 if len(parts) != 2 || parts[0] != "Bearer" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status": "error",
			"message": "Invalid Authorization header format",
		})
	 }
	 token := parts[1]

	 user, err := services.DB.Auth.User(context.Background(), token)

	 if err != nil || user == nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"status": "error",
			"message": "Invalid or expired token",
		})
	 }

	 c.Locals("user", user)
	 return c.Next()
}