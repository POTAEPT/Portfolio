import pool from './db.js';

const initializeDatabase = async () => {
  try {
    console.log('⏳ Connecting to Database...');

    // Table 1: Projects
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        image_url VARCHAR(255),
        repo_url VARCHAR(255),
        live_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Table "projects" initialized.');

    // Table 2: Activities
    await pool.query(`
      CREATE TABLE IF NOT EXISTS activities (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        activity_date DATE NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Table "activities" initialized.');

    // Table 3: Resume Downloads Tracker
    await pool.query(`
      CREATE TABLE IF NOT EXISTS resume_downloads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ip_address VARCHAR(45),
        downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table "resume_downloads" initialized.');

    console.log('Database initialization completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1); 
  }
};

initializeDatabase();