$libDir = ".\grammar\"
$pack = ".\src\parser\"
$ourDir = ".\src\parser\"

if (Test-Path $ourDir) {
    Write-Host "Folder Exists"
}
else
{
    New-Item $ourDir -ItemType Directory
    Write-Host "Folder Created successfully"
}

Remove-Item "$ourDir*" -Recurse -Force

java -jar gen\antlr.jar -lib $libDir -Dlanguage=TypeScript -encoding UTF8 -Xexact-output-dir -package $pack -o $libDir .\grammar\HaibtLexer.g4

java -jar gen\antlr.jar -lib $libDir -Dlanguage=TypeScript -encoding UTF8 -Xexact-output-dir -package $pack -o $ourDir -visitor .\grammar\Haibt.g4

Move-Item $libDir\HaibtLexer.ts -Destination $ourDir -Force
