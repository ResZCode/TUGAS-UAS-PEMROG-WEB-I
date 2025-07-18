<?php
$logFile = 'topup_log.txt';

echo "<h2>Riwayat Transaksi - Admin View</h2>";
echo "<table border='1' cellpadding='8' cellspacing='0' style='font-family:sans-serif;'>";
echo "<tr><th>No</th><th>Waktu</th><th>Game</th><th>ID</th><th>Nominal</th><th>Metode</th><th>WhatsApp</th></tr>";

if (file_exists($logFile)) {
  $lines = file($logFile);
  $no = 1;
  foreach ($lines as $line) {
    if (trim($line) === '') continue;
    preg_match('/^(.*?) \| Game: (.*?) \| ID: (.*?) \| Nominal: (.*?) \| Metode: (.*?) \| WA: (.*)$/', $line, $match);
    if ($match) {
      echo "<tr>
              <td>$no</td>
              <td>{$match[1]}</td>
              <td>{$match[2]}</td>
              <td>{$match[3]}</td>
              <td>{$match[4]}</td>
              <td>{$match[5]}</td>
              <td>{$match[6]}</td>
            </tr>";
      $no++;
    }
  }
} else {
  echo "<tr><td colspan='7'>Belum ada transaksi.</td></tr>";
}

echo "</table>";
?>
