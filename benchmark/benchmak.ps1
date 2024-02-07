param (
  [Parameter(Position=0, Mandatory=$true)][string]$fPath,
  [Parameter(Position=1)][int]$repetitions = 10,
  [Parameter(Position=2)][switch]$generation = $true
)

$file_name = [System.IO.Path]::GetFileName($fPath)
Write-Host $PWD
Write-Host "Test :" $file_name
Write-Host "Generation :" $generation
Write-Host "Reps :" $repetitions
$fileNameOnly = [System.IO.Path]::GetFileNameWithoutExtension($fPath)

$outFile = "results\$fileNameOnly.json"

"{`r`n  `"file`": `"$file_name`",`r`n  `"runs`": [`r`n" | Out-File -Encoding utf8  -FilePath $outFile -Force

for ($i = 0; $i -lt $repetitions; $i++) {
  Write-Host "Run $i started"
  $uptime = Get-Date
  if ($generation) {
    crossbind -p react -l perf $fPath | Out-File -Encoding utf8 -FilePath $outFile -Append
  } else {
    crossbind -p react -l perf --no-generation $fPath | Out-File -Encoding utf8 -FilePath $outFile -Append
  }
  if ($i -lt ($repetitions - 1)) {
      "," | Out-File -Encoding utf8 -FilePath $outFile -Append
  }
  $downtime = Get-Date
  Write-Host "Run $i took " ($downtime - $uptime).TotalSeconds " seconds"
}

"  ]`r`n}" | Out-File -Encoding utf8 -FilePath $outFile -Append


