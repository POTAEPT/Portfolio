package services

import (
	"log"
	"os"
	
	"github.com/nedpals/supabase-go"
)

var DB *supabase.Client

func InitSupabase() {
	supabaseURL := os.Getenv("SUPABASE_URL")
	supabaseServiceKey := os.Getenv("SUPABASE_SERVICE_KEY")

	if supabaseURL == "" || supabaseServiceKey == "" {
		log.Fatal("Supabase credentials are missing from .env!")
	}

	DB = supabase.CreateClient(supabaseURL, supabaseServiceKey)
	log.Println("Supabase client initialized successfully.")
}
