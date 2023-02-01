<?php

declare(strict_types=1);

namespace App\Enums;

enum Categories: string {
    case MAN = "man";
    case WOMAN = "woman";
    case KIDS = "kids";

    public static function getCategory(string $category): Categories
    {
        $result = null;

        switch($category) {
            case "MAN":
                $result = self::MAN;
                break;
            case "WOMAN":
                $result = self::WOMAN;
                break;
            case "KIDS":
                $result = self::KIDS;
                break;
        }

        return $result;
    }
}