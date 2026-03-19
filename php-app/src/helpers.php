<?php

declare(strict_types=1);

function e(string $text): string
{
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

function currency_br(float $value): string
{
    return 'R$ ' . number_format($value, 0, ',', '.');
}

function deal_type_label(string $value): string
{
    $labels = [
        'comprar' => 'Comprar',
    ];

    return $labels[$value] ?? $value;
}

function property_type_label(string $value): string
{
    $labels = [
        'apartamento' => 'Apartamento',
        'casa' => 'Casa',
        'imovel-comercial' => 'Imovel comercial',
        'terreno' => 'Terreno',
    ];

    return $labels[$value] ?? $value;
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(16));
    }

    return $_SESSION['csrf_token'];
}

function csrf_is_valid(?string $token): bool
{
    if (empty($_SESSION['csrf_token']) || $token === null) {
        return false;
    }

    return hash_equals($_SESSION['csrf_token'], $token);
}

function request_post_string(string $key): string
{
    return trim((string) ($_POST[$key] ?? ''));
}

function request_get_string(string $key, string $default = ''): string
{
    return trim((string) ($_GET[$key] ?? $default));
}
