<?php

declare(strict_types=1);

namespace App\Enums;

enum State: string {
    case NEW = "new";
    case USED = "used";

    public static function getState(string $category): State
    {
        $result = null;

        switch($category) {
            case "NEW":
                $result = self::NEW;
                break;
            case "USED":
                $result = self::USED;
                break;
        }

        return $result;
    }
}