package services

import (
	"backend-go/models"
)

func GetCertificates() ([]models.Certificate, error) {

	var certs []models.Certificate

	err := DB.DB.From("certificates").Select("*").Execute(&certs)

	return certs, err
}