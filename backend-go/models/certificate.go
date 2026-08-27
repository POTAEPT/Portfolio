package models

import "time"

type Certificate struct {
	ID         string    `json:"id"`
	Title      string    `json:"title"`
	ImageURL   string    `json:"image_url"`
	IssuedDate string    `json:"issued_date"`
	ProjectURL string    `json:"project_url"`
	CreatedAt  time.Time `json:"created_at"`
	Tags []Tag    `json:"tags"`
}