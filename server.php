<?php

$x = isset($_POST['x']) ? intval($_POST['x']) : null;
$y = isset($_POST['y']) ? floatval($_POST['y']) : null;
$r = isset($_POST['r']) ? floatval($_POST['r']) : null;

session_start();

date_default_timezone_set('Europe/Moscow');
$current_time = date("H:i:s:ms");

if (!check_values($x, $y, $r)) {
    http_response_code(412);
    echo("x={$x}, y={$y}, r={$r}");
    return;
}

$result = check_area($x, $y, $r) ? "<span class='successful'>Попадание</span>" : "<span class='missed'>Мимо</span>";

$exec_time = microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'];

$_SESSION['results'][] = [$x, $y, $r, $current_time, $exec_time, $result];

function check_area($x, $y, $r)
{

    if ($x >= 0) {
        if ($y >= 0) {
            return $x ** 2 + $y ** 2 <= ($r/2) ** 2;
        }
        return $y <= $r && $x <= $r/2;
        
    }
    if ($y >= 0) {
        return $y <= $x + $r;
    }
    return false;

    
}

/*
исправить отображение координат в таблице
*/

function check_values($x, $y, $r)
{
    return in_array($x, [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2])
        and (is_numeric($y) and $y > -5 and $y < 5)
        and in_array($r, [1, 2, 3, 4, 5]);
}

?>
    <thead>
    <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Время запуска</th>
        <th>Время работы</th>
        <th>Попадание</th>
    </tr>
    </thead>
<?php foreach ($_SESSION["results"] as $res) {
    echo <<<HTML
    <tr>
        <td>$res[0]</td>
        <td>$res[1]</td>
        <td>$res[2]</td>
        <td>$res[3]</td>
        <td>$res[4]</td>
        <td>$res[5]</td>
    </tr>
HTML;
} ?>


