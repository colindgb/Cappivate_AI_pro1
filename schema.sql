CREATE DATABASE cappivate_ai;
CREATE TABLE linked_accounts (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    platform VARCHAR(20) NOT NULL,
    profile_url TEXT NOT NULL
);