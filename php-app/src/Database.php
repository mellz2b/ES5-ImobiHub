<?php

declare(strict_types=1);

namespace ImobiHub;

use PDO;

final class Database
{
    private PDO $pdo;

    public function __construct(string $dbPath)
    {
        $directory = dirname($dbPath);
        if (!is_dir($directory)) {
            mkdir($directory, 0777, true);
        }

        $this->pdo = new PDO('sqlite:' . $dbPath);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    }

    public function pdo(): PDO
    {
        return $this->pdo;
    }

    public function initializeSchema(): void
    {
        $sql = <<<'SQL'
CREATE TABLE IF NOT EXISTS properties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    deal_type TEXT NOT NULL,
    property_type TEXT NOT NULL,
    city TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    price REAL NOT NULL,
    area INTEGER NOT NULL,
    bedrooms INTEGER NOT NULL,
    bathrooms INTEGER NOT NULL,
    description TEXT NOT NULL,
    sustainability_tag TEXT NOT NULL,
    photos_json TEXT NOT NULL DEFAULT '[]',
    sold INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL
);
SQL;

        $this->pdo->exec($sql);
    }
}
