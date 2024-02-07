param (
  [Parameter(Position=0)][int]$repetitions = 10,
  [Parameter(Position=1)][switch]$generation = $true
)

Function MakeName([string]$path) {
  $fileName = [System.IO.Path]::GetFileName($fPath)
  Write-Host "Test :" $fileName
  $out = "results\$fileName.json"
  "{`r`n  `"file`": `"$fileName`",`r`n  `"runs`": [`r`n" | Out-File -Encoding utf8  -FilePath $out -Force
  return $out
}

Function Bench([string]$out, [string]$path, [switch]$gen = $true) {
  if ($gen) {
    crossbind -p react -l perf $path | Out-File -Append -Encoding utf8 -FilePath $out
  } else {
    crossbind -p react -l perf --no-generation $path | Out-File -Append -Encoding utf8 -FilePath $out
  }
}

Function Runs([string]$fPath, [int]$repetitions, [switch]$generation) {
 $out = MakeName $fPath
 for ($i = 0; $i -lt $repetitions; $i++) {
   Write-Host "Run $i started"
   $uptime = Get-Date
   Bench $out $fPath $generation
   if ($i -lt ($repetitions - 1)) {
     "," | Out-File -Encoding utf8 -FilePath $out -Append
   }
   $downtime = Get-Date
   Write-Host "Run $i took " ($downtime - $uptime).TotalSeconds " seconds"
 }
 "  ]`r`n}" | Out-File -Encoding utf8 -FilePath $out -Append
}

Function LinearTest([int]$repetitions, [switch]$generation) {
  for ($i = 50; $i -lt 864; $i = $i + 50) {
     Runs "test/c1-p0-n$i-l0-a0.hbt" $repetitions $generation
  }
  Runs "test/c1-p0-n864-l0-a0.hbt" $repetitions $generation
}

LinearTest $repetitions $generation

