param (
  [Parameter(Position=0)][int]$repetitions = 10,
  [Parameter(Position=1)][switch]$generation = $false
)

for ($i = 50; $i -lt 864; $i = $i + 50) {
  & ".\benchmak.ps1" -repetitions $repetitions -generation:$generation -fPath "test/c1-p0-n1-n$i-l0-a0.hbt"
}

& ".\benchmak.ps1" -repetitions $repetitions -generation:$generation -fPath "test/c1-p0-n1-n864-l0-a0.hbt"
